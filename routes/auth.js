const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello from new auth route");
});

module.exports = router;
