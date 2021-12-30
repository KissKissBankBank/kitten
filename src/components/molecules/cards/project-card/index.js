"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ProjectCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

var _text = require("../../../../components/atoms/typography/text");

var _title = require("../../../../components/atoms/typography/title");

var _progress = require("../../../../components/atoms/progress");

var _gifVideo = require("../../../../components/atoms/video/gif-video");

var _excluded = ["backgroundColor", "alt", "imageClassName"],
    _excluded2 = ["children", "className", "href", "imageProps", "status", "sticker", "videoSources", "videoProps"],
    _excluded3 = ["className"],
    _excluded4 = ["className"],
    _excluded5 = ["className"],
    _excluded6 = ["className", "value"];

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
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded2);
  return /*#__PURE__*/_react.default.createElement(_styles.StyledCard, (0, _extends2.default)({
    as: href ? 'a' : 'div',
    className: (0, _classnames.default)('k-ProjectCard', className, "k-ProjectCard--" + status),
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
  }))), /*#__PURE__*/_react.default.createElement("div", {
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
  videoSources: []
};
ProjectCard.propTypes = {
  status: _propTypes.default.oneOf(['normal', 'danger', 'warning', 'success', 'disabled']),
  imageProps: _propTypes.default.object,
  videoProps: _propTypes.default.object,
  videoSources: _propTypes.default.array
};

ProjectCard.Title = function (_ref2) {
  var className = _ref2.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded3);
  return /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    modifier: "senary",
    noMargin: true,
    className: (0, _classnames.default)('k-ProjectCard__title', className)
  }, props));
};

ProjectCard.Line = function (_ref3) {
  var className = _ref3.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded4);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProjectCard__line', className)
  }, props));
};

ProjectCard.Item = function (_ref4) {
  var className = _ref4.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded5);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProjectCard__item', className)
  }, props));
};

ProjectCard.Progress = function (_ref5) {
  var className = _ref5.className,
      value = _ref5.value,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref5, _excluded6);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProjectCard__progress', className)
  }, props), /*#__PURE__*/_react.default.createElement(_progress.Progress, (0, _extends2.default)({
    variant: "andromeda",
    value: value
  }, props)), /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "bold",
    size: "tiny",
    lineHeight: "1"
  }, value, "\xA0%"));
};