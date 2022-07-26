"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.GridCol = exports.Grid = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _gridConfig = require("../../../constants/grid-config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledGrid = _styledComponents.default.div.withConfig({
  displayName: "grid__StyledGrid",
  componentId: "sc-lrwuxf-0"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;margin-right:", ";margin-left:", ";.k-Grid__col{box-sizing:border-box;flex:0 0 auto;padding-right:", ";padding-left:", ";}", " ", ""], (0, _typography.pxToRem)(-_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(-_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(_gridConfig.GUTTER / 2), Array(_gridConfig.NUM_COLUMNS + 1).fill(0).map((el, column) => (0, _styledComponents.css)([".k-Grid__col--", "{flex-basis:calc((100% / ", ") * ", ");max-width:calc((100% / ", ") * ", ");}.k-Grid__col--offset-", "{margin-left:calc((100% / ", ") * ", ");}"], column, _gridConfig.NUM_COLUMNS, column, _gridConfig.NUM_COLUMNS, column, column, _gridConfig.NUM_COLUMNS, column)), () => _screenConfig.ORDERED_SCREEN_SIZES.map(media => media !== _screenConfig.ORDERED_SCREEN_SIZES[0] && (0, _styledComponents.css)(["@media (min-width:", "){", "}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig[media].min), Array(_gridConfig.NUM_COLUMNS + 1).fill(0).map((el, column) => (0, _styledComponents.css)([".k-Grid__col--", "{flex-basis:calc((100% / ", ") * ", ");max-width:calc((100% / ", ") * ", ");}.k-Grid__col--offset-", "{margin-left:calc((100% / ", ") * ", ");}"], column + '-' + media.toLowerCase(), _gridConfig.NUM_COLUMNS, column, _gridConfig.NUM_COLUMNS, column, column + '-' + media.toLowerCase(), _gridConfig.NUM_COLUMNS, column)))));

const Grid = _ref => {
  let {
    className,
    ...others
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledGrid, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Grid', className)
  }, others));
};

exports.Grid = Grid;

const GridCol = _ref2 => {
  let {
    className,
    ...props
  } = _ref2;
  const {
    col,
    offset,
    ...others
  } = props;

  const classByMediaQuery = () => {
    const classNamesByMediaQuery = Object.keys(_screenConfig.ScreenConfig).map(size => {
      const mediaQuery = size.toLowerCase();
      const col = props["col-" + mediaQuery];
      const offset = props["offset-" + mediaQuery];
      return (0, _classnames.default)({
        ["k-Grid__col--" + col + "-" + mediaQuery]: col,
        ["k-Grid__col--offset-" + offset + "-" + mediaQuery]: !!offset || offset === 0
      });
    });
    return classNamesByMediaQuery;
  }; // Remove unknown props in others.


  Object.keys(_screenConfig.ScreenConfig).map(size => {
    const mediaQuery = size.toLowerCase();
    delete others["col-" + mediaQuery];
    delete others["offset-" + mediaQuery];
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-Grid__col', {
      ["k-Grid__col--" + col]: col,
      ["k-Grid__col--offset-" + offset]: offset
    }, classByMediaQuery(), className)
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