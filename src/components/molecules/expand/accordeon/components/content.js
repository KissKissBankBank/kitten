"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _context = require("./context");

var _typography = require("../../../../../helpers/utils/typography");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Content = function Content(_ref) {
  var id = _ref.id,
      children = _ref.children,
      index = _ref.index;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      maxHeight = _useState2[0],
      setMaxHeight = _useState2[1];

  var contentEl = (0, _react.useRef)(null);

  var _useContext = (0, _react.useContext)(_context.Context),
      selectedItem = _useContext.selectedItem,
      componentId = _useContext.componentId,
      accordeonWidth = _useContext.accordeonWidth;

  (0, _react.useEffect)(function () {
    var _contentEl$current;

    setMaxHeight((contentEl === null || contentEl === void 0 ? void 0 : (_contentEl$current = contentEl.current) === null || _contentEl$current === void 0 ? void 0 : _contentEl$current.scrollHeight) || 0);
  }, [selectedItem, accordeonWidth]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Accordeon__content",
    "aria-hidden": selectedItem !== index,
    ref: contentEl,
    style: {
      '--accordeon-content-max-height': (0, _typography.pxToRem)(maxHeight)
    },
    id: "".concat(componentId, "-").concat(id, "_content"),
    "aria-labelledby": "".concat(componentId, "-").concat(id, "_header")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Accordeon__content_marger"
  }, children), /*#__PURE__*/_react.default.createElement("div", null));
};

exports.Content = Content;