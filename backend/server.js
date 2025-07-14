const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

// Serve static files from React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Catch-all to return React index.html for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
