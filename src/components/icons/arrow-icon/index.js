"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowIcon = exports.DeprecatedArrowIcon = exports.DeprecatedArrowIconSvg = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = require("../../../helpers/utils/deprecated");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var DeprecatedArrowIconSvg = function DeprecatedArrowIconSvg(_ref) {
  var _classNames;

  var className = _ref.className,
      direction = _ref.direction,
      disabled = _ref.disabled,
      version = _ref.version,
      title = _ref.title,
      others = (0, _objectWithoutProperties2.default)(_ref, ["className", "direction", "disabled", "version", "title"]);
  var arrowIconClassNames = (0, _classnames.default)('k-ArrowIcon', (_classNames = {}, (0, _defineProperty2.default)(_classNames, "k-ArrowIcon--".concat(direction), direction), (0, _defineProperty2.default)(_classNames, 'k-ArrowIcon--disabled', disabled), _classNames), className);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, others, {
    xmlns: "http://www.w3.org/2000/svg",
    className: arrowIconClassNames,
    viewBox: "0 0 6 6"
  }), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6 0H0v6h2V2h4z"
  }));
};

exports.DeprecatedArrowIconSvg = DeprecatedArrowIconSvg;
DeprecatedArrowIconSvg.propTypes = {
  direction: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
};
DeprecatedArrowIconSvg.defaultProps = {
  direction: 'right',
  disabled: false,
  className: ''
};

var DeprecatedArrowIcon = function DeprecatedArrowIcon(props) {
  var warningMessage = 'The previous version of ArrowIcon does not handle ' + 'correctly the center of gravity of the arrow. Please use now the prop ' + '`version` with the value `solid` to display an arrow with the right ' + 'center of gravity.';
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: warningMessage
  }, /*#__PURE__*/_react.default.createElement(DeprecatedArrowIconSvg, props));
};

exports.DeprecatedArrowIcon = DeprecatedArrowIcon;
DeprecatedArrowIcon.propTypes = {
  direction: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
};
DeprecatedArrowIcon.defaultProps = {
  direction: 'right',
  disabled: false,
  className: ''
};

var ArrowIcon = function ArrowIcon(_ref2) {
  var version = _ref2.version,
      direction = _ref2.direction,
      disabled = _ref2.disabled,
      color = _ref2.color,
      title = _ref2.title,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["version", "direction", "disabled", "color", "title"]);

  if (version === 'deprecated-center-of-gravity') {
    return /*#__PURE__*/_react.default.createElement(DeprecatedArrowIcon, (0, _extends2.default)({
      version: version,
      direction: direction,
      disabled: disabled,
      title: title
    }, others));
  }

  var transform = {
    right: 'rotate(90)',
    left: 'rotate(-90)',
    bottom: 'rotate(180)',
    top: null
  };
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, others, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8.48 5.64",
    fill: disabled ? _colorsConfig.default.background1 : color,
    transform: direction ? transform[direction] : null
  }), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 4.24 L4.24,0 L8.48,4.24 L7.08,5.64 L4.24,2.77 L1.4,5.6 z"
  }));
};

exports.ArrowIcon = ArrowIcon;
ArrowIcon.propTypes = {
  version: _propTypes.default.oneOf(['solid', 'deprecated-center-of-gravity']),
  direction: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
ArrowIcon.defaultProps = {
  version: 'deprecated-center-of-gravity',
  direction: 'right',
  disabled: false,
  className: '',
  width: '8.48',
  height: '5.64',
  color: _colorsConfig.default.font1,
  title: ''
};