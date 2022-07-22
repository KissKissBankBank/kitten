"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Content = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _context = require("./context");

var _typography = require("../../../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Content = _ref => {
  let {
    id,
    children,
    index,
    className,
    ...props
  } = _ref;
  const [maxHeight, setMaxHeight] = (0, _react.useState)(0);
  const contentEl = (0, _react.useRef)(null);
  const {
    selectedItem,
    componentId,
    accordeonWidth
  } = (0, _react.useContext)(_context.Context);
  (0, _react.useEffect)(() => {
    var _contentEl$current;

    setMaxHeight((contentEl == null ? void 0 : (_contentEl$current = contentEl.current) == null ? void 0 : _contentEl$current.scrollHeight) || 0);
  }, [selectedItem, accordeonWidth]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Accordeon__content', className),
    "aria-hidden": !selectedItem.includes(index),
    ref: contentEl,
    style: {
      '--accordeon-content-max-height': (0, _typography.pxToRem)(maxHeight)
    },
    id: componentId + "-" + id + "_content",
    "aria-labelledby": componentId + "-" + id + "_header"
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Accordeon__content_marger"
  }, children), /*#__PURE__*/_react.default.createElement("div", null));
};

exports.Content = Content;