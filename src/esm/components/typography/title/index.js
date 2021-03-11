import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TYPOGRAPHY from '../../../constants/typography-config';
import { modifierStyles } from './helpers/modifier-styles';
var StyledTitle = styled.span.withConfig({
  displayName: "title__StyledTitle",
  componentId: "sc-46lshq-0"
})(["", ";", " ", " ", " ", ""], TYPOGRAPHY.fontStyles.bold, function (_ref) {
  var modifier = _ref.modifier;
  return modifierStyles(modifier);
}, function (_ref2) {
  var margin = _ref2.margin;
  return !margin && css(["margin-top:0;margin-bottom:0;"]);
}, function (_ref3) {
  var italic = _ref3.italic;
  return italic && css(["font-style:italic;"]);
}, function (_ref4) {
  var cssColor = _ref4.cssColor;
  return cssColor && css(["color:", ";"], cssColor);
});
export var Title = function Title(_ref5) {
  var modifier = _ref5.modifier,
      tag = _ref5.tag,
      margin = _ref5.margin,
      italic = _ref5.italic,
      cssColor = _ref5.cssColor,
      other = _objectWithoutProperties(_ref5, ["modifier", "tag", "margin", "italic", "cssColor"]);

  return /*#__PURE__*/React.createElement(StyledTitle, _extends({
    as: tag
  }, other, {
    modifier: modifier,
    margin: margin,
    italic: italic,
    cssColor: cssColor
  }));
};
Title.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  margin: true,
  italic: false,
  cssColor: null
};
Title.propTypes = {
  tag: PropTypes.string,

  /**
    Title have seven modifiers. With different size depending on the device (desktop, tablet and mobile)
  */
  modifier: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary']),

  /**
    Remove default margins of `title` attribut.
  */
  margin: PropTypes.bool,

  /**
    Specify a color (use a CSS color string).
  */
  cssColor: PropTypes.string,

  /**
    Use `font-style: italic`.
  */
  italic: PropTypes.bool
};