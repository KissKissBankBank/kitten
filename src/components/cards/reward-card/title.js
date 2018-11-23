"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardTitle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireDefault(require("radium"));

var _text = require("kitten/components/typography/text");

var _horizontalStroke = require("kitten/components/layout/horizontal-stroke");

var _marger = require("kitten/components/layout/marger");

var _typography = require("kitten/helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var Text = (0, _radium.default)(_text.Text);
var HorizontalStroke = (0, _radium.default)(_horizontalStroke.HorizontalStroke);

var RewardCardTitleBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(RewardCardTitleBase, _Component);

  function RewardCardTitleBase() {
    (0, _classCallCheck2.default)(this, RewardCardTitleBase);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RewardCardTitleBase).apply(this, arguments));
  }

  (0, _createClass2.default)(RewardCardTitleBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          tagName = _this$props.tagName,
          disabled = _this$props.disabled;
      var titleStyles = [styles.base, disabled && styles.disabled];
      var strokeStyles = [styles.stroke.base, disabled && styles.stroke.disabled];
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Text, {
        fontStyle: "italic",
        weight: "bold",
        tag: tagName,
        color: "font1",
        style: titleStyles
      }, children), _react.default.createElement(HorizontalStroke, {
        size: "default",
        style: strokeStyles
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
  stroke: {
    base: {
      marginBottom: (0, _typography.pxToRem)(30)
    },
    disabled: {
      backgroundColor: _colorsConfig.default.font2
    }
  },
  disabled: {
    color: _colorsConfig.default.font2,
    cursor: 'not-allowed'
  }
};
var RewardCardTitle = (0, _radium.default)(RewardCardTitleBase);
exports.RewardCardTitle = RewardCardTitle;