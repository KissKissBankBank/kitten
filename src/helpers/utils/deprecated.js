"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasDeprecatedProps = exports.Deprecated = void 0;

var _react = _interopRequireWildcard(require("react"));

var _flow = _interopRequireDefault(require("lodash/fp/flow"));

var _keys = _interopRequireDefault(require("lodash/fp/keys"));

var _intersection = _interopRequireDefault(require("lodash/fp/intersection"));

var Deprecated = function Deprecated(_ref) {
  var children = _ref.children,
      warningMessage = _ref.warningMessage;
  (0, _react.useEffect)(function () {
    if (process.env.NODE_ENV === 'development') {
      var owner = _react.default.Children.only(children)._owner;

      if (!owner) return;
      var componentName = owner.type.name;
      console.warn("Warning: ".concat(componentName, " is deprecated."), warningMessage);
    }
  }, []);
  return children;
};

exports.Deprecated = Deprecated;

var hasDeprecatedProps = function hasDeprecatedProps(deprecatedKeys) {
  return function (props) {
    return (0, _flow.default)(_keys.default, (0, _intersection.default)(deprecatedKeys))(props).length > 0;
  };
};

exports.hasDeprecatedProps = hasDeprecatedProps;