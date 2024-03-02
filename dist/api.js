"use strict";

var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = process.env.PORT || 3000;

// Start the server
_app["default"].listen(PORT, function () {
  /* eslint-disable no-console */
  console.log("Server is running on http://localhost:".concat(PORT));
});