"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardRowContent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var RewardCardRowContent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(RewardCardRowContent, _Component);

  function RewardCardRowContent() {
    (0, _classCallCheck2.default)(this, RewardCardRowContent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RewardCardRowContent).apply(this, arguments));
  }

  (0, _createClass2.default)(RewardCardRowContent, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement("div", {
        style: styles
      }, children);
    }
  }]);
  return RewardCardRowContent;
}(_react.Component);

exports.RewardCardRowContent = RewardCardRowContent;
RewardCardRowContent.propTypes = {
  children: _propTypes.default.node
};
RewardCardRowContent.defaultProps = {
  children: ''
};
var styles = {
  // We use an arbitrary huge ratio value for the `flex-grow` rule so that the
  // `<div>` can take the maximum space left (by its siblings) in its container.
  flexGrow: 9999,
  flexBasis: (0, _typography.pxToRem)(275),
  // content min-width
  margin: (0, _typography.pxToRem)(15)
};