"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var TagButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TagButton, _Component);

  function TagButton() {
    (0, _classCallCheck2.default)(this, TagButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TagButton).apply(this, arguments));
  }

  (0, _createClass2.default)(TagButton, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          tag = _this$props.tag,
          children = _this$props.children,
          modifier = _this$props.modifier,
          selected = _this$props.selected,
          tiny = _this$props.tiny,
          big = _this$props.big,
          icon = _this$props.icon,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "tag", "children", "modifier", "selected", "tiny", "big", "icon"]);
      var tagButtonClassNames = (0, _classnames.default)('k-TagButton', className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "k-TagButton--".concat(modifier), modifier), (0, _defineProperty2.default)(_classNames, 'is-selected', selected), (0, _defineProperty2.default)(_classNames, 'k-TagButton--tiny', tiny), (0, _defineProperty2.default)(_classNames, 'k-TagButton--big', big), (0, _defineProperty2.default)(_classNames, 'k-TagButton--icon', icon), _classNames));
      var Tag = tag;
      return _react.default.createElement(Tag, (0, _extends2.default)({
        className: tagButtonClassNames
      }, others), children);
    }
  }]);
  return TagButton;
}(_react.Component);

exports.TagButton = TagButton;
TagButton.propTypes = {
  modifier: _propTypes.default.oneOf(['helium', 'carbon'])
};
TagButton.defaultProps = {
  tag: 'button',
  children: 'Tag',
  modifier: 'helium',
  icon: false,
  tiny: false,
  big: false,
  selected: false
};