"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WhatsAppIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var WhatsAppIcon = function WhatsAppIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 25 25",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.742 15.366c-.295-.162-1.746-.945-2.018-1.056-.272-.11-.47-.168-.683.126-.212.293-.813.949-.996 1.143-.183.194-.36.212-.655.05-.294-.161-1.252-.515-2.362-1.583-.864-.83-1.431-1.838-1.595-2.145-.165-.308-.002-.464.155-.608.14-.13.314-.34.47-.51.157-.17.213-.294.32-.49.108-.198.065-.375-.005-.529-.07-.152-.616-1.655-.844-2.267-.228-.61-.482-.52-.658-.527-.175-.006-.375-.039-.575-.046-.2-.008-.53.055-.816.346-.287.29-1.091.989-1.147 2.469-.055 1.48.969 2.95 1.111 3.156.143.206 1.956 3.414 4.968 4.733 3.012 1.319 3.028.917 3.58.887.554-.03 1.807-.661 2.084-1.354.277-.692.3-1.294.23-1.423-.071-.128-.269-.211-.564-.372zm-5.524 7.13a9.754 9.754 0 0 1-5.396-1.62l-3.77 1.206 1.226-3.643a9.756 9.756 0 0 1-1.868-5.75c0-5.409 4.4-9.81 9.808-9.81 5.408 0 9.808 4.401 9.808 9.81 0 5.408-4.4 9.808-9.808 9.808zm0-21.59C5.71.906.436 6.181.436 12.69c0 2.226.618 4.307 1.69 6.084L0 25.093l6.523-2.088a11.736 11.736 0 0 0 5.695 1.466C18.725 24.47 24 19.195 24 12.689 24 6.18 18.725.906 12.218.906z"
  }));
};

exports.WhatsAppIcon = WhatsAppIcon;
WhatsAppIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
WhatsAppIcon.defaultProps = {
  color: '#fff',
  title: ''
};