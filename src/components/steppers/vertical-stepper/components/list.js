"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledList = _styledComponents.default.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-1m61gol-0"
})(["margin:", " 0 ", ";padding:0;", ";font-size:", ";line-height:normal;", ""], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(12), function (_ref) {
  var error = _ref.error;
  return error && (0, _styledComponents.css)(["", ";color:", ";"], _typographyConfig.default.fontStyles.regular, _colorsConfig.default.error);
});

var StyledItem = _styledComponents.default.li.withConfig({
  displayName: "list__StyledItem",
  componentId: "sc-1m61gol-1"
})(["display:flex;align-items:baseline;margin:0 0 ", ";padding:0;list-style:none;:before{padding-right:", ";content:'\u25CF';font-size:", ";}"], (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(8));

var List = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(List, _Component);

  var _super = _createSuper(List);

  function List() {
    (0, _classCallCheck2.default)(this, List);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(List, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(StyledList, this.props);
    }
  }]);
  return List;
}(_react.Component);

exports.List = List;
List.Item = StyledItem;
List.propTypes = {
  error: _propTypes.default.bool
};
List.defaultProps = {
  error: false
};