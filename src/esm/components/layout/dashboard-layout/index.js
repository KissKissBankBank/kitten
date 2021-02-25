import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isFunction from 'lodash/fp/isFunction';
import classNames from 'classnames';
import { NUM_COLUMNS, GUTTER, CONTAINER_PADDING_THIN, CONTAINER_PADDING } from '../../../constants/grid-config';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { useMedia } from '../../../helpers/utils/use-media-query';
import { getMinQuery } from '../../../helpers/utils/media-queries';
import { getReactElementsByType, getReactElementsWithoutTypeArray } from '../../../helpers/react/react-elements';
import { BurgerIcon } from '../../../components/icons/burger-icon';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
import { Flow } from './flow';
var ALL_COLS = "(100vw - ".concat(pxToRem(2 * CONTAINER_PADDING + (NUM_COLUMNS - 1) * GUTTER), ")");
var ONE_COL = "(".concat(ALL_COLS, " / ").concat(NUM_COLUMNS, ")");
var SIX_COLS = "(".concat(ALL_COLS, " / 2 + ").concat(pxToRem(5 * GUTTER + CONTAINER_PADDING), ")");
var StyledDashboard = styled.div.withConfig({
  displayName: "dashboard-layout__StyledDashboard",
  componentId: "sc-12l68xb-0"
})(["position:relative;overscroll-behavior:none;*{box-sizing:border-box;}.k-DashboardLayout{min-height:100vh;display:grid;.k-DashboardLayout__sideWrapper{background-color:", ";}}.k-DashboardLayout__backLink:focus{outline:", " solid ", ";outline-offset:", ";}@media (max-width:", "){overflow:hidden;position:relative;.k-DashboardLayout{--DashboardLayout-main-margin:calc( ", " + ", " );width:calc(", " + 100vw);grid-template-columns:calc(", ") calc(100vw + ", ");transform:translateX(calc(-1 * ", " - ", "));transition:transform 0.3s ease-in-out;.k-DashboardLayout__heading__button__text,.k-DashboardLayout__backLink__text{clip:rect(0 0 0 0);clip-path:inset(100%);height:", ";overflow:hidden;position:absolute;white-space:nowrap;width:", ";}&.k-DashboardLayout--isOpen{position:fixed;transform:none;transition:transform 0.3s ease-in-out;.k-DashboardLayout__mainWrapper .k-DashboardLayout__main::before{opacity:.8;background-color:", ";pointer-events:all;}}.k-DashboardLayout__sideWrapper{height:100vh;overflow-y:scroll;padding:", ";display:flex;flex-direction:column;gap:", ";.k-DashboardLayout__backLink{flex:0 0 ", ";width:", ";height:", ";background-color:", ";border-radius:", ";display:flex;align-items:center;justify-content:center;transition:background-color .2s ease;}.k-DashboardLayout__heading{display:none;}.k-DashboardLayout__navigation{flex:1 1 100%;}.k-DashboardLayout__footer{flex:0 1 auto;}}.k-DashboardLayout__mainWrapper{background-color:", ";width:calc(100vw + ", ");display:flex;align-items:stretch;flex-direction:column;.k-DashboardLayout__heading{padding-left:", ";padding-right:", ";height:", ";flex:0 0 ", ";display:flex;align-items:center;background-color:", ";border-left:", " solid ", ";> *{align-self:initial;}}.k-DashboardLayout__heading__buttonWrapper{flex:0 0 ", ";margin-left:", ";margin-right:", ";}.k-DashboardLayout__heading__button{padding:", ";}.k-DashboardLayout__main{position:relative;margin-left:", ";flex:1 0 auto;&::before{content:\"\";position:absolute;top:0;left:", ";right:0;bottom:0;background-color:", ";opacity:0;pointer-events:none;z-index:100;transition:background-color .2s ease-in-out,opacity .2s ease-in-out;}&:not(.k-DashboardLayout__main--fullHeight){padding-top:", ";padding-bottom:", ";}> *:not(.k-DashboardLayout__fullWidth){margin-left:var(--DashboardLayout-main-margin);margin-right:var(--DashboardLayout-main-margin);}}}}}@media (max-width:", "){.k-DashboardLayout{--DashboardLayout-main-margin:", ";width:calc(200vw - ", ");grid-template-columns:calc(100vw - ", ") calc( 100vw + ", " );transform:translateX(calc(-100vw + ", "));.k-DashboardLayout__sideWrapper{padding:", ";}.k-DashboardLayout__mainWrapper{.k-DashboardLayout__heading{padding-left:", ";padding-right:", ";}.k-DashboardLayout__main{&:not(.k-DashboardLayout__main--fullHeight){padding-top:", ";padding-bottom:", ";}}}}}@media (min-width:", "){.k-DashboardLayout{grid-template-columns:25% 1fr;.k-DashboardLayout__sideWrapper{display:flex;flex-direction:column;height:100vh;position:sticky;top:0;overflow:scroll;gap:", ";padding:", ";.k-DashboardLayout__backLink{flex:0 0 auto;align-self:start;display:inline-flex;align-items:center;gap:", ";color:", ";transition:color .2s ease;", " font-size:", ";line-height:1.2;text-decoration:none;svg{fill:currentColor;}&:hover{color:", ";}}.k-DashboardLayout__heading{flex:0 1 auto;}.k-DashboardLayout__navigation{flex:1 1 100%;}.k-DashboardLayout__footer{flex:0 1 auto;}}.k-DashboardLayout__mainWrapper{background-color:", ";.k-DashboardLayout__heading{display:none;}.k-DashboardLayout__main{&:not(.k-DashboardLayout__main--fullHeight){padding-top:", ";padding-bottom:", ";}> *:not(.k-DashboardLayout__fullWidth){margin-left:10%;margin-right:15%;}}}}}@media (min-width:", "){.k-DashboardLayout{grid-template-columns:", " 1fr;}}.k-DashboardLayout__sideWrapper,.k-DashboardLayout__mainWrapper{&:focus{outline:", " solid ", ";}}.k-DashboardLayout__quickAccessLink{position:absolute;top:0;left:-100%;z-index:110;padding:", " ", ";color:", ";background-color:", ";", " line-height:1;font-size:", ";text-decoration:none;transition:opacity .2s ease,left .2s ease;transition-delay:0,0;opacity:0;&:focus,&:active{left:0;opacity:1;transition-delay:0,.2s;outline:", " solid ", ";}}"], COLORS.font1, COLORS.primary4, pxToRem(2), pxToRem(2), pxToRem(ScreenConfig.M.max), ONE_COL, pxToRem(GUTTER + CONTAINER_PADDING), SIX_COLS, SIX_COLS, pxToRem(2), SIX_COLS, pxToRem(2), pxToRem(1), pxToRem(1), COLORS.font1, pxToRem(30), pxToRem(30), pxToRem(40), pxToRem(40), pxToRem(40), COLORS.line3, pxToRem(6), COLORS.background1, pxToRem(2), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(80), pxToRem(80), COLORS.font1, pxToRem(2), COLORS.line3, pxToRem(12 + 12 * 2), pxToRem(-12), pxToRem(12), pxToRem(12), pxToRem(2), pxToRem(-2), COLORS.background1, pxToRem(80), pxToRem(80), pxToRem(ScreenConfig.XS.max), pxToRem(CONTAINER_PADDING_THIN), pxToRem(50 + 2), pxToRem(50), pxToRem(2), pxToRem(50 - 2), pxToRem(20), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(50), pxToRem(50), pxToRem(ScreenConfig.L.min), pxToRem(30), pxToRem(30), pxToRem(15), COLORS.background1, TYPOGRAPHY.fontStyles.regular, stepToRem(-1), COLORS.primary1, COLORS.background1, pxToRem(80), pxToRem(80), pxToRem(ScreenConfig.XL.min), pxToRem(385), pxToRem(2), COLORS.primary4, pxToRem(20), pxToRem(30), COLORS.background1, COLORS.font1, TYPOGRAPHY.fontStyles.regular, stepToRem(1), pxToRem(2), COLORS.primary4);
export var DashboardLayout = function DashboardLayout(_ref) {
  var children = _ref.children,
      backLinkProps = _ref.backLinkProps,
      buttonProps = _ref.buttonProps,
      quickAccessLinkText = _ref.quickAccessLinkText,
      fullHeightContent = _ref.fullHeightContent,
      props = _objectWithoutProperties(_ref, ["children", "backLinkProps", "buttonProps", "quickAccessLinkText", "fullHeightContent"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      touchCoords = _useState4[0],
      setTouchCoords = _useState4[1];

  var sideBarElement = useRef(null);
  var contentElement = useRef(null);

  var renderComponentChildrenArray = function renderComponentChildrenArray(childrenArray, otherProps) {
    return childrenArray.map(function (child) {
      var _child$props;

      if (!child || !child.props) return null;
      return isFunction((_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.children) ? React.cloneElement(child, {
        children: child.props.children(_extends({
          openSideBar: function openSideBar() {
            return setOpen(true);
          },
          closeSideBar: function closeSideBar() {
            return setOpen(false);
          },
          isSidebarOpen: isOpen
        }, otherProps))
      }) : React.cloneElement(child, otherProps);
    });
  };

  var renderComponentArray = function renderComponentArray(childrenArray, otherProps) {
    return childrenArray.map(function (child) {
      if (!child) return null;
      return isFunction(child) ? child(_extends({
        openSideBar: function openSideBar() {
          return setOpen(true);
        },
        closeSideBar: function closeSideBar() {
          return setOpen(false);
        },
        isSidebarOpen: isOpen
      }, otherProps)) : React.cloneElement(child, otherProps);
    });
  };

  var isDesktop = useMedia({
    queries: [getMinQuery(ScreenConfig.L.min)],
    values: [true],
    defaultValue: false
  });
  useEffect(function () {
    if (sideBarElement && contentElement) {
      if (isOpen) {
        var _sideBarElement$curre;

        sideBarElement === null || sideBarElement === void 0 ? void 0 : (_sideBarElement$curre = sideBarElement.current) === null || _sideBarElement$curre === void 0 ? void 0 : _sideBarElement$curre.focus();
        window.addEventListener('keydown', handleKeyDown);
        contentElement.current.addEventListener('click', handleMainClick);
        sideBarElement.current.addEventListener('touchstart', handleTouchStart);
        sideBarElement.current.addEventListener('touchend', handleTouchEnd);
        return function () {
          window.removeEventListener('keydown', handleKeyDown);
          contentElement.current.removeEventListener('click', handleMainClick);
          sideBarElement.current.removeEventListener('touchstart', handleTouchStart);
          sideBarElement.current.removeEventListener('touchend', handleTouchEnd);
        };
      }

      if (!isOpen) {
        var _contentElement$curre;

        contentElement === null || contentElement === void 0 ? void 0 : (_contentElement$curre = contentElement.current) === null || _contentElement$curre === void 0 ? void 0 : _contentElement$curre.focus();
      }
    }
  }, [isOpen, sideBarElement, contentElement]);

  var handleTouchStart = function handleTouchStart(event) {
    var _event$touches$;

    setTouchCoords([event === null || event === void 0 ? void 0 : (_event$touches$ = event.touches[0]) === null || _event$touches$ === void 0 ? void 0 : _event$touches$.clientX]);
  };

  var handleTouchEnd = function handleTouchEnd(event) {
    setTouchCoords(function (current) {
      var _event$changedTouches;

      return [current[0], event === null || event === void 0 ? void 0 : (_event$changedTouches = event.changedTouches[0]) === null || _event$changedTouches === void 0 ? void 0 : _event$changedTouches.clientX];
    });
  };

  useEffect(function () {
    if (touchCoords[1] && touchCoords[0]) {
      var distanceX = touchCoords[1] - touchCoords[0];

      if (distanceX < -40) {
        setOpen(false);
      }
    }
  }, [touchCoords]);

  var handleButtonClick = function handleButtonClick() {
    setOpen(function (current) {
      return !current;
    });
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  var handleMainClick = function handleMainClick(event) {
    event.stopPropagation();
    setOpen(false);
  };

  return /*#__PURE__*/React.createElement(StyledDashboard, {
    className: "k-DashboardLayout__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('k-DashboardLayout', props.className, {
      'k-DashboardLayout--isOpen': isOpen
    })
  }, /*#__PURE__*/React.createElement("a", {
    className: "k-DashboardLayout__quickAccessLink",
    href: "#main"
  }, quickAccessLinkText), /*#__PURE__*/React.createElement("div", {
    ref: sideBarElement,
    tabIndex: -1,
    className: "k-DashboardLayout__sideWrapper",
    "aria-hidden": isDesktop ? null : !isOpen
  }, /*#__PURE__*/React.createElement("a", _extends({}, backLinkProps, {
    className: classNames('k-DashboardLayout__backLink', backLinkProps.className)
  }), /*#__PURE__*/React.createElement(ArrowIcon, {
    direction: "left",
    color: COLORS.background1,
    version: "solid"
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardLayout__backLink__text"
  }, backLinkProps.children)), renderComponentChildrenArray(getReactElementsByType({
    children: children,
    type: Header
  })), renderComponentChildrenArray(getReactElementsByType({
    children: children,
    type: SideContent
  })), renderComponentChildrenArray(getReactElementsByType({
    children: children,
    type: SideFooter
  }))), /*#__PURE__*/React.createElement("div", {
    ref: contentElement,
    tabIndex: -1,
    className: "k-DashboardLayout__mainWrapper"
  }, renderComponentChildrenArray(getReactElementsByType({
    children: children,
    type: Header
  }), {
    isOpen: isOpen,
    hasButton: true,
    buttonProps: _extends({}, buttonProps, {
      onClick: handleButtonClick,
      'aria-expanded': isOpen ? isOpen : null
    })
  }), /*#__PURE__*/React.createElement("main", {
    className: classNames('k-DashboardLayout__main', {
      'k-DashboardLayout__main--fullHeight': fullHeightContent
    }),
    id: "main"
  }, renderComponentArray(getReactElementsWithoutTypeArray({
    children: children,
    typeArray: [Header, SideContent, SideFooter]
  }))))));
};

var Header = function Header(_ref2) {
  var className = _ref2.className,
      hasButton = _ref2.hasButton,
      buttonProps = _ref2.buttonProps,
      children = _ref2.children,
      isOpen = _ref2.isOpen,
      props = _objectWithoutProperties(_ref2, ["className", "hasButton", "buttonProps", "children", "isOpen"]);

  var _ref3 = buttonProps || {},
      openLabel = _ref3.openLabel,
      closeLabel = _ref3.closeLabel,
      otherButtonProps = _objectWithoutProperties(_ref3, ["openLabel", "closeLabel"]);

  return /*#__PURE__*/React.createElement("header", _extends({
    className: classNames('k-DashboardLayout__heading', className)
  }, props), hasButton && buttonProps && /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardLayout__heading__buttonWrapper"
  }, /*#__PURE__*/React.createElement("button", _extends({}, otherButtonProps, {
    className: classNames('k-DashboardLayout__heading__button', 'k-u-reset-button', buttonProps.className)
  }), /*#__PURE__*/React.createElement(BurgerIcon, {
    isActive: isOpen,
    mainColor: COLORS.background1
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardLayout__heading__button__text"
  }, isOpen ? closeLabel : openLabel))), children);
};

var SideContent = function SideContent(_ref4) {
  var className = _ref4.className,
      props = _objectWithoutProperties(_ref4, ["className"]);

  return /*#__PURE__*/React.createElement("section", _extends({
    className: classNames('k-DashboardLayout__navigation', className)
  }, props));
};

var SideFooter = function SideFooter(_ref5) {
  var className = _ref5.className,
      props = _objectWithoutProperties(_ref5, ["className"]);

  return /*#__PURE__*/React.createElement("footer", _extends({
    className: classNames('k-DashboardLayout__footer', className)
  }, props));
};

DashboardLayout.propTypes = {
  backLinkProps: PropTypes.object,
  buttonProps: PropTypes.shape({
    openLabel: PropTypes.node.isRequired,
    closeLabel: PropTypes.node.isRequired
  }),
  quickAccessLinkText: PropTypes.node.isRequired,
  fullHeightContent: PropTypes.bool
};
Header.propTypes = {
  buttonProps: PropTypes.shape({
    openLabel: PropTypes.node.isRequired,
    closeLabel: PropTypes.node.isRequired
  }),
  hasButton: PropTypes.bool,
  isOpen: PropTypes.bool
};
DashboardLayout.Header = Header;
DashboardLayout.SideContent = SideContent;
DashboardLayout.SideFooter = SideFooter;
DashboardLayout.Flow = Flow;