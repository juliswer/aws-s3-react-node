const express = require("express");
const fileUpload = require("express-fileupload");
const photoRoutes = require("./photos.routes.js");

const app = express();

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

app.use(photoRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
