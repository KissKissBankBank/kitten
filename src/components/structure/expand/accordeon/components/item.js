"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Item = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getReactElements = require("../../../../../helpers/react/get-react-elements");

var _header = require("./header");

var _content = require("./content");

var _context = require("./context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Item = _ref => {
  let {
    children,
    id,
    index,
    className,
    ...props
  } = _ref;
  const {
    selectedItem
  } = (0, _react.useContext)(_context.Context);
  const header = (0, _getReactElements.getReactElementsByType)({
    children,
    type: _header.Header
  });
  const content = (0, _getReactElements.getReactElementsByType)({
    children,
    type: _content.Content
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Accordeon__item', className, {
      'k-Accordeon__item--expanded': selectedItem.includes(index)
    })
  }, props), header[0] && /*#__PURE__*/_react.default.cloneElement(header[0], {
    id,
    index
  }), content[0] && /*#__PURE__*/_react.default.cloneElement(content[0], {
    id,
    index
  }));
};

exports.Item = Item;
Item.propTypes = {
  id: _propTypes.default.string
};
Item.defaultProps = {
  id: null
};