"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _arrowIcon = require("../../../components/icons/arrow-icon");

var _typography = require("../../../helpers/utils/typography");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledArrowIcon = _styledComponents.default.div.withConfig({
  displayName: "navbar__StyledArrowIcon",
  componentId: "sc-9n4jek-0"
})(["width:", ";height:", ";cursor:pointer;position:absolute;top:-", ";display:flex;align-items:center;justify-content:center;transition:transform 0.3s ease-in-out;", " ", ""], (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(2), function (_ref) {
  var left = _ref.left;
  return left && (0, _styledComponents.css)(["left:-", ";&:hover{transform:translate(-", ");}"], (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(8));
}, function (_ref2) {
  var right = _ref2.right;
  return right && (0, _styledComponents.css)(["right:-", ";&:hover{transform:translate(", ");}"], (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(8));
});

var Navbar = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Navbar, _Component);

  var _super = _createSuper(Navbar);

  function Navbar() {
    (0, _classCallCheck2.default)(this, Navbar);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Navbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onPreviousClick = _this$props.onPreviousClick,
          onNextClick = _this$props.onNextClick,
          className = _this$props.className,
          iconColor = _this$props.iconColor,
          labels = _this$props.labels;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: className
      }, /*#__PURE__*/_react.default.createElement(StyledArrowIcon, {
        "aria-label": labels.previoustMonth,
        onClick: function onClick() {
          return onPreviousClick();
        },
        left: true
      }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        version: "solid",
        fill: iconColor,
        direction: "left"
      })), /*#__PURE__*/_react.default.createElement(StyledArrowIcon, {
        "aria-label": labels.nextMonth,
        onClick: function onClick() {
          return onNextClick();
        },
        right: true
      }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        version: "solid",
        fill: iconColor
      })));
    }
  }]);
  return Navbar;
}(_react.Component);

exports.Navbar = Navbar;