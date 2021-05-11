import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
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
})(["--Title-css-color:", ";", ";color:", ";color:var(--Title-css-color);&.k-Title--noMargin{margin-top:0;margin-bottom:0;}&.k-Title--italic{font-style:italic;}", ""], COLORS.font1, TYPOGRAPHY.fontStyles.bold, COLORS.font1, titleModifierStyles('&.k-Title'));
export var Title = function Title(_ref) {
  var modifier = _ref.modifier,
      tag = _ref.tag,
      noMargin = _ref.noMargin,
      italic = _ref.italic,
      cssColor = _ref.cssColor,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["modifier", "tag", "noMargin", "italic", "cssColor", "className"]);

  return /*#__PURE__*/React.createElement(StyledTitle, _extends({
    as: tag,
    modifier: modifier,
    className: classNames('k-Title', className, "k-Title--".concat(modifier), {
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

  /**
    Title have seven modifiers. With different size depending on the device (desktop, tablet and mobile)
  */
  modifier: PropTypes.oneOf(titleModifiersNames),

  /**
    Remove default margins of `title` attribut.
  */
  noMargin: PropTypes.bool,

  /**
    Specify a color (use a CSS color string).
  */
  cssColor: PropTypes.string,

  /**
    Use `font-style: italic`.
  */
  italic: PropTypes.bool
};