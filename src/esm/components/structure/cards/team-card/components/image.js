import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import COLORS from '../../../../../constants/colors-config';
import styled from 'styled-components';
const imageHeight = 378;
const imageWidth = 252;
const StyledTeamCardImage = styled(_ref => {
  let {
    styled,
    backgroundSource,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("div", props);
}).withConfig({
  displayName: "image__StyledTeamCardImage",
  componentId: "sc-hbs7qa-0"
})(["background-image:url(", ");background-color:", ";background-size:cover;background-position:center;background-repeat:no-repeat;width:100%;padding-bottom:", ";", ""], _ref2 => {
  let {
    backgroundSource
  } = _ref2;
  return backgroundSource;
}, COLORS.background1, imageHeight / imageWidth * 100 + '%', _ref3 => {
  let {
    style
  } = _ref3;
  return style;
});
export const TeamCardImage = _ref4 => {
  let {
    src,
    title,
    style,
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement(StyledTeamCardImage, _extends({}, props, {
    backgroundSource: src,
    title: title,
    className: classNames(className, 'k-u-margin-bottom-double'),
    style: style
  }));
};
TeamCardImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};