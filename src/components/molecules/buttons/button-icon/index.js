"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = require("../../../../components/molecules/buttons/button");

var _typography = require("../../../../helpers/utils/typography");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var StyledButton = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "button-icon__StyledButton",
  componentId: "yjuv04-0"
})(["svg,.k-ButtonIcon__svg{display:block;margin:0;padding:0;width:", ";height:", ";transition:fill 0.2s;pointer-events:none;.k-ButtonIcon__svg__stroke{transition:stroke 0.2s;}}&.k-ButtonIcon--nano svg,&.k-ButtonIcon--nano .k-ButtonIcon__svg{width:", ";height:", ";}&.k-ButtonIcon--withoutHover{pointer-events:none;}"], (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8));

var ButtonIcon = function ButtonIcon(_ref) {
  var className = _ref.className,
      withoutHover = _ref.withoutHover,
      size = _ref.size,
      others = (0, _objectWithoutProperties2.default)(_ref, ["className", "withoutHover", "size"]);
  return /*#__PURE__*/_react.default.createElement(StyledButton, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ButtonIcon', className, "k-ButtonIcon--".concat(size), {
      'k-ButtonIcon--withoutHover': withoutHover
    }),
    size: size
  }, others, {
    fit: "icon"
  }));
};

exports.ButtonIcon = ButtonIcon;
ButtonIcon.defaultProps = {
  size: 'regular',
  withoutHover: false
};