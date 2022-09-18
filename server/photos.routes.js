const { Router } = require("express");
const { uploadFile, readFile } = require("./s3");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hello world",
  });
});

/* router.get("/usd", async (req, res) => {
  const usdRes = await currencyConverter
    .from("PEN")
    .to("USD")
    .amount(1)
    .convert();
  res.json({
    usdRes,
  });
}); */

router.post("/upload", async (req, res) => {
  try {
    const uploadedFile = req.files.photo;
    const result = await uploadFile(uploadedFile);
    res.json({
      success: true,
      result,
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

router.get("/archivo/:fileName", async (req, res) => {
  try {
    const result = await readFile(req.params.fileName);
    res.status(200).json({
      success: true,
      message: "File was successfully downloaded",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
