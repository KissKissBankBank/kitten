import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
export var LongArrowIcon = function LongArrowIcon(_ref) {
  var direction = _ref.direction,
      disabled = _ref.disabled,
      color = _ref.color,
      title = _ref.title,
      others = _objectWithoutProperties(_ref, ["direction", "disabled", "color", "title"]);

  var transform = {
    right: 'rotate(180deg)',
    left: null,
    bottom: 'rotate(-90deg)',
    top: 'rotate(90deg)'
  };
  return /*#__PURE__*/React.createElement("svg", _extends({}, others, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 10",
    fill: disabled ? COLORS.background1 : color,
    style: {
      transform: transform[direction]
    }
  }), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M4.243.757l1.414 1.415-1.829 1.827L12 4v2H3.828l1.829 1.828-1.414 1.415L0 5 4.243.757z"
  }));
};
LongArrowIcon.propTypes = {
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  title: PropTypes.string
};
LongArrowIcon.defaultProps = {
  direction: 'right',
  disabled: false,
  className: '',
  width: '12',
  height: '10',
  color: COLORS.font1,
  title: ''
};