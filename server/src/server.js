require('dotenv').config({ path: './src/.env' });
const express = require('express');
const connectDb = require('../config/dbConnection');

connectDb().catch((err) => {
	console.error('An error occurred while connecting to the database:', err.message);
	process.exit(1);
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', require('./routes/userRoutes'));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});