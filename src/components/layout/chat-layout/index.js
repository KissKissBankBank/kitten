"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ChatLayout = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

var _text = require("../../../components/typography/text");

var _useWindowWidth = require("../../../helpers/hooks/use-window-width");

var _screenConfig = require("../../../constants/screen-config");

var _excluded = ["className", "children", "style"],
    _excluded2 = ["name", "title", "className", "isPrimaryColumn", "hasMobileHeader", "children", "backAction", "backActionText", "nextAction", "nextActionText", "centeredHeader", "fullWidthContent"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ChatLayoutContext = /*#__PURE__*/(0, _react.createContext)({});

var ChatLayout = function ChatLayout(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(null),
      activeCol = _useState[0],
      setActiveColumn = _useState[1];

  var _useState2 = (0, _react.useState)(0),
      activeColOffset = _useState2[0],
      setActiveColOffset = _useState2[1];

  var windowWidth = (0, _useWindowWidth.useWindowWidth)();
  (0, _react.useEffect)(function () {
    if (!activeCol) return;
    handlePagePosition();
  }, [activeCol]);
  (0, _react.useEffect)(function () {
    if (!activeCol) return;
    if (windowWidth >= _screenConfig.ScreenConfig.L.min) return;
    handlePagePosition();
  }, [windowWidth]);

  var handlePagePosition = function handlePagePosition() {
    var activeColEl = document.getElementById(activeCol);
    setActiveColOffset(activeColEl.offsetLeft);
  };

  return /*#__PURE__*/_react.default.createElement(ChatLayoutContext.Provider, {
    value: {
      setActiveColumn: setActiveColumn
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledChatLayout, (0, _extends2.default)({
    as: "main",
    id: "main",
    className: (0, _classnames.default)('k-ChatLayout', className),
    style: (0, _extends2.default)({}, style, {
      '--chatLayoutOffset': activeColOffset
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ChatLayout__grid"
  }, children)));
};

exports.ChatLayout = ChatLayout;

ChatLayout.Column = function (_ref2) {
  var name = _ref2.name,
      title = _ref2.title,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? null : _ref2$className,
      _ref2$isPrimaryColumn = _ref2.isPrimaryColumn,
      isPrimaryColumn = _ref2$isPrimaryColumn === void 0 ? false : _ref2$isPrimaryColumn,
      _ref2$hasMobileHeader = _ref2.hasMobileHeader,
      hasMobileHeader = _ref2$hasMobileHeader === void 0 ? false : _ref2$hasMobileHeader,
      children = _ref2.children,
      backAction = _ref2.backAction,
      backActionText = _ref2.backActionText,
      nextAction = _ref2.nextAction,
      nextActionText = _ref2.nextActionText,
      centeredHeader = _ref2.centeredHeader,
      _ref2$fullWidthConten = _ref2.fullWidthContent,
      fullWidthContent = _ref2$fullWidthConten === void 0 ? false : _ref2$fullWidthConten,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);

  var _useContext = (0, _react.useContext)(ChatLayoutContext),
      setActiveColumn = _useContext.setActiveColumn;

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
    weight: "bold",
    className: "k-ChatLayout__column__title"
  }, title), hasMobileHeader && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-ChatLayout__columnHeader', {
      'k-ChatLayout__columnHeader--centeredHeader': centeredHeader
    })
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "k-ChatLayout__columnHeader__back k-u-reset-button",
    type: "button",
    onClick: function onClick() {
      return backAction({
        setActiveColumn: setActiveColumn
      });
    }
  }, backActionText), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ChatLayout__columnHeader__title"
  }, title), nextAction && nextActionText && /*#__PURE__*/_react.default.createElement("button", {
    className: "k-ChatLayout__columnHeader__next k-u-reset-button",
    type: "button",
    onClick: function onClick() {
      return nextAction({
        setActiveColumn: setActiveColumn
      });
    }
  }, nextActionText)), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-ChatLayout__column__content', {
      'k-ChatLayout__column__content--fullWidth': fullWidthContent
    })
  }, typeof children === 'function' ? children({
    setActiveColumn: setActiveColumn
  }) : children));
};