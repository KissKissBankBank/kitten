"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollableContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _classnames = _interopRequireDefault(require("classnames"));

var _container = require("kitten/components/grid/container");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ScrollableContainer = function ScrollableContainer(props) {
  return _react.default.createElement(_container.Container, _extends({}, props, {
    className: (0, _classnames.default)('k-Container--no-padding', props.className),
    style: _objectSpread({}, styles.container, props.style)
  }), _react.default.createElement("div", {
    className: "k-ScrollableContainer",
    style: styles.scrollable
  }, props.children), _react.default.createElement("div", {
    style: styles.gradiantLeft
  }), _react.default.createElement("div", {
    style: styles.gradiantRight
  }), _react.default.createElement(_radium.Style, {
    scopeSelector: ".k-ScrollableContainer::-webkit-scrollbar",
    rules: {
      display: 'none'
    }
  }));
};

exports.ScrollableContainer = ScrollableContainer;
var transparent = 'rgba(255, 255, 255, 0)';
var gradiantWidth = 20;
var styles = {
  container: {
    position: 'relative'
  },
  scrollable: {
    display: 'flex',
    whiteSpace: 'nowrap',
    overflowX: 'auto',
    // Hide scrollbar on IE and Edge.
    MsOverflowStyle: 'none',
    // Mandatory to combine scroll with this property on iOS.
    WebkitOverflowScrolling: 'touch'
  },
  gradiantLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: gradiantWidth,
    background: "linear-gradient(90deg, ".concat(_colorsConfig.default.background1, ", ").concat(transparent, ")")
  },
  gradiantRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: gradiantWidth,
    background: "linear-gradient(90deg, ".concat(transparent, ", ").concat(_colorsConfig.default.background1, ")")
  }
};