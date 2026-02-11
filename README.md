# ShopSmart AI

ShopSmart AI is a full-stack demo application that helps users decide whether to **buy a product now or wait**, based on historical price trends.

The project was built to demonstrate a **real-world architecture** using React, Node.js, and Python, with clear separation of concerns and service-to-service communication.

[iPhone-14-Plus-localhost-1dsxu_6ntxq_mb.webm](https://github.com/user-attachments/assets/5eb147a6-74f7-4eae-9fb7-9a2d9908083a)


---

## 🚀 Features

- Search products by name
- Visualize historical price trends with charts
- Receive a recommendation:
  - **Buy now**
  - **Wait before buying**
  - **Neutral**
- Confidence score and explanation based on trend analysis
- Mobile-first responsive UI (mobile → tablet → desktop)

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- Chart.js (react-chartjs-2)
- Mobile-first CSS

### Backend
- Node.js
- Express
- REST API

### ML / Analysis Service
- Python
- Flask
- Trend-based price analysis logic

---

## 🏗️ Architecture Overview

**Data Flow:**


### Responsibilities
- **Frontend (React)**  
  Handles user input, UI rendering, charts, and responsiveness.

- **Backend (Node.js / Express)**  
  Exposes REST endpoints, retrieves price history, and communicates with the ML service.

- **ML Service (Python / Flask)**  
  Analyzes price trends and returns recommendations, confidence scores, and explanations.

---


---

## 🧪 How the Recommendation Works

The system uses a **simple and explainable trend analysis**:

- A downward price trend → **Wait before buying**
- An upward price trend → **Buy now**
- Small or no variation → **Neutral**

The **confidence score** is derived from the strength of the trend relative to the average price.

This logic is intentionally simple and transparent, making it easy to extend with more advanced ML models in the future.

---

## ▶️ Running the Project Locally



```bash

1) ML Service (Python)
cd ml-service
python -m venv venv

# Windows
venv\Scripts\activate

pip install flask
python app.py 


2) Backend API (Node.js)
cd backend
npm install
npm run dev


3) Frontend (React)
cd frontend/ShopSmart-ai
npm install
npm run dev


