"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ProfileCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../../helpers/utils/typography");

var _getReactElements = require("../../../../helpers/react/get-react-elements");

const StyledProfileCard = _styledComponents.default.article.withConfig({
  displayName: "profile-card__StyledProfileCard",
  componentId: "sc-1pd6iwb-0"
})(["--profileCard-padding:", ";--profileCard-image-size:", ";&.k-ProfileCardWrapper--hasImage{padding-top:calc(var(--profileCard-image-size) / 2);}.k-ProfileCard{box-shadow:var(--box-shadow-s);border-radius:var(--border-radius-m);padding:var(--profileCard-padding);display:flex;flex-direction:column;background-color:var(--color-grey-000);gap:", ";}.k-ProfileCard__avatar{.k-ProfileCard__avatar__image{margin-top:calc( -1 * (var(--profileCard-padding) + (var(--profileCard-image-size) / 2)) );margin-left:auto;margin-right:auto;width:var(--profileCard-image-size);height:var(--profileCard-image-size);object-fit:cover;object-position:center;display:block;border-radius:var(--border-radius-rounded);border:var(--border-width) solid var(--color-grey-300);}}.k-ProfileCard__content{text-align:center;}.k-ProfileCard__action{display:flex;flex-wrap:wrap;justify-content:center;gap:", ";}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10));

const ProfileCard = _ref => {
  var _AvatarChild$props;

  let {
    className,
    children,
    ...props
  } = _ref;
  const AvatarChild = (0, _getReactElements.getReactElementsByType)({
    children,
    type: Avatar
  })[0];
  const imageProps = Object.keys((AvatarChild == null ? void 0 : (_AvatarChild$props = AvatarChild.props) == null ? void 0 : _AvatarChild$props.imageProps) || {}) || [];
  return /*#__PURE__*/_react.default.createElement(StyledProfileCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProfileCardWrapper', className, {
      'k-ProfileCardWrapper--hasImage': imageProps.length > 0
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ProfileCard"
  }, children));
};

exports.ProfileCard = ProfileCard;

const Avatar = _ref2 => {
  let {
    className,
    imageProps,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProfileCard__avatar', className)
  }, props), Object.keys(imageProps).length > 0 && /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    alt: ""
  }, imageProps, {
    className: (0, _classnames.default)('k-ProfileCard__avatar__image', imageProps.className)
  })));
};

Avatar.defaultProps = {
  imageProps: {}
};
Avatar.protoTypes = {
  imageProps: _propTypes.default.object
};

const Content = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProfileCard__content', className)
  }, props));
};

const Action = _ref4 => {
  let {
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProfileCard__action', className)
  }, props));
};

ProfileCard.Avatar = Avatar;
ProfileCard.Content = Content;
ProfileCard.Action = Action;