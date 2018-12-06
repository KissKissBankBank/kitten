"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardRowSide = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("kitten/helpers/utils/typography");

var RewardCardRowSideBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(RewardCardRowSideBase, _Component);

  function RewardCardRowSideBase() {
    (0, _classCallCheck2.default)(this, RewardCardRowSideBase);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RewardCardRowSideBase).apply(this, arguments));
  }

  (0, _createClass2.default)(RewardCardRowSideBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          withVerticalMargins = _this$props.withVerticalMargins;
      var rowSideStyle = [styles.base, withVerticalMargins && styles.withVerticalMargins];
      return _react.default.createElement("div", {
        style: rowSideStyle
      }, children);
    }
  }]);
  return RewardCardRowSideBase;
}(_react.Component);

RewardCardRowSideBase.propTypes = {
  withVerticalMargins: _propTypes.default.bool,
  children: _propTypes.default.node
};
RewardCardRowSideBase.defaultProps = {
  withVerticalMargins: true,
  children: ''
};
var styles = {
  base: {
    flexGrow: 1,
    flexBasis: (0, _typography.pxToRem)(190),
    // based on image max-width
    marginLeft: (0, _typography.pxToRem)(15),
    marginRight: (0, _typography.pxToRem)(15)
  },
  withVerticalMargins: {
    marginTop: (0, _typography.pxToRem)(15),
    marginBottom: (0, _typography.pxToRem)(15)
  }
};
var RewardCardRowSide = (0, _radium.default)(RewardCardRowSideBase);
exports.RewardCardRowSide = RewardCardRowSide;