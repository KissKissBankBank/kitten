"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

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

var StyledList = _styledComponents.default.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-1m61gol-0"
})(["margin:", " 0 ", ";padding:0;", ";font-size:", ";line-height:normal;"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(12));

var StyledItem = _styledComponents.default.li.withConfig({
  displayName: "list__StyledItem",
  componentId: "sc-1m61gol-1"
})(["display:flex;align-items:baseline;margin:0 0 ", ";padding:0;list-style:none;:before{padding-right:", ";content:'\u25CF';font-size:", ";}"], (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(8));

var List =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(List, _Component);

  function List() {
    (0, _classCallCheck2.default)(this, List);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(List).apply(this, arguments));
  }

  (0, _createClass2.default)(List, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(StyledList, this.props);
    }
  }]);
  return List;
}(_react.Component);

exports.List = List;
List.Item = StyledItem;