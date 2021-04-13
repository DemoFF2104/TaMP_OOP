"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _encryption = require("../utils/encryption.js");

var _Replacement = _interopRequireDefault(require("./Replacement.js"));

var _Shift = _interopRequireDefault(require("./Shift.js"));

var _SetText = _interopRequireDefault(require("./SetText.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FinText = /*#__PURE__*/function () {
  function FinText() {
    _classCallCheck(this, FinText);

    this.text;
  }

  _createClass(FinText, [{
    key: "setText",
    value: function setText(text) {
      this.text = text;
    }
  }, {
    key: "in",
    value: function _in(tmp, setText, array) {
      switch (tmp[0]) {
        case '1':
          var replacement = new _Replacement["default"]();
          replacement["in"](tmp.toString().split(' '));
          setText = replacement;
          setText.setText(tmp.split(' ')[1].replace(/\r/g, ''));
          array.push(replacement);
          break;

        case '2':
          var shift = new _Shift["default"]();
          shift["in"](tmp.toString().split(' '));
          setText = shift;
          setText.setText(tmp.split(' ')[1]);
          array.push(shift);
          break;

        default:
          return 0;
      }
    }
  }, {
    key: "out",
    value: function out(writer) {
      writer.write("Text: ".concat(this.text, ", "));
    }
  }]);

  return FinText;
}();

exports["default"] = FinText;