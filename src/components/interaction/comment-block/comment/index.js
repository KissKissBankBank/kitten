"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Comment = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _text = require("../../../typography/text");

var _screenConfig = require("../../../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _heartIconNext = require("../../../graphics/icons-next/heart-icon-next");

const CommentWrapper = _styledComponents.default.div.withConfig({
  displayName: "comment__CommentWrapper",
  componentId: "sc-1wxubm3-0"
})(["--comment-arrow-size:", ";--comment-background-color:var(--color-grey-200);display:flex;gap:", ";padding:", ";border-radius:", ";flex-direction:column;position:relative;background-color:var(--comment-background-color);transition:background-color var(--transition);&.k-Comment--isSecondary{margin-left:", ";@media ", "{margin-left:", ";}}&.k-Comment--isHighlighted{--comment-background-color:var(--color-grey-400);.k-Comment__header__meta{color:var(--color-grey-700);}}&::before{content:'';width:0;height:0;position:absolute;left:calc(-1 * var(--comment-arrow-size));top:calc(50% - var(--comment-arrow-size));border:var(--comment-arrow-size) solid transparent;border-left:0;border-right-color:var(--comment-background-color);transition:border-right-color var(--transition);}.k-Comment__header{display:flex;gap:", ";align-items:center;justify-content:space-between;font-size:", ";}.k-Comment__header__meta{display:flex;gap:", ";align-items:center;color:var(--color-grey-600);}.k-Comment__header__image{display:block;width:", ";height:", ";overflow:hidden;object-fit:cover;object-position:center center;border-radius:", ";}.k-Comment__header__actions{display:flex;gap:", ";}.k-Comment__content{", " font-size:", ";}.k-Comment__footer{display:flex;gap:", ";}.k-Comment-LikeButton{display:flex;gap:", ";align-items:center;color:var(--color-grey-900);transition:color var(--transition);:disabled{cursor:not-allowed;opacity:0.5;}&[aria-pressed]{svg{color:var(--color-danger-500);}}svg{max-width:", ";max-height:", ";transition:inherit;}:not(:disabled):hover{color:var(--color-primary-700);}}"], (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(20), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(14));

const Comment = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    text,
    ownerName,
    avatarImgProps,
    commentDate,
    footer,
    headerActions,
    id,
    children,
    className,
    isSecondary,
    isHighlighted,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(CommentWrapper, (0, _extends2.default)({
    ref: ref || null,
    id: id,
    className: (0, _classnames.default)('k-Comment', className, {
      'k-Comment--isSecondary': isSecondary,
      'k-Comment--isHighlighted': isHighlighted
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Comment__header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Comment__header__meta"
  }, /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    alt: ""
  }, avatarImgProps, {
    className: "k-Comment__header__image"
  })), /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "500",
    color: "font1",
    className: "k-u-ellipsis"
  }, ownerName), /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    "aria-hidden": true
  }, "\u2022"), /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    weight: "400"
  }, commentDate)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Comment__header__actions"
  }, headerActions)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Comment__content"
  }, !!text && /*#__PURE__*/_react.default.createElement(_text.Text, {
    color: "font1",
    weight: "400",
    size: "small"
  }, text), children), footer && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Comment__footer"
  }, footer));
});

exports.Comment = Comment;

Comment.LikeButton = _ref2 => {
  let {
    children,
    accessibilityLabel,
    hasLiked,
    className,
    disabled,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    role: "button",
    "aria-pressed": !!hasLiked || null,
    className: (0, _classnames.default)('k-Comment-LikeButton', 'k-u-reset-button', 'k-u-link', className),
    disabled: disabled
  }, props), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-u-a11y-visuallyHidden"
  }, accessibilityLabel), children, /*#__PURE__*/_react.default.createElement(_heartIconNext.HeartIconNext, {
    "aria-hidden": "true",
    focusable: "false",
    color: "currentColor",
    bgColor: hasLiked ? 'currentColor' : 'transparent'
  }));
};

Comment.propTypes = {
  ownerName: _propTypes.default.string,
  ownerUrl: (0, _deprecated.default)(_propTypes.default.string, 'Not used anymore'),
  avatarImgProps: _propTypes.default.object,
  commentDate: _propTypes.default.string,
  headerActions: _propTypes.default.node,
  footer: _propTypes.default.node,
  bottomNotes: (0, _deprecated.default)(_propTypes.default.node, 'Please use footer prop instead'),
  text: (0, _deprecated.default)(_propTypes.default.node, 'Please use children prop instead'),
  likeButtonProps: (0, _deprecated.default)(_propTypes.default.object, 'Please use headerActions={<Comment.LikeButton />} instead'),
  isSecondary: _propTypes.default.bool,
  isHighlighted: _propTypes.default.bool
};
Comment.defaultProps = {
  footer: null,
  ownerName: '',
  headerActions: null,
  avatarImgProps: {},
  commentDate: '',
  isSecondary: false,
  isHighlighted: false
};
Comment.LikeButton.defaultProps = {
  hasLiked: false
};
Comment.LikeButton.propTypes = {
  accessibilityLabel: _propTypes.default.string.isRequired,
  hasLiked: _propTypes.default.bool
};