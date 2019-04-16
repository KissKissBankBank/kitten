"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Details = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../helpers/utils/typography");

var Summary = _styledComponents.default.summary.withConfig({
  displayName: "details__Summary",
  componentId: "sc-11gfmdu-0"
})(["display:inline-flex;list-style:none;touch-callout:none;user-select:none;cursor:pointer;::-webkit-details-marker{display:none;}"]);

var Details = function Details(_ref) {
  var children = _ref.children,
      summaryRender = _ref.summaryRender,
      onToggle = _ref.onToggle,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "summaryRender", "onToggle"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var handleToggle = function handleToggle(event) {
    setIsOpen(!isOpen);
    onToggle(event);
  };

  return _react.default.createElement("details", (0, _extends2.default)({
    onToggle: handleToggle
  }, props), _react.default.createElement(Summary, null, summaryRender({
    isOpen: isOpen
  })), children);
};

exports.Details = Details;
Details.propTypes = {
  summaryRender: _propTypes.default.func.isRequired,
  onToggle: _propTypes.default.func
};
Details.defaultProps = {
  onToggle: function onToggle() {}
};