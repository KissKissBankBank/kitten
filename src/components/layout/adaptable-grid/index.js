"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.AdaptableGridCol = exports.AdaptableGrid = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gridConfig = require("../../../constants/grid-config");

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _excluded = ["children", "col", "offset", "as", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var GridProperties = /*#__PURE__*/(0, _react.createContext)({});

var AdaptableGrid = function AdaptableGrid(_ref) {
  var children = _ref.children,
      gutter = _ref.gutter,
      colNumber = _ref.colNumber,
      colAlign = _ref.colAlign,
      as = _ref.as,
      className = _ref.className;
  var gridProperties = {
    colAlign: colAlign,
    colNumber: colNumber,
    gutter: gutter
  };
  return /*#__PURE__*/_react.default.createElement(StyledGrid, {
    gutter: gutter,
    colAlign: colAlign,
    as: as,
    className: className
  }, /*#__PURE__*/_react.default.createElement(GridProperties.Provider, {
    value: gridProperties
  }, children));
};

exports.AdaptableGrid = AdaptableGrid;

var AdaptableGridCol = function AdaptableGridCol(_ref2) {
  var children = _ref2.children,
      col = _ref2.col,
      offset = _ref2.offset,
      as = _ref2.as,
      className = _ref2.className,
      other = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded);

  var _useState = (0, _react.useState)(null),
      styles = _useState[0],
      setStyles = _useState[1];

  var _useContext = (0, _react.useContext)(GridProperties),
      colAlign = _useContext.colAlign,
      colNumber = _useContext.colNumber,
      gutter = _useContext.gutter;

  var marginDirection = colAlign === 'right' ? 'right' : 'left';
  (0, _react.useEffect)(function () {
    var props = (0, _extends2.default)({}, other);
    var stylesByMediaQuery = Object.keys(_screenConfig.ScreenConfig).map(function (size) {
      var mediaQuery = size.toLowerCase();
      var col = props["col-" + mediaQuery];
      var offset = props["offset-" + mediaQuery];

      if (!col && !offset) {
        return false;
      }

      return (0, _styledComponents.css)(["@media (min-width:", "){", " ", " ", "}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig[size].min), col && (0, _styledComponents.css)(["width:", "%;"], col * 100 / colNumber), offset > 0 && (0, _styledComponents.css)(["margin-", ":", "%;"], marginDirection, offset * 100 / colNumber), offset === 0 && (0, _styledComponents.css)(["margin-", ":0;"], marginDirection));
    });
    setStyles(stylesByMediaQuery);
  }, []);
  return /*#__PURE__*/_react.default.createElement(StyledGridCol, {
    col: col || colNumber,
    offset: offset,
    gutter: gutter,
    colNumber: colNumber,
    colAlign: colAlign,
    marginDirection: marginDirection,
    props: (0, _extends2.default)({}, other),
    stylesByMediaQuery: styles,
    as: as,
    className: className
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
  componentId: "sc-1x0ouju-0"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:", ";margin-left:", ";margin-right:", ";"], function (_ref3) {
  var colAlign = _ref3.colAlign;
  return colAlign;
}, function (_ref4) {
  var gutter = _ref4.gutter;
  return (0, _typography.pxToRem)(-gutter / 2);
}, function (_ref5) {
  var gutter = _ref5.gutter;
  return (0, _typography.pxToRem)(-gutter / 2);
});

var StyledGridCol = _styledComponents.default.div.withConfig({
  displayName: "adaptable-grid__StyledGridCol",
  componentId: "sc-1x0ouju-1"
})(["display:block;box-sizing:border-box;padding-left:", ";padding-right:", ";flex:0 0 auto;width:", "%;", " ", ""], function (_ref6) {
  var gutter = _ref6.gutter;
  return (0, _typography.pxToRem)(gutter / 2);
}, function (_ref7) {
  var gutter = _ref7.gutter;
  return (0, _typography.pxToRem)(gutter / 2);
}, function (_ref8) {
  var col = _ref8.col,
      colNumber = _ref8.colNumber;
  return col * 100 / colNumber;
}, function (_ref9) {
  var offset = _ref9.offset,
      colNumber = _ref9.colNumber,
      marginDirection = _ref9.marginDirection;
  if (!offset) return;
  return (0, _styledComponents.css)(["margin-", ":", "%;"], marginDirection, offset * 100 / colNumber);
}, function (_ref10) {
  var stylesByMediaQuery = _ref10.stylesByMediaQuery;
  return stylesByMediaQuery;
});