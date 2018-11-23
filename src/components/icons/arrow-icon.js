"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = require("kitten/helpers/utils/deprecated");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var DeprecatedArrowIconSvgBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DeprecatedArrowIconSvgBase, _Component);

  function DeprecatedArrowIconSvgBase() {
    (0, _classCallCheck2.default)(this, DeprecatedArrowIconSvgBase);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DeprecatedArrowIconSvgBase).apply(this, arguments));
  }

  (0, _createClass2.default)(DeprecatedArrowIconSvgBase, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          direction = _this$props.direction,
          disabled = _this$props.disabled,
          version = _this$props.version,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "direction", "disabled", "version"]);
      var arrowIconClassNames = (0, _classnames.default)('k-ArrowIcon', (_classNames = {}, (0, _defineProperty2.default)(_classNames, "k-ArrowIcon--".concat(direction), direction), (0, _defineProperty2.default)(_classNames, 'k-ArrowIcon--disabled', disabled), _classNames), className);
      return _react.default.createElement("svg", (0, _extends2.default)({
        className: arrowIconClassNames,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 6 6"
      }, others), _react.default.createElement("title", null, "Arrow"), _react.default.createElement("path", {
        d: "M6 0H0v6h2V2h4z"
      }));
    }
  }]);
  return DeprecatedArrowIconSvgBase;
}(_react.Component);

DeprecatedArrowIconSvgBase.propTypes = {
  direction: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
};
DeprecatedArrowIconSvgBase.defaultProps = {
  direction: 'right',
  disabled: false,
  className: ''
};
var DeprecatedArrowIconSvg = (0, _radium.default)(DeprecatedArrowIconSvgBase);

var DeprecatedArrowIcon =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2.default)(DeprecatedArrowIcon, _Component2);

  function DeprecatedArrowIcon() {
    (0, _classCallCheck2.default)(this, DeprecatedArrowIcon);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DeprecatedArrowIcon).apply(this, arguments));
  }

  (0, _createClass2.default)(DeprecatedArrowIcon, [{
    key: "render",
    value: function render() {
      var warningMessage = 'The previous version of ArrowIcon does not handle ' + 'correctly the center of gravity of the arrow. Please use now the prop ' + '`version` with the value `solid` to display an arrow with the right ' + 'center of gravity.';
      return _react.default.createElement(_deprecated.Deprecated, {
        warningMessage: warningMessage
      }, _react.default.createElement(_react.Fragment, null, _react.default.createElement(DeprecatedArrowIconSvg, this.props)));
    }
  }]);
  return DeprecatedArrowIcon;
}(_react.Component);

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

var ArrowIconBase =
/*#__PURE__*/
function (_Component3) {
  (0, _inherits2.default)(ArrowIconBase, _Component3);

  function ArrowIconBase() {
    (0, _classCallCheck2.default)(this, ArrowIconBase);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ArrowIconBase).apply(this, arguments));
  }

  (0, _createClass2.default)(ArrowIconBase, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          version = _this$props2.version,
          direction = _this$props2.direction,
          disabled = _this$props2.disabled,
          style = _this$props2.style,
          others = (0, _objectWithoutProperties2.default)(_this$props2, ["version", "direction", "disabled", "style"]);

      if (version === 'deprecated-center-of-gravity') {
        return _react.default.createElement(DeprecatedArrowIcon, this.props);
      }

      var arrowStyles = [style, direction && styles[direction], disabled && styles.disabled];
      return _react.default.createElement("svg", (0, _extends2.default)({
        style: arrowStyles,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 8.48 5.64",
        height: "5.64",
        width: "8.48"
      }, others), _react.default.createElement("path", {
        d: "M0 4.24 L4.24,0 L8.48,4.24 L7.08,5.64 L4.24,2.77 L1.4,5.6 z"
      }));
    }
  }]);
  return ArrowIconBase;
}(_react.Component);

ArrowIconBase.propTypes = {
  version: _propTypes.default.oneOf(['solid', 'deprecated-center-of-gravity']),
  direction: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
};
ArrowIconBase.defaultProps = {
  version: 'deprecated-center-of-gravity',
  direction: 'right',
  disabled: false,
  className: ''
};
var styles = {
  right: {
    transform: 'rotate(90deg)'
  },
  left: {
    transform: 'rotate(-90deg)'
  },
  bottom: {
    transform: 'rotate(180deg)'
  },
  disabled: {
    fill: _colorsConfig.default.background1
  }
};
var ArrowIcon = (0, _radium.default)(ArrowIconBase);
exports.ArrowIcon = ArrowIcon;