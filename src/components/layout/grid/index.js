"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.GridCol = exports.Grid = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _gridConfig = require("../../../constants/grid-config");

var _excluded = ["className"],
    _excluded2 = ["className"],
    _excluded3 = ["col", "offset"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledGrid = _styledComponents.default.div.withConfig({
  displayName: "grid__StyledGrid",
  componentId: "sc-lrwuxf-0"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;margin-right:", ";margin-left:", ";.k-Grid__col{box-sizing:border-box;flex:0 0 auto;padding-right:", ";padding-left:", ";}", " ", ""], (0, _typography.pxToRem)(-_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(-_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(_gridConfig.GUTTER / 2), [].concat(Array(_gridConfig.NUM_COLUMNS + 1).keys()).map(function (column) {
  return (0, _styledComponents.css)([".k-Grid__col--", "{flex-basis:calc((100% / ", ") * ", ");max-width:calc((100% / ", ") * ", ");}.k-Grid__col--offset-", "{margin-left:calc((100% / ", ") * ", ");}"], column, _gridConfig.NUM_COLUMNS, column, _gridConfig.NUM_COLUMNS, column, column, _gridConfig.NUM_COLUMNS, column);
}), function () {
  return _screenConfig.ORDERED_SCREEN_SIZES.map(function (media) {
    return media !== _screenConfig.ORDERED_SCREEN_SIZES[0] && (0, _styledComponents.css)(["@media (min-width:", "){", "}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig[media].min), [].concat(Array(_gridConfig.NUM_COLUMNS + 1).keys()).map(function (column) {
      return (0, _styledComponents.css)([".k-Grid__col--", "{flex-basis:calc((100% / ", ") * ", ");max-width:calc((100% / ", ") * ", ");}.k-Grid__col--offset-", "{margin-left:calc((100% / ", ") * ", ");}"], column + '-' + media.toLowerCase(), _gridConfig.NUM_COLUMNS, column, _gridConfig.NUM_COLUMNS, column, column + '-' + media.toLowerCase(), _gridConfig.NUM_COLUMNS, column);
    }));
  });
});

var Grid = function Grid(_ref) {
  var className = _ref.className,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledGrid, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Grid', className)
  }, others));
};

exports.Grid = Grid;

var GridCol = function GridCol(_ref2) {
  var _classNames2;

  var className = _ref2.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  var col = props.col,
      offset = props.offset,
      others = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded3);

  var classByMediaQuery = function classByMediaQuery() {
    var classNamesByMediaQuery = Object.keys(_screenConfig.ScreenConfig).map(function (size) {
      var _classNames;

      var mediaQuery = size.toLowerCase();
      var col = props["col-" + mediaQuery];
      var offset = props["offset-" + mediaQuery];
      return (0, _classnames.default)(classNamesByMediaQuery, (_classNames = {}, _classNames["k-Grid__col--" + col + "-" + mediaQuery] = col, _classNames["k-Grid__col--offset-" + offset + "-" + mediaQuery] = !!offset || offset === 0, _classNames));
    });
    return classNamesByMediaQuery;
  }; // Remove unknown props in others.


  Object.keys(_screenConfig.ScreenConfig).map(function (size) {
    var mediaQuery = size.toLowerCase();
    delete others["col-" + mediaQuery];
    delete others["offset-" + mediaQuery];
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-Grid__col', (_classNames2 = {}, _classNames2["k-Grid__col--" + col] = col, _classNames2["k-Grid__col--offset-" + offset] = offset, _classNames2), classByMediaQuery(), className)
  }));
};

exports.GridCol = GridCol;
Grid.defaultProps = {
  className: null
};
GridCol.defaultProps = {
  col: '12',
  offset: null,
  className: null
};