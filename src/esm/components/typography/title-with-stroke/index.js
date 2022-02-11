import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["modifier", "tag", "align", "italic", "className", "children", "cssColor"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import TYPOGRAPHY from '../../../constants/typography-config';
import COLORS from '../../../constants/colors-config';
import { titleModifierStyles, titleModifiersNames } from '../common/title-modifier-styles';
import { strokeModifierStyles } from '../../typography/horizontal-stroke/common/stroke-modifier-styles';
var StyledTitleWithStroke = styled.div.withConfig({
  displayName: "title-with-stroke__StyledTitleWithStroke",
  componentId: "sc-10vl00i-0"
})(["--TitleWithStroke-css-color:", ";color:var(--TitleWithStroke-css-color);&.k-TitleWithStroke--align-left{text-align:left;}&.k-TitleWithStroke--align-center{text-align:center;}&.k-TitleWithStroke--align-right{text-align:right;}.k-TitleWithStroke__title{margin-top:0;margin-bottom:0;", ";color:currentColor;}", " &.k-TitleWithStroke--italic .k-TitleWithStroke__title{font-style:italic;}.k-TitleWithStroke__stroke{display:inline-block;background-color:currentColor;border:none;}", ""], COLORS.font1, TYPOGRAPHY.fontStyles.bold, titleModifierStyles('.k-TitleWithStroke__title'), strokeModifierStyles('.k-TitleWithStroke__stroke'));
export var TitleWithStroke = function TitleWithStroke(_ref) {
  var modifier = _ref.modifier,
      tag = _ref.tag,
      align = _ref.align,
      italic = _ref.italic,
      className = _ref.className,
      children = _ref.children,
      cssColor = _ref.cssColor,
      other = _objectWithoutPropertiesLoose(_ref, _excluded);

  var TitleComponent = tag;
  return /*#__PURE__*/React.createElement(StyledTitleWithStroke, _extends({
    className: classNames('k-TitleWithStroke', className, "k-TitleWithStroke--" + modifier, "k-TitleWithStroke--align-" + align, {
      'k-TitleWithStroke--italic': italic
    }),
    style: {
      '--TitleWithStroke-css-color': cssColor
    }
  }, other), /*#__PURE__*/React.createElement(TitleComponent, {
    className: classNames('k-TitleWithStroke__title', "k-TitleWithStroke__title--" + modifier)
  }, children), /*#__PURE__*/React.createElement("span", {
    className: classNames('k-TitleWithStroke__stroke', "k-TitleWithStroke__stroke--" + modifier)
  }));
};
TitleWithStroke.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  align: 'left',
  italic: false,
  cssColor: null
};
TitleWithStroke.propTypes = {
  tag: PropTypes.string,
  modifier: PropTypes.oneOf(titleModifiersNames),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  italic: PropTypes.bool,
  cssColor: PropTypes.string
};