import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { modifierStyles } from './helpers/modifier-styles';
var StyledParagraph = styled.p.withConfig({
  displayName: "next__StyledParagraph",
  componentId: "sc-13obzh7-0"
})(["", ";&.k-Paragraph--noMargin{margin-top:0;margin-bottom:0;}&.k-Paragraph--normalLineHeight{line-height:normal;}&.k-Paragraph--italic{font-style:italic;}", ""], TYPOGRAPHY.fontStyles.light, function (_ref) {
  var modifier = _ref.modifier;
  return modifierStyles(modifier);
});
export var Paragraph = function Paragraph(_ref2) {
  var tag = _ref2.tag,
      modifier = _ref2.modifier,
      noMargin = _ref2.noMargin,
      normalLineHeight = _ref2.normalLineHeight,
      italic = _ref2.italic,
      className = _ref2.className,
      other = _objectWithoutProperties(_ref2, ["tag", "modifier", "noMargin", "normalLineHeight", "italic", "className"]);

  return /*#__PURE__*/React.createElement(StyledParagraph, _extends({
    as: tag,
    modifier: modifier,
    className: classNames('k-Paragraph', className, {
      'k-Paragraph--noMargin': noMargin,
      'k-Paragraph--normalLineHeight': normalLineHeight,
      'k-Paragraph--italic': italic
    })
  }, other));
};
Paragraph.defaultProps = {
  tag: 'p',
  modifier: 'primary',
  noMargin: true,
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
  noMargin: PropTypes.bool,

  /**
    Line-height normal (1.2).
  */
  normalLineHeight: PropTypes.bool,

  /**
    Use `font-style: italic`.
  */
  italic: PropTypes.bool
};