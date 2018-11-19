"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlLoaderInButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _loader = require("kitten/components/loaders/loader");

var _button = require("kitten/components/buttons/button");

var _marger = require("kitten/components/layout/marger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var KarlLoaderInButton = function KarlLoaderInButton(props) {
  return _react.default.createElement(_marger.Marger, {
    top: "1",
    bottom: "1"
  }, _react.default.createElement(_button.Button, _extends({
    icon: true,
    iconWithMinWidth: true,
    "aria-label": "Loader button",
    title: "Loader button"
  }, props), _react.default.createElement(_loader.Loader, {
    className: "k-Button__icon"
  })));
};

exports.KarlLoaderInButton = KarlLoaderInButton;