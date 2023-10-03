const express = require("express");
const bodyParser = require("body-parser");
const { getToken, authorize } = require("./resolvers/auth-resolvers");
const { uploadToGDrive, getProgress } = require("./resolvers/file-resolvers");
const cors = require("cors");

// global variable
global.fileMeta = {};

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is started in port ${PORT}`);
});


app.get("/api/progress", getProgress);

app.post("/api/upload", uploadToGDrive);

app.get("/api/authorize", authorize);

app.get("/api/token", getToken);

module.exports = app
