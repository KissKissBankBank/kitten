"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ProjectCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _styles = require("./styles");

var _text = require("../../../typography/text");

var _title = require("../../../typography/title");

var _progress = require("../../../feedback/progress");

var _gifVideo = require("../../../embed/gif-video");

const ProjectCard = _ref => {
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
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledCard, (0, _extends2.default)({
    as: href ? 'a' : 'div',
    className: (0, _classnames.default)('k-ProjectCard', className, "k-ProjectCard--" + status, {
      'k-ProjectCard--isStretched': stretch,
      'k-ProjectCard--isLoading': loading,
      'k-ProjectCard--hoverableTitle': hoverableTitle
    }),
    href: href
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ProjectCard__image"
  }, videoSources.length == 0 && /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({}, otherImageProps, {
    alt: alt || '',
    className: (0, _classnames.default)('k-ProjectCard__image__image', imageClassName)
  })), videoSources.length > 0 && /*#__PURE__*/_react.default.createElement(_gifVideo.GifVideo, (0, _extends2.default)({
    poster: otherImageProps.src
  }, videoProps, {
    className: (0, _classnames.default)('k-ProjectCard__image__image', videoProps.className)
  }), videoSources.map(sourceProps => /*#__PURE__*/_react.default.createElement("source", (0, _extends2.default)({
    key: "video_source_" + sourceProps.src
  }, sourceProps)))), !!overlayText && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ProjectCard__image__overlay"
  }, overlayText)), topLine && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-ProjectCard__topLine', "k-ProjectCard__topLine--" + topLineAlign)
  }, topLine), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ProjectCard__content"
  }, sticker && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ProjectCard__sticker k-u-ellipsis"
  }, sticker), children));
};

exports.ProjectCard = ProjectCard;
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
  hoverableTitle: false
};
ProjectCard.propTypes = {
  sticker: (0, _deprecated.default)(_propTypes.default.node, 'Please use `ProjectCard.Sticker` instead.'),
  status: _propTypes.default.oneOf(['normal', 'danger', 'warning', 'success', 'disabled']),
  imageProps: _propTypes.default.object,
  videoProps: _propTypes.default.object,
  videoSources: _propTypes.default.array,
  stretch: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  topLine: _propTypes.default.node,
  topLineAlign: _propTypes.default.oneOf(['left', 'center', 'right']),
  overlayText: _propTypes.default.node,
  hoverableTitle: _propTypes.default.bool
};

ProjectCard.Title = _ref2 => {
  let {
    className,
    style,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    modifier: "septenary",
    noMargin: true,
    className: (0, _classnames.default)('k-ProjectCard__title', 'k-u-clamp-2', className)
  }, props));
};

ProjectCard.Line = _ref3 => {
  let {
    className,
    lastLine,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProjectCard__line', className, {
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
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProjectCard__itemsLine', className, {
      'k-ProjectCard__itemsLine--noMargin': noMargin
    })
  }, props));
};

ProjectCard.Item = _ref5 => {
  let {
    className,
    ...props
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProjectCard__item', className)
  }, props));
};

ProjectCard.Sticker = _ref6 => {
  let {
    className,
    ...props
  } = _ref6;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProjectCard__sticker k-u-ellipsis', className)
  }, props));
};

ProjectCard.Avatar = _ref7 => {
  let {
    className,
    imageProps,
    ...props
  } = _ref7;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProjectCard__avatar', className)
  }, props), /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    alt: ""
  }, imageProps)));
};

ProjectCard.Progress = _ref8 => {
  let {
    className,
    value,
    ...props
  } = _ref8;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-ProjectCard__progress', className)
  }, /*#__PURE__*/_react.default.createElement(_progress.Progress, (0, _extends2.default)({
    value: value
  }, props)), /*#__PURE__*/_react.default.createElement(_text.Text, {
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
  value: _propTypes.default.number
};