import PriceChart from "./PriceChart";

function ResultCard({ result }) {
  return (
    <div style={styles.card}>
      <h2>{result.product}</h2>

      <p>
        <strong>Recommendation:</strong> {result.recommendation}
      </p>

      <p>
        <strong>Confidence:</strong> {result.confidence}
      </p>

      <p>
        <strong>Explanation:</strong> {result.explanation}
      </p>


      <PriceChart prices={result.prices} />
    </div>
  );
}

const styles = {
  card: {
    marginTop: "24px",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    backgroundColor: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
};


export default ResultCard;

