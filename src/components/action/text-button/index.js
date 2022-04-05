"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _deprecated = require("../../../helpers/utils/deprecated");

var _excluded = ["className", "size"];

var StyledButton = _styledComponents.default.button.withConfig({
  displayName: "text-button__StyledButton",
  componentId: "sc-1b04xr2-0"
})(["", " display:inline-flex;align-items:center;gap:", ";color:var(--color-grey-900);text-align:left;transition:color var(--transition);&:hover{color:var(--color-primary-500);}&:active{color:var(--color-primary-700);}&:focus-visible{outline-style:auto;}svg{height:1.25em;}svg,svg path[fill]:not([fill='transparent']){fill:currentColor;}&.k-TextButton--normal,&.k-TextButton--medium{font-size:", ";@media ", "{font-size:", ";}}&.k-TextButton--big,&.k-TextButton--large{font-size:", ";@media ", "{font-size:", ";}}"], _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(14), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(16), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(20));

var TextButton = function TextButton(_ref) {
  var className = _ref.className,
      size = _ref.size,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  (0, _deprecated.checkDeprecatedSizes)(size);
  return /*#__PURE__*/_react.default.createElement(StyledButton, (0, _extends2.default)({
    type: "button",
    className: (0, _classnames.default)('k-TextButton', 'k-u-reset-button', className, "k-TextButton--" + size)
  }, props));
};

exports.TextButton = TextButton;
TextButton.defaultProps = {
  size: 'medium'
};
TextButton.propTypes = {
  size: _propTypes.default.oneOf(['medium', 'large'])
};