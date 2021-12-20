"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ShieldIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var ShieldIcon = function ShieldIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "20",
    height: "25",
    viewBox: "0 0 20 25",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10 0c2.667 2.667 6 3.667 10 3v13c0 1.24-1.281 2.864-3.844 4.873l-.512.394c-.264.199-.54.402-.828.608l-.592.418-.308.212-.64.432-.672.442-.704.451-.736.461-.768.47L10 25l-.784-.475-.752-.466a82.073 82.073 0 01-.364-.229l-.704-.451-.672-.442-.64-.432-.608-.422-.292-.208-.56-.408-.528-.398C1.365 18.97 0 17.28 0 16V3c4 .667 7.333-.333 10-3zm0 2.652l-.271.203C7.579 4.406 5.108 5.19 2.367 5.199L2 5.195V16c0 .278.26.709.778 1.27l.237.248.269.263.3.278.332.293.363.308.394.321.425.334.456.347.488.36.518.371.55.384.58.395.302.201.951.62.673.426.384.239.384-.239.673-.426.643-.416.309-.205.596-.4.565-.389.271-.191.519-.372.487-.359.457-.348.425-.334.394-.321.363-.307.332-.293.3-.279.269-.263c.126-.128.241-.25.344-.366l.19-.224c.29-.36.449-.651.475-.865L18 16V5.195l-.367.004c-2.741-.009-5.212-.793-7.362-2.344L10 2.652zm-.001 4.567l1.033 3.197c.015.048.06.08.11.08l3.358-.007-2.721 1.969a.115.115 0 00-.042.13l1.045 3.193-2.714-1.98a.116.116 0 00-.137 0l-2.713 1.98 1.045-3.193a.115.115 0 00-.042-.13L5.5 10.489l3.358.007c.05 0 .095-.033.11-.08l1.031-3.197z",
    fill: color
  }));
};

exports.ShieldIcon = ShieldIcon;
ShieldIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
ShieldIcon.defaultProps = {
  color: '#222',
  title: ''
};