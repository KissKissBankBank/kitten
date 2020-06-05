"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamCardImage = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var imageHeight = 378;
var imageWidth = 252;

var StyledTeamCardImage = _styledComponents.default.div.withConfig({
  displayName: "image__StyledTeamCardImage",
  componentId: "sc-1b73hzg-0"
})(["background-image:url(", ");background-color:", ";background-size:cover;background-position:center;background-repeat:no-repeat;width:100%;padding-bottom:", ";"], function (_ref) {
  var backgroundSource = _ref.backgroundSource;
  return backgroundSource;
}, _colorsConfig.default.background1, imageHeight / imageWidth * 100 + '%');

var TeamCardImage = function TeamCardImage(_ref2) {
  var src = _ref2.src,
      title = _ref2.title;
  return /*#__PURE__*/_react.default.createElement(StyledTeamCardImage, {
    backgroundSource: src,
    title: title,
    className: "k-u-margin-bottom-double"
  });
};

exports.TeamCardImage = TeamCardImage;
TeamCardImage.propTypes = {
  src: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired
};