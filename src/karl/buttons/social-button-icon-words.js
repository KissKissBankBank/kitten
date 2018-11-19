"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlLinkedinButtonIconWords = exports.KarlTwitterButtonIconWords = exports.KarlFacebookButtonIconWords = void 0;

var _react = _interopRequireDefault(require("react"));

var _socialButtonIconWords = require("kitten/components/buttons/social-button-icon-words");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlFacebookButtonIconWords = function KarlFacebookButtonIconWords(props) {
  return _react.default.createElement(_socialButtonIconWords.FacebookButtonIconWords, {
    className: "k-u-margin-bottom-single"
  }, "Continuer avec Facebook");
};

exports.KarlFacebookButtonIconWords = KarlFacebookButtonIconWords;

var KarlTwitterButtonIconWords = function KarlTwitterButtonIconWords(props) {
  return _react.default.createElement(_socialButtonIconWords.TwitterButtonIconWords, {
    className: "k-u-margin-bottom-single"
  }, "Continuer avec Twitter");
};

exports.KarlTwitterButtonIconWords = KarlTwitterButtonIconWords;

var KarlLinkedinButtonIconWords = function KarlLinkedinButtonIconWords(props) {
  return _react.default.createElement(_socialButtonIconWords.LinkedinButtonIconWords, null, "Continuer avec LinkedIn");
};

exports.KarlLinkedinButtonIconWords = KarlLinkedinButtonIconWords;