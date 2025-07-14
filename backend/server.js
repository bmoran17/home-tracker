const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

// Serve static files from React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
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
