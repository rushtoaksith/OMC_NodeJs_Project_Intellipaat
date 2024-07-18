const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static('views')); // Serve static files from 'views' directory
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
