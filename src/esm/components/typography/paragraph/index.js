import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../constants/typography-config';
import { modifierStyles } from './helpers/modifier-styles';
const modifierList = ['primary', 'secondary', 'tertiary', 'quaternary'];
const StyledParagraph = styled.p.withConfig({
  displayName: "paragraph__StyledParagraph",
  componentId: "sc-1qoa9gz-0"
})(["", ";&.k-Paragraph--noMargin{margin-top:0;margin-bottom:0;}&.k-Paragraph--normalLineHeight{line-height:normal;}&.k-Paragraph--italic{font-style:italic;}", ""], TYPOGRAPHY.fontStyles['400'], () => modifierList.map(modifier => css(["&.k-Paragraph--", "{", "}"], modifier, () => modifierStyles(modifier))));
export const Paragraph = _ref => {
  let {
    tag,
    modifier,
    noMargin,
    normalLineHeight,
    italic,
    className,
    ...other
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledParagraph, _extends({
    as: tag,
    modifier: modifier,
    className: classNames('k-Paragraph', className, "k-Paragraph--" + modifier, {
      'k-Paragraph--noMargin': noMargin,
      'k-Paragraph--normalLineHeight': normalLineHeight,
      'k-Paragraph--italic': italic
    })
  }, other));
};
Paragraph.defaultProps = {
  tag: 'p',
  modifier: 'primary',
  noMargin: false,
  normalLineHeight: false,
  italic: false
};
Paragraph.propTypes = {
  tag: PropTypes.string,
  modifier: PropTypes.oneOf(modifierList),
  noMargin: PropTypes.bool,
  normalLineHeight: PropTypes.bool,
  italic: PropTypes.bool
};