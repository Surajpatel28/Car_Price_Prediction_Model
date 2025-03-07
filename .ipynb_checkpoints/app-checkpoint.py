from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

# loading the model
model = joblib.load("linear_regression_car_price")

@app.route("/")
def home():
    return "car price Prediction API is running !"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    try:
        user_input = np.array([[
            int(data["year"][0]),
            float(data["Present_Price"][0]),
            int(data["Kms_Driven"][0]),
            int(data["Fuel_Type"][0]),
            int(data["Seller_Type"][0]),
            int(data["Transmission"][0]),
            int(data["Owner"][0])
        ]]   
        )
    except KeyError as e:
        return jsonify({"error": f"Missing Feature: {str(e)}"}), 400
    except ValueError:
        return jsonify({"error": "Invalid Input Type. Please Enter correct values."}), 400

    prediction = model.predict(user_input)[0]

    return jsonify({
        "Car Price: ": f"₹{prediction:.2f} Lakh"
    })

if __name__ == "__main__":
    app.run(debug=True)