"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PeopleCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

var _avatarWithTextAndBadge = require("../../../information/avatar-with-text-and-badge");

var _peopleCircleIconNext = require("../../../graphics/icons-next/people-circle-icon-next");

const StyledPeopleCard = _styledComponents.default.article.withConfig({
  displayName: "people-card__StyledPeopleCard",
  componentId: "sc-an51ay-0"
})(["max-width:100%;position:relative;display:block;box-sizing:border-box;text-decoration:none;background-color:var(--color-grey-000);padding:", "};border:var(--border);border-radius:var(--border-radius-s);display:flex;gap:0 ", ";height:", ";@media ", "{flex-direction:row;gap:0 ", ";}.k-PeopleCard__image{display:flex;align-items:center;}.k-PeopleCard__cell{flex:1 1 auto;}&.k-PeopleCard--disabled{background-color:var(--color-grey-200);border-color:var(--color-grey-400);color:var(--color-grey-700);.k-PeopleCard__lastCell{display:none;}.k-PeopleCard__image{opacity:.5;}}.k-PeopleCard__lastCell{flex:0 0 auto;z-index:2;display:flex;align-items:stretch;justify-content:stretch;margin:", " ", ";.k-DropdownMenu .k-DropdownMenu__button{box-sizing:border-box;display:flex;justify-content:center;align-items:center;height:100%;padding:0 ", ";&:focus-visible .k-DropdownMenu__button__inside{outline:auto;outline-offset:", ";}}}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(63), _screenConfig.mq.mobile, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(-20), (0, _typography.pxToRem)(-30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(-2));

const PeopleCard = _ref => {
  let {
    className = '',
    children,
    disabled = false,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledPeopleCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-PeopleCard', className, {
      'k-PeopleCard--disabled': disabled
    })
  }, props), children);
};

exports.PeopleCard = PeopleCard;

PeopleCard.Image = _ref2 => {
  let {
    className,
    style,
    peopleAvatar = true,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-PeopleCard__image', className)
  }), peopleAvatar ? /*#__PURE__*/_react.default.createElement(_avatarWithTextAndBadge.AvatarWithTextAndBadge, null, /*#__PURE__*/_react.default.createElement(_avatarWithTextAndBadge.AvatarWithTextAndBadge.Image, {
    alt: "",
    size: "small",
    src: "/kitten-0.jpg"
  })) : /*#__PURE__*/_react.default.createElement(_peopleCircleIconNext.PeopleCircleIconNext, null));
};

PeopleCard.Cell = _ref3 => {
  let {
    className,
    style,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-PeopleCard__cell', className)
  }));
};

PeopleCard.LastCell = _ref4 => {
  let {
    className,
    style,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-PeopleCard__lastCell', className)
  }));
};