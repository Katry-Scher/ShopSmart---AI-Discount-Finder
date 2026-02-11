const express = require("express");
const cors = require("cors");
const searchRoutes = require("./routes/search");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(searchRoutes);

app.get("/", (req, res) => {
  res.send("ShopSmart API is running.");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});



