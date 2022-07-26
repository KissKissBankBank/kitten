import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/fp/debounce';
import { Grid, GridCol } from '../../../layout/grid';
import { VerticalStroke } from '../../../typography/vertical-stroke';
import { ScreenConfig } from '../../../../constants/screen-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import styled from 'styled-components';
const strokeHeight = 80;
const marginStroke = 2;
const tabletGutter = 50 / 2;
const desktopGutter = 40 / 2;
const StyledTriptych = styled(_ref => {
  let {
    secondElementMarginTop,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Grid, props);
}).withConfig({
  displayName: "triptych__StyledTriptych",
  componentId: "sc-90mnmo-0"
})([".k-Triptych__verticalStroke{display:block;height:", ";margin:0 auto ", ";@media (max-width:", "px){height:", ";}}.k-Triptych__contentColumn.k-Triptych__contentColumn--odd{@media (min-width:", "px){margin-top:-", ";}}.k-Triptych__contentColumn:nth-last-child(3){margin-bottom:", ";@media (min-width:", ") and (max-width:", "){padding-left:", ";}@media (min-width:", "){margin-bottom:0;padding-right:", ";}}.k-Triptych__contentColumn:nth-last-child(2){margin-bottom:", ";@media (min-width:", ") and (max-width:", "){transition:margin-top 500 ease;margin-top:", ";padding-right:", ";}@media (min-width:", "){margin-bottom:0;padding-right:", ";padding-left:", ";}}.k-Triptych__contentColumn:nth-last-child(1){@media (min-width:", ") and (max-width:", "){padding-left:", ";}@media (min-width:", "){padding-left:", ";}}"], pxToRem(strokeHeight), pxToRem(20), ScreenConfig.S.max, pxToRem(50), ScreenConfig.L.min, pxToRem(strokeHeight * 2 / 3 + marginStroke * 10), pxToRem(50), pxToRem(ScreenConfig.M.min), pxToRem(ScreenConfig.M.max), pxToRem(tabletGutter), pxToRem(ScreenConfig.L.min), pxToRem(desktopGutter), pxToRem(50), pxToRem(ScreenConfig.M.min), pxToRem(ScreenConfig.M.max), _ref2 => {
  let {
    secondElementMarginTop
  } = _ref2;
  return pxToRem(-secondElementMarginTop);
}, pxToRem(tabletGutter), pxToRem(ScreenConfig.L.min), pxToRem(desktopGutter), pxToRem(desktopGutter), pxToRem(ScreenConfig.M.min), pxToRem(ScreenConfig.M.max), pxToRem(tabletGutter), pxToRem(ScreenConfig.L.min), pxToRem(desktopGutter));
export const Triptych = _ref3 => {
  let {
    title,
    item1,
    item2,
    item3
  } = _ref3;
  const [secondElementMarginTop, setsecondElementMarginTop] = useState(0);
  const titleElement = useRef(null);
  const firstElement = useRef(null);

  const updateSecondCardMargin = () => {
    const titleHeight = titleElement.current.clientHeight;
    const firstHeight = firstElement.current.clientHeight;
    setsecondElementMarginTop(firstHeight - titleHeight);
  };

  const debounceUpdateMargin = () => debounce(200)(updateSecondCardMargin);

  useEffect(() => {
    debounceUpdateMargin();
    window.addEventListener('resize', debounceUpdateMargin);
    window.addEventListener('load', debounceUpdateMargin);
    return () => {
      window.removeEventListener('resize', debounceUpdateMargin);
      window.removeEventListener('load', debounceUpdateMargin);
    };
  }, []);
  return /*#__PURE__*/React.createElement(StyledTriptych, {
    className: "k-Triptych k-u-align-center",
    secondElementMarginTop: secondElementMarginTop
  }, /*#__PURE__*/React.createElement(GridCol, {
    "col-l": "10",
    "offset-l": "1",
    "col-m": "6",
    "offset-m": "0"
  }, /*#__PURE__*/React.createElement("div", {
    ref: titleElement
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-u-margin-bottom-double"
  }, title), /*#__PURE__*/React.createElement(VerticalStroke, {
    size: "huge",
    className: "k-Triptych__verticalStroke k-u-margin-bottom-double"
  }))), /*#__PURE__*/React.createElement(GridCol, {
    "col-l": "4",
    "col-m": "6",
    className: "k-Triptych__contentColumn k-Triptych__contentColumn--odd"
  }, /*#__PURE__*/React.createElement("div", {
    ref: firstElement
  }, item1)), /*#__PURE__*/React.createElement(GridCol, {
    "col-l": "4",
    "col-m": "6",
    className: "k-Triptych__contentColumn"
  }, item2), /*#__PURE__*/React.createElement(GridCol, {
    "col-l": "4",
    "col-m": "6",
    className: "k-Triptych__contentColumn k-Triptych__contentColumn--odd"
  }, item3));
};
Triptych.propTypes = {
  title: PropTypes.node.isRequired,
  item1: PropTypes.node.isRequired,
  item2: PropTypes.node.isRequired,
  item3: PropTypes.node.isRequired
};