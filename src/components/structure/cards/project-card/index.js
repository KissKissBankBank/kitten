"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ProjectCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _reactTruncate = _interopRequireDefault(require("react-truncate"));

var _styles = require("./styles");

var _text = require("../../../typography/text");

var _title = require("../../../typography/title");

var _progress = require("../../../feedback/progress");

var _gifVideo = require("../../../embed/gif-video");

var _excluded = ["backgroundColor", "alt", "imageClassName"],
    _excluded2 = ["children", "className", "href", "imageProps", "status", "sticker", "videoSources", "videoProps", "stretch", "loading", "topLine", "topLineAlign"],
    _excluded3 = ["children", "className"],
    _excluded4 = ["className", "lastLine"],
    _excluded5 = ["className", "noMargin"],
    _excluded6 = ["className"],
    _excluded7 = ["className"],
    _excluded8 = ["className", "imageProps"],
    _excluded9 = ["className", "value"];

var ProjectCard = function ProjectCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      _ref$imageProps = _ref.imageProps,
      backgroundColor = _ref$imageProps.backgroundColor,
      alt = _ref$imageProps.alt,
      imageClassName = _ref$imageProps.imageClassName,
      otherImageProps = (0, _objectWithoutPropertiesLoose2.default)(_ref$imageProps, _excluded),
      status = _ref.status,
      sticker = _ref.sticker,
      videoSources = _ref.videoSources,
      videoProps = _ref.videoProps,
      stretch = _ref.stretch,
      loading = _ref.loading,
      topLine = _ref.topLine,
      topLineAlign = _ref.topLineAlign,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded2);
  return /*#__PURE__*/_react.default.createElement(_styles.StyledCard, (0, _extends2.default)({
    as: href ? 'a' : 'div',
    className: (0, _classnames.default)('k-ProjectCard', className, "k-ProjectCard--" + status, {
      'k-ProjectCard--isStretched': stretch,
      'k-ProjectCard--isLoading': loading
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
  }), videoSources.map(function (sourceProps) {
    return /*#__PURE__*/_react.default.createElement("source", (0, _extends2.default)({
      key: "video_source_" + sourceProps.src
    }, sourceProps));
  }))), topLine && /*#__PURE__*/_react.default.createElement("div", {
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
  topLineAlign: 'right'
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
  topLineAlign: _propTypes.default.oneOf(['left', 'center', 'right'])
};

ProjectCard.Title = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded3);
  return /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    modifier: "septenary",
    noMargin: true,
    className: (0, _classnames.default)('k-ProjectCard__title', className)
  }, props), /*#__PURE__*/_react.default.createElement(_reactTruncate.default, {
    lines: 2
  }, children));
};

ProjectCard.Line = function (_ref3) {
  var className = _ref3.className,
      lastLine = _ref3.lastLine,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded4);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProjectCard__line', className, {
      'k-ProjectCard__line--lastLine': lastLine
    })
  }, props));
};

ProjectCard.ItemsLine = function (_ref4) {
  var className = _ref4.className,
      _ref4$noMargin = _ref4.noMargin,
      noMargin = _ref4$noMargin === void 0 ? false : _ref4$noMargin,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded5);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProjectCard__itemsLine', className, {
      'k-ProjectCard__itemsLine--noMargin': noMargin
    })
  }, props));
};

ProjectCard.Item = function (_ref5) {
  var className = _ref5.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref5, _excluded6);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProjectCard__item', className)
  }, props));
};

ProjectCard.Sticker = function (_ref6) {
  var className = _ref6.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref6, _excluded7);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProjectCard__sticker k-u-ellipsis', className)
  }, props));
};

ProjectCard.Avatar = function (_ref7) {
  var className = _ref7.className,
      imageProps = _ref7.imageProps,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref7, _excluded8);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProjectCard__avatar', className)
  }, props), /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    alt: ""
  }, imageProps)));
};

ProjectCard.Progress = function (_ref8) {
  var className = _ref8.className,
      value = _ref8.value,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref8, _excluded9);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-ProjectCard__progress', className)
  }, /*#__PURE__*/_react.default.createElement(_progress.Progress, (0, _extends2.default)({
    value: value
  }, props)), /*#__PURE__*/_react.default.createElement(_text.Text, {
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
  value: _propTypes.default.number
};