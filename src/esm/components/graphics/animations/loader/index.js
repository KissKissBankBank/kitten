import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
const BULLET_SIZE = 5;
const StyledLoader = styled.div.withConfig({
  displayName: "loader__StyledLoader",
  componentId: "sc-kkatuq-0"
})(["display:flex;height:", ";line-height:1;gap:", ";.k-Loader__circle{width:", ";height:", ";border-radius:var(--border-radius-rounded);animation:k-Loader-animation-scale 1.75s 0s infinite cubic-bezier(0.2,0.68,0.18,1.08);animation-fill-mode:both;&:nth-child(1){animation-delay:calc(-1.75s / 3);}&:nth-child(2){animation-delay:calc(-1.75s / 3 / 2);}&:nth-child(3){animation-delay:0s;}}@keyframes k-Loader-animation-scale{0%{transform:scale(1);}45%{transform:scale(0.1);fill:transparent;}80%{transform:scale(1);}}"], pxToRem(BULLET_SIZE), pxToRem(2), pxToRem(BULLET_SIZE), pxToRem(BULLET_SIZE));

const Circle = _ref => {
  let {
    color,
    ...others
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 " + BULLET_SIZE + " " + BULLET_SIZE,
    fill: color
  }, others), /*#__PURE__*/React.createElement("circle", {
    cx: BULLET_SIZE / 2,
    cy: BULLET_SIZE / 2,
    r: BULLET_SIZE
  }));
};

export const Loader = _ref2 => {
  let {
    tag,
    className,
    color,
    ...others
  } = _ref2;
  return /*#__PURE__*/React.createElement(StyledLoader, _extends({
    as: tag,
    className: classNames('k-Loader', className)
  }, others), /*#__PURE__*/React.createElement(Circle, {
    className: "k-Loader__circle",
    color: color
  }), /*#__PURE__*/React.createElement(Circle, {
    className: "k-Loader__circle",
    color: color
  }), /*#__PURE__*/React.createElement(Circle, {
    className: "k-Loader__circle",
    color: color
  }));
};
Loader.defaultProps = {
  tag: 'div',
  color: COLORS.font1
};
Loader.propTypes = {
  tag: PropTypes.string,
  color: PropTypes.string
};