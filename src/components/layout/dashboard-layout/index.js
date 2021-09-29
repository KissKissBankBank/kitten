"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardLayout = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isFunction = _interopRequireDefault(require("lodash/fp/isFunction"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _screenConfig = require("../../../constants/screen-config");

var _useMediaQuery = require("../../../helpers/utils/use-media-query");

var _mediaQueries = require("../../../helpers/utils/media-queries");

var _reactElements = require("../../../helpers/react/react-elements");

var _events = require("../../../helpers/dom/events");

var _burgerIcon = require("../../../components/graphics/icons/burger-icon");

var _arrowIcon = require("../../../components/graphics/icons/arrow-icon");

var _flow = require("./flow");

var _styles = require("./styles");

var DashboardLayout = function DashboardLayout(_ref) {
  var children = _ref.children,
      backLinkProps = _ref.backLinkProps,
      buttonProps = _ref.buttonProps,
      quickAccessLinkText = _ref.quickAccessLinkText,
      fullHeightContent = _ref.fullHeightContent,
      _ref$overlayZIndex = _ref.overlayZIndex,
      overlayZIndex = _ref$overlayZIndex === void 0 ? 100 : _ref$overlayZIndex,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "backLinkProps", "buttonProps", "quickAccessLinkText", "fullHeightContent", "overlayZIndex", "style"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      touchCoords = _useState4[0],
      setTouchCoords = _useState4[1];

  var sideBarElement = (0, _react.useRef)(null);
  var contentElement = (0, _react.useRef)(null);

  var renderComponentChildrenArray = function renderComponentChildrenArray(childrenArray, otherProps) {
    return childrenArray.map(function (child) {
      var _child$props;

      if (!child || !child.props) return null;
      return (0, _isFunction.default)((_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.children) ? _react.default.cloneElement(child, {
        children: child.props.children((0, _extends2.default)({
          openSideBar: function openSideBar() {
            return setOpen(true);
          },
          closeSideBar: function closeSideBar() {
            return setOpen(false);
          },
          isSidebarOpen: isOpen
        }, otherProps))
      }) : _react.default.cloneElement(child, otherProps);
    });
  };

  var renderComponentArray = function renderComponentArray(childrenArray, otherProps) {
    return childrenArray.map(function (child, index) {
      if (!child) return null;
      return (0, _isFunction.default)(child) ? child((0, _extends2.default)({
        openSideBar: function openSideBar() {
          return setOpen(true);
        },
        closeSideBar: function closeSideBar() {
          return setOpen(false);
        },
        isSidebarOpen: isOpen
      }, otherProps)) : _react.default.cloneElement(child, (0, _extends2.default)({
        key: "content_child_".concat(index)
      }, otherProps));
    });
  };

  var isDesktop = (0, _useMediaQuery.useMedia)({
    queries: [(0, _mediaQueries.getMinQuery)(_screenConfig.ScreenConfig.L.min)],
    values: [true],
    defaultValue: false
  });
  (0, _react.useEffect)(function () {
    if (sideBarElement && contentElement) {
      if (isOpen) {
        var _sideBarElement$curre;

        (0, _events.dispatchEvent)(_events.DASHBOARD_HIDE_CONTENT_EVENT)();
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

        (0, _events.dispatchEvent)(_events.DASHBOARD_SHOW_CONTENT_EVENT)();
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

  (0, _react.useEffect)(function () {
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

  return /*#__PURE__*/_react.default.createElement(_styles.StyledDashboard, {
    className: "k-DashboardLayout__wrapper"
  }, renderComponentChildrenArray((0, _reactElements.getReactElementsByType)({
    children: children,
    type: SiteHeader
  })), /*#__PURE__*/_react.default.createElement("a", {
    className: "k-DashboardLayout__quickAccessLink",
    href: "#main"
  }, quickAccessLinkText), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-DashboardLayout', props.className, {
      'k-DashboardLayout--isOpen': isOpen
    }),
    style: (0, _extends2.default)({}, style, {
      '--DashboardLayout-overlay-zindex': overlayZIndex
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: sideBarElement,
    tabIndex: -1,
    className: "k-DashboardLayout__sideWrapper",
    "aria-hidden": isDesktop ? null : !isOpen
  }, /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({}, backLinkProps, {
    className: (0, _classnames.default)('k-DashboardLayout__backLink', backLinkProps.className)
  }), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    "aria-hidden": true,
    direction: "left",
    color: _colorsConfig.default.background1
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardLayout__backLink__text"
  }, backLinkProps.children)), renderComponentChildrenArray((0, _reactElements.getReactElementsByType)({
    children: children,
    type: Header
  })), renderComponentChildrenArray((0, _reactElements.getReactElementsByType)({
    children: children,
    type: SideContent
  })), renderComponentChildrenArray((0, _reactElements.getReactElementsByType)({
    children: children,
    type: SideFooter
  }))), /*#__PURE__*/_react.default.createElement("div", {
    ref: contentElement,
    tabIndex: -1,
    className: "k-DashboardLayout__mainWrapper"
  }, renderComponentChildrenArray((0, _reactElements.getReactElementsByType)({
    children: children,
    type: Header
  }), {
    isOpen: isOpen,
    hasButton: true,
    buttonProps: (0, _extends2.default)({}, buttonProps, {
      onClick: handleButtonClick,
      'aria-expanded': isOpen ? isOpen : null
    })
  }), renderComponentChildrenArray((0, _reactElements.getReactElementsByType)({
    children: children,
    type: Alerts
  })), /*#__PURE__*/_react.default.createElement("main", {
    className: (0, _classnames.default)('k-DashboardLayout__main', {
      'k-DashboardLayout__main--fullHeight': fullHeightContent
    }),
    id: "main"
  }, renderComponentArray((0, _reactElements.getReactElementsWithoutTypeArray)({
    children: children,
    typeArray: [SiteHeader, Header, SideContent, SideFooter, Alerts]
  }))))));
};

exports.DashboardLayout = DashboardLayout;

var Header = function Header(_ref2) {
  var className = _ref2.className,
      hasButton = _ref2.hasButton,
      buttonProps = _ref2.buttonProps,
      children = _ref2.children,
      isOpen = _ref2.isOpen,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "hasButton", "buttonProps", "children", "isOpen"]);

  var _ref3 = buttonProps || {},
      openLabel = _ref3.openLabel,
      closeLabel = _ref3.closeLabel,
      otherButtonProps = (0, _objectWithoutProperties2.default)(_ref3, ["openLabel", "closeLabel"]);

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

var SiteHeader = function SiteHeader(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      _ref4$tag = _ref4.tag,
      tag = _ref4$tag === void 0 ? 'div' : _ref4$tag,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["className", "children", "tag"]);
  var SiteHeaderComponent = tag;
  return /*#__PURE__*/_react.default.createElement(SiteHeaderComponent, (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__siteHeader', className)
  }, props), children);
};

var SideContent = function SideContent(_ref5) {
  var className = _ref5.className,
      props = (0, _objectWithoutProperties2.default)(_ref5, ["className"]);
  return /*#__PURE__*/_react.default.createElement("section", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__navigation', className)
  }, props));
};

var SideFooter = function SideFooter(_ref6) {
  var className = _ref6.className,
      props = (0, _objectWithoutProperties2.default)(_ref6, ["className"]);
  return /*#__PURE__*/_react.default.createElement("footer", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__footer', className)
  }, props));
};

var Alerts = function Alerts(_ref7) {
  var className = _ref7.className,
      props = (0, _objectWithoutProperties2.default)(_ref7, ["className"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__alerts', 'k-DashboardLayout__fullWidth', className)
  }, props));
};

var Toaster = function Toaster(_ref8) {
  var className = _ref8.className,
      isOpen = _ref8.isOpen,
      children = _ref8.children,
      props = (0, _objectWithoutProperties2.default)(_ref8, ["className", "isOpen", "children"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
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
  overlayZIndex: _propTypes.default.number
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