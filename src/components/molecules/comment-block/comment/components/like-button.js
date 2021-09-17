"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LikeButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../../constants/typography-config"));

var _heartIcon = require("../../../../../components/graphics/icons/heart-icon");

var _colorsConfig = _interopRequireDefault(require("../../../../../constants/colors-config"));

var _visuallyHidden = require("../../../../accessibility/visually-hidden");

var _excluded = ["children", "accessibilityLabel", "hasLiked"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledButton = _styledComponents.default.button.withConfig({
  displayName: "like-button__StyledButton",
  componentId: "sc-1pscjnx-0"
})(["display:inline-flex;align-items:center;justify-content:center;position:relative;height:", ";padding:0 ", ";border:", " solid ", ";background-color:", ";", ";font-size:", ";color:", ";text-decoration:none;appareance:none;box-sizing:border-box;&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&[aria-pressed='true']{svg{fill:", ";}}", ""], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.background1, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(12), _colorsConfig.default.font1, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, _colorsConfig.default.error, function (_ref) {
  var as = _ref.as,
      onClick = _ref.onClick;
  return (as === 'a' || onClick) && (0, _styledComponents.css)(["cursor:pointer;:hover{svg{fill:", ";}}:focus,:active{border-color:", ";}"], _colorsConfig.default.error, _colorsConfig.default.line2);
});

var StyledHeartIcon = (0, _styledComponents.default)(_heartIcon.HeartIcon).withConfig({
  displayName: "like-button__StyledHeartIcon",
  componentId: "sc-1pscjnx-1"
})(["width:", ";height:", ";margin-right:", ";overflow:hidden;transition:fill 0.2s;"], (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(10));

var LikeButton = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(LikeButton, _PureComponent);

  function LikeButton() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = LikeButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        accessibilityLabel = _this$props.accessibilityLabel,
        hasLiked = _this$props.hasLiked,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);
    return /*#__PURE__*/_react.default.createElement(StyledButton, (0, _extends2.default)({
      role: "button",
      "aria-pressed": "" + hasLiked
    }, props), accessibilityLabel && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, accessibilityLabel), /*#__PURE__*/_react.default.createElement(StyledHeartIcon, {
      "aria-hidden": "true",
      focusable: "false"
    }), children);
  };

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