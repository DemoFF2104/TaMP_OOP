"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import { Rectangle } from "./Rectangle";
// import { Triangle } from "./Triangle";
var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "setColor",
    value: // constructor() {
    //   this.color;
    // }
    function setColor(color) {
      this.color = color;
    }
  }, {
    key: "in",
    value: function _in(tmp, array) {
      console.log(this.color);

      switch (tmp[0]) {
        case "1":
          // let rectangle = new Rectangle();
          // rectangle.in(tmp.toString().split(" "));
          // array.push(rectangle);
          break;

        case "2":
          // let triangel = new Triangle();
          // triangel.in(tmp.toString().split(" "));
          // array.push(triangel);
          break;

        default:
          return 0;
      }
    }
  }]);

  return A;
}();

exports.A = A;