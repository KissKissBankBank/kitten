import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Marger } from '../../../layout/marger';
import { Title } from '../../../typography/title';
import { Paragraph } from '../../../typography/paragraph/next';
import { HorizontalStroke } from '../../../typography/horizontal-stroke';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
const Img = styled.img.withConfig({
  displayName: "vertical-card__Img",
  componentId: "sc-1myvu7f-0"
})(["width:100%;display:block;margin-bottom:", ";", ""], pxToRem(30), _ref => {
  let {
    styles
  } = _ref;
  return styles && css(["", ""], styles);
});
const Card = styled.div.withConfig({
  displayName: "vertical-card__Card",
  componentId: "sc-1myvu7f-1"
})(["color:", ";", ""], COLORS.font1, _ref2 => {
  let {
    textAlign
  } = _ref2;
  return textAlign && css(["text-align:", ";"], textAlign);
});
const StyledHorizontalStroke = styled(HorizontalStroke).withConfig({
  displayName: "vertical-card__StyledHorizontalStroke",
  componentId: "sc-1myvu7f-2"
})(["margin-top:", ";margin-bottom:", ";width:", ";"], pxToRem(20), pxToRem(30), pxToRem(30));

const justifyContent = align => {
  switch (align) {
    case 'left':
      return 'flex-start';

    case 'right':
      return 'flex-end';

    default:
      return 'center';
  }
};

const StrokePosition = styled.div.withConfig({
  displayName: "vertical-card__StrokePosition",
  componentId: "sc-1myvu7f-3"
})(["", ""], _ref3 => {
  let {
    selfAlign
  } = _ref3;
  return selfAlign && css(["display:flex;justify-content:", ";"], justifyContent(selfAlign));
});
export const VerticalCard = _ref4 => {
  let {
    imageProps,
    title,
    titleTag,
    description,
    descriptionTag,
    withTitleStroke,
    textAlign,
    ...others
  } = _ref4;
  const {
    style,
    ...imgProps
  } = imageProps;
  return /*#__PURE__*/React.createElement(Card, _extends({
    textAlign: textAlign
  }, others), /*#__PURE__*/React.createElement(Img, _extends({}, imgProps, {
    styles: style
  })), /*#__PURE__*/React.createElement(Title, {
    modifier: "senary",
    tag: titleTag,
    noMargin: true
  }, title), withTitleStroke && /*#__PURE__*/React.createElement(StrokePosition, {
    selfAlign: textAlign
  }, /*#__PURE__*/React.createElement(StyledHorizontalStroke, null)), description && /*#__PURE__*/React.createElement(Marger, {
    top: withTitleStroke ? 0 : 1
  }, /*#__PURE__*/React.createElement(Paragraph, {
    modifier: "tertiary",
    tag: descriptionTag,
    noMargin: true
  }, description)));
};
VerticalCard.propTypes = {
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.object
  }).isRequired,
  title: PropTypes.string.isRequired,
  titleTag: PropTypes.string,
  description: PropTypes.node,
  descriptionTag: PropTypes.string,
  withTitleStroke: PropTypes.bool,
  textAlign: PropTypes.oneOf(['left', 'center', 'right'])
};
VerticalCard.defaultProps = {
  imageProps: {
    style: {}
  },
  titleTag: 'h1',
  description: '',
  descriptionTag: 'p',
  textAlign: 'center',
  withTitleStroke: false
};