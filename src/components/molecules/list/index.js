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
exports.List = void 0;

require("core-js/modules/es.array.map.js");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _buttonItem = require("./components/button-item");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["children", "style", "className", "bottomBorderRadiusValue", "withBottomBorderRadius"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledList = _styledComponents.default.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-14838o0-0"
})(["list-style:none;margin:0;padding:0;", " ", ""], function (_ref) {
  var radiusValue = _ref.radiusValue;
  return radiusValue > 0 && (0, _styledComponents.css)(["& li:last-child .k-List__button{border-bottom-left-radius:", ";border-bottom-right-radius:", ";}"], (0, _typography.pxToRem)(radiusValue), (0, _typography.pxToRem)(radiusValue));
}, function (_ref2) {
  var styles = _ref2.styles;
  return styles;
});

var List = function List(_ref3) {
  var children = _ref3.children,
      style = _ref3.style,
      className = _ref3.className,
      bottomBorderRadiusValue = _ref3.bottomBorderRadiusValue,
      withBottomBorderRadius = _ref3.withBottomBorderRadius,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded);
  var radiusValue = bottomBorderRadiusValue > 0 ? bottomBorderRadiusValue : withBottomBorderRadius;
  return /*#__PURE__*/_react.default.createElement(StyledList, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-List', className),
    styles: style,
    radiusValue: radiusValue
  }), _react.default.Children.map(children, function (child, index) {
    if (! /*#__PURE__*/_react.default.isValidElement(child)) return null;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, child);
  }));
};

exports.List = List;
List.ButtonItem = _buttonItem.ButtonItem;
List.defaultProps = {
  bottomBorderRadiusValue: 0
};
List.propTypes = {
  bottomBorderRadiusValue: _propTypes.default.number,
  withBottomBorderRadius: (0, _deprecated.default)(_propTypes.default.number, 'This prop is deprecated, please use `bottomBorderRadiusValue instead.')
};