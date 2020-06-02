"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardTitle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireDefault(require("radium"));

var _text = require("../../../components/typography/text");

var _horizontalStroke = require("../../../components/layout/horizontal-stroke");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Text = (0, _radium.default)(_text.Text);
var HorizontalStroke = (0, _radium.default)(_horizontalStroke.HorizontalStroke);

var RewardCardTitleBase = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(RewardCardTitleBase, _Component);

  var _super = _createSuper(RewardCardTitleBase);

  function RewardCardTitleBase() {
    (0, _classCallCheck2.default)(this, RewardCardTitleBase);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(RewardCardTitleBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          tagName = _this$props.tagName,
          disabled = _this$props.disabled;
      var titleStyles = [styles.base, disabled && styles.disabled];
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(Text, {
        fontStyle: "italic",
        weight: "bold",
        tag: tagName,
        color: "font1",
        style: titleStyles
      }, children), /*#__PURE__*/_react.default.createElement(HorizontalStroke, {
        size: "default",
        className: "k-u-margin-bottom-triple",
        color: disabled ? _colorsConfig.default.font2 : null
      }));
    }
  }]);
  return RewardCardTitleBase;
}(_react.Component);

RewardCardTitleBase.propTypes = {
  children: _propTypes.default.string,
  tagName: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
RewardCardTitleBase.defaultProps = {
  children: '',
  tagName: 'h6',
  disabled: false
};
var styles = {
  base: {
    fontSize: (0, _typography.pxToRem)(24),
    lineHeight: (0, _typography.pxToRem)(34),
    margin: "0 0 ".concat((0, _typography.pxToRem)(15), " 0")
  },
  disabled: {
    color: _colorsConfig.default.font2,
    cursor: 'not-allowed'
  }
};
var RewardCardTitle = (0, _radium.default)(RewardCardTitleBase);
exports.RewardCardTitle = RewardCardTitle;