"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevGrid = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _gridConfig = require("../../../constants/grid-config");

var _elementHelper = require("../../../helpers/dom/element-helper");

var StyledDev = _styledComponents.default.div.withConfig({
  displayName: "dev-grid__StyledDev",
  componentId: "sc-1xn9237-0"
})([".k-DevGrid{position:fixed;top:0;z-index:calc(var(--DevGrid-z-index) - 1);width:100%;height:100%;pointer-events:none;}.k-DevGrid__container{margin-left:auto;margin-right:auto;box-sizing:border-box;max-width:", ";padding-left:", ";padding-right:", ";height:100%;outline:", " dotted rgba(0,0,0,0.2);@media (min-width:", "){padding-left:", ";padding-right:", ";}.k-DevGrid__row{height:100%;box-sizing:border-box;display:flex;margin-right:", ";margin-left:", ";}.k-DevGrid__col{height:100%;box-sizing:border-box;flex:0 0 auto;padding-right:", ";padding-left:", ";flex-basis:calc(100% / ", ");max-width:calc(100% / ", ");}.k-DevGrid__inner{height:100%;background:rgba(0,0,0,0.1);}}.k-DevBreakpoint{pointer-events:none;&:before{position:fixed;top:0;left:0;z-index:var(--DevGrid-z-index);width:2em;height:1.25em;padding:0.25em;background:rgba(0,0,0,0.1);border-bottom-right-radius:0.25rem;text-align:center;text-transform:uppercase;font-size:", ";line-height:1.25;color:rgba(0,0,0,0.75);content:'xxs';@media (min-width:", "){content:'xs';}@media (min-width:", "){content:'s';}@media (min-width:", "){content:'m';}@media (min-width:", "){content:'l';}@media (min-width:", "){content:'xl';}}}"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(-_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(-_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(_gridConfig.GUTTER / 2), (0, _typography.pxToRem)(_gridConfig.GUTTER / 2), _gridConfig.NUM_COLUMNS, _gridConfig.NUM_COLUMNS, (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min)); // Grid over all elements that is toggled when calling Ctrl+G.


var DevGrid = function DevGrid(_ref) {
  var visible = _ref.visible,
      storageKey = _ref.storageKey,
      zIndex = _ref.zIndex;

  var _useState = (0, _react.useState)(visible),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isVisible = _useState2[0],
      setVisibility = _useState2[1];

  (0, _react.useEffect)(function () {
    _elementHelper.domElementHelper.canUseDom() && window.addEventListener('keydown', handleKeyDown);

    if (_elementHelper.domElementHelper.canUseDom() && window.sessionStorage.getItem(storageKey)) {
      setVisibility(true);
    }

    return function () {
      return _elementHelper.domElementHelper.canUseDom() && window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (isVisible) {
      _elementHelper.domElementHelper.canUseDom() && window.sessionStorage.setItem(storageKey, 'on');
    } else {
      _elementHelper.domElementHelper.canUseDom() && window.sessionStorage.removeItem(storageKey);
    }
  }, [isVisible]);

  var handleKeyDown = function handleKeyDown(e) {
    if (!e.ctrlKey || e.key !== 'g') return;
    e.preventDefault();
    setVisibility(function (current) {
      return !current;
    });
  };

  if (!isVisible) return null;
  return /*#__PURE__*/_react.default.createElement(StyledDev, {
    className: "k-Dev",
    style: {
      '--DevGrid-z-index': zIndex
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DevBreakpoint"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DevGrid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DevGrid__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DevGrid__row"
  }, (0, _toConsumableArray2.default)(Array(_gridConfig.NUM_COLUMNS).keys()).map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "k-DevGrid__col",
      key: "DevGrid_".concat(item + 1)
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "k-DevGrid__inner"
    }));
  })))));
};

exports.DevGrid = DevGrid;
DevGrid.defaultProps = {
  storageKey: 'k-devgrid',
  zIndex: 9999,
  visible: false
};
DevGrid.propTypes = {
  storageKey: _propTypes.default.string,
  zIndex: _propTypes.default.number,
  visible: _propTypes.default.bool
};