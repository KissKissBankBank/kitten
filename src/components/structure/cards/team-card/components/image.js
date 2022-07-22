"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TeamCardImage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../../constants/colors-config"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

const imageHeight = 378;
const imageWidth = 252;
const StyledTeamCardImage = (0, _styledComponents.default)(_ref => {
  let {
    styled,
    backgroundSource,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", props);
}).withConfig({
  displayName: "image__StyledTeamCardImage",
  componentId: "sc-hbs7qa-0"
})(["background-image:url(", ");background-color:", ";background-size:cover;background-position:center;background-repeat:no-repeat;width:100%;padding-bottom:", ";", ""], _ref2 => {
  let {
    backgroundSource
  } = _ref2;
  return backgroundSource;
}, _colorsConfig.default.background1, imageHeight / imageWidth * 100 + '%', _ref3 => {
  let {
    style
  } = _ref3;
  return style;
});

const TeamCardImage = _ref4 => {
  let {
    src,
    title,
    style,
    className,
    ...props
  } = _ref4;
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