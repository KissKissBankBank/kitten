"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdaptableGridCol = exports.AdaptableGrid = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gridConfig = require("../../../constants/grid-config");

var _screenConfig = require("../../../constants/screen-config");

var GridProperties = (0, _react.createContext)({});

var AdaptableGrid = function AdaptableGrid(_ref) {
  var children = _ref.children,
      gutter = _ref.gutter,
      colNumber = _ref.colNumber,
      colAlign = _ref.colAlign,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "gutter", "colNumber", "colAlign"]);
  var gridProperties = {
    colAlign: colAlign,
    colNumber: colNumber,
    gutter: gutter
  };
  return _react.default.createElement(StyledGrid, {
    gutter: gutter,
    colAlign: colAlign
  }, _react.default.createElement(GridProperties.Provider, {
    value: gridProperties
  }, children));
};

exports.AdaptableGrid = AdaptableGrid;

var AdaptableGridCol = function AdaptableGridCol(_ref2) {
  var children = _ref2.children,
      col = _ref2.col,
      offset = _ref2.offset,
      other = (0, _objectWithoutProperties2.default)(_ref2, ["children", "col", "offset"]);

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      styles = _useState2[0],
      setStyles = _useState2[1];

  var _useContext = (0, _react.useContext)(GridProperties),
      colAlign = _useContext.colAlign,
      colNumber = _useContext.colNumber,
      gutter = _useContext.gutter;

  var marginDirection = colAlign === 'right' ? 'right' : 'left';
  (0, _react.useEffect)(function () {
    var props = (0, _extends2.default)({}, other);
    var stylesByMediaQuery = Object.keys(_screenConfig.ScreenConfig).map(function (size) {
      var mediaQuery = size.toLowerCase();
      var col = props["col-".concat(mediaQuery)];
      var offset = props["offset-".concat(mediaQuery)];

      if (!col && !offset) {
        return false;
      }

      return (0, _styledComponents.css)(["@media (min-width:", "px){", " ", " ", "}"], _screenConfig.ScreenConfig[size].min, col && (0, _styledComponents.css)(["width:", "%;"], col * 100 / colNumber), offset > 0 && (0, _styledComponents.css)(["margin-", ":", "%;"], marginDirection, offset * 100 / colNumber), offset === 0 && (0, _styledComponents.css)(["margin-", ":0;"], marginDirection));
    });
    setStyles(stylesByMediaQuery);
  }, []);
  return _react.default.createElement(StyledGridCol, {
    col: col || colNumber,
    offset: offset,
    gutter: gutter,
    colNumber: colNumber,
    colAlign: colAlign,
    marginDirection: marginDirection,
    props: (0, _extends2.default)({}, other),
    stylesByMediaQuery: styles
  }, children);
};

exports.AdaptableGridCol = AdaptableGridCol;
AdaptableGrid.propTypes = {
  gutter: _propTypes.default.number,
  colNumber: _propTypes.default.number,
  colAlign: _propTypes.default.oneOf(['left', 'right', 'center'])
};
AdaptableGrid.defaultProps = {
  gutter: _gridConfig.GUTTER,
  colNumber: _gridConfig.NUM_COLUMNS,
  colAlign: 'left'
};

var StyledGrid = _styledComponents.default.div.withConfig({
  displayName: "adaptable-grid__StyledGrid",
  componentId: "txsbu0-0"
})(["width:100%;box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:", ";margin-left:", "px;margin-right:", "px;"], function (_ref3) {
  var colAlign = _ref3.colAlign;
  return colAlign;
}, function (_ref4) {
  var gutter = _ref4.gutter;
  return gutter / 2;
}, function (_ref5) {
  var gutter = _ref5.gutter;
  return gutter / 2;
});

var StyledGridCol = _styledComponents.default.div.withConfig({
  displayName: "adaptable-grid__StyledGridCol",
  componentId: "txsbu0-1"
})(["display:block;box-sizing:border-box;padding-left:", "px;padding-right:", "px;flex:0 0 auto;width:", "%;", " ", ""], function (_ref6) {
  var gutter = _ref6.gutter;
  return gutter / 2;
}, function (_ref7) {
  var gutter = _ref7.gutter;
  return gutter / 2;
}, function (_ref8) {
  var col = _ref8.col,
      colNumber = _ref8.colNumber;
  return col * 100 / colNumber;
}, function (_ref9) {
  var offset = _ref9.offset,
      colNumber = _ref9.colNumber,
      colAlign = _ref9.colAlign,
      marginDirection = _ref9.marginDirection;
  if (!offset) return;
  return (0, _styledComponents.css)(["margin-", ":", "%;"], marginDirection, offset * 100 / colNumber);
}, function (_ref10) {
  var stylesByMediaQuery = _ref10.stylesByMediaQuery;
  return stylesByMediaQuery;
});