"use strict";

var app = require('./app');
var serverless = require('serverless-http');
module.exports.handler = serverless(app);