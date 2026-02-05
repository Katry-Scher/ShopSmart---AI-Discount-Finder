import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import Loading from "./components/Loading";



function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch(product) {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        `http://localhost:3000/search?product=${encodeURIComponent(product)}`
      );

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <div style={styles.page}>
      <div style={styles.container} className="app-container">
        <h1 style={styles.title}>ShopSmart AI</h1>

        <SearchBar onSearch={handleSearch} />

        {loading && <Loading />}

        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    padding: "16px",
    
  },

  container: {
    maxWidth: "600px", // Mobile default
    margin: "0 auto",
  },

  title: {
    textAlign: "center",
    marginBottom: "24px",
  },
};

export default App;



