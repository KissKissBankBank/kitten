"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FormActions = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _excluded = ["className", "spreadOutAt"];

var StyledFormActions = _styledComponents.default.div.withConfig({
  displayName: "form-actions__StyledFormActions",
  componentId: "sc-86ge76-0"
})(["display:flex;flex-wrap:wrap;justify-content:center;.k-FormActions__item{margin-left:", ";margin-right:", ";}&.k-FormActions--spreadOut-s-up{@media (min-width:", "){justify-content:space-between;.k-FormActions__item{&:first-child{margin-left:0;}&:last-child{margin-right:0;}}}}"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min));

var FormActions = function FormActions(_ref) {
  var _classNames;

  var className = _ref.className,
      spreadOutAt = _ref.spreadOutAt,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var formActionsClassName = (0, _classnames.default)('k-FormActions', className, (_classNames = {}, _classNames["k-FormActions--spreadOut-" + spreadOutAt] = spreadOutAt, _classNames));
  return /*#__PURE__*/_react.default.createElement(StyledFormActions, (0, _extends2.default)({
    className: formActionsClassName
  }, others));
};

exports.FormActions = FormActions;

FormActions.Item = function (props) {
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-FormActions__item', props.className)
  }));
};

FormActions.propTypes = {
  spreadOutAt: _propTypes.default.oneOf(['s-up'])
};
FormActions.defaultProps = {
  spreadOutAt: 's-up',
  children: null
};
FormActions.Item.defaultProps = {
  className: null,
  children: null
};