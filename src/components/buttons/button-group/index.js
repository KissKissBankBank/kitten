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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _button = require("../../../components/buttons/button/button");

var _typography = require("../../../helpers/utils/typography");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

var ButtonGroup = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ButtonGroup, _Component);

  var _super = _createSuper(ButtonGroup);

  function ButtonGroup() {
    (0, _classCallCheck2.default)(this, ButtonGroup);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ButtonGroup, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(StyledButtonGroup, (0, _extends2.default)({
        role: "group"
      }, this.props));
    }
  }]);
  return ButtonGroup;
}(_react.Component);

exports.ButtonGroup = ButtonGroup;
ButtonGroup.Button = StyledButton;