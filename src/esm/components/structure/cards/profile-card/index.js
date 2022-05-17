import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children"],
    _excluded2 = ["className", "imageProps"],
    _excluded3 = ["className"],
    _excluded4 = ["className"];
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { pxToRem } from '../../../../helpers/utils/typography';
import { getReactElementsByType } from '../../../../helpers/react/get-react-elements';
var StyledProfileCard = styled.article.withConfig({
  displayName: "profile-card__StyledProfileCard",
  componentId: "sc-1pd6iwb-0"
})(["--profileCard-padding:", ";--profileCard-image-size:", ";&.k-ProfileCardWrapper--hasImage{padding-top:calc(var(--profileCard-image-size) / 2);}.k-ProfileCard{box-shadow:var(--box-shadow-s);border-radius:var(--border-radius-m);padding:var(--profileCard-padding);display:flex;flex-direction:column;background-color:var(--color-grey-000);gap:", ";}.k-ProfileCard__avatar{.k-ProfileCard__avatar__image{margin-top:calc( -1 * (var(--profileCard-padding) + (var(--profileCard-image-size) / 2)) );margin-left:auto;margin-right:auto;width:var(--profileCard-image-size);height:var(--profileCard-image-size);object-fit:cover;object-position:center;display:block;border-radius:var(--border-radius-rounded);border:var(--border-width) solid var(--color-grey-300);}}.k-ProfileCard__content{text-align:center;}.k-ProfileCard__action{display:flex;flex-wrap:wrap;justify-content:center;gap:", ";}"], pxToRem(20), pxToRem(100), pxToRem(20), pxToRem(10));
export var ProfileCard = function ProfileCard(_ref) {
  var _AvatarChild$props;

  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var AvatarChild = getReactElementsByType({
    children: children,
    type: Avatar
  })[0];
  var imageProps = Object.keys((AvatarChild == null ? void 0 : (_AvatarChild$props = AvatarChild.props) == null ? void 0 : _AvatarChild$props.imageProps) || {}) || [];
  return /*#__PURE__*/React.createElement(StyledProfileCard, _extends({
    className: classNames('k-ProfileCardWrapper', className, {
      'k-ProfileCardWrapper--hasImage': imageProps.length > 0
    })
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-ProfileCard"
  }, children));
};

var Avatar = function Avatar(_ref2) {
  var className = _ref2.className,
      imageProps = _ref2.imageProps,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

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

var Content = function Content(_ref3) {
  var className = _ref3.className,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProfileCard__content', className)
  }, props));
};

var Action = function Action(_ref4) {
  var className = _ref4.className,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ProfileCard__action', className)
  }, props));
};

ProfileCard.Avatar = Avatar;
ProfileCard.Content = Content;
ProfileCard.Action = Action;