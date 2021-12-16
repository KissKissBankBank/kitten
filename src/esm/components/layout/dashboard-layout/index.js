import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "backLinkProps", "buttonProps", "quickAccessLinkText", "fullHeightContent", "overlayZIndex", "style"],
    _excluded2 = ["className", "hasButton", "buttonProps", "children", "isOpen"],
    _excluded3 = ["openLabel", "closeLabel"],
    _excluded4 = ["className", "children", "tag"],
    _excluded5 = ["className"],
    _excluded6 = ["className"],
    _excluded7 = ["className"],
    _excluded8 = ["className", "isOpen", "children"];
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash/fp/isFunction';
import classNames from 'classnames';
import COLORS from '../../../constants/colors-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { useMedia } from '../../../helpers/utils/use-media-query';
import { getMinQuery } from '../../../helpers/utils/media-queries';
import { getReactElementsByType, getReactElementsWithoutTypeArray } from '../../../helpers/react/react-elements';
import { DASHBOARD_HIDE_CONTENT_EVENT, DASHBOARD_SHOW_CONTENT_EVENT, dispatchEvent } from '../../../helpers/dom/events';
import { BurgerIcon } from '../../../components/graphics/icons/burger-icon';
import { ArrowIcon } from '../../../components/graphics/icons/arrow-icon';
import { Flow } from './flow';
import { StyledDashboard } from './styles';
export var DashboardLayout = function DashboardLayout(_ref) {
  var children = _ref.children,
      backLinkProps = _ref.backLinkProps,
      buttonProps = _ref.buttonProps,
      quickAccessLinkText = _ref.quickAccessLinkText,
      fullHeightContent = _ref.fullHeightContent,
      _ref$overlayZIndex = _ref.overlayZIndex,
      overlayZIndex = _ref$overlayZIndex === void 0 ? 100 : _ref$overlayZIndex,
      style = _ref.style,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(false),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var _useState2 = useState([]),
      touchCoords = _useState2[0],
      setTouchCoords = _useState2[1];

  var sideBarElement = useRef(null);
  var contentElement = useRef(null);

  var renderComponentChildrenArray = function renderComponentChildrenArray(childrenArray, otherProps) {
    return childrenArray.map(function (child) {
      var _child$props;

      if (!child || !child.props) return null;
      return isFunction((_child$props = child.props) == null ? void 0 : _child$props.children) ? /*#__PURE__*/React.cloneElement(child, {
        children: child.props.children(_extends({
          openSideBar: function openSideBar() {
            return setOpen(true);
          },
          closeSideBar: function closeSideBar() {
            return setOpen(false);
          },
          isSidebarOpen: isOpen
        }, otherProps))
      }) : /*#__PURE__*/React.cloneElement(child, otherProps);
    });
  };

  var renderComponentArray = function renderComponentArray(childrenArray, otherProps) {
    return childrenArray.map(function (child, index) {
      if (!child) return null;
      return isFunction(child) ? child(_extends({
        openSideBar: function openSideBar() {
          return setOpen(true);
        },
        closeSideBar: function closeSideBar() {
          return setOpen(false);
        },
        isSidebarOpen: isOpen
      }, otherProps)) : /*#__PURE__*/React.cloneElement(child, _extends({
        key: "content_child_" + index
      }, otherProps));
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

        dispatchEvent(DASHBOARD_HIDE_CONTENT_EVENT)();
        sideBarElement == null ? void 0 : (_sideBarElement$curre = sideBarElement.current) == null ? void 0 : _sideBarElement$curre.focus();
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

        dispatchEvent(DASHBOARD_SHOW_CONTENT_EVENT)();
        contentElement == null ? void 0 : (_contentElement$curre = contentElement.current) == null ? void 0 : _contentElement$curre.focus();
      }
    }
  }, [isOpen, sideBarElement, contentElement]);

  var handleTouchStart = function handleTouchStart(event) {
    var _event$touches$;

    setTouchCoords([event == null ? void 0 : (_event$touches$ = event.touches[0]) == null ? void 0 : _event$touches$.clientX]);
  };

  var handleTouchEnd = function handleTouchEnd(event) {
    setTouchCoords(function (current) {
      var _event$changedTouches;

      return [current[0], event == null ? void 0 : (_event$changedTouches = event.changedTouches[0]) == null ? void 0 : _event$changedTouches.clientX];
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
  }, renderComponentChildrenArray(getReactElementsByType({
    children: children,
    type: SiteHeader
  })), /*#__PURE__*/React.createElement("a", {
    className: "k-DashboardLayout__quickAccessLink",
    href: "#main"
  }, quickAccessLinkText), /*#__PURE__*/React.createElement("div", {
    className: classNames('k-DashboardLayout', props.className, {
      'k-DashboardLayout--isOpen': isOpen
    }),
    style: _extends({}, style, {
      '--DashboardLayout-overlay-zindex': overlayZIndex
    })
  }, /*#__PURE__*/React.createElement("div", {
    ref: sideBarElement,
    tabIndex: -1,
    className: "k-DashboardLayout__sideWrapper",
    "aria-hidden": isDesktop ? null : !isOpen
  }, /*#__PURE__*/React.createElement("a", _extends({}, backLinkProps, {
    className: classNames('k-DashboardLayout__backLink', backLinkProps.className)
  }), /*#__PURE__*/React.createElement(ArrowIcon, {
    "aria-hidden": true,
    direction: "left",
    color: COLORS.background1
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
  }), renderComponentChildrenArray(getReactElementsByType({
    children: children,
    type: Alerts
  })), /*#__PURE__*/React.createElement("main", {
    className: classNames('k-DashboardLayout__main', {
      'k-DashboardLayout__main--fullHeight': fullHeightContent
    }),
    id: "main"
  }, renderComponentArray(getReactElementsWithoutTypeArray({
    children: children,
    typeArray: [SiteHeader, Header, SideContent, SideFooter, Alerts]
  }))))));
};

var Header = function Header(_ref2) {
  var className = _ref2.className,
      hasButton = _ref2.hasButton,
      buttonProps = _ref2.buttonProps,
      children = _ref2.children,
      isOpen = _ref2.isOpen,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  var _ref3 = buttonProps || {},
      openLabel = _ref3.openLabel,
      closeLabel = _ref3.closeLabel,
      otherButtonProps = _objectWithoutPropertiesLoose(_ref3, _excluded3);

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

var SiteHeader = function SiteHeader(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      _ref4$tag = _ref4.tag,
      tag = _ref4$tag === void 0 ? 'div' : _ref4$tag,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  var SiteHeaderComponent = tag;
  return /*#__PURE__*/React.createElement(SiteHeaderComponent, _extends({
    className: classNames('k-DashboardLayout__siteHeader', className)
  }, props), children);
};

var SideContent = function SideContent(_ref5) {
  var className = _ref5.className,
      props = _objectWithoutPropertiesLoose(_ref5, _excluded5);

  return /*#__PURE__*/React.createElement("section", _extends({
    className: classNames('k-DashboardLayout__navigation', className)
  }, props));
};

var SideFooter = function SideFooter(_ref6) {
  var className = _ref6.className,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded6);

  return /*#__PURE__*/React.createElement("footer", _extends({
    className: classNames('k-DashboardLayout__footer', className)
  }, props));
};

var Alerts = function Alerts(_ref7) {
  var className = _ref7.className,
      props = _objectWithoutPropertiesLoose(_ref7, _excluded7);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-DashboardLayout__alerts', 'k-DashboardLayout__fullWidth', className)
  }, props));
};

var Toaster = function Toaster(_ref8) {
  var className = _ref8.className,
      isOpen = _ref8.isOpen,
      children = _ref8.children,
      props = _objectWithoutPropertiesLoose(_ref8, _excluded8);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-DashboardLayout__toaster__wrapper', 'k-DashboardLayout__fullWidth', className, {
      'k-DashboardLayout__toaster--isOpen': isOpen
    }),
    "aria-live": "polite"
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardLayout__toaster"
  }, children)), /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardLayout__toaster__spacer"
  }));
};

DashboardLayout.propTypes = {
  backLinkProps: PropTypes.object,
  buttonProps: PropTypes.shape({
    openLabel: PropTypes.node.isRequired,
    closeLabel: PropTypes.node.isRequired
  }),
  quickAccessLinkText: PropTypes.node.isRequired,
  fullHeightContent: PropTypes.bool,
  overlayZIndex: PropTypes.number
};
Header.propTypes = {
  buttonProps: PropTypes.shape({
    openLabel: PropTypes.node.isRequired,
    closeLabel: PropTypes.node.isRequired
  }),
  hasButton: PropTypes.bool,
  isOpen: PropTypes.bool
};
DashboardLayout.SiteHeader = SiteHeader;
DashboardLayout.Header = Header;
DashboardLayout.SideContent = SideContent;
DashboardLayout.SideFooter = SideFooter;
DashboardLayout.Flow = Flow;
DashboardLayout.Alerts = Alerts;
DashboardLayout.Toaster = Toaster;