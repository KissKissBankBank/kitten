"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.hasDeprecatedProps = exports.Deprecated = void 0;

var _react = _interopRequireWildcard(require("react"));

var _flow = _interopRequireDefault(require("lodash/fp/flow"));

var _keys = _interopRequireDefault(require("lodash/fp/keys"));

var _intersection = _interopRequireDefault(require("lodash/fp/intersection"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Deprecated = function Deprecated(_ref) {
  var children = _ref.children,
      warningMessage = _ref.warningMessage;
  (0, _react.useEffect)(function () {
    if (process.env.NODE_ENV === 'development') {
      var owner = _react.default.Children.only(children)._owner;

      if (!owner) return;
      var componentName = owner.type.name;
      console.warn("Warning: " + componentName + " is deprecated.", warningMessage);
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