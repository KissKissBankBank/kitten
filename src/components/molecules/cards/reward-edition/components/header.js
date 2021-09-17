"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../../constants/colors-config"));

var _typography = require("../../../../../helpers/utils/typography");

var _text = require("../../../../../components/atoms/typography/text");

var _button = require("../../../../../components/molecules/buttons/button");

var _garbageIcon = require("../../../../../components/graphics/icons/garbage-icon");

var borderWidth = (0, _typography.pxToRem)(2);
var borderColor = _colorsConfig.default.line1;

var StyledHeader = _styledComponents.default.div.withConfig({
  displayName: "header__StyledHeader",
  componentId: "sc-1s7tkzs-0"
})(["border-bottom-width:", ";border-bottom-style:solid;border-bottom-color:", ";padding:", ";background-color:", ";display:flex;.k-RewardEdition__Header__Amount{flex:auto;display:flex;justify-content:center;align-items:center;}.k-RewardEdition__Header__Button{align-self:flex-end;}"], borderWidth, borderColor, (0, _typography.pxToRem)(15), _colorsConfig.default.background3);

var Header = function Header(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      garbageButton = _ref.garbageButton,
      garbageButtonA11yText = _ref.garbageButtonA11yText;
  return /*#__PURE__*/_react.default.createElement(StyledHeader, null, /*#__PURE__*/_react.default.createElement(_text.Text, {
    className: "k-RewardEdition__Header__Amount"
  }, children), garbageButton && /*#__PURE__*/_react.default.createElement(_button.Button, {
    onClick: onClick,
    type: "button",
    "aria-label": garbageButtonA11yText,
    modifier: "hydrogen",
    size: "micro",
    icon: true,
    className: "k-RewardEdition__Header__Button"
  }, /*#__PURE__*/_react.default.createElement(_garbageIcon.GarbageIcon, {
    "aria-hidden": true
  })));
};

exports.Header = Header;
Header.propTypes = {
  garbageButton: _propTypes.default.bool,
  garbageButtonA11yText: _propTypes.default.string
};
Header.defaultProps = {
  garbageButton: true,
  garbageButtonA11yText: 'Delete'
};