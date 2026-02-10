const express = require("express");
const router = express.Router();
const { searchProduct } = require("../services/searchService");

router.get("/search", async (req, res) => {
  const product = req.query.product;

  if (!product) {
    return res.status(400).json({ error: "Parâmetro 'product' é obrigatório" });
  }

  try {
    const result = await searchProduct(product);
    res.json(result);
  } catch (err) {
    res.status(503).json({
      error: "ML service indisponível ou com erro",
      details: err.message,
    });
  }
});

module.exports = router;



