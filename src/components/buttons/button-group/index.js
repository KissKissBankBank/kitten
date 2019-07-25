"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _button = require("../../../components/buttons/button/button");

var _typography = require("../../../helpers/utils/typography");

var borderRadius = (0, _typography.pxToRem)(4);
var borderSize = (0, _typography.pxToRem)(2);

var StyledButtonGroup = _styledComponents.default.div.withConfig({
  displayName: "button-group__StyledButtonGroup",
  componentId: "sc-11uu9oe-0"
})(["display:flex;justify-content:center;"]);

var StyledButton = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "button-group__StyledButton",
  componentId: "sc-11uu9oe-1"
})(["z-index:0;min-width:auto;width:auto;&:not(:last-child){margin-right:-", ";}&:first-child{border-top-left-radius:", ";border-bottom-left-radius:", ";}&:last-child{border-top-right-radius:", ";border-bottom-right-radius:", ";}:active,:hover,:focus{border-radius:", ";z-index:1;}"], borderSize, borderRadius, borderRadius, borderRadius, borderRadius, borderRadius);

var ButtonGroup =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ButtonGroup, _Component);

  function ButtonGroup() {
    (0, _classCallCheck2.default)(this, ButtonGroup);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ButtonGroup).apply(this, arguments));
  }

  (0, _createClass2.default)(ButtonGroup, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(StyledButtonGroup, (0, _extends2.default)({
        role: "group"
      }, this.props));
    }
  }]);
  return ButtonGroup;
}(_react.Component);

exports.ButtonGroup = ButtonGroup;
ButtonGroup.Button = StyledButton;