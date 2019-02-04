"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var Link =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Link, _Component);

  function Link() {
    (0, _classCallCheck2.default)(this, Link);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments));
  }

  (0, _createClass2.default)(Link, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(StyledParagraph, null, _react.default.createElement(StyledLink, this.props));
    }
  }]);
  return Link;
}(_react.Component);

exports.Link = Link;

var StyledParagraph = _styledComponents.default.p.withConfig({
  displayName: "link__StyledParagraph",
  componentId: "sc-11s9i6i-0"
})(["margin:0;padding:0;line-height:1;"]);

var StyledLink = _styledComponents.default.a.withConfig({
  displayName: "link__StyledLink",
  componentId: "sc-11s9i6i-1"
})(["", ";font-size:", ";line-height:normal;color:", ";text-decoration:none;transition:color 0.4s;&:hover,&:focus,&:active{color:", ";}"], _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(12), _colorsConfig.default.primary1, _colorsConfig.default.primary3);