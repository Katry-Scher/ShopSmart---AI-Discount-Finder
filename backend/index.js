const express = require("express");
const cors = require("cors");
const searchRoutes = require("./routes/search");

const app = express();
const PORT = 3000;

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(searchRoutes);

app.get("/", (req, res) => {
  res.send("ShopSmart API está rodando.");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


