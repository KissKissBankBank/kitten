"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ProfileCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../../helpers/utils/typography");

var _getReactElements = require("../../../../helpers/react/get-react-elements");

var _excluded = ["className", "children"],
    _excluded2 = ["className", "imageProps"],
    _excluded3 = ["className"],
    _excluded4 = ["className"];

var StyledProfileCard = _styledComponents.default.article.withConfig({
  displayName: "profile-card__StyledProfileCard",
  componentId: "sc-1pd6iwb-0"
})(["--profileCard-padding:", ";--profileCard-image-size:", ";&.k-ProfileCardWrapper--hasImage{padding-top:calc(var(--profileCard-image-size) / 2);}.k-ProfileCard{box-shadow:var(--box-shadow-s);border-radius:var(--border-radius-m);padding:var(--profileCard-padding);display:flex;flex-direction:column;background-color:var(--color-grey-000);gap:", ";}.k-ProfileCard__avatar{.k-ProfileCard__avatar__image{margin-top:calc( -1 * (var(--profileCard-padding) + (var(--profileCard-image-size) / 2)) );margin-left:auto;margin-right:auto;width:var(--profileCard-image-size);height:var(--profileCard-image-size);object-fit:cover;object-position:center;display:block;border-radius:var(--border-radius-rounded);border:var(--border-width) solid var(--color-grey-300);}}.k-ProfileCard__content{text-align:center;}.k-ProfileCard__action{display:flex;flex-wrap:wrap;justify-content:center;gap:", ";}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10));

var ProfileCard = function ProfileCard(_ref) {
  var _AvatarChild$props;

  var className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var AvatarChild = (0, _getReactElements.getReactElementsByType)({
    children: children,
    type: Avatar
  })[0];
  var imageProps = Object.keys((AvatarChild == null ? void 0 : (_AvatarChild$props = AvatarChild.props) == null ? void 0 : _AvatarChild$props.imageProps) || {}) || [];
  return /*#__PURE__*/_react.default.createElement(StyledProfileCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProfileCardWrapper', className, {
      'k-ProfileCardWrapper--hasImage': imageProps.length > 0
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ProfileCard"
  }, children));
};

exports.ProfileCard = ProfileCard;

var Avatar = function Avatar(_ref2) {
  var className = _ref2.className,
      imageProps = _ref2.imageProps,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
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

var Content = function Content(_ref3) {
  var className = _ref3.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded3);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProfileCard__content', className)
  }, props));
};

var Action = function Action(_ref4) {
  var className = _ref4.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded4);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ProfileCard__action', className)
  }, props));
};

ProfileCard.Avatar = Avatar;
ProfileCard.Content = Content;
ProfileCard.Action = Action;