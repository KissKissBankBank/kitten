"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InstagramIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var InstagramIconNext = function InstagramIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M23.096 11.996c0 1.612-.033 3.23.009 4.842.07 2.854-1.724 5.06-4.008 6.041a7.247 7.247 0 0 1-2.877.603c-3.118.004-6.24.046-9.359-.014-2.349-.047-4.28-1.029-5.666-2.965C.468 19.483.12 18.325.12 17.069V7.11c0-2.711 1.32-4.606 3.665-5.838C4.805.738 5.912.51 7.065.506c3.026 0 6.056-.018 9.081.01 2.349.018 4.309.917 5.754 2.807.806 1.056 1.196 2.27 1.196 3.605v5.068Zm-21.266 0v5.097c0 .76.176 1.473.57 2.117 1.033 1.691 2.594 2.516 4.53 2.548 3.11.047 6.223.019 9.337.01.764 0 1.505-.158 2.196-.487 1.88-.899 2.932-2.33 2.923-4.48-.018-3.29-.005-6.58-.005-9.869a4.18 4.18 0 0 0-.815-2.534c-1.066-1.441-2.539-2.15-4.3-2.168-3.104-.038-6.208-.014-9.312-.01a5.47 5.47 0 0 0-1.923.366c-1.705.635-3.29 2.243-3.215 4.61.055 1.603.014 3.202.014 4.8Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.633 16.907c-2.988 0-5.397-2.381-5.402-5.346-.005-2.92 2.423-5.31 5.393-5.31 2.979-.005 5.397 2.381 5.402 5.324 0 2.937-2.414 5.328-5.393 5.332Zm0-1.714c2.034 0 3.684-1.626 3.679-3.628-.005-1.983-1.654-3.604-3.679-3.604-2.034 0-3.692 1.617-3.692 3.614.004 2.001 1.658 3.623 3.692 3.618ZM17.652 4.63c.625 0 1.135.532 1.135 1.186-.005.653-.519 1.181-1.144 1.176-.617-.004-1.122-.532-1.122-1.172-.004-.653.505-1.19 1.131-1.19Z",
    fill: color
  }));
};

exports.InstagramIconNext = InstagramIconNext;
InstagramIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
InstagramIconNext.defaultProps = {
  color: '#fff',
  title: null
};