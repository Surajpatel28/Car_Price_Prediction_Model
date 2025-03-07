import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    year: "",
    Present_Price: "",
    Kms_Driven: "",
    Fuel_Type: "",
    Seller_Type: "",
    Transmission: "",
    Owner: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPrediction(null);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        year: [parseInt(formData.year)],
        Present_Price: [parseFloat(formData.Present_Price)],
        Kms_Driven: [parseInt(formData.Kms_Driven)],
        Fuel_Type: [parseInt(formData.Fuel_Type)],
        Seller_Type: [parseInt(formData.Seller_Type)],
        Transmission: [parseInt(formData.Transmission)],
        Owner: [parseInt(formData.Owner)],
      });

      setPrediction(response.data["Car Price: "]);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/20">
          <div className="px-6 py-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Car Price Predictor
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {Object.keys(formData).map((key) => (
                <div key={key} className="space-y-1">
                  <label className="block text-sm font-medium text-gray-600">
                    {key.replace("_", " ")}
                  </label>
                  <input
                    type="number"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out text-gray-700 bg-white/50"
                    placeholder={`Enter ${key.replace("_", " ")}`}
                    required
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-[1.02] mt-4"
              >
                Predict Price
              </button>
            </form>

            {prediction && (
              <div className="mt-6 p-4 bg-green-50/80 border border-green-200 rounded-lg">
                <p className="text-center text-green-700 font-medium text-sm">
                  Predicted Price: <span className="text-xl font-bold">{prediction}</span>
                </p>
              </div>
            )}

            {error && (
              <div className="mt-6 p-4 bg-red-50/80 border border-red-200 rounded-lg">
                <p className="text-center text-red-700 font-medium text-sm">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
