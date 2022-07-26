"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DashboardLayout = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isFunction = _interopRequireDefault(require("lodash/fp/isFunction"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _screenConfig = require("../../../constants/screen-config");

var _useMediaQuery = require("../../../helpers/hooks/use-media-query");

var _mediaQueries = require("../../../helpers/utils/media-queries");

var _getReactElements = require("../../../helpers/react/get-react-elements");

var _events = require("../../../helpers/dom/events");

var _burgerIcon = require("../../graphics/icons/burger-icon");

var _arrowIcon = require("../../graphics/icons/arrow-icon");

var _flow = require("./flow");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DashboardLayout = _ref => {
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
  const [isOpen, setOpen] = (0, _react.useState)(false);
  const [touchCoords, setTouchCoords] = (0, _react.useState)([]);
  const sideBarElement = (0, _react.useRef)(null);
  const contentElement = (0, _react.useRef)(null);

  const renderComponentChildrenArray = (childrenArray, otherProps) => {
    return childrenArray.map(child => {
      var _child$props;

      if (!child || !child.props) return null;
      return (0, _isFunction.default)((_child$props = child.props) == null ? void 0 : _child$props.children) ? /*#__PURE__*/_react.default.cloneElement(child, {
        children: child.props.children({
          openSideBar: () => setOpen(true),
          closeSideBar: () => setOpen(false),
          isSidebarOpen: isOpen,
          ...otherProps
        })
      }) : /*#__PURE__*/_react.default.cloneElement(child, otherProps);
    });
  };

  const renderComponentArray = (childrenArray, otherProps) => {
    return childrenArray.map((child, index) => {
      if (!child) return null;
      return (0, _isFunction.default)(child) ? child({
        openSideBar: () => setOpen(true),
        closeSideBar: () => setOpen(false),
        isSidebarOpen: isOpen,
        ...otherProps
      }) : /*#__PURE__*/_react.default.cloneElement(child, {
        key: "content_child_" + index,
        ...otherProps
      });
    });
  };

  const isDesktop = (0, _useMediaQuery.useMedia)({
    queries: [(0, _mediaQueries.getMinQuery)(_screenConfig.ScreenConfig.L.min)],
    values: [true],
    defaultValue: false
  });
  (0, _react.useEffect)(() => {
    if (sideBarElement && contentElement) {
      if (isOpen) {
        var _sideBarElement$curre;

        (0, _events.dispatchEvent)(_events.DASHBOARD_HIDE_CONTENT_EVENT)();
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

        (0, _events.dispatchEvent)(_events.DASHBOARD_SHOW_CONTENT_EVENT)();
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

  (0, _react.useEffect)(() => {
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

  return /*#__PURE__*/_react.default.createElement(_styles.StyledDashboard, {
    className: "k-DashboardLayout__wrapper"
  }, renderComponentChildrenArray((0, _getReactElements.getReactElementsByType)({
    children: children,
    type: SiteHeader
  })), /*#__PURE__*/_react.default.createElement("a", {
    className: "k-DashboardLayout__quickAccessLink",
    href: "#main"
  }, quickAccessLinkText), /*#__PURE__*/_react.default.createElement("section", {
    className: (0, _classnames.default)('k-DashboardLayout', props.className, {
      'k-DashboardLayout--isOpen': isOpen
    }),
    style: { ...style,
      '--DashboardLayout-overlay-zindex': overlayZIndex
    }
  }, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: sideBarElement
  }, sidebarProps, {
    tabIndex: -1,
    className: (0, _classnames.default)('k-DashboardLayout__sideWrapper', sidebarProps == null ? void 0 : sidebarProps.className),
    "aria-hidden": isDesktop ? null : !isOpen
  }), /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({}, backLinkProps, {
    className: (0, _classnames.default)('k-DashboardLayout__backLink', backLinkProps.className)
  }), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    "aria-hidden": true,
    direction: "left",
    color: _colorsConfig.default.background1
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardLayout__backLink__text"
  }, backLinkProps.children)), renderComponentChildrenArray((0, _getReactElements.getReactElementsByType)({
    children: children,
    type: Header
  })), renderComponentChildrenArray((0, _getReactElements.getReactElementsByType)({
    children: children,
    type: SideContent
  })), renderComponentChildrenArray((0, _getReactElements.getReactElementsByType)({
    children: children,
    type: SideFooter
  }))), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: contentElement
  }, contentProps, {
    tabIndex: -1,
    className: (0, _classnames.default)('k-DashboardLayout__mainWrapper', contentProps == null ? void 0 : contentProps.className, {
      'k-DashboardLayout__mainWrapper--darkBg': hasDarkBg
    })
  }), renderComponentChildrenArray((0, _getReactElements.getReactElementsByType)({
    children: children,
    type: Header
  }), {
    isOpen,
    hasButton: true,
    buttonProps: { ...buttonProps,
      onClick: handleButtonClick,
      'aria-expanded': isOpen ? isOpen : null
    }
  }), renderComponentChildrenArray((0, _getReactElements.getReactElementsByType)({
    children: children,
    type: Alerts
  })), /*#__PURE__*/_react.default.createElement("main", {
    className: (0, _classnames.default)('k-DashboardLayout__main', {
      'k-DashboardLayout__main--fullHeight': fullHeightContent
    }),
    id: "main"
  }, renderComponentArray((0, _getReactElements.getReactElementsWithoutTypeArray)({
    children,
    typeArray: [SiteHeader, Header, SideContent, SideFooter, Alerts]
  }))))));
};

exports.DashboardLayout = DashboardLayout;

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
  return /*#__PURE__*/_react.default.createElement("header", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__heading', className)
  }, props), hasButton && buttonProps && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DashboardLayout__heading__buttonWrapper"
  }, /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({}, otherButtonProps, {
    className: (0, _classnames.default)('k-DashboardLayout__heading__button', 'k-u-reset-button', buttonProps.className)
  }), /*#__PURE__*/_react.default.createElement(_burgerIcon.BurgerIcon, {
    isActive: isOpen,
    mainColor: _colorsConfig.default.background1
  }), /*#__PURE__*/_react.default.createElement("span", {
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
  return /*#__PURE__*/_react.default.createElement(SiteHeaderComponent, (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__siteHeader', className)
  }, props), children);
};

const SideContent = _ref4 => {
  let {
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("section", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__navigation', className)
  }, props));
};

const SideFooter = _ref5 => {
  let {
    className,
    ...props
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("footer", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__footer', className)
  }, props));
};

const Alerts = _ref6 => {
  let {
    className,
    ...props
  } = _ref6;
  return /*#__PURE__*/_react.default.createElement("section", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__alerts', 'k-DashboardLayout__fullWidth', className)
  }, props));
};

const Toaster = _ref7 => {
  let {
    className,
    isOpen,
    children,
    ...props
  } = _ref7;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__toaster__wrapper', 'k-DashboardLayout__fullWidth', className, {
      'k-DashboardLayout__toaster--isOpen': isOpen
    }),
    "aria-live": "polite"
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DashboardLayout__toaster"
  }, children)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DashboardLayout__toaster__spacer"
  }));
};

DashboardLayout.propTypes = {
  backLinkProps: _propTypes.default.object,
  buttonProps: _propTypes.default.shape({
    openLabel: _propTypes.default.node.isRequired,
    closeLabel: _propTypes.default.node.isRequired
  }),
  quickAccessLinkText: _propTypes.default.node.isRequired,
  fullHeightContent: _propTypes.default.bool,
  overlayZIndex: _propTypes.default.number,
  sidebarProps: _propTypes.default.object,
  contentProps: _propTypes.default.object,
  hasDarkBg: _propTypes.default.bool
};
Header.propTypes = {
  buttonProps: _propTypes.default.shape({
    openLabel: _propTypes.default.node.isRequired,
    closeLabel: _propTypes.default.node.isRequired
  }),
  hasButton: _propTypes.default.bool,
  isOpen: _propTypes.default.bool
};
DashboardLayout.SiteHeader = SiteHeader;
DashboardLayout.Header = Header;
DashboardLayout.SideContent = SideContent;
DashboardLayout.SideFooter = SideFooter;
DashboardLayout.Flow = _flow.Flow;
DashboardLayout.Alerts = Alerts;
DashboardLayout.Toaster = Toaster;