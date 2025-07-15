const express = require('express');
const path = require('path');
const router = express.Router();

// app 1 - hometracker
const app1Path = path.join(__dirname, "../../frontend/build");
router.use("/app1", express.static(app1Path));

router.get("/app1/{*any}", (req, res) => {
  res.sendFile(path.join(app1Path, "index.html"));
});

module.exports = router