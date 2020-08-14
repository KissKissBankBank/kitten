"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamCardImage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var imageHeight = 378;
var imageWidth = 252;
var StyledTeamCardImage = (0, _styledComponents.default)(function (_ref) {
  var styled = _ref.styled,
      backgroundSource = _ref.backgroundSource,
      props = (0, _objectWithoutProperties2.default)(_ref, ["styled", "backgroundSource"]);
  return /*#__PURE__*/_react.default.createElement("div", props);
}).withConfig({
  displayName: "image__StyledTeamCardImage",
  componentId: "sc-1b73hzg-0"
})(["background-image:url(", ");background-color:", ";background-size:cover;background-position:center;background-repeat:no-repeat;width:100%;padding-bottom:", ";", ""], function (_ref2) {
  var backgroundSource = _ref2.backgroundSource;
  return backgroundSource;
}, _colorsConfig.default.background1, imageHeight / imageWidth * 100 + '%', function (_ref3) {
  var style = _ref3.style;
  return style;
});

var TeamCardImage = function TeamCardImage(_ref4) {
  var src = _ref4.src,
      title = _ref4.title,
      style = _ref4.style,
      className = _ref4.className,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["src", "title", "style", "className"]);
  return /*#__PURE__*/_react.default.createElement(StyledTeamCardImage, (0, _extends2.default)({}, props, {
    backgroundSource: src,
    title: title,
    className: (0, _classnames.default)(className, 'k-u-margin-bottom-double'),
    style: style
  }));
};

exports.TeamCardImage = TeamCardImage;
TeamCardImage.propTypes = {
  src: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired
};