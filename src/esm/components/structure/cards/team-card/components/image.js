import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["styled", "backgroundSource"],
    _excluded2 = ["src", "title", "style", "className"];
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import COLORS from '../../../../../constants/colors-config';
import styled from 'styled-components';
var imageHeight = 378;
var imageWidth = 252;
var StyledTeamCardImage = styled(function (_ref) {
  var styled = _ref.styled,
      backgroundSource = _ref.backgroundSource,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", props);
}).withConfig({
  displayName: "image__StyledTeamCardImage",
  componentId: "sc-hbs7qa-0"
})(["background-image:url(", ");background-color:", ";background-size:cover;background-position:center;background-repeat:no-repeat;width:100%;padding-bottom:", ";", ""], function (_ref2) {
  var backgroundSource = _ref2.backgroundSource;
  return backgroundSource;
}, COLORS.background1, imageHeight / imageWidth * 100 + '%', function (_ref3) {
  var style = _ref3.style;
  return style;
});
export var TeamCardImage = function TeamCardImage(_ref4) {
  var src = _ref4.src,
      title = _ref4.title,
      style = _ref4.style,
      className = _ref4.className,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded2);

  return /*#__PURE__*/React.createElement(StyledTeamCardImage, _extends({}, props, {
    backgroundSource: src,
    title: title,
    className: classNames(className, 'k-u-margin-bottom-double'),
    style: style
  }));
};
TeamCardImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};