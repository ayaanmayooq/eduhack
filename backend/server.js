const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  res.send({ name: "Jane Doe" }); // Should be json format
});

app.listen(6969, () => {
  console.log("app listening on port 6969");
});
