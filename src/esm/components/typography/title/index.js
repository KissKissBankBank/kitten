import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { titleModifierStyles, titleModifiersNames } from '../common/title-modifier-styles';
const StyledTitle = styled.span.withConfig({
  displayName: "title__StyledTitle",
  componentId: "sc-46lshq-0"
})(["--Title-css-color:", ";", ";color:var(--Title-css-color);&.k-Title--noMargin{margin-top:0;margin-bottom:0;}&.k-Title--italic{font-style:italic;}", ""], COLORS.font1, TYPOGRAPHY.fontStyles['700'], titleModifierStyles('&.k-Title'));
export const Title = _ref => {
  let {
    modifier,
    tag,
    noMargin,
    italic,
    cssColor,
    className,
    ...other
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledTitle, _extends({
    as: tag,
    modifier: modifier,
    className: classNames('k-Title', className, "k-Title--" + modifier, {
      'k-Title--noMargin': noMargin,
      'k-Title--italic': italic
    }),
    style: {
      '--Title-css-color': cssColor
    }
  }, other));
};
Title.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  noMargin: false,
  italic: false,
  cssColor: null
};
Title.propTypes = {
  tag: PropTypes.string,
  modifier: PropTypes.oneOf(titleModifiersNames),
  noMargin: PropTypes.bool,
  cssColor: PropTypes.string,
  italic: PropTypes.bool
};