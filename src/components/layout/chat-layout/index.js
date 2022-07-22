"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ChatLayout = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

var _text = require("../../../components/typography/text");

var _useWindowWidth = require("../../../helpers/hooks/use-window-width");

var _screenConfig = require("../../../constants/screen-config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ChatLayoutContext = /*#__PURE__*/(0, _react.createContext)({});

const ChatLayout = _ref => {
  let {
    className,
    children,
    style,
    ...props
  } = _ref;
  const [activeCol, setActiveColumn] = (0, _react.useState)(null);
  const [activeColOffset, setActiveColOffset] = (0, _react.useState)(0);
  const windowWidth = (0, _useWindowWidth.useWindowWidth)();
  (0, _react.useEffect)(() => {
    if (!activeCol) return;
    handlePagePosition();
  }, [activeCol]);
  (0, _react.useEffect)(() => {
    if (!activeCol) return;
    if (windowWidth >= _screenConfig.ScreenConfig.L.min) return;
    handlePagePosition();
  }, [windowWidth]);

  const handlePagePosition = () => {
    const activeColEl = document.getElementById(activeCol);
    setActiveColOffset(activeColEl.offsetLeft);
  };

  return /*#__PURE__*/_react.default.createElement(ChatLayoutContext.Provider, {
    value: {
      setActiveColumn
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledChatLayout, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ChatLayout', className),
    style: { ...style,
      '--chatLayoutOffset': activeColOffset
    }
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ChatLayout__grid"
  }, children)));
};

exports.ChatLayout = ChatLayout;

ChatLayout.Column = _ref2 => {
  let {
    name,
    title,
    className = null,
    isPrimaryColumn = false,
    hasMobileHeader = false,
    children,
    backAction,
    backActionText,
    nextAction,
    nextActionText,
    centeredHeader,
    fullWidthContent = false,
    ...props
  } = _ref2;
  const {
    setActiveColumn
  } = (0, _react.useContext)(ChatLayoutContext);
  return /*#__PURE__*/_react.default.createElement("section", (0, _extends2.default)({
    id: name,
    className: (0, _classnames.default)('k-ChatLayout__column', "k-ChatLayout__col-" + name, className, {
      'k-ChatLayout__column--isPrimaryColumn': isPrimaryColumn,
      'k-ChatLayout__column--hasMobileHeader': hasMobileHeader
    }),
    tabIndex: "-1"
  }, props), isPrimaryColumn && /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "h1",
    size: "giant",
    weight: "700",
    className: "k-ChatLayout__column__title"
  }, title), hasMobileHeader && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-ChatLayout__columnHeader', {
      'k-ChatLayout__columnHeader--centeredHeader': centeredHeader
    })
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "k-ChatLayout__columnHeader__back k-u-reset-button",
    type: "button",
    onClick: () => backAction({
      setActiveColumn
    })
  }, backActionText), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ChatLayout__columnHeader__title"
  }, title), nextAction && nextActionText && /*#__PURE__*/_react.default.createElement("button", {
    className: "k-ChatLayout__columnHeader__next k-u-reset-button",
    type: "button",
    onClick: () => nextAction({
      setActiveColumn
    })
  }, nextActionText)), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-ChatLayout__column__content', {
      'k-ChatLayout__column__content--fullWidth': fullWidthContent
    })
  }, typeof children === 'function' ? children({
    setActiveColumn
  }) : children));
};