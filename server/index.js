const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;

// Define routes
const indexRouter = require('./routes');
const shortUrlRouter = require('./routes/shorturl');

dotenv.config({ path: './server/config/config.env' });

// MongoDB connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/api/shorturl', shortUrlRouter);

app.listen(port, () => console.log(`Server started at ${port}`));
