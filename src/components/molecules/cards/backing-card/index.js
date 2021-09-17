"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.BackingCard = void 0;

require("core-js/modules/es.array.map.js");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

var _components = require("./components");

var _reactElements = require("../../../../helpers/react/react-elements");

var _excluded = ["children", "className", "disabled", "hasBorder"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BackingCard = function BackingCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      hasBorder = _ref.hasBorder,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var imageChild = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: BackingCard.Image
  })[0];
  var buttonChild = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: BackingCard.Button
  })[0];
  var wrappedChildren = (0, _reactElements.getReactElementsWithoutTypeArray)({
    children: children,
    typeArray: [BackingCard.Button, BackingCard.Image]
  });
  return /*#__PURE__*/_react.default.createElement(_styles.StyledBackingCard, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-BackingCard', className, {
      'k-BackingCard--disabled': disabled,
      'k-BackingCard--hasBorder': hasBorder
    })
  }), imageChild && /*#__PURE__*/(0, _react.cloneElement)(imageChild), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-BackingCard__gridWrapper"
  }, wrappedChildren && wrappedChildren.map(function (item, index) {
    return /*#__PURE__*/(0, _react.cloneElement)(item, {
      key: "BackingCard-" + index
    });
  })), buttonChild && /*#__PURE__*/(0, _react.cloneElement)(buttonChild, {
    disabled: disabled
  }));
};

exports.BackingCard = BackingCard;
BackingCard.Info = _components.Info;
BackingCard.Form = _components.Form;
BackingCard.Title = _components.Title;
BackingCard.Image = _components.Image;
BackingCard.Amount = _components.Amount;
BackingCard.Button = _components.Button;
BackingCard.TagList = _components.TagList;
BackingCard.HeadingTag = _components.HeadingTag;
BackingCard.Description = _components.Description;
BackingCard.defaultProps = {
  hasBorder: true,
  disabled: false
};
BackingCard.propTypes = {
  hasBorder: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};