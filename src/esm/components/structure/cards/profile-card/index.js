import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { pxToRem } from '../../../../helpers/utils/typography';
import { getReactElementsByType } from '../../../../helpers/react/get-react-elements';
const StyledProfileCard = styled.article.withConfig({
  displayName: "profile-card__StyledProfileCard",
  componentId: "sc-1pd6iwb-0"
})(["--profileCard-padding:", ";--profileCard-image-size:", ";&.k-ProfileCardWrapper--hasImage{padding-top:calc(var(--profileCard-image-size) / 2);}.k-ProfileCard{box-shadow:var(--box-shadow-s);border-radius:var(--border-radius-m);padding:var(--profileCard-padding);display:flex;flex-direction:column;background-color:var(--color-grey-000);gap:", ";}.k-ProfileCard__avatar{.k-ProfileCard__avatar__image{margin-top:calc( -1 * (var(--profileCard-padding) + (var(--profileCard-image-size) / 2)) );margin-left:auto;margin-right:auto;width:var(--profileCard-image-size);height:var(--profileCard-image-size);object-fit:cover;object-position:center;display:block;border-radius:var(--border-radius-rounded);border:var(--border-width) solid var(--color-grey-300);}}.k-ProfileCard__content{text-align:center;}.k-ProfileCard__action{display:flex;flex-wrap:wrap;justify-content:center;gap:", ";}"], pxToRem(20), pxToRem(100), pxToRem(20), pxToRem(10));
export const ProfileCard = _ref => {
  var _AvatarChild$props;

  let {
    className,
    children,
    ...props
  } = _ref;
  const AvatarChild = getReactElementsByType({
    children,
    type: Avatar
  })[0];
  const imageProps = Object.keys((AvatarChild == null ? void 0 : (_AvatarChild$props = AvatarChild.props) == null ? void 0 : _AvatarChild$props.imageProps) || {}) || [];
  return /*#__PURE__*/React.createElement(StyledProfileCard, _extends({
    className: classNames('k-ProfileCardWrapper', className, {
      'k-ProfileCardWrapper--hasImage': imageProps.length > 0
    })
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-ProfileCard"
  }, children));
};

const Avatar = _ref2 => {
  let {
    className,
    imageProps,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProfileCard__avatar', className)
  }, props), Object.keys(imageProps).length > 0 && /*#__PURE__*/React.createElement("img", _extends({
    alt: ""
  }, imageProps, {
    className: classNames('k-ProfileCard__avatar__image', imageProps.className)
  })));
};

Avatar.defaultProps = {
  imageProps: {}
};
Avatar.protoTypes = {
  imageProps: PropTypes.object
};

const Content = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProfileCard__content', className)
  }, props));
};

const Action = _ref4 => {
  let {
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProfileCard__action', className)
  }, props));
};

ProfileCard.Avatar = Avatar;
ProfileCard.Content = Content;
ProfileCard.Action = Action;