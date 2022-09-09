const { Router } = require("express");
const CC = require("currency-converter-lt");

const router = Router();
let currencyConverter = new CC();

router.get("/", (req, res) => {
  res.json({
    hello: "hello world",
  });
});

router.get("/usd", async (req, res) => {
  const usdRes = await currencyConverter.from("PEN").to("USD").amount(1).convert()
  res.json({
    usdRes
  })
});

router.post("/upload", (req, res) => {
  try {
    const uploadedFile = req.files.photo;
    console.log(uploadedFile.size);
    res.json({
      success: true,
      file: {
        name: uploadedFile.name,
        type: uploadedFile.mimetype,
        size: `${(uploadedFile.size / 1000).toFixed(2)}Kb`,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error: error.message,
      file: undefined,
    });
  }
});

module.exports = router;
