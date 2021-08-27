import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["tag", "modifier", "noMargin", "normalLineHeight", "italic", "className"];
import React from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { modifierStyles } from './helpers/modifier-styles';
var modifierList = ['primary', 'secondary', 'tertiary', 'quaternary'];
var StyledParagraph = styled.p.withConfig({
  displayName: "paragraph__StyledParagraph",
  componentId: "iosi48-0"
})(["", ";&.k-Paragraph--noMargin{margin-top:0;margin-bottom:0;}&.k-Paragraph--normalLineHeight{line-height:normal;}&.k-Paragraph--italic{font-style:italic;}", ""], TYPOGRAPHY.fontStyles.light, function () {
  return modifierList.map(function (modifier) {
    return css(["&.k-Paragraph--", "{", "}"], modifier, function () {
      return modifierStyles(modifier);
    });
  });
});
export var Paragraph = function Paragraph(_ref) {
  var tag = _ref.tag,
      modifier = _ref.modifier,
      noMargin = _ref.noMargin,
      normalLineHeight = _ref.normalLineHeight,
      italic = _ref.italic,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledParagraph, _extends({
    as: tag,
    modifier: modifier,
    className: classNames('k-Paragraph', className, "k-Paragraph--".concat(modifier), {
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

  /**
    Title have seven modifiers. With different size depending on the device (`desktop`, `tablet` and `mobile`).
  */
  modifier: PropTypes.oneOf(modifierList),

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