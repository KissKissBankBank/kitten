import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children"],
    _excluded2 = ["className", "style", "peopleAvatar"],
    _excluded3 = ["className", "style"],
    _excluded4 = ["className", "style"];
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { pxToRem } from '../../../../helpers/utils/typography';
import { mq } from '../../../../constants/screen-config';
import { AvatarWithTextAndBadge } from '../../../information/avatar-with-text-and-badge';
import { PeopleCircleIconNext } from '../../../graphics/icons-next/people-circle-icon-next';
var StyledPeopleCard = styled.article.withConfig({
  displayName: "people-card__StyledPeopleCard",
  componentId: "sc-an51ay-0"
})(["max-width:100%;position:relative;display:block;box-sizing:border-box;text-decoration:none;background-color:var(--color-grey-000);padding:", "};border:var(--border);border-radius:var(--border-radius-s);display:flex;gap:0 ", ";height:", ";@media ", "{flex-direction:row;gap:0 ", ";}.k-PeopleCard__image{display:flex;align-items:center;}.k-PeopleCard__cell{flex:1 1 auto;}.k-PeopleCard__lastCell{flex:0 0 auto;z-index:2;display:flex;align-items:stretch;justify-content:stretch;margin:", " ", ";.k-DropdownMenu .k-DropdownMenu__button{box-sizing:border-box;display:flex;justify-content:center;align-items:center;height:100%;padding:0 ", ";&:focus-visible .k-DropdownMenu__button__inside{outline:auto;outline-offset:", ";}}}"], pxToRem(15), pxToRem(15), pxToRem(63), mq.mobile, pxToRem(10), pxToRem(-20), pxToRem(-30), pxToRem(30), pxToRem(-2));
export var PeopleCard = function PeopleCard(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledPeopleCard, _extends({
    className: classNames('k-PeopleCard', className)
  }, props), children);
};

PeopleCard.Image = function (_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      _ref2$peopleAvatar = _ref2.peopleAvatar,
      peopleAvatar = _ref2$peopleAvatar === void 0 ? true : _ref2$peopleAvatar,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-PeopleCard__image', className)
  }), peopleAvatar ? /*#__PURE__*/React.createElement(AvatarWithTextAndBadge, null, /*#__PURE__*/React.createElement(AvatarWithTextAndBadge.Image, {
    alt: "",
    size: "small",
    src: "/kitten-0.jpg"
  })) : /*#__PURE__*/React.createElement(PeopleCircleIconNext, null));
};

PeopleCard.Cell = function (_ref3) {
  var className = _ref3.className,
      style = _ref3.style,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-PeopleCard__cell', className)
  }));
};

PeopleCard.LastCell = function (_ref4) {
  var className = _ref4.className,
      style = _ref4.style,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-PeopleCard__lastCell', className)
  }));
};