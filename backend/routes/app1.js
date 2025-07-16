const express = require('express');
const path = require('path');
const router = express.Router();

// app 1 - hometracker
const app1Path = path.join(__dirname, "../../home_tracker/build");
router.use("/home_tracker", express.static(app1Path));

router.get("/home_tracker/{*any}", (req, res) => {
  res.sendFile(path.join(app1Path, "index.html"));
});

module.exports = router