"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideGridAside = exports.SideGridContent = exports.SideGrid = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _grid = require("../../../components/grid/grid");

var _container = require("../../../components/grid/container");

var _gridConfig = require("../../../constants/grid-config");

var Context = (0, _react.createContext)({
  asideSize: 'default'
});

var StyledSideGrid = _styledComponents.default.div.withConfig({
  displayName: "side-grid__StyledSideGrid",
  componentId: "sc-1hedjcg-0"
})(["@media (min-width:", "){background:linear-gradient( to right,", " 0%,", " 50%,", " 50%,", " 100% );}.k-SideGrid__content{background-color:", ";padding-bottom:", ";@media (min-width:", "){padding-bottom:", ";}}.k-SideGrid__aside{display:none;@media (min-width:", "){display:flex;border-left:", " solid ", ";padding-left:0;padding-right:", ";}}.k-SideGrid__asideContent{display:flex;flex-direction:column;flex:1 1 auto;border-left:", " solid ", ";background-color:", ";}&.k-SideGrid--aside-start{@media (min-width:", "){background:linear-gradient( to left,", " 0%,", " 50%,", " 50%,", " 100% );}.k-SideGrid__row{flex-direction:row-reverse;}.k-SideGrid__aside{border-left:none;border-right:", " solid ", ";padding-left:", ";padding-right:0;}.k-SideGrid__asideContent{border-left:none;border-right:", " solid ", ";}}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.background2, _colorsConfig.default.background2, _colorsConfig.default.background1, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(_gridConfig.GUTTER / 2), _colorsConfig.default.background1, (0, _typography.pxToRem)(_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(1), _colorsConfig.default.line1, _colorsConfig.default.background2, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.background2, _colorsConfig.default.background2, (0, _typography.pxToRem)(_gridConfig.GUTTER / 2), _colorsConfig.default.background1, (0, _typography.pxToRem)(_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(1), _colorsConfig.default.line1);

var SideGrid = function SideGrid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      containerClassName = _ref.containerClassName,
      rowClassName = _ref.rowClassName,
      asidePosition = _ref.asidePosition,
      asideSize = _ref.asideSize;
  var sideGridClassName = (0, _classnames.default)('k-SideGrid', className, "k-SideGrid--aside-".concat(asidePosition), "k-SideGrid--aside-".concat(asideSize));
  return /*#__PURE__*/_react.default.createElement(StyledSideGrid, {
    className: sideGridClassName
  }, /*#__PURE__*/_react.default.createElement(_container.Container, {
    className: (0, _classnames.default)('k-SideGrid__container', containerClassName)
  }, /*#__PURE__*/_react.default.createElement(_grid.Grid, {
    className: (0, _classnames.default)('k-SideGrid__row', rowClassName)
  }, /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      asideSize: asideSize
    }
  }, children))));
};

exports.SideGrid = SideGrid;

var SideGridContent = function SideGridContent(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "children"]);

  var _useContext = (0, _react.useContext)(Context),
      asideSize = _useContext.asideSize;

  var contentWidth = function () {
    switch (asideSize) {
      case 'large':
        return 7;

      case 'small':
        return 9;

      default:
        return 8;
    }
  }();

  return /*#__PURE__*/_react.default.createElement(_grid.GridCol, (0, _extends2.default)({
    col: 12,
    "col-m": contentWidth,
    className: (0, _classnames.default)('k-SideGrid__content', className)
  }, props), children);
};

exports.SideGridContent = SideGridContent;

var SideGridAside = function SideGridAside(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      contentClassName = _ref3.contentClassName,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["className", "children", "contentClassName"]);

  var _useContext2 = (0, _react.useContext)(Context),
      asideSize = _useContext2.asideSize;

  var sideWidth = function () {
    switch (asideSize) {
      case 'large':
        return 5;

      case 'small':
        return 3;

      default:
        return 4;
    }
  }();

  return /*#__PURE__*/_react.default.createElement(_grid.GridCol, (0, _extends2.default)({
    col: 12,
    "col-m": sideWidth,
    className: (0, _classnames.default)('k-SideGrid__aside', className)
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-SideGrid__asideContent', contentClassName)
  }, children));
};

exports.SideGridAside = SideGridAside;
SideGrid.defaultProps = {
  className: null,
  containerClassName: null,
  rowClassName: null,
  asidePosition: 'end',
  // 'start' or 'end'
  asideSize: 'default' // 'default', 'small' or 'large'

};
SideGridContent.defaultProps = {
  className: null
};
SideGridAside.defaultProps = {
  className: null,
  contentClassName: null
};