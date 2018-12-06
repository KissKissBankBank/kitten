"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollableContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _classnames = _interopRequireDefault(require("classnames"));

var _container = require("../../components/grid/container");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var ScrollableContainer = function ScrollableContainer(props) {
  return _react.default.createElement(_container.Container, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-Container--no-padding', props.className),
    style: (0, _extends2.default)({}, styles.container, props.style)
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