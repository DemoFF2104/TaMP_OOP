"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _encryption = require("../utils/encryption.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SetText = /*#__PURE__*/function () {
  function SetText() {
    _classCallCheck(this, SetText);

    this.text;
  }

  _createClass(SetText, [{
    key: "setText",
    value: function setText() {}
  }, {
    key: "in",
    value: function _in() {}
  }, {
    key: "out",
    value: function out(writer) {
      writer.write("Text: ".concat(this.text, ", "));
    }
  }]);

  return SetText;
}();

exports["default"] = SetText;