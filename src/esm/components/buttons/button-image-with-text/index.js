import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ButtonImage } from '../../../components/buttons/button-image';
import { Text } from '../../../components/typography/text';
import { pxToRem } from '../../../helpers/utils/typography';
var Container = styled.div.withConfig({
  displayName: "button-image-with-text__Container",
  componentId: "sc-18377kn-0"
})(["display:flex;align-items:center;flex:1;"]);
var TextContainer = styled.div.withConfig({
  displayName: "button-image-with-text__TextContainer",
  componentId: "sc-18377kn-1"
})(["margin-left:", ";line-height:1.2;", ""], pxToRem(10), function (_ref) {
  var largeGutter = _ref.largeGutter;
  return largeGutter && css(["margin-left:", ";"], pxToRem(15));
});
var StyledText = styled(Text).withConfig({
  displayName: "button-image-with-text__StyledText",
  componentId: "sc-18377kn-2"
})(["display:flex;align-items:center;flex:1;", ""], function (_ref2) {
  var tag = _ref2.tag;
  return tag === 'p' && css(["margin:0;"]);
});
export var ButtonImageWithText = function ButtonImageWithText(_ref3) {
  var title = _ref3.title,
      description = _ref3.description,
      micro = _ref3.micro,
      tag = _ref3.tag,
      titleRegular = _ref3.titleRegular,
      textRegular = _ref3.textRegular,
      largeGutter = _ref3.largeGutter,
      avatarProps = _ref3.avatarProps;
  var size = micro ? 'micro' : 'tiny';
  var titleWeight = titleRegular ? 'regular' : 'light';
  var textWeight = textRegular ? 'regular' : 'light';
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(ButtonImage, {
    tag: "span",
    img: avatarProps,
    withoutPointerEvents: true
  }), /*#__PURE__*/React.createElement(TextContainer, {
    largeGutter: largeGutter
  }, /*#__PURE__*/React.createElement(StyledText, {
    tag: tag,
    size: size,
    weight: titleWeight
  }, title), /*#__PURE__*/React.createElement(StyledText, {
    tag: tag,
    size: size,
    weight: textWeight
  }, description)));
};
ButtonImageWithText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  micro: PropTypes.bool,
  tag: PropTypes.string,
  titleRegular: PropTypes.bool,
  textRegular: PropTypes.bool,
  largeGutter: PropTypes.bool,
  avatarProps: PropTypes.object
};
ButtonImageWithText.defaultProps = {
  micro: false,
  tag: 'p',
  titleRegular: false,
  textRegular: false,
  largeGutter: false,
  avatarProps: {
    src: '',
    alt: ''
  }
};