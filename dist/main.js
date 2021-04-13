"use strict";

var _Container = _interopRequireDefault(require("./Container.js"));

var _Reader = _interopRequireDefault(require("./Reader.js"));

var _Writer = _interopRequireDefault(require("./Writer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// let Container = require('./Container');
// let Reader = require('./Reader');
// let Writer = require('./Writer');
function main() {
  console.log('Start');
  var writer = new _Writer["default"]('out.txt');
  writer.writeLine('Start!');
  var container = new _Container["default"]();
  var reader = new _Reader["default"]('in.txt');
  container["in"](reader);
  container.out(writer);
  container.clear();
  container.out(writer);
  writer.writeLine('Stop!');
  writer.writeLine('Stop!');
  console.log('Stop');
  writer.save();
}

main();