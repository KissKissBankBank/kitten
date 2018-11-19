"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _card = require("kitten/hoc/card");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var KarlCardComponent = function KarlCardComponent(props) {
  return _react.default.createElement("div", _extends({
    style: {
      height: '100px'
    }
  }, props));
};

var KarlCard = (0, _card.card)(KarlCardComponent, {
  light: true
});
exports.KarlCard = KarlCard;