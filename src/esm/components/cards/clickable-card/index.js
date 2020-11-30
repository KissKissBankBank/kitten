import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledClickableCard = styled.button.withConfig({
  displayName: "clickable-card__StyledClickableCard",
  componentId: "f2yk28-0"
})(["box-sizing:border-box;display:flex;flex-direction:column;align-items:stretch;opacity:1;transition:opacity 0.15s ease;&.k-ClickableCard--fluid{width:100%;}", " .k-ClickableCard__image{display:block;margin-bottom:", ";position:relative;width:100%;padding-top:100%;overflow:hidden;transition:box-shadow 0.15s ease;& > *{position:absolute;top:0;left:0;height:100%;width:100%;object-position:center;object-fit:none;z-index:-1;", "}}.k-ClickableCard__image--contain > *{object-fit:contain;}.k-ClickableCard__image--cover > *{object-fit:cover;}.k-ClickableCard__image--circle{border-radius:50%;}.k-ClickableCard__content{display:block;& *{transition:color 0.15s ease;}}&:hover,&:focus{", "}&[aria-checked='true']{", "}&:disabled{opacity:0.5;pointer-events:none;}"], function (_ref) {
  var size = _ref.size;
  return size && css(["width:", ";"], pxToRem(size));
}, pxToRem(20), function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return css(["background-color:", ";"], backgroundColor);
}, function (_ref3) {
  var borderColor = _ref3.borderColor;
  return css([".k-ClickableCard__image{box-shadow:inset 0 0 0 ", " ", ";}"], pxToRem(2), borderColor);
}, function (_ref4) {
  var borderColor = _ref4.borderColor;
  return css([".k-ClickableCard__image{box-shadow:inset 0 0 0 ", " ", ",inset 0 0 0 ", " ", ";}.k-ClickableCard__content *{color:", ";}"], pxToRem(2), borderColor, pxToRem(10), COLORS.background1, borderColor);
});
export var ClickableCard = function ClickableCard(_ref5) {
  var backgroundColor = _ref5.backgroundColor,
      borderColor = _ref5.borderColor,
      children = _ref5.children,
      disabled = _ref5.disabled,
      fluid = _ref5.fluid,
      size = _ref5.size,
      props = _objectWithoutProperties(_ref5, ["backgroundColor", "borderColor", "children", "disabled", "fluid", "size"]);

  return /*#__PURE__*/React.createElement(StyledClickableCard, _extends({}, props, {
    className: classNames('k-ClickableCard', 'k-u-reset-button', props.className, {
      'k-ClickableCard--fluid': fluid
    }),
    borderColor: borderColor,
    backgroundColor: backgroundColor,
    size: size,
    disabled: disabled
  }), children);
};

var ClickableCardImage = function ClickableCardImage(_ref6) {
  var children = _ref6.children,
      fit = _ref6.fit,
      shape = _ref6.shape,
      props = _objectWithoutProperties(_ref6, ["children", "fit", "shape"]);

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: classNames('k-ClickableCard__image', props.className, "k-ClickableCard__image--".concat(shape), "k-ClickableCard__image--".concat(fit))
  }), children);
};

var ClickableCardContent = function ClickableCardContent(_ref7) {
  var children = _ref7.children,
      props = _objectWithoutProperties(_ref7, ["children"]);

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: classNames('k-ClickableCard__content', props.className)
  }), children);
};

ClickableCard.Image = ClickableCardImage;
ClickableCard.Content = ClickableCardContent;
ClickableCard.defaultProps = {
  backgroundColor: COLORS.primary6,
  borderColor: COLORS.primary1,
  disabled: false,
  fluid: false
};
ClickableCard.propTypes = {
  /**
    Image background color (as a CSS color string)
  */
  backgroundColor: PropTypes.string,

  /**
    Image border and text hover color (as a CSS color string)
  */
  borderColor: PropTypes.string,

  /**
    Is card disabled?
  */
  disabled: PropTypes.bool,

  /**
    Card width, in pixels, without unit
  */
  size: PropTypes.number
};
ClickableCardImage.defaultProps = {
  fit: 'cover',
  shape: 'square'
};
ClickableCardImage.propTypes = {
  /**
    Image fit in the zone
  */
  fit: PropTypes.oneOf(['cover', 'contain', 'none']),

  /**
    Shape of the image zones
  */
  shape: PropTypes.oneOf(['circle', 'square'])
};