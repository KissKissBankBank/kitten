import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.search.js";
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import Bowser from 'bowser';
import { SideGrid, SideGridContent, SideGridAside } from '../../../components/layout/side-grid';
import domElementHelper from '../../../helpers/dom/element-helper';
var StyledSideLayout = styled(SideGrid).withConfig({
  displayName: "side-layout__StyledSideLayout",
  componentId: "sc-ocof17-0"
})([".k-VerticalGrid__fluid{flex-basis:100%;}.k-VerticalGrid__fullHeight{height:100vh;}.k-VerticalGrid__container{display:flex;height:100%;}.k-VerticalGrid__element{flex-grow:1;}"]);
export var SideLayout = function SideLayout(_ref) {
  var className = _ref.className,
      children = _ref.children,
      sidebar = _ref.sidebar;

  var _useState = useState(false),
      needsFullHeight = _useState[0],
      setNeedsFullHeight = _useState[1];

  useEffect(function () {
    if (!domElementHelper.canUseDom()) return;
    var browser = Bowser.getParser(window.navigator.userAgent);
    setNeedsFullHeight(browser.isBrowser('safari'));
  }, []);
  var hasFluidLayout = (className || '').search('k-VerticalGrid__fluid') != -1;
  return /*#__PURE__*/React.createElement(StyledSideLayout, {
    className: classNames(className, {
      'k-VerticalGrid__fullHeight': hasFluidLayout && needsFullHeight
    }),
    containerClassName: "k-VerticalGrid__container",
    rowClassName: "k-VerticalGrid__element"
  }, /*#__PURE__*/React.createElement(SideGridContent, null, children), /*#__PURE__*/React.createElement(SideGridAside, {
    className: "k-VerticalGrid__element"
  }, sidebar));
};
SideLayout.defaultProps = {
  children: 'Children',
  sidebar: null
};