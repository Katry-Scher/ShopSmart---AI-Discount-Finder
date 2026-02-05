import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function PriceChart({ prices }) {
  // Generate labels based on price index
  const labels = prices.map((_, index) => `Day ${index + 1}`);

  const data = {
    labels,
    datasets: [
      {
        label: "Price history",
        data: prices,
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        tension: 0.4, // Smooth line (mobile friendly)
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Mobile-first
    plugins: {
      legend: {
        display: false, // Cleaner on small screens
      },
    },
    scales: {
      y: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      <Line data={data} options={options} />
    </div>
  );
}

const styles = {
  container: {
    height: "240px",
    width: "100%",
    marginTop: "20px",
  },
};


export default PriceChart;
