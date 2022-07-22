"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.List = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _buttonItem = require("./components/button-item");

var _classnames = _interopRequireDefault(require("classnames"));

const StyledList = _styledComponents.default.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-1iggnry-0"
})(["list-style:none;margin:0;padding:0;&.k-List--hasBottomRadius .k-List__item:last-child .k-List__button{border-bottom-left-radius:var(--list-bottomRadiusValue,0);border-bottom-right-radius:var(--list-bottomRadiusValue,0);}.k-List__item{display:flex;gap:", ";align-items:center;&:not(:first-child){margin-bottom:var(--list-gap);}&:not(:last-child){margin-bottom:var(--list-gap);}}.k-List__marker{display:inline-flex;align-items:center;}", ""], (0, _typography.pxToRem)(10), _ref => {
  let {
    styles
  } = _ref;
  return styles;
});

const List = _ref2 => {
  let {
    children,
    style,
    className,
    bottomBorderRadiusValue,
    withBottomBorderRadius,
    markerElement,
    gap,
    ...props
  } = _ref2;
  const radiusValue = bottomBorderRadiusValue > 0 ? bottomBorderRadiusValue : withBottomBorderRadius;
  return /*#__PURE__*/_react.default.createElement(StyledList, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-List', className, {
      'k-List--hasBottomRadius': bottomBorderRadiusValue > 0 || withBottomBorderRadius
    }),
    style: {
      '--list-gap': (0, _typography.pxToRem)(gap),
      '--list-bottomRadiusValue': (0, _typography.pxToRem)(radiusValue || 0),
      ...style
    }
  }), _react.default.Children.map(children, (child, index) => {
    if (! /*#__PURE__*/_react.default.isValidElement(child)) return null;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      className: "k-List__item"
    }, markerElement && /*#__PURE__*/_react.default.createElement("span", {
      "aria-hidden": true,
      className: "k-List__marker"
    }, markerElement), child);
  }));
};

exports.List = List;
List.ButtonItem = _buttonItem.ButtonItem;
List.defaultProps = {
  markerElement: null,
  bottomBorderRadiusValue: 0,
  gap: 0
};
List.propTypes = {
  markerElement: _propTypes.default.node,
  bottomBorderRadiusValue: _propTypes.default.number,
  gap: _propTypes.default.number,
  withBottomBorderRadius: (0, _deprecated.default)(_propTypes.default.number, 'This prop is deprecated, please use `bottomBorderRadiusValue instead.')
};