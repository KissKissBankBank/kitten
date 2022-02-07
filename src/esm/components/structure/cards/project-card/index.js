import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["backgroundColor", "alt", "imageClassName"],
    _excluded2 = ["children", "className", "href", "imageProps", "status", "sticker", "videoSources", "videoProps", "stretch", "loading"],
    _excluded3 = ["children", "className"],
    _excluded4 = ["className"],
    _excluded5 = ["className"],
    _excluded6 = ["className"],
    _excluded7 = ["className"],
    _excluded8 = ["className", "value"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import deprecated from 'prop-types-extra/lib/deprecated';
import Truncate from 'react-truncate';
import { StyledCard } from './styles';
import { Text } from '../../../typography/text';
import { Title } from '../../../typography/title';
import { Progress } from '../../../feedback/progress';
import { GifVideo } from '../../../embed/gif-video';
export var ProjectCard = function ProjectCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      _ref$imageProps = _ref.imageProps,
      backgroundColor = _ref$imageProps.backgroundColor,
      alt = _ref$imageProps.alt,
      imageClassName = _ref$imageProps.imageClassName,
      otherImageProps = _objectWithoutPropertiesLoose(_ref$imageProps, _excluded),
      status = _ref.status,
      sticker = _ref.sticker,
      videoSources = _ref.videoSources,
      videoProps = _ref.videoProps,
      stretch = _ref.stretch,
      loading = _ref.loading,
      props = _objectWithoutPropertiesLoose(_ref, _excluded2);

  return /*#__PURE__*/React.createElement(StyledCard, _extends({
    as: href ? 'a' : 'div',
    className: classNames('k-ProjectCard', className, "k-ProjectCard--" + status, {
      'k-ProjectCard--isStretched': stretch,
      'k-ProjectCard--isLoading': loading
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
  }), videoSources.map(function (sourceProps) {
    return /*#__PURE__*/React.createElement("source", _extends({
      key: "video_source_" + sourceProps.src
    }, sourceProps));
  }))), /*#__PURE__*/React.createElement("div", {
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
  loading: false
};
ProjectCard.propTypes = {
  sticker: deprecated(PropTypes.node, 'Please use `ProjectCard.Sticker` instead.'),
  status: PropTypes.oneOf(['normal', 'danger', 'warning', 'success', 'disabled']),
  imageProps: PropTypes.object,
  videoProps: PropTypes.object,
  videoSources: PropTypes.array,
  stretch: PropTypes.bool,
  loading: PropTypes.bool
};

ProjectCard.Title = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded3);

  return /*#__PURE__*/React.createElement(Title, _extends({
    modifier: "septenary",
    noMargin: true,
    className: classNames('k-ProjectCard__title', className)
  }, props), /*#__PURE__*/React.createElement(Truncate, {
    lines: 2
  }, children));
};

ProjectCard.Line = function (_ref3) {
  var className = _ref3.className,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded4);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProjectCard__line', className)
  }, props));
};

ProjectCard.ItemsLine = function (_ref4) {
  var className = _ref4.className,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded5);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProjectCard__itemsLine', className)
  }, props));
};

ProjectCard.Item = function (_ref5) {
  var className = _ref5.className,
      props = _objectWithoutPropertiesLoose(_ref5, _excluded6);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProjectCard__item', className)
  }, props));
};

ProjectCard.Sticker = function (_ref6) {
  var className = _ref6.className,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded7);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProjectCard__sticker k-u-ellipsis', className)
  }, props));
};

ProjectCard.Progress = function (_ref7) {
  var className = _ref7.className,
      value = _ref7.value,
      props = _objectWithoutPropertiesLoose(_ref7, _excluded8);

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-ProjectCard__progress', className)
  }, /*#__PURE__*/React.createElement(Progress, _extends({
    value: value
  }, props)), /*#__PURE__*/React.createElement(Text, {
    weight: "bold",
    size: "tiny",
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