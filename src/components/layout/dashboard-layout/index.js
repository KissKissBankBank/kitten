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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _isFunction = _interopRequireDefault(require("lodash/fp/isFunction"));

var _classnames = _interopRequireDefault(require("classnames"));

var _gridConfig = require("../../../constants/grid-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _useMediaQuery = require("../../../helpers/utils/use-media-query");

var _mediaQueries = require("../../../helpers/utils/media-queries");

var _reactElements = require("../../../helpers/react/react-elements");

var _burgerIcon = require("../../../components/icons/burger-icon");

var _arrowIcon = require("../../../components/icons/arrow-icon");

var _flow = require("./flow");

var ALL_COLS = "(100vw - ".concat((0, _typography.pxToRem)(2 * _gridConfig.CONTAINER_PADDING + (_gridConfig.NUM_COLUMNS - 1) * _gridConfig.GUTTER), ")");
var ONE_COL = "(".concat(ALL_COLS, " / ").concat(_gridConfig.NUM_COLUMNS, ")");
var SIX_COLS = "(".concat(ALL_COLS, " / 2 + ").concat((0, _typography.pxToRem)(5 * _gridConfig.GUTTER + _gridConfig.CONTAINER_PADDING), ")");

var StyledDashboard = _styledComponents.default.div.withConfig({
  displayName: "dashboard-layout__StyledDashboard",
  componentId: "sc-12l68xb-0"
})(["position:relative;*{box-sizing:border-box;}.k-DashboardLayout{min-height:100vh;display:grid;.k-DashboardLayout__sideWrapper{background-color:", ";}}.k-DashboardLayout__backLink:focus{outline:", " solid ", ";outline-offset:", ";}@media (max-width:", "){overflow:hidden;position:relative;.k-DashboardLayout{--DashboardLayout-main-margin:calc( ", " + ", " );width:calc(", " + 100vw);grid-template-columns:calc(", ") calc(100vw + ", ");transform:translateX(calc(-1 * ", " - ", "));transition:transform 0.3s ease-in-out;.k-DashboardLayout__heading__button__text,.k-DashboardLayout__backLink__text{clip:rect(0 0 0 0);clip-path:inset(100%);height:", ";overflow:hidden;position:absolute;white-space:nowrap;width:", ";}&.k-DashboardLayout--isOpen{position:fixed;transform:none;transition:transform 0.3s ease-in-out;.k-DashboardLayout__mainWrapper .k-DashboardLayout__main::before{opacity:.8;background-color:", ";pointer-events:all;}}.k-DashboardLayout__sideWrapper{height:100vh;overflow-y:scroll;padding:", ";display:flex;flex-direction:column;gap:", ";.k-DashboardLayout__backLink{flex:0 0 ", ";width:", ";height:", ";background-color:", ";border-radius:", ";display:flex;align-items:center;justify-content:center;transition:background-color .2s ease;}.k-DashboardLayout__heading{display:none;}.k-DashboardLayout__navigation{flex:1 1 100%;}.k-DashboardLayout__footer{flex:0 1 auto;}}.k-DashboardLayout__mainWrapper{width:calc(100vw + ", ");display:flex;align-items:stretch;flex-direction:column;.k-DashboardLayout__heading{padding-left:", ";padding-right:", ";height:", ";flex:0 0 ", ";display:flex;align-items:center;background-color:", ";border-left:", " solid ", ";> *{align-self:initial;}}.k-DashboardLayout__heading__buttonWrapper{flex:0 0 ", ";margin-left:", ";margin-right:", ";}.k-DashboardLayout__heading__button{padding:", ";}.k-DashboardLayout__main{position:relative;margin-left:", ";flex:1 0 auto;padding-top:", ";padding-bottom:", ";&::before{content:\"\";position:absolute;top:0;left:", ";right:0;bottom:0;background-color:", ";opacity:0;pointer-events:none;z-index:100;transition:background-color .2s ease-in-out,opacity .2s ease-in-out;}> *:not(.k-DashboardLayout__fullWidth){margin-left:var(--DashboardLayout-main-margin);margin-right:var(--DashboardLayout-main-margin);}}}}}@media (max-width:", "){.k-DashboardLayout{--DashboardLayout-main-margin:", ";width:calc(200vw - ", ");grid-template-columns:calc(100vw - ", ") calc( 100vw + ", " );transform:translateX(calc(-100vw + ", "));.k-DashboardLayout__sideWrapper{padding:", ";}.k-DashboardLayout__mainWrapper{.k-DashboardLayout__heading{padding-left:", ";padding-right:", ";}.k-DashboardLayout__main{padding-top:", ";}}}}@media (min-width:", "){.k-DashboardLayout{grid-template-columns:25% 1fr;.k-DashboardLayout__sideWrapper{display:flex;flex-direction:column;height:100vh;position:sticky;top:0;overflow:scroll;gap:", ";padding:", ";.k-DashboardLayout__backLink{flex:0 0 auto;align-self:start;display:inline-flex;align-items:center;gap:", ";color:", ";transition:color .2s ease;", " font-size:", ";line-height:1.2;text-decoration:none;svg{fill:currentColor;}&:hover{color:", ";}}.k-DashboardLayout__heading{flex:0 1 auto;}.k-DashboardLayout__navigation{flex:1 1 100%;}.k-DashboardLayout__footer{flex:0 1 auto;}}.k-DashboardLayout__mainWrapper{.k-DashboardLayout__heading{display:none;}.k-DashboardLayout__main{padding-top:", ";padding-bottom:", ";> *:not(.k-DashboardLayout__fullWidth){margin-left:10%;margin-right:15%;}}}}}@media (min-width:", "){.k-DashboardLayout{grid-template-columns:", " 1fr;}}.k-DashboardLayout__quickAccessLink{position:absolute;top:0;left:-100%;z-index:110;padding:", " ", ";color:", ";background-color:", ";", " line-height:1;font-size:", ";text-decoration:none;transition:opacity .2s ease,left .2s ease;transition-delay:0,0;opacity:0;&:focus,&:active{left:0;opacity:1;transition-delay:0,.2s;outline:", " solid ", ";}}.text--withEllipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}.k-ButtonImageWithText__text{padding-top:0;padding-bottom:0;}"], _colorsConfig.default.font1, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), ONE_COL, (0, _typography.pxToRem)(_gridConfig.GUTTER + _gridConfig.CONTAINER_PADDING), SIX_COLS, SIX_COLS, (0, _typography.pxToRem)(2), SIX_COLS, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.font1, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), _colorsConfig.default.line3, (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), _colorsConfig.default.font1, (0, _typography.pxToRem)(2), _colorsConfig.default.line3, (0, _typography.pxToRem)(12 + 12 * 2), (0, _typography.pxToRem)(-12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(-2), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(50 + 2), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(50 - 2), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(15), _colorsConfig.default.background1, _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), _colorsConfig.default.primary1, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), (0, _typography.pxToRem)(385), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), _colorsConfig.default.background1, _colorsConfig.default.font1, _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(1), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4);

var DashboardLayout = function DashboardLayout(_ref) {
  var children = _ref.children,
      backLinkProps = _ref.backLinkProps,
      buttonProps = _ref.buttonProps,
      quickAccessLinkText = _ref.quickAccessLinkText,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "backLinkProps", "buttonProps", "quickAccessLinkText"]);

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

  var renderComponentArray = function renderComponentArray(childrenArray, otherProps) {
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

  var isDesktop = (0, _useMediaQuery.useMedia)({
    queries: [(0, _mediaQueries.getMinQuery)(_screenConfig.ScreenConfig.L.min)],
    values: [true],
    defaultValue: false
  });
  (0, _react.useEffect)(function () {
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

  return /*#__PURE__*/_react.default.createElement(StyledDashboard, {
    className: "k-DashboardLayout__wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-DashboardLayout', props.className, {
      'k-DashboardLayout--isOpen': isOpen
    })
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "k-DashboardLayout__quickAccessLink",
    href: "#main"
  }, quickAccessLinkText), /*#__PURE__*/_react.default.createElement("div", {
    ref: sideBarElement,
    tabIndex: 0,
    className: "k-DashboardLayout__sideWrapper",
    "aria-hidden": isDesktop ? null : !isOpen
  }, /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({}, backLinkProps, {
    className: (0, _classnames.default)('k-DashboardLayout__backLink', backLinkProps.className)
  }), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: "left",
    color: _colorsConfig.default.background1,
    version: "solid"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardLayout__backLink__text"
  }, backLinkProps.children)), renderComponentArray((0, _reactElements.getReactElementsByType)({
    children: children,
    type: Header
  })), renderComponentArray((0, _reactElements.getReactElementsByType)({
    children: children,
    type: SideContent
  })), renderComponentArray((0, _reactElements.getReactElementsByType)({
    children: children,
    type: SideFooter
  }))), /*#__PURE__*/_react.default.createElement("div", {
    ref: contentElement,
    tabIndex: 0,
    className: "k-DashboardLayout__mainWrapper"
  }, renderComponentArray((0, _reactElements.getReactElementsByType)({
    children: children,
    type: Header
  }), {
    isOpen: isOpen,
    hasButton: true,
    buttonProps: (0, _extends2.default)({}, buttonProps, {
      onClick: handleButtonClick,
      'aria-expanded': isOpen ? isOpen : null
    })
  }), /*#__PURE__*/_react.default.createElement("main", {
    className: "k-DashboardLayout__main",
    id: "main"
  }, renderComponentArray((0, _reactElements.getReactElementsWithoutTypeArray)({
    children: children,
    typeArray: [Header, SideContent, SideFooter]
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

var SideContent = function SideContent(_ref4) {
  var className = _ref4.className,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["className"]);
  return /*#__PURE__*/_react.default.createElement("section", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__navigation', className)
  }, props));
};

var SideFooter = function SideFooter(_ref5) {
  var className = _ref5.className,
      props = (0, _objectWithoutProperties2.default)(_ref5, ["className"]);
  return /*#__PURE__*/_react.default.createElement("footer", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__footer', className)
  }, props));
};

DashboardLayout.propTypes = {
  backLinkProps: _propTypes.default.object,
  buttonProps: _propTypes.default.shape({
    openLabel: _propTypes.default.node.isRequired,
    closeLabel: _propTypes.default.node.isRequired
  }),
  quickAccessLinkText: _propTypes.default.node.isRequired
};
Header.propTypes = {
  buttonProps: _propTypes.default.shape({
    openLabel: _propTypes.default.node.isRequired,
    closeLabel: _propTypes.default.node.isRequired
  }),
  hasButton: _propTypes.default.bool,
  isOpen: _propTypes.default.bool
};
DashboardLayout.Header = Header;
DashboardLayout.SideContent = SideContent;
DashboardLayout.SideFooter = SideFooter;
DashboardLayout.Flow = _flow.Flow;