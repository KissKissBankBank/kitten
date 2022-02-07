import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["modifier", "tag", "noMargin", "italic", "cssColor", "className"];
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { titleModifierStyles, titleModifiersNames } from '../common/title-modifier-styles';
var StyledTitle = styled.span.withConfig({
  displayName: "title__StyledTitle",
  componentId: "sc-46lshq-0"
})(["--Title-css-color:", ";", ";color:var(--Title-css-color);&.k-Title--noMargin{margin-top:0;margin-bottom:0;}&.k-Title--italic{font-style:italic;}", ""], COLORS.font1, TYPOGRAPHY.fontStyles.bold, titleModifierStyles('&.k-Title'));
export var Title = function Title(_ref) {
  var modifier = _ref.modifier,
      tag = _ref.tag,
      noMargin = _ref.noMargin,
      italic = _ref.italic,
      cssColor = _ref.cssColor,
      className = _ref.className,
      other = _objectWithoutPropertiesLoose(_ref, _excluded);

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