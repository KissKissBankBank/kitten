import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title", "direction"];
import React from 'react';
import PropTypes from 'prop-types';
export var PlayerIconNext = function PlayerIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      direction = _ref.direction,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "90",
    height: "90",
    viewBox: "0 0 90 90",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("circle", {
    cx: "45",
    cy: "45",
    r: "44.5",
    fill: "var(--color-grey-900)",
    stroke: "var(--color-grey-000)",
    strokeWidth: "1",
    opacity: "var(--player-icon-opacity, 0.8)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "var(--color-grey-000)",
    d: "M60 43.27a2 2 0 0 1 0 3.46L39 58.86a2 2 0 0 1-3-1.74V32.88a2 2 0 0 1 3-1.74l21 12.13Z"
  }));
};
PlayerIconNext.propTypes = {
  title: PropTypes.string
};
PlayerIconNext.defaultProps = {
  title: null
};