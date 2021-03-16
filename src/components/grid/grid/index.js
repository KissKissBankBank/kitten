"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridCol = exports.Grid = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _gridConfig = require("../../../constants/grid-config");

var StyledGrid = _styledComponents.default.div.withConfig({
  displayName: "grid__StyledGrid",
  componentId: "l82tx2-0"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;margin-right:", ";margin-left:", ";.k-Grid__col{box-sizing:border-box;flex:0 0 auto;padding-right:", ";padding-left:", ";}", " ", ""], (0, _typography.pxToRem)(-_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(-_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(_gridConfig.GUTTER / 2), (0, _toConsumableArray2.default)(Array(_gridConfig.NUM_COLUMNS + 1).keys()).map(function (column) {
  return (0, _styledComponents.css)([".k-Grid__col--", "{flex-basis:calc((100% / ", ") * ", ");max-width:calc((100% / ", ") * ", ");}.k-Grid__col--offset-", "{margin-left:calc((100% / ", ") * ", ");}"], column, _gridConfig.NUM_COLUMNS, column, _gridConfig.NUM_COLUMNS, column, column, _gridConfig.NUM_COLUMNS, column);
}), function () {
  return _screenConfig.ORDERED_SCREEN_SIZES.map(function (media) {
    return media !== _screenConfig.ORDERED_SCREEN_SIZES[0] && (0, _styledComponents.css)(["@media (min-width:", "){", "}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig[media].min), (0, _toConsumableArray2.default)(Array(_gridConfig.NUM_COLUMNS + 1).keys()).map(function (column) {
      return (0, _styledComponents.css)([".k-Grid__col--", "{flex-basis:calc((100% / ", ") * ", ");max-width:calc((100% / ", ") * ", ");}.k-Grid__col--offset-", "{margin-left:calc((100% / ", ") * ", ");}"], column + '-' + media.toLowerCase(), _gridConfig.NUM_COLUMNS, column, _gridConfig.NUM_COLUMNS, column, column + '-' + media.toLowerCase(), _gridConfig.NUM_COLUMNS, column);
    }));
  });
});

var Grid = function Grid(_ref) {
  var className = _ref.className,
      others = (0, _objectWithoutProperties2.default)(_ref, ["className"]);
  return /*#__PURE__*/_react.default.createElement(StyledGrid, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Grid', className)
  }, others));
};

exports.Grid = Grid;

var GridCol = function GridCol(_ref2) {
  var _classNames2;

  var className = _ref2.className,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className"]);
  var col = props.col,
      offset = props.offset,
      others = (0, _objectWithoutProperties2.default)(props, ["col", "offset"]);

  var classByMediaQuery = function classByMediaQuery() {
    var classNamesByMediaQuery = Object.keys(_screenConfig.ScreenConfig).map(function (size) {
      var _classNames;

      var mediaQuery = size.toLowerCase();
      var col = props["col-".concat(mediaQuery)];
      var offset = props["offset-".concat(mediaQuery)];
      return (0, _classnames.default)(classNamesByMediaQuery, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "k-Grid__col--".concat(col, "-").concat(mediaQuery), col), (0, _defineProperty2.default)(_classNames, "k-Grid__col--offset-".concat(offset, "-").concat(mediaQuery), !!offset || offset === 0), _classNames));
    });
    return classNamesByMediaQuery;
  }; // Remove unknown props in others.


  Object.keys(_screenConfig.ScreenConfig).map(function (size) {
    var mediaQuery = size.toLowerCase();
    delete others["col-".concat(mediaQuery)];
    delete others["offset-".concat(mediaQuery)];
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-Grid__col', (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "k-Grid__col--".concat(col), col), (0, _defineProperty2.default)(_classNames2, "k-Grid__col--offset-".concat(offset), offset), _classNames2), classByMediaQuery(), className)
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