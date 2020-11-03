import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Deprecated } from '../../../helpers/utils/deprecated';
import COLORS from '../../../constants/colors-config';
export var DeprecatedArrowIconSvg = function DeprecatedArrowIconSvg(_ref) {
  var _classNames;

  var className = _ref.className,
      direction = _ref.direction,
      disabled = _ref.disabled,
      version = _ref.version,
      title = _ref.title,
      others = _objectWithoutProperties(_ref, ["className", "direction", "disabled", "version", "title"]);

  var arrowIconClassNames = classNames('k-ArrowIcon', (_classNames = {}, _defineProperty(_classNames, "k-ArrowIcon--".concat(direction), direction), _defineProperty(_classNames, 'k-ArrowIcon--disabled', disabled), _classNames), className);
  return /*#__PURE__*/React.createElement("svg", _extends({}, others, {
    xmlns: "http://www.w3.org/2000/svg",
    className: arrowIconClassNames,
    viewBox: "0 0 6 6"
  }), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M6 0H0v6h2V2h4z"
  }));
};
DeprecatedArrowIconSvg.propTypes = {
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: PropTypes.bool,
  className: PropTypes.string
};
DeprecatedArrowIconSvg.defaultProps = {
  direction: 'right',
  disabled: false,
  className: ''
};
export var DeprecatedArrowIcon = function DeprecatedArrowIcon(props) {
  var warningMessage = 'The previous version of ArrowIcon does not handle ' + 'correctly the center of gravity of the arrow. Please use now the prop ' + '`version` with the value `solid` to display an arrow with the right ' + 'center of gravity.';
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: warningMessage
  }, /*#__PURE__*/React.createElement(DeprecatedArrowIconSvg, props));
};
DeprecatedArrowIcon.propTypes = {
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: PropTypes.bool,
  className: PropTypes.string
};
DeprecatedArrowIcon.defaultProps = {
  direction: 'right',
  disabled: false,
  className: ''
};
export var ArrowIcon = function ArrowIcon(_ref2) {
  var version = _ref2.version,
      direction = _ref2.direction,
      disabled = _ref2.disabled,
      color = _ref2.color,
      title = _ref2.title,
      others = _objectWithoutProperties(_ref2, ["version", "direction", "disabled", "color", "title"]);

  if (version === 'deprecated-center-of-gravity') {
    return /*#__PURE__*/React.createElement(DeprecatedArrowIcon, _extends({
      version: version,
      direction: direction,
      disabled: disabled,
      title: title
    }, others));
  }

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
  version: PropTypes.oneOf(['solid', 'deprecated-center-of-gravity']),
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  title: PropTypes.string
};
ArrowIcon.defaultProps = {
  version: 'deprecated-center-of-gravity',
  direction: 'right',
  disabled: false,
  className: '',
  width: '8.48',
  height: '5.64',
  color: COLORS.font1,
  title: ''
};