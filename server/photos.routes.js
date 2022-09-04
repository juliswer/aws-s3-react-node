const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hello world",
  });
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
