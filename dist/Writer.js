"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Writer = /*#__PURE__*/function () {
  function Writer(path) {
    _classCallCheck(this, Writer);

    this.path = path;
    this.string = '';
  }

  _createClass(Writer, [{
    key: "writeLine",
    value: function writeLine(str) {
      this.string += str + '\n';
    }
  }, {
    key: "write",
    value: function write(str) {
      this.string += str;
    }
  }, {
    key: "save",
    value: function save() {
      _fs["default"].writeFile(this.path, this.string, function (err) {
        if (err) throw err;
      });
    }
  }]);

  return Writer;
}();

exports["default"] = Writer;