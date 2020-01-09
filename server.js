const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Constants
const PORT = process.env.PORT || 5000;
const MONGOURL = "mongodb://localhost/express-api";
const app = express();

// Middleware
app.use(bodyParser.json());

// Mongoose connect
mongoose
    .connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('\x1b[34m%s\x1b[0m', 'DB Connected'))
    .catch(e => console.error(e));

// Routes
const articles = require('./routes/api/articles');
app.use('/api/v1/articles', articles);

// Start server
app.listen(PORT, () => console.log('\x1b[34m%s\x1b[0m', `Server started on port: ${PORT}`));