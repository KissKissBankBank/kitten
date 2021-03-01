"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackingCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

var _components = require("./components");

var _useFlexGapCheck = require("../../../helpers/dom/use-flex-gap-check");

var BackingCard = function BackingCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      hasBorder = _ref.hasBorder,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "disabled", "hasBorder"]);
  var canUseGap = (0, _useFlexGapCheck.useFlexGapCheck)();
  return /*#__PURE__*/_react.default.createElement(_styles.StyledBackingCard, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-BackingCard', className, {
      'k-BackingCard--disabled': disabled,
      'k-BackingCard--hasBorder': hasBorder,
      'k-BackingCard--noGap': !canUseGap
    })
  }), _react.default.Children.map(children, function (child) {
    if (!child) return null;
    return child.props.__TYPE === 'Image' ? child : null;
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-BackingCard__gridWrapper"
  }, _react.default.Children.map(children, function (child) {
    if (!child) return null;
    return ['Image', 'Button'].includes(child.props.__TYPE) ? null : child;
  })), _react.default.Children.map(children, function (child) {
    if (!child) return null;
    return child.props.__TYPE === 'Button' ? (0, _react.cloneElement)(child, {
      disabled: disabled
    }) : null;
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