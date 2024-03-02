"use strict";

var app = require('./app');
var PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});