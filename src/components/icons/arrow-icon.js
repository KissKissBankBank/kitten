"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = require("kitten/helpers/utils/deprecated");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DeprecatedArrowIconSvgBase =
/*#__PURE__*/
function (_Component) {
  _inherits(DeprecatedArrowIconSvgBase, _Component);

  function DeprecatedArrowIconSvgBase() {
    _classCallCheck(this, DeprecatedArrowIconSvgBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(DeprecatedArrowIconSvgBase).apply(this, arguments));
  }

  _createClass(DeprecatedArrowIconSvgBase, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          direction = _this$props.direction,
          disabled = _this$props.disabled,
          version = _this$props.version,
          others = _objectWithoutProperties(_this$props, ["className", "direction", "disabled", "version"]);

      var arrowIconClassNames = (0, _classnames.default)('k-ArrowIcon', (_classNames = {}, _defineProperty(_classNames, "k-ArrowIcon--".concat(direction), direction), _defineProperty(_classNames, 'k-ArrowIcon--disabled', disabled), _classNames), className);
      return _react.default.createElement("svg", _extends({
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

_defineProperty(DeprecatedArrowIconSvgBase, "propTypes", {
  direction: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
});

_defineProperty(DeprecatedArrowIconSvgBase, "defaultProps", {
  direction: 'right',
  disabled: false,
  className: ''
});

var DeprecatedArrowIconSvg = (0, _radium.default)(DeprecatedArrowIconSvgBase);

var DeprecatedArrowIcon =
/*#__PURE__*/
function (_Component2) {
  _inherits(DeprecatedArrowIcon, _Component2);

  function DeprecatedArrowIcon() {
    _classCallCheck(this, DeprecatedArrowIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(DeprecatedArrowIcon).apply(this, arguments));
  }

  _createClass(DeprecatedArrowIcon, [{
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

_defineProperty(DeprecatedArrowIcon, "propTypes", {
  direction: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
});

_defineProperty(DeprecatedArrowIcon, "defaultProps", {
  direction: 'right',
  disabled: false,
  className: ''
});

var ArrowIconBase =
/*#__PURE__*/
function (_Component3) {
  _inherits(ArrowIconBase, _Component3);

  function ArrowIconBase() {
    _classCallCheck(this, ArrowIconBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArrowIconBase).apply(this, arguments));
  }

  _createClass(ArrowIconBase, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          version = _this$props2.version,
          direction = _this$props2.direction,
          disabled = _this$props2.disabled,
          style = _this$props2.style,
          others = _objectWithoutProperties(_this$props2, ["version", "direction", "disabled", "style"]);

      if (version === 'deprecated-center-of-gravity') {
        return _react.default.createElement(DeprecatedArrowIcon, this.props);
      }

      var arrowStyles = [style, direction && styles[direction], disabled && styles.disabled];
      return _react.default.createElement("svg", _extends({
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

_defineProperty(ArrowIconBase, "propTypes", {
  version: _propTypes.default.oneOf(['solid', 'deprecated-center-of-gravity']),
  direction: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
});

_defineProperty(ArrowIconBase, "defaultProps", {
  version: 'deprecated-center-of-gravity',
  direction: 'right',
  disabled: false,
  className: ''
});

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