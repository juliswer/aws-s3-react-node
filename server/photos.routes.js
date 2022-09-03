const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hello world",
  });
});

router.post("/upload", (req, res) => {
    res.json({
        status: "fileupload",
    })
});

module.exports = router;
