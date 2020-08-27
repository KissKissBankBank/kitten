import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled, { css } from 'styled-components';
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
      others = _objectWithoutProperties(_ref, ["className", "direction", "disabled", "version"]);

  var arrowIconClassNames = classNames('k-ArrowIcon', (_classNames = {}, _defineProperty(_classNames, "k-ArrowIcon--".concat(direction), direction), _defineProperty(_classNames, 'k-ArrowIcon--disabled', disabled), _classNames), className);
  return /*#__PURE__*/React.createElement("svg", _extends({}, others, {
    xmlns: "http://www.w3.org/2000/svg",
    className: arrowIconClassNames,
    viewBox: "0 0 6 6"
  }), /*#__PURE__*/React.createElement("title", null, "Arrow"), /*#__PURE__*/React.createElement("path", {
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
var SvgArrow = styled(function (_ref2) {
  var direction = _ref2.direction,
      disabled = _ref2.disabled,
      props = _objectWithoutProperties(_ref2, ["direction", "disabled"]);

  return /*#__PURE__*/React.createElement("svg", props);
}).withConfig({
  displayName: "arrow-icon__SvgArrow",
  componentId: "sc-3d3g2f-0"
})(["transform:", ";", ""], function (_ref3) {
  var direction = _ref3.direction;

  switch (direction) {
    case 'right':
      return 'rotate(90deg)';

    case 'left':
      return 'rotate(-90deg)';

    case 'bottom':
      return 'rotate(180deg)';

    default:
      return 'none';
  }
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled && css(["fill:", ";"], COLORS.background1);
});
export var ArrowIcon = function ArrowIcon(_ref5) {
  var version = _ref5.version,
      direction = _ref5.direction,
      disabled = _ref5.disabled,
      others = _objectWithoutProperties(_ref5, ["version", "direction", "disabled"]);

  if (version === 'deprecated-center-of-gravity') {
    return /*#__PURE__*/React.createElement(DeprecatedArrowIcon, _extends({
      version: version,
      direction: direction,
      disabled: disabled
    }, others));
  }

  return /*#__PURE__*/React.createElement(SvgArrow, _extends({}, others, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8.48 5.64",
    direction: direction,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 4.24 L4.24,0 L8.48,4.24 L7.08,5.64 L4.24,2.77 L1.4,5.6 z"
  }));
};
ArrowIcon.propTypes = {
  version: PropTypes.oneOf(['solid', 'deprecated-center-of-gravity']),
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowIcon.defaultProps = {
  version: 'deprecated-center-of-gravity',
  direction: 'right',
  disabled: false,
  className: '',
  width: '8.48',
  height: '5.64'
};