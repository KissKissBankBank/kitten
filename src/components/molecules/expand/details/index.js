"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var _excluded = ["children", "summaryRender", "summaryProps", "open", "onToggle"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

if (_elementHelper.default.canUseDom() && typeof document !== 'undefined') {
  require('details-element-polyfill');
}

var Summary = _styledComponents.default.summary.withConfig({
  displayName: "details__Summary",
  componentId: "sc-6eno39-0"
})(["display:inline-flex;list-style:none;touch-callout:none;user-select:none;cursor:pointer;::-webkit-details-marker,::before{display:none;}"]);

var Details = function Details(_ref) {
  var children = _ref.children,
      summaryRender = _ref.summaryRender,
      summaryProps = _ref.summaryProps,
      openDefault = _ref.open,
      onToggle = _ref.onToggle,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

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