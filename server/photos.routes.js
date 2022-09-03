const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hello world",
  });
});

router.post("/upload", (req, res) => {
  console.log(req.files);
  console.log(req.params);
  console.log(req.body);
  res.json({
    status: "fileupload",
  });
});

module.exports = router;
