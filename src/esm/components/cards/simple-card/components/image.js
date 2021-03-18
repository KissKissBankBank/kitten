import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Text } from '../../../../components/typography/text';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
export var Image = function Image(_ref) {
  var imageProps = _ref.imageProps,
      withPlayerButtonOnImage = _ref.withPlayerButtonOnImage,
      arrowColor = _ref.arrowColor,
      ariaLabel = _ref.ariaLabel,
      imageContainerBackground = _ref.imageContainerBackground,
      imageContainerRatio = _ref.imageContainerRatio,
      className = _ref.className,
      playerButtonSize = _ref.playerButtonSize,
      style = _ref.style;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-SimpleCard__imageContainer', className, {
      'k-SimpleCard__imageContainer--ratio': imageContainerRatio
    }),
    style: _extends({}, style, {
      '--SimpleCard-image-container-background': imageContainerBackground,
      '--SimpleCard-image-container-ratio': imageContainerRatio
    })
  }, withPlayerButtonOnImage && /*#__PURE__*/React.createElement("div", {
    className: "k-SimpleCard__playerButton",
    style: {
      '--SimpleCard-player-button-size': pxToRem(playerButtonSize)
    }
  }, /*#__PURE__*/React.createElement(Text, {
    size: "default",
    weight: "regular",
    color: arrowColor,
    "aria-label": ariaLabel
  }, "\u25BA")), /*#__PURE__*/React.createElement("img", _extends({}, imageProps, {
    alt: imageProps.alt || '',
    className: classNames('k-SimpleCard__image', imageProps.className)
  })));
};
Image.propTypes = {
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
  imageContainerRatio: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Image.defaultProps = {
  imageProps: {
    src: '',
    alt: ''
  },
  withPlayerButtonOnImage: false,
  arrowColor: 'background1',
  href: '#',
  imageContainerBackground: COLORS.line1,
  playerButtonSize: 70
};