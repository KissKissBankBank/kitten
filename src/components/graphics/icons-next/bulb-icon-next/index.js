"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.BulbIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const BulbIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M16.25 1.429v2.097a1.25 1.25 0 0 1-2.5 0V1.43a1.25 1.25 0 0 1 2.5 0Zm3.082 18.568c2.392-2.474 2.392-6.487 0-8.961a5.983 5.983 0 0 0-8.663 0c-2.393 2.474-2.393 6.487 0 8.961.055.057.144.132.41.336l.041.03c.227.174.58.443.923.776a6.088 6.088 0 0 1 1.636 2.748h2.642a6.088 6.088 0 0 1 1.637-2.748c.343-.333.695-.602.922-.775l.04-.031a4.02 4.02 0 0 0 .412-.336Zm1.737 1.797c3.352-3.467 3.352-9.088 0-12.556-3.352-3.467-8.786-3.467-12.138 0-3.352 3.468-3.352 9.09 0 12.556.211.219.456.406.709.599.732.559 1.535 1.172 1.81 2.769.118.691.648 1.267 1.326 1.267h4.448c.679 0 1.208-.576 1.327-1.267.274-1.597 1.077-2.21 1.81-2.77a6.2 6.2 0 0 0 .708-.598Zm5.522-4.462h2.028a1.25 1.25 0 1 0 0-2.5h-2.028a1.25 1.25 0 1 0 0 2.5Zm-26.46-1.25c0-.69.56-1.25 1.25-1.25H3.41a1.25 1.25 0 0 1 0 2.5H1.38c-.69 0-1.25-.56-1.25-1.25Zm22.197 8.812 1.607 1.663a1.2 1.2 0 0 0 1.738 0c.48-.497.48-1.301 0-1.798l-1.608-1.663a1.2 1.2 0 0 0-1.737 0 1.302 1.302 0 0 0 0 1.798ZM5.935 7.937l-1.14-1.18a1.302 1.302 0 0 1 0-1.798 1.2 1.2 0 0 1 1.737 0l1.14 1.18c.48.497.48 1.301 0 1.798a1.2 1.2 0 0 1-1.737 0Zm16.393-1.798a1.302 1.302 0 0 0 0 1.798 1.2 1.2 0 0 0 1.737 0l1.608-1.663c.48-.497.48-1.301 0-1.798a1.2 1.2 0 0 0-1.738 0L22.328 6.14Zm-18 20.418a1.302 1.302 0 0 1 0-1.798l1.607-1.663a1.2 1.2 0 0 1 1.737 0c.48.497.48 1.301 0 1.798l-1.607 1.663a1.2 1.2 0 0 1-1.738 0Zm8.6.765a1.25 1.25 0 1 0 0 2.5h4.144a1.25 1.25 0 0 0 0-2.5h-4.143Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M15 25c-.69 0-1.25-.56-1.25-1.25v-5a1.25 1.25 0 1 1 2.5 0v5c0 .69-.56 1.25-1.25 1.25Z",
    clipRule: "evenodd"
  }));
};

exports.BulbIconNext = BulbIconNext;
BulbIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
BulbIconNext.defaultProps = {
  color: '#222',
  title: null
};