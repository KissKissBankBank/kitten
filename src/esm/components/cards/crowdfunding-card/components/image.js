import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../components/typography/text';
import { ButtonImage } from '../../../../components/buttons/button-image';
import COLORS from '../../../../constants/colors-config';
import classNames from 'classnames';
import { GifVideo } from '../../../../components/videos/gif-video';

var Image = function Image(_ref) {
  var imageContainerBackground = _ref.imageContainerBackground,
      _ref$imageProps = _ref.imageProps,
      backgroundColor = _ref$imageProps.backgroundColor,
      alt = _ref$imageProps.alt,
      otherImageProps = _objectWithoutProperties(_ref$imageProps, ["backgroundColor", "alt"]),
      videoProps = _ref.videoProps,
      videoSources = _ref.videoSources,
      avatarProps = _ref.avatarProps,
      ownerDescription = _ref.ownerDescription,
      ownerTitle = _ref.ownerTitle,
      loading = _ref.loading;

  return /*#__PURE__*/React.createElement("div", {
    className: "k-CrowdfundingCard__image"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-CrowdfundingCard__image__imageContainer",
    style: imageContainerBackground ? {
      backgroundColor: imageContainerBackground
    } : null
  }, !loading && videoSources.length == 0 && /*#__PURE__*/React.createElement("img", _extends({}, otherImageProps, {
    alt: alt || '',
    className: classNames('k-CrowdfundingCard__image__image', otherImageProps.className),
    style: backgroundColor ? _extends({
      backgroundColor: backgroundColor
    }, otherImageProps.style) : otherImageProps.style
  })), !loading && videoSources.length > 0 && /*#__PURE__*/React.createElement(GifVideo, _extends({
    poster: otherImageProps.src
  }, videoProps, {
    className: classNames('k-CrowdfundingCard__image__image', videoProps.className),
    style: backgroundColor ? _extends({
      backgroundColor: backgroundColor
    }, videoProps.style) : videoProps.style
  }), videoSources.map(function (sourceProps) {
    return /*#__PURE__*/React.createElement("source", _extends({
      key: "video_source_".concat(sourceProps.src)
    }, sourceProps));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "k-CrowdfundingCard__image__ownerContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-u-margin-top-single"
  }, /*#__PURE__*/React.createElement(ButtonImage, {
    className: "k-CrowdfundingCard__image__avatar",
    tag: "span",
    img: !loading ? avatarProps : null,
    withoutPointerEvents: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-CrowdfundingCard__image__owner k-u-margin-top-single"
  }, /*#__PURE__*/React.createElement(Text, {
    className: "k-CrowdfundingCard__image__title",
    tag: "div",
    size: "micro",
    weight: "regular",
    color: "font1"
  }, !loading && ownerTitle), /*#__PURE__*/React.createElement(Text, {
    className: "k-CrowdfundingCard__image__description",
    tag: "div",
    size: "micro",
    weight: "light",
    color: "font1"
  }, !loading && ownerDescription))));
};

Image.propTypes = {
  imageProps: PropTypes.shape({
    backgroundColor: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  avatarProps: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  ownerTitle: PropTypes.string,
  ownerDescription: PropTypes.string,
  loading: PropTypes.bool,
  imageContainerBackground: PropTypes.string,
  videoProps: PropTypes.object,
  videoSources: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    type: PropTypes.string
  }))
};
Image.defaultProps = {
  imageProps: {
    backgroundColor: COLORS.line2,
    src: 'https://placehold.it/160x100/caf4fe/caf4fe',
    alt: ''
  },
  avatarProps: {
    src: 'https://placehold.it/100x100/caf4fe/caf4fe',
    alt: ''
  },
  ownerTitle: '',
  ownerDescription: '',
  loading: false,
  imageContainerBackground: '',
  videoProps: {},
  videoSources: []
};
export default Image;