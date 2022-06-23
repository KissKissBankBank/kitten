"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PeopleCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

var _avatarWithTextAndBadge = require("../../../information/avatar-with-text-and-badge");

var _peopleCircleIconNext = require("../../../graphics/icons-next/people-circle-icon-next");

var _excluded = ["className", "children", "disabled"],
    _excluded2 = ["className", "style", "peopleAvatar"],
    _excluded3 = ["className", "style"],
    _excluded4 = ["className", "style"];

var StyledPeopleCard = _styledComponents.default.article.withConfig({
  displayName: "people-card__StyledPeopleCard",
  componentId: "sc-an51ay-0"
})(["max-width:100%;position:relative;display:block;box-sizing:border-box;text-decoration:none;background-color:var(--color-grey-000);padding:", "};border:var(--border);border-radius:var(--border-radius-s);display:flex;gap:0 ", ";height:", ";@media ", "{flex-direction:row;gap:0 ", ";}.k-PeopleCard__image{display:flex;align-items:center;}.k-PeopleCard__cell{flex:1 1 auto;}&.k-PeopleCard--disabled{background-color:var(--color-grey-200);border-color:var(--color-grey-400);color:var(--color-grey-700);.k-PeopleCard__lastCell{display:none;}.k-PeopleCard__image{opacity:.5;}}.k-PeopleCard__lastCell{flex:0 0 auto;z-index:2;display:flex;align-items:stretch;justify-content:stretch;margin:", " ", ";.k-DropdownMenu .k-DropdownMenu__button{box-sizing:border-box;display:flex;justify-content:center;align-items:center;height:100%;padding:0 ", ";&:focus-visible .k-DropdownMenu__button__inside{outline:auto;outline-offset:", ";}}}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(63), _screenConfig.mq.mobile, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(-20), (0, _typography.pxToRem)(-30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(-2));

var PeopleCard = function PeopleCard(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledPeopleCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-PeopleCard', className, {
      'k-PeopleCard--disabled': disabled
    })
  }, props), children);
};

exports.PeopleCard = PeopleCard;

PeopleCard.Image = function (_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      _ref2$peopleAvatar = _ref2.peopleAvatar,
      peopleAvatar = _ref2$peopleAvatar === void 0 ? true : _ref2$peopleAvatar,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-PeopleCard__image', className)
  }), peopleAvatar ? /*#__PURE__*/_react.default.createElement(_avatarWithTextAndBadge.AvatarWithTextAndBadge, null, /*#__PURE__*/_react.default.createElement(_avatarWithTextAndBadge.AvatarWithTextAndBadge.Image, {
    alt: "",
    size: "small",
    src: "/kitten-0.jpg"
  })) : /*#__PURE__*/_react.default.createElement(_peopleCircleIconNext.PeopleCircleIconNext, null));
};

PeopleCard.Cell = function (_ref3) {
  var className = _ref3.className,
      style = _ref3.style,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded3);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-PeopleCard__cell', className)
  }));
};

PeopleCard.LastCell = function (_ref4) {
  var className = _ref4.className,
      style = _ref4.style,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded4);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-PeopleCard__lastCell', className)
  }));
};