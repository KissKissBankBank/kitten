"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _text = require("../../../../components/typography/text");

var _button = require("../../../../components/buttons/button/button");

var _garbageIcon = require("../../../../components/icons/garbage-icon");

var borderWidth = (0, _typography.pxToRem)(2);
var borderColor = _colorsConfig.default.line1;

var StyledContainerHeader = _styledComponents.default.div.withConfig({
  displayName: "header__StyledContainerHeader",
  componentId: "sc-154pglo-0"
})(["border-bottom-width:", ";border-bottom-style:solid;border-bottom-color:", ";padding:", ";background-color:", ";display:flex;"], borderWidth, borderColor, (0, _typography.pxToRem)(15), _colorsConfig.default.background3);

var StyledRewardAmount = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "header__StyledRewardAmount",
  componentId: "sc-154pglo-1"
})(["flex:auto;display:flex;justify-content:center;align-items:center;"]);
var StyledGarbageButton = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "header__StyledGarbageButton",
  componentId: "sc-154pglo-2"
})(["align-item:flex-end;"]);

var Header =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Header, _PureComponent);

  function Header() {
    (0, _classCallCheck2.default)(this, Header);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Header).apply(this, arguments));
  }

  (0, _createClass2.default)(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onClick = _this$props.onClick,
          garbageButton = _this$props.garbageButton;
      return _react.default.createElement(StyledContainerHeader, null, _react.default.createElement(StyledRewardAmount, null, children), garbageButton && _react.default.createElement(StyledGarbageButton, {
        onClick: onClick,
        type: "button",
        "aria-label": "Garbage Button",
        modifier: "beryllium",
        tiny: true,
        icon: true
      }, _react.default.createElement(_garbageIcon.GarbageIcon, null)));
    }
  }]);
  return Header;
}(_react.PureComponent);

exports.Header = Header;
Header.propTypes = {
  garbageButton: _propTypes.default.bool
};
Header.defaultProps = {
  garbageButton: true
};