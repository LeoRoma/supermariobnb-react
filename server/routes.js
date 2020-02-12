var express = require("express");
var router = express.Router();

router.get("/api/hello", (request, response) => {
  response.json("Hello World");
});

module.exports = router;
