"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var Container = _styledComponents.default.div.withConfig({
  displayName: "arrow-container__Container",
  componentId: "sc-10kgymk-0"
})(["position:relative;z-index:1;box-sizing:border-box;padding:var(--k-ArrowContainer-padding);background-color:var(--k-ArrowContainer-color);border-radius:var(--k-ArrowContainer-borderRadius);border:var(--k-ArrowContainer-borderWidth) solid var(--k-ArrowContainer-borderColor);&.k-ArrowContainer--hasShadow{box-shadow:0 ", " ", " 0 rgba(0,0,0,0.2);}.k-ArrowContainer__arrow{position:absolute;display:block;width:0;height:0;border:var(--k-ArrowContainer-arrowSize) solid transparent;}&.k-ArrowContainer--hasBorder .k-ArrowContainer__arrow::before{content:'';display:block;position:absolute;width:0;height:0;z-index:-1;}--k-ArrowContainer-arrowMainPosition:calc( var(--k-ArrowContainer-arrowSize) * -2 );--k-ArrowContainer-arrowBorderMainPosition:calc( ( var(--k-ArrowContainer-borderSize) + var(--k-ArrowContainer-borderDistance) ) * -1 );&.k-ArrowContainer--top .k-ArrowContainer__arrow{top:var(--k-ArrowContainer-arrowMainPosition);left:var(--k-ArrowContainer-arrowDistance);border-bottom-color:var(--k-ArrowContainer-color);&::before{top:var(--k-ArrowContainer-arrowBorderMainPosition);left:calc(var(--k-ArrowContainer-borderSize) * -1);border:var(--k-ArrowContainer-borderSize) solid transparent;border-bottom-color:var(--k-ArrowContainer-borderColor);}}&.k-ArrowContainer--bottom .k-ArrowContainer__arrow{bottom:var(--k-ArrowContainer-arrowMainPosition);left:var(--k-ArrowContainer-arrowDistance);border-top-color:var(--k-ArrowContainer-color);&::before{bottom:var(--k-ArrowContainer-arrowBorderMainPosition);left:calc(var(--k-ArrowContainer-borderSize) * -1);border:var(--k-ArrowContainer-borderSize) solid transparent;border-top-color:var(--k-ArrowContainer-borderColor);}}&.k-ArrowContainer--right .k-ArrowContainer__arrow{right:var(--k-ArrowContainer-arrowMainPosition);top:var(--k-ArrowContainer-arrowDistance);border-left-color:var(--k-ArrowContainer-color);&::before{right:var(--k-ArrowContainer-arrowBorderMainPosition);top:calc(var(--k-ArrowContainer-borderSize) * -1);border:var(--k-ArrowContainer-borderSize) solid transparent;border-left-color:var(--k-ArrowContainer-borderColor);}}&.k-ArrowContainer--left .k-ArrowContainer__arrow{left:var(--k-ArrowContainer-arrowMainPosition);top:var(--k-ArrowContainer-arrowDistance);border-right-color:var(--k-ArrowContainer-color);&::before{top:calc(var(--k-ArrowContainer-borderSize) * -1);left:var(--k-ArrowContainer-arrowBorderMainPosition);border:var(--k-ArrowContainer-borderSize) solid transparent;border-right-color:var(--k-ArrowContainer-borderColor);}}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20));

var ArrowContainer = function ArrowContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      size = _ref.size,
      distance = _ref.distance,
      distanceAsPercentage = _ref.distanceAsPercentage,
      position = _ref.position,
      centered = _ref.centered,
      padding = _ref.padding,
      shadow = _ref.shadow,
      borderRadius = _ref.borderRadius,
      borderColor = _ref.borderColor,
      borderWidth = _ref.borderWidth,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "color", "size", "distance", "distanceAsPercentage", "position", "centered", "padding", "shadow", "borderRadius", "borderColor", "borderWidth", "style"]);

  var arrowDistance = function () {
    switch (true) {
      case !!centered:
        return "calc(50% - ".concat((0, _typography.pxToRem)(size), ")");

      case !!distanceAsPercentage:
        return "calc(".concat(distance, "% - ").concat((0, _typography.pxToRem)(size), ")");

      default:
        return (0, _typography.pxToRem)(distance);
    }
  }();

  var rawDistanceValue = Math.sqrt(Math.pow(borderWidth, 2) * 2);
  var borderDistance = borderWidth % 2 === 0 ? Math.floor(rawDistanceValue) : Math.ceil(rawDistanceValue);
  var borderSize = borderDistance + size;
  return /*#__PURE__*/_react.default.createElement(Container, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ArrowContainer', className, "k-ArrowContainer--".concat(position), {
      'k-ArrowContainer--hasShadow': shadow,
      'k-ArrowContainer--hasBorder': borderWidth > 0
    }),
    style: (0, _extends2.default)({}, style, {
      '--k-ArrowContainer-arrowDistance': arrowDistance,
      '--k-ArrowContainer-arrowSize': (0, _typography.pxToRem)(size),
      '--k-ArrowContainer-borderColor': borderColor,
      '--k-ArrowContainer-borderDistance': (0, _typography.pxToRem)(borderDistance),
      '--k-ArrowContainer-borderSize': (0, _typography.pxToRem)(borderSize),
      '--k-ArrowContainer-borderRadius': (0, _typography.pxToRem)(borderRadius),
      '--k-ArrowContainer-borderWidth': (0, _typography.pxToRem)(borderWidth),
      '--k-ArrowContainer-color': color,
      '--k-ArrowContainer-padding': (0, _typography.pxToRem)(padding)
    })
  }, props), children, /*#__PURE__*/_react.default.createElement("span", {
    className: "k-ArrowContainer__arrow"
  }));
};

exports.ArrowContainer = ArrowContainer;
ArrowContainer.propTypes = {
  color: _propTypes.default.string,
  size: _propTypes.default.number,
  position: _propTypes.default.string,
  distance: _propTypes.default.number,
  distanceAsPercentage: _propTypes.default.bool,
  centered: _propTypes.default.bool,
  padding: _propTypes.default.number,
  shadow: _propTypes.default.bool,
  borderRadius: _propTypes.default.number,
  borderColor: _propTypes.default.string,
  borderWidth: _propTypes.default.number
};
ArrowContainer.defaultProps = {
  color: _colorsConfig.default.background3,
  size: 10,
  position: 'left',
  distance: 20,
  distanceAsPercentage: false,
  padding: 20,
  centered: false,
  shadow: false,
  borderRadius: 0,
  borderColor: _colorsConfig.default.line1,
  borderWidth: 0
};