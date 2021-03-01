import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import { NUM_COLUMNS, CONTAINER_MAX_WIDTH, GUTTER, CONTAINER_PADDING_THIN, CONTAINER_PADDING } from '../../../constants/grid-config';
var StyledDev = styled.div.withConfig({
  displayName: "dev-grid__StyledDev",
  componentId: "sc-1xn9237-0"
})([".k-DevGrid{position:fixed;top:0;z-index:calc(var(--DevGrid-z-index) - 1);width:100%;height:100%;pointer-events:none;}.k-DevGrid__container{margin-left:auto;margin-right:auto;box-sizing:border-box;max-width:", ";padding-left:", ";padding-right:", ";height:100%;outline:", " dotted rgba(0,0,0,0.2);@media (min-width:", "){padding-left:", ";padding-right:", ";}.k-DevGrid__row{height:100%;box-sizing:border-box;display:flex;margin-right:", ";margin-left:", ";}.k-DevGrid__col{height:100%;box-sizing:border-box;flex:0 0 auto;padding-right:", ";padding-left:", ";flex-basis:calc(100% / ", ");max-width:calc(100% / ", ");}.k-DevGrid__inner{height:100%;background:rgba(0,0,0,0.1);}}.k-DevBreakpoint{pointer-events:none;&:before{position:fixed;top:0;left:0;z-index:var(--DevGrid-z-index);width:2em;height:1.25em;padding:0.25em;background:rgba(0,0,0,0.1);border-bottom-right-radius:0.25rem;text-align:center;text-transform:uppercase;font-size:", ";line-height:1.25;color:rgba(0,0,0,0.75);content:'xxs';@media (min-width:", "){content:'xs';}@media (min-width:", "){content:'s';}@media (min-width:", "){content:'m';}@media (min-width:", "){content:'l';}@media (min-width:", "){content:'xl';}}}"], pxToRem(CONTAINER_MAX_WIDTH), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(1), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(-GUTTER / 2), pxToRem(-GUTTER / 2), pxToRem(GUTTER / 2), pxToRem(GUTTER / 2), NUM_COLUMNS, NUM_COLUMNS, stepToRem(-2), pxToRem(ScreenConfig.XS.min), pxToRem(ScreenConfig.S.min), pxToRem(ScreenConfig.M.min), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.XL.min)); // Grid over all elements that is toggled when calling Ctrl+G.

export var DevGrid = function DevGrid(_ref) {
  var visible = _ref.visible,
      storageKey = _ref.storageKey,
      zIndex = _ref.zIndex;

  var _useState = useState(visible),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setVisibility = _useState2[1];

  useEffect(function () {
    window.addEventListener('keydown', handleKeyDown);
    if (window.sessionStorage.getItem(storageKey)) setVisibility(true);
    return function () {
      return window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  useEffect(function () {
    if (isVisible) {
      window.sessionStorage.setItem(storageKey, 'on');
    } else {
      window.sessionStorage.removeItem(storageKey);
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
  return /*#__PURE__*/React.createElement(StyledDev, {
    className: "k-Dev",
    style: {
      '--DevGrid-z-index': zIndex
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-DevBreakpoint"
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-DevGrid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-DevGrid__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-DevGrid__row"
  }, _toConsumableArray(Array(NUM_COLUMNS).keys()).map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      className: "k-DevGrid__col",
      key: "DevGrid_".concat(item + 1)
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-DevGrid__inner"
    }));
  })))));
};
DevGrid.defaultProps = {
  storageKey: 'k-devgrid',
  zIndex: 9999,
  visible: false
};
DevGrid.propTypes = {
  storageKey: PropTypes.string,
  zIndex: PropTypes.number,
  visible: PropTypes.bool
};