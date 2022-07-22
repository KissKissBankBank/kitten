import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { pxToRem } from '../../../../helpers/utils/typography';
import { mq } from '../../../../constants/screen-config';
import { AvatarWithTextAndBadge } from '../../../information/avatar-with-text-and-badge';
import { PeopleCircleIconNext } from '../../../graphics/icons-next/people-circle-icon-next';
const StyledPeopleCard = styled.article.withConfig({
  displayName: "people-card__StyledPeopleCard",
  componentId: "sc-an51ay-0"
})(["max-width:100%;position:relative;display:block;box-sizing:border-box;text-decoration:none;background-color:var(--color-grey-000);padding:", "};border:var(--border);border-radius:var(--border-radius-s);display:flex;gap:0 ", ";height:", ";@media ", "{flex-direction:row;gap:0 ", ";}.k-PeopleCard__image{display:flex;align-items:center;}.k-PeopleCard__cell{flex:1 1 auto;}&.k-PeopleCard--disabled{background-color:var(--color-grey-200);border-color:var(--color-grey-400);color:var(--color-grey-700);.k-PeopleCard__lastCell{display:none;}.k-PeopleCard__image{opacity:.5;}}.k-PeopleCard__lastCell{flex:0 0 auto;z-index:2;display:flex;align-items:stretch;justify-content:stretch;margin:", " ", ";.k-DropdownMenu .k-DropdownMenu__button{box-sizing:border-box;display:flex;justify-content:center;align-items:center;height:100%;padding:0 ", ";&:focus-visible .k-DropdownMenu__button__inside{outline:auto;outline-offset:", ";}}}"], pxToRem(15), pxToRem(15), pxToRem(63), mq.mobile, pxToRem(10), pxToRem(-20), pxToRem(-30), pxToRem(30), pxToRem(-2));
export const PeopleCard = _ref => {
  let {
    className = '',
    children,
    disabled = false,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledPeopleCard, _extends({
    className: classNames('k-PeopleCard', className, {
      'k-PeopleCard--disabled': disabled
    })
  }, props), children);
};

PeopleCard.Image = _ref2 => {
  let {
    className,
    style,
    peopleAvatar = true,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-PeopleCard__image', className)
  }), peopleAvatar ? /*#__PURE__*/React.createElement(AvatarWithTextAndBadge, null, /*#__PURE__*/React.createElement(AvatarWithTextAndBadge.Image, {
    alt: "",
    size: "small",
    src: "/kitten-0.jpg"
  })) : /*#__PURE__*/React.createElement(PeopleCircleIconNext, null));
};

PeopleCard.Cell = _ref3 => {
  let {
    className,
    style,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-PeopleCard__cell', className)
  }));
};

PeopleCard.LastCell = _ref4 => {
  let {
    className,
    style,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-PeopleCard__lastCell', className)
  }));
};