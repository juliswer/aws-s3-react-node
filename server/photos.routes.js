const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hello world",
  });
});

router.post("/upload", (req, res) => {
  const uploadedFile = req.files.photo;
  console.log(uploadedFile);
  // console.log(req.files.photo.name);
  res.json({
    success: true,
    file: {
      name: uploadedFile.name,
      type: uploadedFile.mimetype,
      size: `${(uploadedFile.size / 1000000).toFixed(2)}Mb`,
    },
  });
});

module.exports = router;
