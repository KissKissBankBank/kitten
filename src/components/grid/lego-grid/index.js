"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegoGrid = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactMasonryComponent = _interopRequireDefault(require("react-masonry-component"));

var _screenConfig = require("../../../constants/screen-config");

var _gridConfig = require("../../../constants/grid-config");

var LegoGrid = function LegoGrid(_ref) {
  var className = _ref.className,
      masonryProps = _ref.masonryProps,
      children = _ref.children,
      others = (0, _objectWithoutProperties2.default)(_ref, ["className", "masonryProps", "children"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isVisible = _useState2[0],
      setVisibility = _useState2[1];

  (0, _react.useEffect)(function () {
    setVisibility(true);
    return function () {
      setVisibility(false);
    };
  }, []);

  var classByMediaQuery = function classByMediaQuery() {
    var classNamesByMediaQuery = _screenConfig.ORDERED_SCREEN_SIZES.map(function (size) {
      var mediaQuery = size.toLowerCase();
      var items = others["items-".concat(mediaQuery, "-up")];
      return (0, _classnames.default)(classNamesByMediaQuery, (0, _defineProperty2.default)({}, "k-LegoGrid--".concat(_gridConfig.NUM_COLUMNS / items, "col@").concat(mediaQuery), items));
    });

    return classNamesByMediaQuery;
  };

  var gridClassName = (0, _classnames.default)('k-LegoGrid', classByMediaQuery(), className, {
    'k-LegoGrid--isVisible': isVisible
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, others, {
    className: gridClassName
  }), /*#__PURE__*/_react.default.createElement(_reactMasonryComponent.default, masonryProps, children));
};

exports.LegoGrid = LegoGrid;
LegoGrid.defaultProps = {
  className: null,
  masonryProps: {}
};

LegoGrid.Item = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children", "className"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-LegoGrid__item', className)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-LegoGrid__item__content"
  }, children));
};

LegoGrid.Item.defaultProps = {
  className: null
};