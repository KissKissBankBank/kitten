"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoLines = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledInfoLines = _styledComponents.default.div.withConfig({
  displayName: "info-lines__StyledInfoLines",
  componentId: "sc-1tjj1rx-0"
})(["", " ", " ", " ", " ", ""], function (_ref) {
  var borderColor = _ref.borderColor;
  return borderColor && (0, _styledComponents.css)(["border-top:", " solid ", ";border-bottom:", " solid ", ";& > * + *{border-top:", " solid ", ";}"], (0, _typography.pxToRem)(1), borderColor, (0, _typography.pxToRem)(1), borderColor, (0, _typography.pxToRem)(1), borderColor);
}, function (_ref2) {
  var withBorderRadius = _ref2.withBorderRadius;
  return withBorderRadius && (0, _styledComponents.css)(["border-radius:", ";"], (0, _typography.pxToRem)(8));
}, function (_ref3) {
  var withLeftRightBorder = _ref3.withLeftRightBorder,
      borderColor = _ref3.borderColor;
  return withLeftRightBorder && borderColor && (0, _styledComponents.css)(["border-left:", " solid ", ";border-right:", " solid ", ";"], (0, _typography.pxToRem)(1), borderColor, (0, _typography.pxToRem)(1), borderColor);
}, function (_ref4) {
  var withoutTopBottomBorder = _ref4.withoutTopBottomBorder;
  return withoutTopBottomBorder && (0, _styledComponents.css)(["border-top:none;border-bottom:none;"]);
}, function (_ref5) {
  var withoutResponsive = _ref5.withoutResponsive;
  return withoutResponsive && (0, _styledComponents.css)(["", "{flex-direction:row;}", "{flex:auto;}"], StyledLine, StyledKey);
});

var StyledLine = _styledComponents.default.div.withConfig({
  displayName: "info-lines__StyledLine",
  componentId: "sc-1tjj1rx-1"
})(["flex-direction:column;display:flex;padding:", ";@media (min-width:", "px){flex-direction:row;}"], (0, _typography.pxToRem)(15), _screenConfig.ScreenConfig.M.min);

var StyledKey = _styledComponents.default.span.withConfig({
  displayName: "info-lines__StyledKey",
  componentId: "sc-1tjj1rx-2"
})(["@media (min-width:", "px){flex:auto;}"], _screenConfig.ScreenConfig.M.min);

var StyledValue = _styledComponents.default.span.withConfig({
  displayName: "info-lines__StyledValue",
  componentId: "sc-1tjj1rx-3"
})(["margin:", ";"], (0, _typography.pxToRem)(0));

var InfoList = function InfoList(_ref6) {
  var title = _ref6.title,
      value = _ref6.value,
      id = _ref6.id,
      titleTagList = _ref6.titleTagList,
      itemTagList = _ref6.itemTagList,
      others = (0, _objectWithoutProperties2.default)(_ref6, ["title", "value", "id", "titleTagList", "itemTagList"]);
  return _react.default.Children.toArray(_react.default.createElement(StyledLine, (0, _extends2.default)({}, others, {
    key: id
  }), _react.default.createElement(StyledKey, {
    as: titleTagList
  }, title), _react.default.createElement(StyledValue, {
    as: itemTagList
  }, value)));
};

var InfoLines = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(InfoLines, _PureComponent);

  var _super = _createSuper(InfoLines);

  function InfoLines() {
    (0, _classCallCheck2.default)(this, InfoLines);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(InfoLines, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          infos = _this$props.infos,
          withBorderRadius = _this$props.withBorderRadius,
          withLeftRightBorder = _this$props.withLeftRightBorder,
          withoutTopBottomBorder = _this$props.withoutTopBottomBorder,
          withoutResponsive = _this$props.withoutResponsive,
          borderColor = _this$props.borderColor,
          descriptionTagList = _this$props.descriptionTagList,
          titleTagList = _this$props.titleTagList,
          itemTagList = _this$props.itemTagList,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["infos", "withBorderRadius", "withLeftRightBorder", "withoutTopBottomBorder", "withoutResponsive", "borderColor", "descriptionTagList", "titleTagList", "itemTagList"]);
      return _react.default.createElement(StyledInfoLines, (0, _extends2.default)({}, others, {
        as: descriptionTagList,
        borderColor: borderColor,
        withBorderRadius: withBorderRadius,
        withLeftRightBorder: withLeftRightBorder,
        withoutTopBottomBorder: withoutTopBottomBorder,
        withoutResponsive: withoutResponsive
      }), infos.map(function (info) {
        return _react.default.createElement(InfoList, {
          key: info.id,
          title: info.key,
          value: info.value,
          id: info.id,
          titleTagList: titleTagList,
          itemTagList: itemTagList
        });
      }));
    }
  }]);
  return InfoLines;
}(_react.PureComponent);

exports.InfoLines = InfoLines;
InfoLines.propTypes = {
  infos: _propTypes.default.array.isRequired,
  borderColor: _propTypes.default.string,
  withBorderRadius: _propTypes.default.bool,
  withLeftRightBorder: _propTypes.default.bool,
  withoutTopBottomBorder: _propTypes.default.bool,
  withoutResponsive: _propTypes.default.bool,
  descriptionTagList: _propTypes.default.string,
  titleTagList: _propTypes.default.string,
  itemTagList: _propTypes.default.string
};
InfoLines.defaultProps = {
  borderColor: '#eee',
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutTopBottomBorder: false,
  withoutResponsive: false,
  descriptionTagList: 'dl',
  titleTagList: 'dt',
  itemTagList: 'dd'
};