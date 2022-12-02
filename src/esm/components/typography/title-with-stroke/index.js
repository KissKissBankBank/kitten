import _extends from "@babel/runtime/helpers/extends";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { strokeModifierStyles } from '../../typography/horizontal-stroke/common/stroke-modifier-styles';
import { titleModifiersNames, titleModifierStyles } from '../common/title-modifier-styles';
const StyledTitleWithStroke = styled.div.withConfig({
  displayName: "title-with-stroke__StyledTitleWithStroke",
  componentId: "sc-10vl00i-0"
})(["--TitleWithStroke-css-color:", ";color:var(--TitleWithStroke-css-color);&.k-TitleWithStroke--align-left{text-align:left;}&.k-TitleWithStroke--align-center{text-align:center;}&.k-TitleWithStroke--align-right{text-align:right;}.k-TitleWithStroke__title{margin-block:0;", ";color:currentColor;}", " &.k-TitleWithStroke--italic .k-TitleWithStroke__title{font-style:italic;}.k-TitleWithStroke__stroke{display:inline-block;background-color:currentColor;border:none;}", " &.k-TitleWithStroke--noMargin .k-TitleWithStroke__stroke.k-TitleWithStroke__stroke{margin-bottom:0;}"], COLORS.font1, TYPOGRAPHY.fontStyles['700'], titleModifierStyles('.k-TitleWithStroke__title'), strokeModifierStyles('.k-TitleWithStroke__stroke'));
export const TitleWithStroke = _ref => {
  let {
    modifier,
    tag,
    align,
    italic,
    className,
    children,
    cssColor,
    family,
    noMargin,
    ...other
  } = _ref;
  const TitleComponent = tag;
  return /*#__PURE__*/React.createElement(StyledTitleWithStroke, _extends({
    className: classNames('k-TitleWithStroke', className, "k-TitleWithStroke--" + modifier, "k-TitleWithStroke--align-" + align, {
      'k-TitleWithStroke--italic': italic,
      'k-TitleWithStroke--noMargin': noMargin
    }),
    style: {
      '--TitleWithStroke-css-color': cssColor
    }
  }, other), /*#__PURE__*/React.createElement(TitleComponent, {
    className: classNames('k-TitleWithStroke__title', "k-TitleWithStroke__title--" + modifier, {
      'k-u-font-family-antiqueolive': family === 'antiqueolive'
    })
  }, children), /*#__PURE__*/React.createElement("span", {
    className: classNames('k-TitleWithStroke__stroke', "k-TitleWithStroke__stroke--" + modifier)
  }));
};
TitleWithStroke.defaultProps = {
  tag: 'h1',
  family: 'generalsans',
  modifier: 'primary',
  align: 'left',
  italic: false,
  cssColor: null,
  noMargin: false
};
TitleWithStroke.propTypes = {
  tag: PropTypes.string,
  family: PropTypes.oneOf(['generalsans', 'antiqueolive']),
  modifier: PropTypes.oneOf(titleModifiersNames),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  italic: PropTypes.bool,
  cssColor: PropTypes.string,
  noMargin: PropTypes.bool
};