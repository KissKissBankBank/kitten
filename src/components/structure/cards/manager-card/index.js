"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ManagerCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

const StyledManagerCard = _styledComponents.default.article.withConfig({
  displayName: "manager-card__StyledManagerCard",
  componentId: "sc-l07okp-0"
})(["max-width:100%;position:relative;display:block;box-sizing:border-box;text-decoration:none;background-color:var(--color-grey-000);padding:", " ", " ", " ", ";transition:background-color var(--transition),border-color var(--transition);box-shadow:var(--box-shadow-m);border-radius:var(--border-radius-m);display:flex;gap:0 ", ";&.k-ManagerCard--hasAction{&:hover{background-color:var(--color-grey-100);box-shadow:var(--box-shadow-hover-m);}&:active{background-color:var(--color-grey-200);border-color:var(--color-grey-600);}}@media ", "{flex-direction:column;}.k-ManagerCard__action{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;border-radius:var(--border-radius-m);cursor:pointer;z-index:1;:focus-visible{outline:auto;}}.k-ManagerCard__cell{flex:1 1 auto;}.k-ManagerCard__lastCell{flex:0 0 auto;z-index:2;display:flex;align-items:stretch;@media ", "{justify-content:flex-end;margin-bottom:", ";margin-right:", ";}@media ", "{justify-content:stretch;margin:", " ", ";}.k-DropdownMenu .k-DropdownMenu__button{box-sizing:border-box;display:flex;justify-content:center;@media ", "{align-items:flex-end;padding:", " ", ";}@media ", "{align-items:center;height:100%;padding:0 ", ";}&:focus-visible .k-DropdownMenu__button__inside{outline:auto;outline-offset:", ";}}}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), _screenConfig.mq.mobile, _screenConfig.mq.mq, (0, _typography.pxToRem)(-20), (0, _typography.pxToRem)(-30), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(-20), (0, _typography.pxToRem)(-30), _screenConfig.mq.mobile, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(-2));

const ManagerCard = _ref => {
  let {
    className = '',
    children,
    actionProps = {},
    ...props
  } = _ref;
  const {
    className: actionClassName,
    as: actionAs = 'a',
    ...action
  } = actionProps;
  const ActionElement = actionAs;
  const hasAction = Object.keys(actionProps).length > 0;
  return /*#__PURE__*/_react.default.createElement(StyledManagerCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ManagerCard', className, {
      'k-ManagerCard--hasAction': hasAction
    })
  }, props), hasAction && /*#__PURE__*/_react.default.createElement(ActionElement, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ManagerCard__action', actionClassName)
  }, action)), children);
};

exports.ManagerCard = ManagerCard;

ManagerCard.Cell = _ref2 => {
  let {
    className,
    style,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ManagerCard__cell', className)
  }));
};

ManagerCard.LastCell = _ref3 => {
  let {
    className,
    style,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ManagerCard__lastCell', className)
  }));
};