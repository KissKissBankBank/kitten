import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "color", "size", "distance", "distanceAsPercentage", "distanceIsReverse", "position", "centered", "padding", "shadow", "borderRadius", "borderColor", "borderWidth", "style"];
import React from 'react';
import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var Container = styled.div.withConfig({
  displayName: "arrow-container__Container",
  componentId: "sc-d6xzra-0"
})(["--arrowContainer-borderSize:calc( var(--arrowContainer-borderDistance) + var(--arrowContainer-arrowSize) );position:relative;z-index:1;box-sizing:border-box;padding:var(--arrowContainer-padding);background-color:var(--arrowContainer-color);border-radius:var(--arrowContainer-borderRadius);border:var(--arrowContainer-borderWidth) solid var(--arrowContainer-borderColor);&.k-ArrowContainer--hasShadow{box-shadow:0 ", " ", " 0 rgba(0,0,0,0.2);}.k-ArrowContainer__arrow{position:absolute;display:block;width:0;height:0;border:var(--arrowContainer-arrowSize) solid transparent;}&.k-ArrowContainer--hasBorder .k-ArrowContainer__arrow::before{content:'';display:block;position:absolute;width:0;height:0;z-index:-1;}--arrowContainer-arrowMainPosition:calc( var(--arrowContainer-arrowSize) * -2 );--arrowContainer-arrowBorderMainPosition:calc( (var(--arrowContainer-borderSize) + var(--arrowContainer-borderDistance)) * -1 );&.k-ArrowContainer--top .k-ArrowContainer__arrow{top:var(--arrowContainer-arrowMainPosition);left:var(--arrowContainer-arrowDistance);border-bottom-color:var(--arrowContainer-color);&::before{top:var(--arrowContainer-arrowBorderMainPosition);left:calc(var(--arrowContainer-borderSize) * -1);border:var(--arrowContainer-borderSize) solid transparent;border-bottom-color:var(--arrowContainer-borderColor);}}&.k-ArrowContainer--bottom .k-ArrowContainer__arrow{bottom:var(--arrowContainer-arrowMainPosition);left:var(--arrowContainer-arrowDistance);border-top-color:var(--arrowContainer-color);&::before{bottom:var(--arrowContainer-arrowBorderMainPosition);left:calc(var(--arrowContainer-borderSize) * -1);border:var(--arrowContainer-borderSize) solid transparent;border-top-color:var(--arrowContainer-borderColor);}}&.k-ArrowContainer--reverseDistance.k-ArrowContainer--top,&.k-ArrowContainer--reverseDistance.k-ArrowContainer--bottom{.k-ArrowContainer__arrow{left:initial;right:var(--arrowContainer-arrowDistance);&::before{left:initial;right:calc(var(--arrowContainer-borderSize) * -1);}}}&.k-ArrowContainer--right .k-ArrowContainer__arrow{right:var(--arrowContainer-arrowMainPosition);top:var(--arrowContainer-arrowDistance);border-left-color:var(--arrowContainer-color);&::before{right:var(--arrowContainer-arrowBorderMainPosition);top:calc(var(--arrowContainer-borderSize) * -1);border:var(--arrowContainer-borderSize) solid transparent;border-left-color:var(--arrowContainer-borderColor);}}&.k-ArrowContainer--left .k-ArrowContainer__arrow{left:var(--arrowContainer-arrowMainPosition);top:var(--arrowContainer-arrowDistance);border-right-color:var(--arrowContainer-color);&::before{top:calc(var(--arrowContainer-borderSize) * -1);left:var(--arrowContainer-arrowBorderMainPosition);border:var(--arrowContainer-borderSize) solid transparent;border-right-color:var(--arrowContainer-borderColor);}}&.k-ArrowContainer--reverseDistance.k-ArrowContainer--right,&.k-ArrowContainer--reverseDistance.k-ArrowContainer--left{.k-ArrowContainer__arrow{top:initial;bottom:var(--arrowContainer-arrowDistance);&::before{top:initial;bottom:calc(var(--arrowContainer-borderSize) * -1);}}}"], pxToRem(10), pxToRem(20));
export var ArrowContainer = function ArrowContainer(_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var internalPadding = typeof padding === 'number' ? pxToRem(padding) : padding;
  var internalBorderRadius = typeof borderRadius === 'number' ? pxToRem(borderRadius) : borderRadius;
  var internalSize = typeof size === 'number' ? pxToRem(size) : size;
  var internalBorderWidth = typeof borderWidth === 'number' ? pxToRem(borderWidth) : borderWidth;

  var arrowDistance = function () {
    switch (true) {
      case !!centered:
        return "calc(50% - " + internalSize + ")";

      case !!distanceAsPercentage:
        return "calc(" + distance + "% - " + internalSize + ")";

      case typeof distance === 'string':
        return distance;

      default:
        return pxToRem(distance);
    }
  }();

  var rawDistanceValue = Math.sqrt(Math.pow(borderWidth, 2) * 2);
  var borderDistance = borderWidth % 2 === 0 ? Math.floor(rawDistanceValue) : Math.ceil(rawDistanceValue);
  return /*#__PURE__*/React.createElement(Container, _extends({
    className: classNames('k-ArrowContainer', className, "k-ArrowContainer--" + position, {
      'k-ArrowContainer--hasShadow': shadow,
      'k-ArrowContainer--hasBorder': borderWidth > 0,
      'k-ArrowContainer--reverseDistance': distanceIsReverse
    }),
    style: _extends({}, style, {
      '--arrowContainer-arrowDistance': arrowDistance,
      '--arrowContainer-arrowSize': internalSize,
      '--arrowContainer-borderColor': borderColor,
      '--arrowContainer-borderDistance': pxToRem(borderDistance),
      '--arrowContainer-borderRadius': internalBorderRadius,
      '--arrowContainer-borderWidth': internalBorderWidth,
      '--arrowContainer-color': color,
      '--arrowContainer-padding': internalPadding
    })
  }, props), children, /*#__PURE__*/React.createElement("span", {
    className: "k-ArrowContainer__arrow"
  }));
};
ArrowContainer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  position: PropTypes.string,
  distance: PropTypes.number,
  distanceAsPercentage: PropTypes.bool,
  distanceIsReverse: PropTypes.bool,
  centered: PropTypes.bool,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  shadow: PropTypes.bool,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderColor: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
ArrowContainer.defaultProps = {
  color: COLORS.background3,
  size: 10,
  position: 'left',
  distance: 20,
  distanceAsPercentage: false,
  distanceIsReverse: false,
  padding: 20,
  centered: false,
  shadow: false,
  borderRadius: 0,
  borderColor: COLORS.line1,
  borderWidth: 0
};