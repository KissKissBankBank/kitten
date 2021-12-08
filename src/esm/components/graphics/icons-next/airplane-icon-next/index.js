import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var AirplaneIconNext = function AirplaneIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "20",
    height: "19",
    viewBox: "0 0 20 19",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M10.747 18.697c.38-.238.704-.566.946-.961l7.916-12.93c.29-.473.453-1.023.468-1.59A3.235 3.235 0 0 0 19.7 1.6 2.942 2.942 0 0 0 18.59.44a2.658 2.658 0 0 0-1.51-.36l-14.342.93a2.697 2.697 0 0 0-1.353.473c-.407.28-.74.667-.969 1.125a3.248 3.248 0 0 0 .042 2.97l.041.077c.18.337.418.633.702.873l4.479 3.8.814 6.085c.05.384.17.754.349 1.09l.042.078c.376.7.993 1.21 1.717 1.419.724.21 1.495.1 2.145-.303Zm-2.353-2.16a1.185 1.185 0 0 1-.122-.389l-.792-5.825 4.395-2.735-.895-1.673-4.396 2.736-4.282-3.653a1.105 1.105 0 0 1-.252-.308l-.041-.078a1.183 1.183 0 0 1-.013-1.083 1.09 1.09 0 0 1 .35-.41.99.99 0 0 1 .493-.176l14.35-.934a.975.975 0 0 1 .552.13c.17.099.31.246.407.427.097.18.144.384.138.592-.005.208-.065.41-.17.582L10.19 16.675a1.065 1.065 0 0 1-.387.371.973.973 0 0 1-1.003-.033 1.084 1.084 0 0 1-.365-.397l-.042-.079Z"
  }));
};
AirplaneIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
AirplaneIconNext.defaultProps = {
  color: '#222',
  title: null
};