"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _index = require("../index");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Link = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Link, _Component);

  var _super = _createSuper(Link);

  function Link() {
    (0, _classCallCheck2.default)(this, Link);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Link, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(StyledParagraph, null, /*#__PURE__*/_react.default.createElement(StyledLink, (0, _extends2.default)({}, this.props, {
        className: (0, _classnames.default)(_index.LINK_CLASSNAME, this.props.className)
      })));
    }
  }]);
  return Link;
}(_react.Component);

exports.Link = Link;

var StyledParagraph = _styledComponents.default.p.withConfig({
  displayName: "link__StyledParagraph",
  componentId: "sc-11s9i6i-0"
})(["margin:0;padding:0;line-height:1;"]);

var StyledLink = _styledComponents.default.span.withConfig({
  displayName: "link__StyledLink",
  componentId: "sc-11s9i6i-1"
})(["", ";font-size:", ";line-height:normal;color:", ";text-decoration:none;", ""], _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(12), _colorsConfig.default.primary1, function (_ref) {
  var as = _ref.as;
  return as === 'a' && (0, _styledComponents.css)(["transition:color 0.4s;:hover,:focus,:active{color:", ";}"], _colorsConfig.default.primary3);
});