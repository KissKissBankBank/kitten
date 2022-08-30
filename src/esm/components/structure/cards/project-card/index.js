import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import deprecated from 'prop-types-extra/lib/deprecated';
import { StyledCard } from './styles';
import { Text } from '../../../typography/text';
import { Title } from '../../../typography/title';
import { Progress } from '../../../feedback/progress';
import { GifVideo } from '../../../embed/gif-video';
export const ProjectCard = _ref => {
  let {
    children,
    className,
    href,
    imageProps: {
      backgroundColor,
      alt,
      imageClassName,
      ...otherImageProps
    },
    status,
    sticker,
    videoSources,
    videoProps,
    stretch,
    loading,
    topLine,
    topLineAlign,
    overlayText,
    hoverableTitle,
    colorMode,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledCard, _extends({
    as: href ? 'a' : 'div',
    className: classNames('k-ProjectCard', className, "k-ProjectCard--" + status, "k-ProjectCard--colorMode-" + colorMode, {
      'k-ProjectCard--isStretched': stretch,
      'k-ProjectCard--isLoading': loading,
      'k-ProjectCard--hoverableTitle': hoverableTitle
    }),
    href: href
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-ProjectCard__image"
  }, videoSources.length == 0 && /*#__PURE__*/React.createElement("img", _extends({}, otherImageProps, {
    alt: alt || '',
    className: classNames('k-ProjectCard__image__image', imageClassName)
  })), videoSources.length > 0 && /*#__PURE__*/React.createElement(GifVideo, _extends({
    poster: otherImageProps.src
  }, videoProps, {
    className: classNames('k-ProjectCard__image__image', videoProps.className)
  }), videoSources.map(sourceProps => /*#__PURE__*/React.createElement("source", _extends({
    key: "video_source_" + sourceProps.src
  }, sourceProps)))), !!overlayText && /*#__PURE__*/React.createElement("div", {
    className: "k-ProjectCard__image__overlay"
  }, overlayText)), topLine && /*#__PURE__*/React.createElement("div", {
    className: classNames('k-ProjectCard__topLine', "k-ProjectCard__topLine--" + topLineAlign)
  }, topLine), /*#__PURE__*/React.createElement("div", {
    className: "k-ProjectCard__content"
  }, sticker && /*#__PURE__*/React.createElement("div", {
    className: "k-ProjectCard__sticker k-u-ellipsis"
  }, sticker), children));
};
ProjectCard.defaultProps = {
  status: 'normal',
  imageProps: {
    src: '',
    alt: ''
  },
  videoProps: {},
  videoSources: [],
  stretch: false,
  loading: false,
  topLine: null,
  topLineAlign: 'right',
  overlayText: '',
  hoverableTitle: false,
  colorMode: 'light'
};
ProjectCard.propTypes = {
  sticker: deprecated(PropTypes.node, 'Please use `ProjectCard.Sticker` instead.'),
  status: PropTypes.oneOf(['normal', 'danger', 'warning', 'success', 'disabled']),
  imageProps: PropTypes.object,
  videoProps: PropTypes.object,
  videoSources: PropTypes.array,
  stretch: PropTypes.bool,
  loading: PropTypes.bool,
  topLine: PropTypes.node,
  topLineAlign: PropTypes.oneOf(['left', 'center', 'right']),
  overlayText: PropTypes.node,
  hoverableTitle: PropTypes.bool,
  colorMode: PropTypes.oneOf(['light', 'dark'])
};

ProjectCard.Title = _ref2 => {
  let {
    className,
    style,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement(Title, _extends({
    modifier: "septenary",
    noMargin: true,
    className: classNames('k-ProjectCard__title', 'k-u-clamp-2', className)
  }, props));
};

ProjectCard.Line = _ref3 => {
  let {
    className,
    lastLine,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProjectCard__line', className, {
      'k-ProjectCard__line--lastLine': lastLine
    })
  }, props));
};

ProjectCard.ItemsLine = _ref4 => {
  let {
    className,
    noMargin = false,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProjectCard__itemsLine', className, {
      'k-ProjectCard__itemsLine--noMargin': noMargin
    })
  }, props));
};

ProjectCard.Item = _ref5 => {
  let {
    className,
    ...props
  } = _ref5;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProjectCard__item', className)
  }, props));
};

ProjectCard.Sticker = _ref6 => {
  let {
    className,
    ...props
  } = _ref6;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProjectCard__sticker k-u-ellipsis', className)
  }, props));
};

ProjectCard.Avatar = _ref7 => {
  let {
    className,
    imageProps,
    ...props
  } = _ref7;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProjectCard__avatar', className)
  }, props), /*#__PURE__*/React.createElement("img", _extends({
    alt: ""
  }, imageProps)));
};

ProjectCard.Progress = _ref8 => {
  let {
    className,
    value,
    ...props
  } = _ref8;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-ProjectCard__progress', className)
  }, /*#__PURE__*/React.createElement(Progress, _extends({
    value: value
  }, props)), /*#__PURE__*/React.createElement(Text, {
    weight: "700",
    size: "small",
    lineHeight: "1",
    className: "k-u-hidden@xs-down k-ProjectCard__progress__text"
  }, value, "\xA0%"));
};

ProjectCard.Progress.defaultProps = {
  value: 0
};
ProjectCard.Progress.propTypes = {
  value: PropTypes.number
};