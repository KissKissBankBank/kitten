import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
const StyledClickableCard = styled.button.withConfig({
  displayName: "clickable-card__StyledClickableCard",
  componentId: "sc-1g013xo-0"
})(["box-sizing:border-box;display:flex;flex-direction:column;align-items:stretch;opacity:1;transition:opacity 0.15s ease;&.k-ClickableCard--fluid{width:100%;}", " .k-ClickableCard__image{display:block;margin-bottom:", ";position:relative;width:100%;padding-top:100%;overflow:hidden;transition:box-shadow 0.15s ease;& > *{position:absolute;top:0;left:0;height:100%;width:100%;object-position:center;object-fit:none;z-index:-1;", "}}.k-ClickableCard__image--contain > *{object-fit:contain;}.k-ClickableCard__image--cover > *{object-fit:cover;}.k-ClickableCard__image--circle{border-radius:var(--border-radius-rounded);}.k-ClickableCard__content{display:block;& *{transition:color 0.15s ease;}}&:hover,&:focus{", "}&[aria-checked='true']{", "}&:disabled{opacity:0.5;pointer-events:none;}"], _ref => {
  let {
    size
  } = _ref;
  return size && css(["width:", ";"], pxToRem(size));
}, pxToRem(20), _ref2 => {
  let {
    backgroundColor
  } = _ref2;
  return css(["background-color:", ";"], backgroundColor);
}, _ref3 => {
  let {
    borderColor
  } = _ref3;
  return css([".k-ClickableCard__image{box-shadow:inset 0 0 0 ", " ", ";}"], pxToRem(2), borderColor);
}, _ref4 => {
  let {
    borderColor
  } = _ref4;
  return css([".k-ClickableCard__image{box-shadow:inset 0 0 0 ", " ", ",inset 0 0 0 ", " ", ";}.k-ClickableCard__content *{color:", ";}"], pxToRem(2), borderColor, pxToRem(10), COLORS.background1, borderColor);
});
export const ClickableCard = _ref5 => {
  let {
    backgroundColor,
    borderColor,
    children,
    disabled,
    fluid,
    size,
    ...props
  } = _ref5;
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

const ClickableCardImage = _ref6 => {
  let {
    children,
    fit,
    shape,
    ...props
  } = _ref6;
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: classNames('k-ClickableCard__image', props.className, "k-ClickableCard__image--" + shape, "k-ClickableCard__image--" + fit)
  }), children);
};

const ClickableCardContent = _ref7 => {
  let {
    children,
    ...props
  } = _ref7;
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