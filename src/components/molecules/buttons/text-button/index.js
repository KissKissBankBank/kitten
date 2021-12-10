"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

var StyledButton = _styledComponents.default.button.withConfig({
  displayName: "text-button__StyledButton",
  componentId: "sc-1nng31q-0"
})(["", " display:inline-flex;align-items:center;gap:", ";color:var(--color-grey-900);text-align:left;transition:color var(--transition);&:hover{color:var(--color-primary-500);}&:active{color:var(--color-primary-700);}&:focus-visible{outline-style:auto;}svg{height:1.25em;}svg,svg path[fill]:not([fill='transparent']){fill:currentColor;}&.k-TextButton--normal{font-size:pxToRem(14);@media ", "{font-size:pxToRem(16);}}&.k-TextButton--big{font-size:pxToRem(16);@media ", "{font-size:pxToRem(20);}}"], _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(10), _screenConfig.mq.tabletAndDesktop, _screenConfig.mq.tabletAndDesktop);

var TextButton = function TextButton(_ref) {
  var className = _ref.className,
      size = _ref.size,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "size"]);
  return /*#__PURE__*/_react.default.createElement(StyledButton, (0, _extends2.default)({
    type: "button",
    className: (0, _classnames.default)('k-TextButton', 'k-u-reset-button', className, "k-TextButton--".concat(size))
  }, props));
};

exports.TextButton = TextButton;
TextButton.defaultProps = {
  size: 'normal'
};
TextButton.propTypes = {
  size: _propTypes.default.oneOf(['normal', 'big'])
};