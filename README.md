---

# **Car Price Prediction Model**

This project implements a **Car Price Prediction Model** using **Linear Regression** in a Jupyter Notebook (`.ipynb`) environment. The model predicts the selling price of used cars based on various features such as the car's year, mileage, fuel type, seller type, transmission type, and the number of previous owners.

---

## **Project Structure**

```
📁 Project Directory
├── car_data.csv              # Dataset containing car features and selling prices
├── car_price_prediction.ipynb # Jupyter Notebook with the project code
├── requirements.txt          # List of required Python libraries
└── README.md                 # Project documentation
```

---

## **Features**

The dataset includes the following attributes:

- **Year**: Manufacturing year of the car.
- **Present_Price**: Current market price of the car (in lakhs).
- **Kms_Driven**: Total kilometers driven by the car.
- **Fuel_Type**: Fuel type of the car (Petrol, Diesel, CNG).
- **Seller_Type**: Whether the seller is a dealer or an individual.
- **Transmission**: Transmission type (Manual or Automatic).
- **Owner**: Number of previous owners.

---

## **Requirements**

To run this project, the following Python libraries are required:

- **pandas**
- **numpy**
- **matplotlib**
- **scikit-learn**

Install these dependencies using the command:

```bash
pip install -r requirements.txt
```

---

## **How to Run**

1. Clone this repository:

    ```bash
    git clone https://github.com/Surajpatel28/Car_Price_Prediction_Model.git
    ```

2. Ensure the dataset file `car_data.csv` is in the project directory.

3. Open the Jupyter Notebook:

    ```bash
    jupyter notebook car_price_prediction.ipynb
    ```

4. Execute the cells in the notebook to:
    - Load the dataset.
    - Train a Linear Regression model.
    - Predict prices for unseen data.
    - Evaluate the model's performance using R-squared error.
    - Visualize the results with scatter plots.

---

## **Results**

- The model evaluates performance using the **R-squared error metric**.
- Scatter plots are generated to visualize the relationship between actual and predicted prices, providing insights into model accuracy.

---

## **Future Enhancements**

- Explore advanced models like Random Forest and Gradient Boosting for better accuracy.
- Incorporate feature scaling to optimize the model's performance.
- Develop a web or GUI-based interface to input car details and retrieve price predictions interactively.

---
