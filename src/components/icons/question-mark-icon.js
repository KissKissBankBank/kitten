"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionMarkIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var QuestionMarkIcon = function QuestionMarkIcon(props) {
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 6 10"
  }, props), _react.default.createElement("title", null, "Question mark"), _react.default.createElement("path", {
    d: "M1.98 8.486c0 .468.372.852.852.852a.858.858 0 1 0 0-1.716.85.85 0 0 0-.852.864zM3.552 5.63c1.32-.264 2.208-1.2 2.208-2.46C5.76 1.682 4.584.662 2.988.662c-1.2 0-2.16.624-2.748 1.488l.912.996C1.62 2.306 2.232 1.97 3 1.97c.708 0 1.332.432 1.332 1.176 0 .9-.876 1.332-1.8 1.332h-.396v2.196h1.416V5.63z",
    fill: "#FFF"
  }));
};

exports.QuestionMarkIcon = QuestionMarkIcon;