const { getPriceHistory } = require("../data/priceHistory");

const ML_URL = process.env.ML_URL || "http://localhost:5000";

async function searchProduct(product) {
  const prices = getPriceHistory(product);

  const response = await fetch(`${ML_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prices }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`ML service error: ${response.status} - ${errorText}`);
  }

  const mlResult = await response.json();

  return {
    product,
    prices,
    recommendation: mlResult.recommendation,
    confidence: mlResult.confidence,
    explanation: mlResult.explanation,
  };
}

module.exports = { searchProduct };

