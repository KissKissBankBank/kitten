import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash/fp/isFunction';
import classNames from 'classnames';
import COLORS from '../../../constants/colors-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { useMedia } from '../../../helpers/hooks/use-media-query';
import { getMinQuery } from '../../../helpers/utils/media-queries';
import { getReactElementsByType, getReactElementsWithoutTypeArray } from '../../../helpers/react/get-react-elements';
import { DASHBOARD_HIDE_CONTENT_EVENT, DASHBOARD_SHOW_CONTENT_EVENT, dispatchEvent } from '../../../helpers/dom/events';
import { BurgerIcon } from '../../graphics/icons/burger-icon';
import { ArrowIcon } from '../../graphics/icons/arrow-icon';
import { Flow } from './flow';
import { StyledDashboard } from './styles';
export const DashboardLayout = _ref => {
  let {
    children,
    backLinkProps,
    buttonProps,
    quickAccessLinkText,
    fullHeightContent,
    overlayZIndex = 100,
    style,
    sidebarProps = {},
    contentProps = {},
    hasDarkBg = false,
    ...props
  } = _ref;
  const [isOpen, setOpen] = useState(false);
  const [touchCoords, setTouchCoords] = useState([]);
  const sideBarElement = useRef(null);
  const contentElement = useRef(null);

  const renderComponentChildrenArray = (childrenArray, otherProps) => {
    return childrenArray.map(child => {
      var _child$props;

      if (!child || !child.props) return null;
      return isFunction((_child$props = child.props) == null ? void 0 : _child$props.children) ? /*#__PURE__*/React.cloneElement(child, {
        children: child.props.children({
          openSideBar: () => setOpen(true),
          closeSideBar: () => setOpen(false),
          isSidebarOpen: isOpen,
          ...otherProps
        })
      }) : /*#__PURE__*/React.cloneElement(child, otherProps);
    });
  };

  const renderComponentArray = (childrenArray, otherProps) => {
    return childrenArray.map((child, index) => {
      if (!child) return null;
      return isFunction(child) ? child({
        openSideBar: () => setOpen(true),
        closeSideBar: () => setOpen(false),
        isSidebarOpen: isOpen,
        ...otherProps
      }) : /*#__PURE__*/React.cloneElement(child, {
        key: "content_child_" + index,
        ...otherProps
      });
    });
  };

  const isDesktop = useMedia({
    queries: [getMinQuery(ScreenConfig.L.min)],
    values: [true],
    defaultValue: false
  });
  useEffect(() => {
    if (sideBarElement && contentElement) {
      if (isOpen) {
        var _sideBarElement$curre;

        dispatchEvent(DASHBOARD_HIDE_CONTENT_EVENT)();
        sideBarElement == null ? void 0 : (_sideBarElement$curre = sideBarElement.current) == null ? void 0 : _sideBarElement$curre.focus();
        window.addEventListener('keydown', handleKeyDown);
        contentElement.current.addEventListener('click', handleMainClick);
        sideBarElement.current.addEventListener('touchstart', handleTouchStart);
        sideBarElement.current.addEventListener('touchend', handleTouchEnd);
        return () => {
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

  const handleTouchStart = event => {
    var _event$touches$;

    setTouchCoords([event == null ? void 0 : (_event$touches$ = event.touches[0]) == null ? void 0 : _event$touches$.clientX]);
  };

  const handleTouchEnd = event => {
    setTouchCoords(current => {
      var _event$changedTouches;

      return [current[0], event == null ? void 0 : (_event$changedTouches = event.changedTouches[0]) == null ? void 0 : _event$changedTouches.clientX];
    });
  };

  useEffect(() => {
    if (touchCoords[1] && touchCoords[0]) {
      const distanceX = touchCoords[1] - touchCoords[0];

      if (distanceX < -40) {
        setOpen(false);
      }
    }
  }, [touchCoords]);

  const handleButtonClick = () => {
    setOpen(current => {
      return !current;
    });
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const handleMainClick = event => {
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
  }, quickAccessLinkText), /*#__PURE__*/React.createElement("section", {
    className: classNames('k-DashboardLayout', props.className, {
      'k-DashboardLayout--isOpen': isOpen
    }),
    style: { ...style,
      '--DashboardLayout-overlay-zindex': overlayZIndex
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: sideBarElement
  }, sidebarProps, {
    tabIndex: -1,
    className: classNames('k-DashboardLayout__sideWrapper', sidebarProps == null ? void 0 : sidebarProps.className),
    "aria-hidden": isDesktop ? null : !isOpen
  }), /*#__PURE__*/React.createElement("a", _extends({}, backLinkProps, {
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
  }))), /*#__PURE__*/React.createElement("div", _extends({
    ref: contentElement
  }, contentProps, {
    tabIndex: -1,
    className: classNames('k-DashboardLayout__mainWrapper', contentProps == null ? void 0 : contentProps.className, {
      'k-DashboardLayout__mainWrapper--darkBg': hasDarkBg
    })
  }), renderComponentChildrenArray(getReactElementsByType({
    children: children,
    type: Header
  }), {
    isOpen,
    hasButton: true,
    buttonProps: { ...buttonProps,
      onClick: handleButtonClick,
      'aria-expanded': isOpen ? isOpen : null
    }
  }), renderComponentChildrenArray(getReactElementsByType({
    children: children,
    type: Alerts
  })), /*#__PURE__*/React.createElement("main", {
    className: classNames('k-DashboardLayout__main', {
      'k-DashboardLayout__main--fullHeight': fullHeightContent
    }),
    id: "main"
  }, renderComponentArray(getReactElementsWithoutTypeArray({
    children,
    typeArray: [SiteHeader, Header, SideContent, SideFooter, Alerts]
  }))))));
};

const Header = _ref2 => {
  let {
    className,
    hasButton,
    buttonProps,
    children,
    isOpen,
    ...props
  } = _ref2;
  const {
    openLabel,
    closeLabel,
    ...otherButtonProps
  } = buttonProps || {};
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

const SiteHeader = _ref3 => {
  let {
    className,
    children,
    tag = 'div',
    ...props
  } = _ref3;
  const SiteHeaderComponent = tag;
  return /*#__PURE__*/React.createElement(SiteHeaderComponent, _extends({
    className: classNames('k-DashboardLayout__siteHeader', className)
  }, props), children);
};

const SideContent = _ref4 => {
  let {
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement("section", _extends({
    className: classNames('k-DashboardLayout__navigation', className)
  }, props));
};

const SideFooter = _ref5 => {
  let {
    className,
    ...props
  } = _ref5;
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: classNames('k-DashboardLayout__footer', className)
  }, props));
};

const Alerts = _ref6 => {
  let {
    className,
    ...props
  } = _ref6;
  return /*#__PURE__*/React.createElement("section", _extends({
    className: classNames('k-DashboardLayout__alerts', 'k-DashboardLayout__fullWidth', className)
  }, props));
};

const Toaster = _ref7 => {
  let {
    className,
    isOpen,
    children,
    ...props
  } = _ref7;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", _extends({
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
  overlayZIndex: PropTypes.number,
  sidebarProps: PropTypes.object,
  contentProps: PropTypes.object,
  hasDarkBg: PropTypes.bool
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