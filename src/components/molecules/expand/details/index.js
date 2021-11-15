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

var _elementHelper = _interopRequireDefault(require("../../../../helpers/dom/element-helper"));

if (_elementHelper.default.canUseDom() && typeof document !== 'undefined') {
  require('details-element-polyfill');
}

var Summary = _styledComponents.default.summary.withConfig({
  displayName: "details__Summary",
  componentId: "sc-6eno39-0"
})(["display:inline-flex;list-style:none;touch-callout:none;user-select:none;cursor:pointer;::-webkit-details-marker,::before{display:none;}:focus-visible{outline:auto;}"]);

var Details = function Details(_ref) {
  var children = _ref.children,
      summaryRender = _ref.summaryRender,
      summaryProps = _ref.summaryProps,
      openDefault = _ref.open,
      onToggle = _ref.onToggle,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "summaryRender", "summaryProps", "open", "onToggle"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleToggle = function handleToggle(event) {
    setOpen(!open);
    onToggle(event);
  };

  return /*#__PURE__*/_react.default.createElement("details", (0, _extends2.default)({
    onToggle: handleToggle,
    open: openDefault
  }, props), /*#__PURE__*/_react.default.createElement(Summary, summaryProps, summaryRender({
    open: open
  })), children);
};

exports.Details = Details;
Details.propTypes = {
  summaryRender: _propTypes.default.func.isRequired,
  summaryProps: _propTypes.default.object,
  onToggle: _propTypes.default.func,
  open: _propTypes.default.bool
};
Details.defaultProps = {
  summaryProps: {},
  onToggle: function onToggle() {},
  open: false
};