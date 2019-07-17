"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LikeButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _heartIcon = require("../../../../components/icons/heart-icon");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _visuallyHidden = require("../../../accessibility/visually-hidden");

var StyledButton = _styledComponents.default.button.withConfig({
  displayName: "like-button__StyledButton",
  componentId: "wk7ovs-0"
})(["display:inline-flex;align-items:center;justify-content:center;position:relative;height:", ";padding:0 ", ";border:", " solid ", ";background-color:", ";", ";font-size:", ";color:", ";text-decoration:none;appareance:none;box-sizing:border-box;outline:none;cursor:pointer;:hover,&[aria-pressed='true']{svg{fill:", ";}}:focus,:active{border-color:", ";}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.background1, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(12), _colorsConfig.default.font1, _colorsConfig.default.error, _colorsConfig.default.line2);

var StyledHeartIcon = (0, _styledComponents.default)(_heartIcon.HeartIcon).withConfig({
  displayName: "like-button__StyledHeartIcon",
  componentId: "wk7ovs-1"
})(["width:", ";height:", ";margin-right:", ";overflow:hidden;transition:fill 0.2s;"], (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(10));

var LikeButton =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(LikeButton, _PureComponent);

  function LikeButton() {
    (0, _classCallCheck2.default)(this, LikeButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LikeButton).apply(this, arguments));
  }

  (0, _createClass2.default)(LikeButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          accessibilityLabel = _this$props.accessibilityLabel,
          hasLiked = _this$props.hasLiked,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "accessibilityLabel", "hasLiked"]);
      return _react.default.createElement(StyledButton, (0, _extends2.default)({
        role: "button",
        "aria-pressed": "".concat(hasLiked)
      }, props), accessibilityLabel && _react.default.createElement(_visuallyHidden.VisuallyHidden, null, accessibilityLabel), _react.default.createElement(StyledHeartIcon, {
        "aria-hidden": "true",
        focusable: "false"
      }), children);
    }
  }]);
  return LikeButton;
}(_react.PureComponent);

exports.LikeButton = LikeButton;
LikeButton.propTypes = {
  children: _propTypes.default.string.isRequired,
  accessibilityLabel: _propTypes.default.string,
  hasLiked: _propTypes.default.bool
};
LikeButton.defaultProps = {
  accessibilityLabel: '',
  hasLiked: false
};