const copyLeaksRoutes = require("./routes/copyleaks.routes.js")

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json({ limit: '50mb' }));

app.use(copyLeaksRoutes);

// Simple route to respond with a message
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
