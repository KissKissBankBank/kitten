import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "actionProps"],
    _excluded2 = ["className", "as"],
    _excluded3 = ["className", "style"],
    _excluded4 = ["className", "style"];
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { pxToRem } from '../../../../helpers/utils/typography';
import { mq } from '../../../../constants/screen-config';
var StyledManagerCard = styled.article.withConfig({
  displayName: "manager-card__StyledManagerCard",
  componentId: "sc-l07okp-0"
})(["max-width:100%;position:relative;display:block;box-sizing:border-box;text-decoration:none;background-color:var(--color-grey-000);padding:", " ", " ", " ", ";transition:background-color var(--transition),border-color var(--transition);box-shadow:var(--box-shadow-m);border-radius:var(--border-radius-m);display:flex;gap:0 ", ";&.k-ManagerCard--hasAction{&:hover{background-color:var(--color-grey-100);box-shadow:var(--box-shadow-hover-m);}&:active{background-color:var(--color-grey-200);border-color:var(--color-grey-600);}}@media ", "{flex-direction:column;}.k-ManagerCard__action{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;border-radius:var(--border-radius-m);cursor:pointer;z-index:1;:focus-visible{outline:auto;}}.k-ManagerCard__cell{flex:1 1 auto;}.k-ManagerCard__lastCell{flex:0 0 auto;z-index:2;display:flex;align-items:stretch;@media ", "{justify-content:flex-end;margin-bottom:", ";margin-right:", ";}@media ", "{justify-content:stretch;margin:", " ", ";}.k-DropdownMenu .k-DropdownMenu__button{box-sizing:border-box;display:flex;justify-content:center;@media ", "{align-items:flex-end;padding:", " ", ";}@media ", "{align-items:center;height:100%;padding:0 ", ";}&:focus-visible .k-DropdownMenu__button__inside{outline:auto;outline-offset:", ";}}}"], pxToRem(20), pxToRem(30), pxToRem(20), pxToRem(20), pxToRem(10), mq.mobile, mq.mq, pxToRem(-20), pxToRem(-30), mq.tabletAndDesktop, pxToRem(-20), pxToRem(-30), mq.mobile, pxToRem(20), pxToRem(30), mq.tabletAndDesktop, pxToRem(30), pxToRem(-2));
export var ManagerCard = function ManagerCard(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      _ref$actionProps = _ref.actionProps,
      actionProps = _ref$actionProps === void 0 ? {} : _ref$actionProps,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var actionClassName = actionProps.className,
      _actionProps$as = actionProps.as,
      actionAs = _actionProps$as === void 0 ? 'a' : _actionProps$as,
      action = _objectWithoutPropertiesLoose(actionProps, _excluded2);

  var ActionElement = actionAs;
  var hasAction = Object.keys(actionProps).length > 0;
  return /*#__PURE__*/React.createElement(StyledManagerCard, _extends({
    className: classNames('k-ManagerCard', className, {
      'k-ManagerCard--hasAction': hasAction
    })
  }, props), hasAction && /*#__PURE__*/React.createElement(ActionElement, _extends({
    className: classNames('k-ManagerCard__action', actionClassName)
  }, action)), children);
};

ManagerCard.Cell = function (_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded3);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-ManagerCard__cell', className)
  }));
};

ManagerCard.LastCell = function (_ref3) {
  var className = _ref3.className,
      style = _ref3.style,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded4);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-ManagerCard__lastCell', className)
  }));
};