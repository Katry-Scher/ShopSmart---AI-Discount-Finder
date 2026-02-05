from flask import Flask, request, jsonify

app = Flask(__name__)

def compute_trend(prices):
    if len(prices) < 2:
        return 0.0
    return (prices[-1] - prices[0]) / (len(prices) - 1)

def compute_confidence(slope, prices):
    avg_price = sum(prices) / len(prices)
    if avg_price == 0:
        return 0.0

    normalized = abs(slope) / avg_price
    confidence = 0.50 + min(normalized * 10, 0.45)
    return round(confidence, 2)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json(silent=True) or {}
    prices = data.get("prices", [])

    if not isinstance(prices, list) or len(prices) == 0:
        return jsonify({"error": "Field 'prices' must be a non-empty list"}), 400

    try:
        prices = [float(p) for p in prices]
    except (ValueError, TypeError):
        return jsonify({"error": "All prices must be numbers"}), 400

    slope = compute_trend(prices)
    confidence = compute_confidence(slope, prices)

    if slope < 0:
        recommendation = "Wait before buying"
        explanation = "Prices show a downward trend, so waiting may lead to a better deal."
    elif slope > 0:
        recommendation = "Buy now"
        explanation = "Prices show an upward trend, so buying sooner may be better."
    else:
        recommendation = "Neutral"
        explanation = "Prices look stable, so timing is less important."

    return jsonify({
        "recommendation": recommendation,
        "confidence": confidence,
        "explanation": explanation
    })

if __name__ == "__main__":
    app.run(port=5000, debug=True)


