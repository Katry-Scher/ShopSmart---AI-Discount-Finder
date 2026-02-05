# ShopSmart AI

A full-stack demo app that provides a simple “buy now vs wait” recommendation based on product price trends.

## Features
- Search a product and view a price history chart
- Get a recommendation + confidence score + explanation
- Mobile-first responsive UI
- Backend API (Node/Express) calling a Python ML service (Flask)

## Tech Stack
- Frontend: React (Vite), Chart.js
- Backend: Node.js, Express
- ML Service: Python, Flask

## Architecture
**Flow:** React → Node API → Python ML Service → Node API → React

- `frontend/` renders the UI and calls the Node API
- `backend/` exposes REST endpoints and aggregates data
- `ml-service/` computes recommendation/confidence based on price trend

## Project Structure
```text
ShopSmart-ai/
  backend/
  frontend/
  ml-service/
  data/

