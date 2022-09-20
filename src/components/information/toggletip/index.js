"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Toggletip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _elementHelper = require("../../../helpers/dom/element-helper");

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _gridConfig = require("../../../constants/grid-config");

var _iconBadge = require("../../information/icon-badge");

var _statusIconNext = require("../../graphics/icons-next/status-icon-next");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledWrapper = _styledComponents.default.span.withConfig({
  displayName: "toggletip__StyledWrapper",
  componentId: "sc-n283j7-0"
})(["position:relative;display:inline-block;&,&.k-Toggletip--info{--toggletipBubble-color:var(--color-primary-100);}&.k-Toggletip--warning{--toggletipBubble-color:var(--color-warning-100);}&.k-Toggletip--error,&.k-Toggletip--danger{--toggletipBubble-color:var(--color-danger-100);}&.k-Toggletip--success{--toggletipBubble-color:var(--color-success-100);}&.k-Toggletip--disabled{--toggletipBubble-color:var(--color-grey-300);}.k-Toggletip__bubble{--toggletipBubble-arrowMainPosition:", ";z-index:var(--toggletipBubble-zIndex);box-sizing:border-box;padding:", ";background-color:var(--toggletipBubble-color);text-align:left;border-radius:var(--border-radius-s);&:after{content:'';position:absolute;display:block;width:0;height:0;border:", " solid transparent;border-radius:var(--border-radius-s);}@media (max-width:", "){position:absolute;top:calc(var(--toggletipAction-height) + ", ");left:calc( -1 * var(--toggletipAction-left) + ", " );width:calc(100vw - ", ");&:after{top:var(--toggletipBubble-arrowMainPosition);left:calc( var(--toggletipAction-left) - ", " - ", " + (var(--toggletipAction-height) / 2) );border-bottom-color:var(--toggletipBubble-color);}&.k-Toggletip__bubble--mobileTop{top:initial;bottom:calc(var(--toggletipAction-height) + ", ");&:after{top:initial;bottom:var(--toggletipBubble-arrowMainPosition);border-top-color:var(--toggletipBubble-color);border-bottom-color:transparent;}}}@media (min-width:", "){position:absolute;top:50%;left:calc(100% + ", ");transform:translateY(-50%);min-width:", ";max-width:", ";width:max-content;&.k-Toggletip__bubble--rightLimit{max-width:calc( 100vw - var(--toggletipAction-left) - ", " - var(--toggletipAction-height) );}&:after{left:var(--toggletipBubble-arrowMainPosition);top:calc(50% - ", ");border-right-color:var(--toggletipBubble-color);}&.k-Toggletip__bubble--lowTop{top:calc( -1 * var(--toggletipAction-top) + ", " );transform:none;&:after{top:calc( var(--toggletipAction-top) - ", " - ", " + (var(--toggletipAction-height) / 2) );}}&.k-Toggletip__bubble--highBottom:not(.k-Toggletip__bubble--lowTop){top:initial;bottom:calc(-1 * ", ");transform:none;&:after{top:initial;bottom:calc( ", " - ", " + (var(--toggletipAction-height) / 2) );}}&.k-Toggletip__bubble--left{left:initial;right:calc(100% + ", ");&:after{left:initial;right:var(--toggletipBubble-arrowMainPosition);border-right-color:transparent;border-left-color:var(--toggletipBubble-color);}}}}"], (0, _typography.pxToRem)(-2 * 8), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN * 2), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(440), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN + 20), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20));

const Toggletip = _ref => {
  let {
    modifier,
    style,
    className,
    children,
    actionLabel,
    actionProps,
    bubbleProps,
    targetElement,
    icon,
    displayIcon,
    iconHasBorder,
    ...props
  } = _ref;
  const [isHover, setHoverState] = (0, _react.useState)(false);
  const [hasBeenClicked, setClickedState] = (0, _react.useState)(false);
  const [isOpen, setOpen] = (0, _react.useState)(false);
  const [actionPosition, setActionPosition] = (0, _react.useState)({});
  const [bubbleOnLeftSide, setBubbleOnLeftSide] = (0, _react.useState)(false);
  const [bubbleLowTop, setBubbleLowTop] = (0, _react.useState)(false);
  const [bubbleHighBottom, setBubbleHighBottom] = (0, _react.useState)(false);
  const [bubbleMobileTop, setBubbleMobileTop] = (0, _react.useState)(false);
  const [bubbleRightLimit, setBubbleRightLimit] = (0, _react.useState)(false);
  const actionElement = (0, _react.useRef)(null);
  const {
    className: bubbleClassName,
    zIndex: bubbleZIndex,
    color: bubbleColor,
    style: bubbleStyle,
    ...otherBubbleProps
  } = bubbleProps;
  (0, _react.useEffect)(() => {
    if (isHover) {
      setOpen(true);
    }

    if (!isHover && !hasBeenClicked) {
      setOpen(false);
    }
  }, [isHover, hasBeenClicked]);
  (0, _react.useEffect)(() => {
    var _actionElement$curren, _actionElement$curren2;

    if (!_elementHelper.domElementHelper.canUseDom()) return;
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleKeydownEscape);
    window.addEventListener('DOMContentLoaded', updateCoordinates);
    window.addEventListener('resize', throttleUpdateCoordinates);
    const bubbleElement = (_actionElement$curren = actionElement.current) == null ? void 0 : (_actionElement$curren2 = _actionElement$curren.nextElementSibling) == null ? void 0 : _actionElement$curren2.children[0];
    const bubbleElementCoords = (bubbleElement == null ? void 0 : bubbleElement.getBoundingClientRect()) || {};
    const scrollTop = window.scrollY;
    const innerHeight = window.innerHeight;
    const shouldDisplayBubbleLowTop = actionPosition.top - bubbleElementCoords.height / 2 < scrollTop;
    setBubbleLowTop(shouldDisplayBubbleLowTop);
    const shouldDisplayBubbleHighBottom = actionPosition.bottom + bubbleElementCoords.height / 2 > scrollTop + innerHeight;
    setBubbleHighBottom(shouldDisplayBubbleHighBottom);
    const shouldDisplayBubbleMobileTop = actionPosition.bottom + bubbleElementCoords.height + _gridConfig.CONTAINER_PADDING_THIN > scrollTop + innerHeight && actionPosition.top > bubbleElementCoords.height;
    setBubbleMobileTop(shouldDisplayBubbleMobileTop);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKeydownEscape);
      window.removeEventListener('DOMContentLoaded', updateCoordinates);
      window.removeEventListener('resize', throttleUpdateCoordinates);
    };
  }, [isOpen]);
  (0, _react.useEffect)(() => {
    if (!_elementHelper.domElementHelper.canUseDom()) return;

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      updateCoordinates();
    }
  }, []);

  const updateCoordinates = () => {
    if (!actionElement.current) return;
    const actionElementCoords = actionElement.current.getBoundingClientRect();
    setActionPosition(actionElementCoords);
    const bubblePlusMargins = 220 + 20 + _gridConfig.CONTAINER_PADDING_THIN;
    const shouldDisplayOnLeftSide = document.body.clientWidth < actionElementCoords.right + bubblePlusMargins;
    setBubbleOnLeftSide(shouldDisplayOnLeftSide);
    const shouldDisplayBubbleRightLimit = document.body.clientWidth - (actionElementCoords.right + _gridConfig.CONTAINER_PADDING_THIN + 20) < 440;
    setBubbleRightLimit(shouldDisplayBubbleRightLimit);
  };

  const throttleUpdateCoordinates = (0, _throttle.default)(updateCoordinates, 100);

  const handleOutsideClick = event => {
    if (actionElement.current !== event.target) {
      setClickedState(false);
      setOpen(false);
    }
  };

  const handleKeydownEscape = event => {
    if (event.key === 'Escape') {
      setClickedState(false);
      setOpen(false);
    }
  };

  const handleClick = event => {
    event.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      setOpen(true);
      setClickedState(true);
    }, 100);
  };

  const internalIcon = (() => {
    if (icon) return icon;
    return /*#__PURE__*/_react.default.createElement(_statusIconNext.StatusIconNext, {
      status: modifier
    });
  })();

  const role = (() => {
    switch (modifier) {
      case 'error':
      case 'danger':
        return 'alert';

      case 'warning':
      case 'success':
        return 'status';

      default:
        return null;
    }
  })();

  return /*#__PURE__*/_react.default.createElement(StyledWrapper, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Toggletip', 'k-Toggletip--action', className, "k-Toggletip--" + modifier),
    style: {
      '--toggletipAction-height': actionPosition.height ? (0, _typography.pxToRem)(actionPosition.height) : undefined,
      '--toggletipAction-top': actionPosition.top ? (0, _typography.pxToRem)(actionPosition.top) : undefined,
      '--toggletipAction-bottom': actionPosition.bottom ? (0, _typography.pxToRem)(actionPosition.bottom) : undefined,
      '--toggletipAction-left': actionPosition.left ? (0, _typography.pxToRem)(actionPosition.left) : undefined,
      ...style
    },
    onMouseEnter: () => setHoverState(true),
    onMouseLeave: () => setHoverState(false)
  }, props), /*#__PURE__*/_react.default.createElement("button", {
    ref: actionElement,
    onBlur: () => setOpen(false),
    onClick: handleClick,
    type: "button",
    "aria-label": actionLabel,
    className: "k-u-reset-button k-Toggletip__action",
    style: {
      '--toggletipAction-color': (actionProps == null ? void 0 : actionProps.color) || null,
      ...(actionProps == null ? void 0 : actionProps.style)
    }
  }, !!targetElement && /*#__PURE__*/_react.default.isValidElement(targetElement) ? targetElement : /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, {
    className: "k-Toggletip__icon",
    children: internalIcon,
    status: modifier,
    size: "small",
    hasBorder: iconHasBorder
  })), /*#__PURE__*/_react.default.createElement("span", {
    role: role
  }, isOpen && /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Toggletip__bubble', 'k-u-weight-400', 'k-u-size-small', 'k-u-line-height-1-3', bubbleClassName, {
      'k-Toggletip__bubble--left': bubbleOnLeftSide,
      'k-Toggletip__bubble--lowTop': bubbleLowTop,
      'k-Toggletip__bubble--highBottom': bubbleHighBottom,
      'k-Toggletip__bubble--mobileTop': bubbleMobileTop,
      'k-Toggletip__bubble--rightLimit': !bubbleOnLeftSide && bubbleRightLimit
    }),
    style: {
      '--toggletipBubble-zIndex': bubbleZIndex || 1,
      '--toggletipBubble-color': bubbleColor || null,
      ...bubbleStyle
    }
  }, otherBubbleProps), children)));
};

exports.Toggletip = Toggletip;
Toggletip.defaultProps = {
  modifier: 'info',
  bubbleProps: {},
  targetElement: null,
  iconHasBorder: true
};
Toggletip.propTypes = {
  modifier: _propTypes.default.oneOf(['info', 'warning', 'danger', 'success', 'disabled']),
  actionLabel: _propTypes.default.string.isRequired,
  actionProps: (0, _deprecated.default)(_propTypes.default.object),
  bubbleProps: _propTypes.default.object,
  targetElement: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]),
  iconHasBorder: _propTypes.default.bool
};