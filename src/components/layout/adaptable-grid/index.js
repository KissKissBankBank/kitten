"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.AdaptableGridCol = exports.AdaptableGrid = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gridConfig = require("../../../constants/grid-config");

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const GridProperties = /*#__PURE__*/(0, _react.createContext)({});

const AdaptableGrid = _ref => {
  let {
    children,
    gutter,
    colNumber,
    colAlign,
    as,
    className
  } = _ref;
  const gridProperties = {
    colAlign,
    colNumber,
    gutter
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

const AdaptableGridCol = _ref2 => {
  let {
    children,
    col,
    offset,
    as,
    className,
    ...other
  } = _ref2;
  const [styles, setStyles] = (0, _react.useState)(null);
  const {
    colAlign,
    colNumber,
    gutter
  } = (0, _react.useContext)(GridProperties);
  const marginDirection = colAlign === 'right' ? 'right' : 'left';
  (0, _react.useEffect)(() => {
    const props = { ...other
    };
    const stylesByMediaQuery = Object.keys(_screenConfig.ScreenConfig).map(size => {
      const mediaQuery = size.toLowerCase();
      const col = props["col-" + mediaQuery];
      const offset = props["offset-" + mediaQuery];

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
    props: { ...other
    },
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

const StyledGrid = _styledComponents.default.div.withConfig({
  displayName: "adaptable-grid__StyledGrid",
  componentId: "sc-1x0ouju-0"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:", ";margin-left:", ";margin-right:", ";"], _ref3 => {
  let {
    colAlign
  } = _ref3;
  return colAlign;
}, _ref4 => {
  let {
    gutter
  } = _ref4;
  return (0, _typography.pxToRem)(-gutter / 2);
}, _ref5 => {
  let {
    gutter
  } = _ref5;
  return (0, _typography.pxToRem)(-gutter / 2);
});

const StyledGridCol = _styledComponents.default.div.withConfig({
  displayName: "adaptable-grid__StyledGridCol",
  componentId: "sc-1x0ouju-1"
})(["display:block;box-sizing:border-box;padding-left:", ";padding-right:", ";flex:0 0 auto;width:", "%;", " ", ""], _ref6 => {
  let {
    gutter
  } = _ref6;
  return (0, _typography.pxToRem)(gutter / 2);
}, _ref7 => {
  let {
    gutter
  } = _ref7;
  return (0, _typography.pxToRem)(gutter / 2);
}, _ref8 => {
  let {
    col,
    colNumber
  } = _ref8;
  return col * 100 / colNumber;
}, _ref9 => {
  let {
    offset,
    colNumber,
    marginDirection
  } = _ref9;
  if (!offset) return;
  return (0, _styledComponents.css)(["margin-", ":", "%;"], marginDirection, offset * 100 / colNumber);
}, _ref10 => {
  let {
    stylesByMediaQuery
  } = _ref10;
  return stylesByMediaQuery;
});