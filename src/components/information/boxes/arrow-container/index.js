"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ArrowContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["children", "className", "color", "size", "distance", "distanceAsPercentage", "distanceIsReverse", "position", "centered", "padding", "shadow", "borderRadius", "borderColor", "borderWidth", "style"];

var Container = _styledComponents.default.div.withConfig({
  displayName: "arrow-container__Container",
  componentId: "sc-d6xzra-0"
})(["--arrowContainer-borderSize:calc( var(--arrowContainer-borderDistance) + var(--arrowContainer-arrowSize) );position:relative;z-index:1;box-sizing:border-box;padding:var(--arrowContainer-padding);background-color:var(--arrowContainer-color);border-radius:var(--arrowContainer-borderRadius);border:var(--arrowContainer-borderWidth) solid var(--arrowContainer-borderColor);&.k-ArrowContainer--hasShadow{box-shadow:0 ", " ", " 0 rgba(0,0,0,0.2);}.k-ArrowContainer__arrow{position:absolute;display:block;width:0;height:0;border:var(--arrowContainer-arrowSize) solid transparent;}&.k-ArrowContainer--hasBorder .k-ArrowContainer__arrow::before{content:'';display:block;position:absolute;width:0;height:0;z-index:-1;}--arrowContainer-arrowMainPosition:calc( var(--arrowContainer-arrowSize) * -2 );--arrowContainer-arrowBorderMainPosition:calc( (var(--arrowContainer-borderSize) + var(--arrowContainer-borderDistance)) * -1 );&.k-ArrowContainer--top .k-ArrowContainer__arrow{top:var(--arrowContainer-arrowMainPosition);left:var(--arrowContainer-arrowDistance);border-bottom-color:var(--arrowContainer-color);&::before{top:var(--arrowContainer-arrowBorderMainPosition);left:calc(var(--arrowContainer-borderSize) * -1);border:var(--arrowContainer-borderSize) solid transparent;border-bottom-color:var(--arrowContainer-borderColor);}}&.k-ArrowContainer--bottom .k-ArrowContainer__arrow{bottom:var(--arrowContainer-arrowMainPosition);left:var(--arrowContainer-arrowDistance);border-top-color:var(--arrowContainer-color);&::before{bottom:var(--arrowContainer-arrowBorderMainPosition);left:calc(var(--arrowContainer-borderSize) * -1);border:var(--arrowContainer-borderSize) solid transparent;border-top-color:var(--arrowContainer-borderColor);}}&.k-ArrowContainer--reverseDistance.k-ArrowContainer--top,&.k-ArrowContainer--reverseDistance.k-ArrowContainer--bottom{.k-ArrowContainer__arrow{left:initial;right:var(--arrowContainer-arrowDistance);&::before{left:initial;right:calc(var(--arrowContainer-borderSize) * -1);}}}&.k-ArrowContainer--right .k-ArrowContainer__arrow{right:var(--arrowContainer-arrowMainPosition);top:var(--arrowContainer-arrowDistance);border-left-color:var(--arrowContainer-color);&::before{right:var(--arrowContainer-arrowBorderMainPosition);top:calc(var(--arrowContainer-borderSize) * -1);border:var(--arrowContainer-borderSize) solid transparent;border-left-color:var(--arrowContainer-borderColor);}}&.k-ArrowContainer--left .k-ArrowContainer__arrow{left:var(--arrowContainer-arrowMainPosition);top:var(--arrowContainer-arrowDistance);border-right-color:var(--arrowContainer-color);&::before{top:calc(var(--arrowContainer-borderSize) * -1);left:var(--arrowContainer-arrowBorderMainPosition);border:var(--arrowContainer-borderSize) solid transparent;border-right-color:var(--arrowContainer-borderColor);}}&.k-ArrowContainer--reverseDistance.k-ArrowContainer--right,&.k-ArrowContainer--reverseDistance.k-ArrowContainer--left{.k-ArrowContainer__arrow{top:initial;bottom:var(--arrowContainer-arrowDistance);&::before{top:initial;bottom:calc(var(--arrowContainer-borderSize) * -1);}}}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20));

var ArrowContainer = function ArrowContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      size = _ref.size,
      distance = _ref.distance,
      distanceAsPercentage = _ref.distanceAsPercentage,
      distanceIsReverse = _ref.distanceIsReverse,
      position = _ref.position,
      centered = _ref.centered,
      padding = _ref.padding,
      shadow = _ref.shadow,
      borderRadius = _ref.borderRadius,
      borderColor = _ref.borderColor,
      borderWidth = _ref.borderWidth,
      style = _ref.style,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var internalPadding = typeof padding === 'number' ? (0, _typography.pxToRem)(padding) : padding;
  var internalBorderRadius = typeof borderRadius === 'number' ? (0, _typography.pxToRem)(borderRadius) : borderRadius;
  var internalSize = typeof size === 'number' ? (0, _typography.pxToRem)(size) : size;
  var internalBorderWidth = typeof borderWidth === 'number' ? (0, _typography.pxToRem)(borderWidth) : borderWidth;

  var arrowDistance = function () {
    switch (true) {
      case !!centered:
        return "calc(50% - " + internalSize + ")";

      case !!distanceAsPercentage:
        return "calc(" + distance + "% - " + internalSize + ")";

      case typeof distance === 'string':
        return distance;

      default:
        return (0, _typography.pxToRem)(distance);
    }
  }();

  var rawDistanceValue = Math.sqrt(Math.pow(borderWidth, 2) * 2);
  var borderDistance = borderWidth % 2 === 0 ? Math.floor(rawDistanceValue) : Math.ceil(rawDistanceValue);
  return /*#__PURE__*/_react.default.createElement(Container, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ArrowContainer', className, "k-ArrowContainer--" + position, {
      'k-ArrowContainer--hasShadow': shadow,
      'k-ArrowContainer--hasBorder': borderWidth > 0,
      'k-ArrowContainer--reverseDistance': distanceIsReverse
    }),
    style: (0, _extends2.default)({}, style, {
      '--arrowContainer-arrowDistance': arrowDistance,
      '--arrowContainer-arrowSize': internalSize,
      '--arrowContainer-borderColor': borderColor,
      '--arrowContainer-borderDistance': (0, _typography.pxToRem)(borderDistance),
      '--arrowContainer-borderRadius': internalBorderRadius,
      '--arrowContainer-borderWidth': internalBorderWidth,
      '--arrowContainer-color': color,
      '--arrowContainer-padding': internalPadding
    })
  }, props), children, /*#__PURE__*/_react.default.createElement("span", {
    className: "k-ArrowContainer__arrow"
  }));
};

exports.ArrowContainer = ArrowContainer;
ArrowContainer.propTypes = {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  position: _propTypes.default.string,
  distance: _propTypes.default.number,
  distanceAsPercentage: _propTypes.default.bool,
  distanceIsReverse: _propTypes.default.bool,
  centered: _propTypes.default.bool,
  padding: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  shadow: _propTypes.default.bool,
  borderRadius: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  borderColor: _propTypes.default.string,
  borderWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
ArrowContainer.defaultProps = {
  color: _colorsConfig.default.background3,
  size: 10,
  position: 'left',
  distance: 20,
  distanceAsPercentage: false,
  distanceIsReverse: false,
  padding: 20,
  centered: false,
  shadow: false,
  borderRadius: 0,
  borderColor: _colorsConfig.default.line1,
  borderWidth: 0
};