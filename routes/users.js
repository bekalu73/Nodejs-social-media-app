const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello from new home route");
});

module.exports = router;
