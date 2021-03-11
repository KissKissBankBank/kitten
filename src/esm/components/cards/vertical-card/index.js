import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Marger } from '../../../components/layout/marger';
import { Title } from '../../../components/typography/title';
import { Paragraph } from '../../../components/typography/paragraph';
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
var Img = styled.img.withConfig({
  displayName: "vertical-card__Img",
  componentId: "ys1jp9-0"
})(["width:100%;display:block;margin-bottom:", ";", ""], pxToRem(30), function (_ref) {
  var styles = _ref.styles;
  return styles && css(["", ""], styles);
});
var Card = styled.div.withConfig({
  displayName: "vertical-card__Card",
  componentId: "ys1jp9-1"
})(["color:", ";", ""], COLORS.font1, function (_ref2) {
  var textAlign = _ref2.textAlign;
  return textAlign && css(["text-align:", ";"], textAlign);
});
var StyledHorizontalStroke = styled(HorizontalStroke).withConfig({
  displayName: "vertical-card__StyledHorizontalStroke",
  componentId: "ys1jp9-2"
})(["margin-top:", ";margin-bottom:", ";width:", ";"], pxToRem(20), pxToRem(30), pxToRem(30));

var justifyContent = function justifyContent(align) {
  switch (align) {
    case 'left':
      return 'flex-start';

    case 'right':
      return 'flex-end';

    default:
      return 'center';
  }
};

var StrokePosition = styled.div.withConfig({
  displayName: "vertical-card__StrokePosition",
  componentId: "ys1jp9-3"
})(["", ""], function (_ref3) {
  var selfAlign = _ref3.selfAlign;
  return selfAlign && css(["display:flex;justify-content:", ";"], justifyContent(selfAlign));
});
export var VerticalCard = function VerticalCard(_ref4) {
  var imageProps = _ref4.imageProps,
      title = _ref4.title,
      titleTag = _ref4.titleTag,
      description = _ref4.description,
      descriptionTag = _ref4.descriptionTag,
      withTitleStroke = _ref4.withTitleStroke,
      textAlign = _ref4.textAlign,
      others = _objectWithoutProperties(_ref4, ["imageProps", "title", "titleTag", "description", "descriptionTag", "withTitleStroke", "textAlign"]);

  var style = imageProps.style,
      imgProps = _objectWithoutProperties(imageProps, ["style"]);

  return /*#__PURE__*/React.createElement(Card, _extends({
    textAlign: textAlign
  }, others), /*#__PURE__*/React.createElement(Img, _extends({}, imgProps, {
    styles: style
  })), /*#__PURE__*/React.createElement(Title, {
    modifier: "senary",
    tag: titleTag,
    margin: false
  }, title), withTitleStroke && /*#__PURE__*/React.createElement(StrokePosition, {
    selfAlign: textAlign
  }, /*#__PURE__*/React.createElement(StyledHorizontalStroke, null)), description && /*#__PURE__*/React.createElement(Marger, {
    top: withTitleStroke ? 0 : 1
  }, /*#__PURE__*/React.createElement(Paragraph, {
    modifier: "quaternary",
    tag: descriptionTag,
    margin: false
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
  description: PropTypes.string,
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