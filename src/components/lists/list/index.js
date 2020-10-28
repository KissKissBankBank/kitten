"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _buttonItem = require("./components/button-item");

var _classnames = _interopRequireDefault(require("classnames"));

var StyledList = _styledComponents.default.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-1ns0hml-0"
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
      props = (0, _objectWithoutProperties2.default)(_ref3, ["children", "style", "className", "bottomBorderRadiusValue", "withBottomBorderRadius"]);
  var radiusValue = bottomBorderRadiusValue > 0 ? bottomBorderRadiusValue : withBottomBorderRadius;
  return /*#__PURE__*/_react.default.createElement(StyledList, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-List', className),
    styles: style,
    radiusValue: radiusValue
  }), _react.default.Children.map(children, function (child) {
    if (!_react.default.isValidElement(child)) return null;
    return /*#__PURE__*/_react.default.createElement("li", null, child);
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