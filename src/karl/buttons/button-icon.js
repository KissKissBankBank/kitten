"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlButtonIconNano = exports.KarlButtonIconHeart = void 0;

var _react = _interopRequireDefault(require("react"));

var _buttonIcon = require("kitten/components/buttons/button-icon");

var _heartIcon = require("kitten/components/icons/heart-icon");

var _arrowIcon = require("kitten/components/icons/arrow-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlButtonIconHeart = function KarlButtonIconHeart(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, props, _react.default.createElement(_heartIcon.HeartIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.KarlButtonIconHeart = KarlButtonIconHeart;

var KarlButtonIconNano = function KarlButtonIconNano(props) {
  return _react.default.createElement(_buttonIcon.ButtonIcon, props, _react.default.createElement(_arrowIcon.ArrowIcon, {
    className: "k-ButtonIcon__svg"
  }));
};

exports.KarlButtonIconNano = KarlButtonIconNano;