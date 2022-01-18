"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Item = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactElements = require("../../../../../helpers/react/react-elements");

var _header = require("./header");

var _content = require("./content");

var _context = require("./context");

var _excluded = ["children", "id", "index", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Item = function Item(_ref) {
  var children = _ref.children,
      id = _ref.id,
      index = _ref.index,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_context.Context),
      selectedItem = _useContext.selectedItem;

  var header = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: _header.Header
  });
  var content = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: _content.Content
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Accordeon__item', className, {
      'k-Accordeon__item--expanded': selectedItem.includes(index)
    })
  }, props), header[0] && /*#__PURE__*/_react.default.cloneElement(header[0], {
    id: id,
    index: index
  }), content[0] && /*#__PURE__*/_react.default.cloneElement(content[0], {
    id: id,
    index: index
  }));
};

exports.Item = Item;
Item.propTypes = {
  id: _propTypes.default.string
};
Item.defaultProps = {
  id: null
};