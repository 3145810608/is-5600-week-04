const express = require('express');
const app = express();
const apiRoutes = require('./api');

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Fullstack Prints');
});

// API routes
app.use('/api', apiRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
