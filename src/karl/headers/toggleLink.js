"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlToggleClassLink = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlToggleClassLink = function KarlToggleClassLink(props) {
  var label = props.label,
      elementSelector = props.elementSelector,
      toggledClass = props.toggledClass;

  var onClick = function onClick(event) {};

  return _react.default.createElement("a", {
    className: "karl-link",
    href: "#"
  }, label);
};

exports.KarlToggleClassLink = KarlToggleClassLink;