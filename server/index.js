const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;

dotenv.config({ path: './server/config/config.env' });

// MongoDB connection
connectDB();

// Middleware
app.use(express.json());

// Define routes
const indexRouter = require('./routes');
const shortUrlRouter = require('./routes/shorturl');

app.use('/', indexRouter);
app.use('/api/shorturl', shortUrlRouter);

app.listen(port, () => console.log(`Server started at ${port}`));
