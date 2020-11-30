import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TYPOGRAPHY from '../../../constants/typography-config';
import { titleModifierStyles } from '../common/title-modifier-styles';
import { strokeModifierStyles } from '../../layout/horizontal-stroke/common/stroke-modifier-styles';
import classNames from 'classnames';
var StyledTitleWithStroke = styled.div.withConfig({
  displayName: "title-with-stroke__StyledTitleWithStroke",
  componentId: "sc-10vl00i-0"
})(["&.k-TitleWithStroke--align-left{text-align:left;}&.k-TitleWithStroke--align-center{text-align:center;}&.k-TitleWithStroke--align-right{text-align:right;}.k-TitleWithStroke__title{margin-top:0;margin-bottom:0;", ";color:currentColor;}", " &.k-TitleWithStroke--italic .k-TitleWithStroke__title{font-style:italic;}.k-TitleWithStroke__stroke{display:inline-block;background-color:currentColor;border:none;}", " ", ""], TYPOGRAPHY.fontStyles.bold, titleModifierStyles('.k-TitleWithStroke__title'), strokeModifierStyles('.k-TitleWithStroke__stroke'), function (_ref) {
  var cssColor = _ref.cssColor;
  return cssColor && css(["color:", ";"], cssColor);
});
export var TitleWithStroke = function TitleWithStroke(_ref2) {
  var modifier = _ref2.modifier,
      tag = _ref2.tag,
      align = _ref2.align,
      italic = _ref2.italic,
      className = _ref2.className,
      children = _ref2.children,
      cssColor = _ref2.cssColor,
      other = _objectWithoutProperties(_ref2, ["modifier", "tag", "align", "italic", "className", "children", "cssColor"]);

  var TitleComponent = tag;
  return /*#__PURE__*/React.createElement(StyledTitleWithStroke, _extends({
    className: classNames(className, "k-TitleWithStroke--align-".concat(align), {
      'k-TitleWithStroke--italic': italic
    }),
    cssColor: cssColor
  }, other), /*#__PURE__*/React.createElement(TitleComponent, {
    className: "k-TitleWithStroke__title k-TitleWithStroke__title--".concat(modifier)
  }, children), /*#__PURE__*/React.createElement("span", {
    className: "k-TitleWithStroke__stroke k-TitleWithStroke__stroke--".concat(modifier)
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
  /**
    Specify Title element tag.
  */
  tag: PropTypes.string,

  /**
    TitleWithStroke has seven modifiers,
    with different sizes depending on the device (desktop, tablet and mobile).
  */
  modifier: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary']),

  /**
    Align title and stroke.
  */
  align: PropTypes.oneOf(['left', 'center', 'right']),

  /**
    Use `font-style: italic`.
  */
  italic: PropTypes.bool,

  /**
    Specify a color (use a CSS color string).
  */
  cssColor: PropTypes.string
};