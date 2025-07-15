const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
const app1 = require('./routes/app1.js');

// app 1 - hometracker
// const app1Path = path.join(__dirname, "../frontend/build");
// app.use("/app1", express.static(app1Path));
// app.get("/app1/{*any}", (req, res) => {
//   res.sendFile(path.join(app1Path, "index.html"));
// });

app.use("/projects", app1);
// app 2
const app2Path = path.join(__dirname, "../app2/build");
app.use("/app2", express.static(app2Path));
app.get("/app2/{*any}", (req, res) => {
  res.sendFile(path.join(app2Path, "index.html"));
});

app.get('/route1', (req, res) => {
  res.json({ message: 'Hello 1!' });
});

app.get('/route2', (req, res) => {
  res.json({ message: 'Hello 2!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
