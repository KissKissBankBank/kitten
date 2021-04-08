import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
export var ArrowIcon = function ArrowIcon(_ref) {
  var direction = _ref.direction,
      disabled = _ref.disabled,
      color = _ref.color,
      title = _ref.title,
      others = _objectWithoutProperties(_ref, ["direction", "disabled", "color", "title"]);

  var transform = {
    right: 'rotate(90deg)',
    left: 'rotate(-90deg)',
    bottom: 'rotate(180deg)',
    top: null
  };
  return /*#__PURE__*/React.createElement("svg", _extends({}, others, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8.48 5.64",
    fill: disabled ? COLORS.background1 : color,
    style: {
      transform: transform[direction]
    }
  }), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M0 4.24 L4.24,0 L8.48,4.24 L7.08,5.64 L4.24,2.77 L1.4,5.6 z"
  }));
};
ArrowIcon.propTypes = {
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  title: PropTypes.string
};
ArrowIcon.defaultProps = {
  direction: 'right',
  disabled: false,
  className: '',
  width: '8.48',
  height: '5.64',
  color: COLORS.font1,
  title: ''
};