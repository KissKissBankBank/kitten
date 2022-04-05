"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Details = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _elementHelper = require("../../../../helpers/dom/element-helper");

var _excluded = ["children", "summaryRender", "summaryProps", "open", "onToggle"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

if (_elementHelper.domElementHelper.canUseDom() && typeof document !== 'undefined') {
  require('details-element-polyfill');
}

var Summary = _styledComponents.default.summary.withConfig({
  displayName: "details__Summary",
  componentId: "sc-1xvt6sl-0"
})(["display:inline-flex;list-style:none;touch-callout:none;user-select:none;cursor:pointer;::-webkit-details-marker,::before{display:none;}:focus-visible{outline:auto;}"]);

var Details = function Details(_ref) {
  var children = _ref.children,
      summaryRender = _ref.summaryRender,
      summaryProps = _ref.summaryProps,
      openDefault = _ref.open,
      onToggle = _ref.onToggle,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

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