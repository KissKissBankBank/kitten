"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

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

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _icon = require("./icon");

var Item =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Item, _PureComponent);

  function Item() {
    (0, _classCallCheck2.default)(this, Item);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Item).apply(this, arguments));
  }

  (0, _createClass2.default)(Item, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          iconProps = _this$props.iconProps,
          children = _this$props.children,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["icon", "iconProps", "children"]);
      return _react.default.createElement(StyledItem, other, _react.default.createElement(_icon.Icon, iconProps, icon), _react.default.createElement(StyledContent, null, children));
    }
  }]);
  return Item;
}(_react.PureComponent);

exports.Item = Item;
Item.propTypes = {
  icon: _propTypes.default.node,
  iconProps: _propTypes.default.object
};
Item.defaultProps = {
  icon: null,
  iconProps: {}
};

var StyledItem = _styledComponents.default.li.withConfig({
  displayName: "item__StyledItem",
  componentId: "oehw93-0"
})(["display:flex;margin ", " 0;"], (0, _typography.pxToRem)(40));

var StyledContent = _styledComponents.default.div.withConfig({
  displayName: "item__StyledContent",
  componentId: "oehw93-1"
})(["display:flex;flex-direction:column;justify-content:center;flex:1;", ";color:", ";line-height:1.6;font-size:", ";@media (min-width:", "px){font-size:", ";}"], _typographyConfig.default.fontStyles.light, _colorsConfig.default.font1, (0, _typography.pxToRem)(14), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(16));