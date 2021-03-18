import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { Image } from './components/image';
import { Title } from './components/title';
import { Subtitle } from './components/subtitle';
import { Paragraph } from './components/paragraph';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
var ContainerStyle = styled.a.withConfig({
  displayName: "simple-card__ContainerStyle",
  componentId: "sc-1g5bppt-0"
})(["display:block;overflow:auto;text-decoration:inherit;color:inherit;line-height:1;position:relative;.k-SimpleCard__imageContainer{max-width:100%;position:relative;margin-bottom:", ";transition:opacity ease 600ms;z-index:1;background-color:var(--SimpleCard-image-container-background);overflow:hidden;}.k-SimpleCard__imageContainer--ratio{padding-top:calc(100% / (var(--SimpleCard-image-container-ratio)));& > .k-SimpleCard__image{position:absolute;top:0;height:auto;text-align:center;}}.k-SimpleCard__playerButton{width:var(--SimpleCard-player-button-size);height:var(--SimpleCard-player-button-size);background:", ";position:absolute;top:calc(50% - var(--SimpleCard-player-button-size) / 2);left:calc(50% - var(--SimpleCard-player-button-size) / 2);display:flex;align-items:center;justify-content:center;z-index:2;}.k-SimpleCard__image{width:100%;display:block;transition:transform 0.4s ease-in-out;}.k-SimpleCard__title{transition:color 0.4s ease-in-out;}&[href]:hover,&[href]:focus{.k-SimpleCard__image{transform:scale(1.07);}.k-SimpleCard__title{color:", ";}}&[href]:focus{outline:", " solid ", ";outline-offset:", ";}"], pxToRem(20), COLORS.font1, COLORS.primary1, COLORS.primary4, pxToRem(2), pxToRem(2));
export var SimpleCard = function SimpleCard(_ref) {
  var imageProps = _ref.imageProps,
      withPlayerButtonOnImage = _ref.withPlayerButtonOnImage,
      arrowColor = _ref.arrowColor,
      ariaLabel = _ref.ariaLabel,
      href = _ref.href,
      title = _ref.title,
      titleProps = _ref.titleProps,
      subtitle = _ref.subtitle,
      paragraph = _ref.paragraph,
      imageContainerRatio = _ref.imageContainerRatio,
      imageContainerBackground = _ref.imageContainerBackground,
      className = _ref.className,
      playerButtonSize = _ref.playerButtonSize,
      others = _objectWithoutProperties(_ref, ["imageProps", "withPlayerButtonOnImage", "arrowColor", "ariaLabel", "href", "title", "titleProps", "subtitle", "paragraph", "imageContainerRatio", "imageContainerBackground", "className", "playerButtonSize"]);

  return /*#__PURE__*/React.createElement(ContainerStyle, _extends({
    as: href ? 'a' : 'div'
  }, others, {
    href: href,
    className: classNames('k-SimpleCard', className)
  }), /*#__PURE__*/React.createElement(Image, {
    imageContainerRatio: imageContainerRatio,
    imageContainerBackground: imageContainerBackground,
    imageProps: imageProps,
    withPlayerButtonOnImage: withPlayerButtonOnImage,
    arrowColor: arrowColor,
    ariaLabel: ariaLabel,
    playerButtonSize: playerButtonSize
  }), title && /*#__PURE__*/React.createElement(Title, {
    title: title,
    titleProps: titleProps
  }), subtitle && /*#__PURE__*/React.createElement(Subtitle, {
    subtitle: subtitle
  }), paragraph && /*#__PURE__*/React.createElement(Paragraph, {
    paragraph: paragraph
  }));
};
SimpleCard.propTypes = {
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  withPlayerButtonOnImage: PropTypes.bool,
  ariaLabel: PropTypes.string,
  arrowColor: PropTypes.string,
  href: PropTypes.string,
  playerButtonSize: PropTypes.number,
  imageContainerBackground: PropTypes.string,
  imageContainerRatio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.node,
  titleProps: PropTypes.object,
  subtitle: PropTypes.node,
  paragraph: PropTypes.node
};
SimpleCard.defaultProps = {
  imageProps: {
    src: '',
    alt: ''
  },
  withPlayerButtonOnImage: false,
  arrowColor: 'background1',
  href: '#',
  imageContainerBackground: COLORS.line1,
  playerButtonSize: 70,
  imageContainerRatio: null,
  title: null,
  titleProps: {},
  subtitle: null,
  paragraph: null
};