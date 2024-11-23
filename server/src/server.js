const express = require('express');


const app = express();

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});