"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/typography/text");

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var COMPONENT_GUTTER = (0, _typography.pxToRem)(10);

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "informations__StyledContainer",
  componentId: "qg8b01-0"
})(["margin-top:", ";display:flex;flex-wrap:wrap;padding:0;line-height:1;@media (min-width:", "){margin-top:", ";padding:0 ", ";}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(20), COMPONENT_GUTTER);

var StyledInfo = _styledComponents.default.div.withConfig({
  displayName: "informations__StyledInfo",
  componentId: "qg8b01-1"
})(["margin-right:", ";margin-bottom:", ";@media (min-width:", "){margin-right:", ";}:last-child{margin-right:0;}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(20));

var StyledInfoLoading = _styledComponents.default.span.withConfig({
  displayName: "informations__StyledInfoLoading",
  componentId: "qg8b01-2"
})(["display:block;background-color:", ";border-bottom:", " solid ", ";width:", ";height:", ";"], _colorsConfig.default.line2, (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(16));

var StyledInfoLoadingLarge = (0, _styledComponents.default)(StyledInfoLoading).withConfig({
  displayName: "informations__StyledInfoLoadingLarge",
  componentId: "qg8b01-3"
})(["width:", ";border-top:", " solid ", ";border-bottom:0;"], (0, _typography.pxToRem)(65), (0, _typography.pxToRem)(1), _colorsConfig.default.background1);
var StyledText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "informations__StyledText",
  componentId: "qg8b01-4"
})(["font-size:", ";"], (0, _typography.pxToRem)(12));

var Informations = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Informations, _PureComponent);

  var _super = _createSuper(Informations);

  function Informations() {
    (0, _classCallCheck2.default)(this, Informations);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Informations, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          info1 = _this$props.info1,
          info2 = _this$props.info2,
          info3 = _this$props.info3;
      if (!info1 && !info2 && !info3) return null;
      return /*#__PURE__*/_react.default.createElement(StyledContainer, null, this.renderInfo(info1), this.renderInfo(info2), this.renderInfo(info3));
    }
  }, {
    key: "renderInfo",
    value: function renderInfo(text) {
      var loading = this.props.loading;
      if (!text) return null;
      return /*#__PURE__*/_react.default.createElement(StyledInfo, null, !loading && /*#__PURE__*/_react.default.createElement(StyledText, {
        lineHeight: "normal",
        weight: "light",
        color: "font1"
      }, text), loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledInfoLoading, null), /*#__PURE__*/_react.default.createElement(StyledInfoLoadingLarge, null)));
    }
  }]);
  return Informations;
}(_react.PureComponent);

Informations.propTypes = {
  info1: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.bool]),
  info2: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.bool]),
  info3: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.bool]),
  loading: _propTypes.default.bool
};
Informations.defaultProps = {
  info1: '',
  info2: '',
  info3: '',
  loading: false
};
var _default = Informations;
exports.default = _default;