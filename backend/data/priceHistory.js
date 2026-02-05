// Simple in-memory dataset for demo purposes.
// In a real app, this would come from a database or external API.

const PRICE_HISTORY_BY_PRODUCT = {
  // Downward trend
  iphone: [1299, 1275, 1250, 1220, 1199, 1185, 1170],
  macbook: [1999, 1980, 1975, 1960, 1940, 1930, 1925],
  Laptop: [1500, 1400, 1300, 1350, 1000, 900, 760],

  // Upward trend (example)
  ps5: [479, 489, 495, 505, 510, 520, 499 + 600], // or a clean rising sequence
  gpu: [699, 710, 725, 740, 755, 850, 900],
  tv: [899, 870, 860, 910, 960, 1020, 1300],
  Headphones:[ 299, 290, 280, 275, 299, 330, 390],

  // Stable trend (example)
  airpods: [249, 249, 248, 249, 249, 248, 249],
  galaxy: [1199, 1170, 1150, 1130, 1100, 1085, 1070],
  Smartwatches: [399, 390, 385, 380, 375, 370, 365],
};


// Fallback if the product is unknown.
const DEFAULT_PRICE_HISTORY = [1200, 1180, 1150, 1130, 1100];

function getPriceHistory(product) {
  const key = String(product || "").trim().toLowerCase();
  return PRICE_HISTORY_BY_PRODUCT[key] || DEFAULT_PRICE_HISTORY;
}

module.exports = { getPriceHistory };
