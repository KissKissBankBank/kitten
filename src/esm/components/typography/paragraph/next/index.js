import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { modifierStyles } from './helpers/modifier-styles';
var StyledParagraph = styled.p.withConfig({
  displayName: "next__StyledParagraph",
  componentId: "sc-13obzh7-0"
})(["", ";", " ", " ", " ", ""], TYPOGRAPHY.fontStyles.light, function (_ref) {
  var modifier = _ref.modifier;
  return modifierStyles(modifier);
}, function (_ref2) {
  var margin = _ref2.margin;
  return !margin && css(["margin-top:0;margin-bottom:0;"]);
}, function (_ref3) {
  var normalLineHeight = _ref3.normalLineHeight;
  return normalLineHeight && css(["line-height:normal;"]);
}, function (_ref4) {
  var italic = _ref4.italic;
  return italic && css(["font-style:italic;"]);
});
export var Paragraph = function Paragraph(_ref5) {
  var tag = _ref5.tag,
      modifier = _ref5.modifier,
      margin = _ref5.margin,
      normalLineHeight = _ref5.normalLineHeight,
      italic = _ref5.italic,
      other = _objectWithoutProperties(_ref5, ["tag", "modifier", "margin", "normalLineHeight", "italic"]);

  return /*#__PURE__*/React.createElement(StyledParagraph, _extends({
    as: tag,
    modifier: modifier,
    normalLineHeight: normalLineHeight,
    italic: italic,
    margin: margin
  }, other));
};
Paragraph.defaultProps = {
  tag: 'p',
  modifier: 'primary',
  margin: true,
  normalLineHeight: false,
  italic: false
};
Paragraph.propTypes = {
  tag: PropTypes.string,

  /**
    Title have seven modifiers. With different size depending on the device (`desktop`, `tablet` and `mobile`).
  */
  modifier: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),

  /**
    Remove default margins of `title` attribut.
  */
  margin: PropTypes.bool,

  /**
    Line-height normal (1.2).
  */
  normalLineHeight: PropTypes.bool,

  /**
    Use `font-style: italic`.
  */
  italic: PropTypes.bool
};