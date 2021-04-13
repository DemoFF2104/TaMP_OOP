"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parserIn = parserIn;

var _fs = _interopRequireDefault(require("fs"));

var _rectangle = require("../core/rectangle");

var _triangle = require("../core/triangle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rectang = new _rectangle.rectangle();
var triang = new _triangle.triangle();

function parserIn(path) {
  _fs["default"].readFile(path, function (err, logData) {
    if (err) throw err;
    var text = logData.toString();
    var lines = text.split("\n");
    lines.forEach(function (line) {
      var parts = line.split(" ");
      var count = parts[0];
      var letter = [];

      for (var i = 1; i < parts.length; i++) {
        letter.push(parseInt(parts[i]));
      }

      switch (count) {
        case "1":
          console.log(count, ":", letter);
          rectang["in"](letter);
          break;

        case "2":
          console.log(count, ":", letter);
          triang["in"](letter);
          break;

        default:
          return 0;
      }
    });
  });
}