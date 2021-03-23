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

var _button = require("../../../components/buttons/button");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var StyledButton = (0, _styledComponents.default)(function (_ref) {
  var tag = _ref.tag,
      props = (0, _objectWithoutProperties2.default)(_ref, ["tag"]);
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    as: tag
  }));
}).withConfig({
  displayName: "button-icon__StyledButton",
  componentId: "jhbmf4-0"
})(["svg,.k-ButtonIcon__svg{display:block;margin:0;padding:0;width:", ";height:", ";transition:fill 0.2s;pointer-events:none;.k-ButtonIcon__svg__stroke{transition:stroke 0.2s;}}&.k-ButtonIcon--nano svg,&.k-ButtonIcon--nano .k-ButtonIcon__svg{width:", ";height:", ";}.k-ButtonIcon--withoutHover{pointer-events:none;}"], (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8));

var ButtonIcon = function ButtonIcon(_ref2) {
  var className = _ref2.className,
      tag = _ref2.tag,
      withoutHover = _ref2.withoutHover,
      verticalArrow = _ref2.verticalArrow,
      size = _ref2.size,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["className", "tag", "withoutHover", "verticalArrow", "size"]);
  return /*#__PURE__*/_react.default.createElement(StyledButton, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ButtonIcon', className, "k-ButtonIcon--".concat(size), {
      'k-ButtonIcon--withoutHover': withoutHover,
      'k-ButtonIcon--verticalArrow': verticalArrow
    }),
    size: size
  }, others, {
    icon: true
  }));
};

exports.ButtonIcon = ButtonIcon;
ButtonIcon.defaultProps = {
  tag: 'button',
  size: 'regular',
  modifier: 'hydrogen',
  withoutHover: false,
  verticalArrow: false,
  rounded: false
};