"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _context = require("./context");

var _classnames = _interopRequireDefault(require("classnames"));

var Logo = function Logo(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "children"]);
  return /*#__PURE__*/_react.default.createElement(_context.Context.Consumer, null, function (_ref2) {
    var id = _ref2.id;
    return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({}, props, {
      id: "".concat(id, "Logo"),
      className: (0, _classnames.default)('k-HeaderNav-Logo', className)
    }), children);
  });
};

exports.Logo = Logo;