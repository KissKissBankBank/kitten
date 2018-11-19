"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlButtonAndText = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = require("kitten/components/buttons/button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlButtonAndText = function KarlButtonAndText() {
  return _react.default.createElement("span", null, _react.default.createElement(_button.Button, null, "Button"), " ", _react.default.createElement(_button.Button, {
    size: "tiny"
  }, "Button"), " Felis ipsum");
};

exports.KarlButtonAndText = KarlButtonAndText;