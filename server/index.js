const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './server/config/config.env' });

// MongoDB connection
connectDB();

const app = express();
// Middleware
app.use(express.json());

// Define routes
const indexRouter = require('./routes');
const shortUrlRouter = require('./routes/shorturl');

app.use('/', indexRouter);
app.use('/api/shorturl', shortUrlRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started at ${port}`));
