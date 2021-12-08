"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentCard = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _screenConfig = require("../../../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _title = require("../../../../components/atoms/typography/title");

var StyledCard = _styledComponents.default.article.withConfig({
  displayName: "content-card__StyledCard",
  componentId: "sc-1eey6rg-0"
})(["padding:", " ", " ", ";border:var(--border);border-radius:var(--border-radius-m);width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:", ";@media ", "{padding:", " ", " ", ";}.k-ContentCard__header{", ";font-size:", ";}.k-ContentCard__title{}.k-ContentCard__content{position:relative;>:first-child{margin-top:0;}>:last-child{margin-bottom:0;}font-size:", ";@media ", "{font-size:", ";}img{max-width:100%;}}.k-ContentCard__content--fixedHeight{max-height:", ";overflow:hidden;.k-ContentCard__content__readMore{position:absolute;bottom:0;left:0;right:0;width:100%;height:", ";text-align:left;display:flex;align-items:flex-end;background:linear-gradient( to top,var(--color-grey-000) 1em,rgba(255,255,255,0) 100% );@media ", "{height:", ";}}}.k-ContentCard__footer{border-top:var(--border);padding-top:", ";}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(30), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(16), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(150), (0, _typography.pxToRem)(60), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(20));

var ContentCard = function ContentCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className"]);
  return /*#__PURE__*/_react.default.createElement(StyledCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ContentCard', className)
  }, props), children);
};

exports.ContentCard = ContentCard;

ContentCard.Header = function (_ref2) {
  var className = _ref2.className,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className"]);
  return /*#__PURE__*/_react.default.createElement("aside", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ContentCard__header', className)
  }, props));
};

ContentCard.Title = function (_ref3) {
  var className = _ref3.className,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["className"]);
  return /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    as: "header",
    modifier: "quaternary",
    noMargin: true,
    className: (0, _classnames.default)('k-ContentCard__title', className)
  }, props));
};

ContentCard.Content = function (_ref4) {
  var children = _ref4.children,
      className = _ref4.className,
      fixedHeight = _ref4.fixedHeight,
      readMoreButtonText = _ref4.readMoreButtonText,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["children", "className", "fixedHeight", "readMoreButtonText"]);

  var _useState = (0, _react.useState)(fixedHeight),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      innerFixedHeight = _useState2[0],
      setInnerFixedHeight = _useState2[1];

  (0, _react.useEffect)(function () {
    setInnerFixedHeight(fixedHeight);
  }, [fixedHeight]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ContentCard__content', className, {
      'k-ContentCard__content--fixedHeight': innerFixedHeight
    })
  }, props), children, innerFixedHeight && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "k-u-reset-button k-u-link k-u-link-font1 k-ContentCard__content__readMore",
    onClick: function onClick() {
      return setInnerFixedHeight(false);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, readMoreButtonText)));
};

ContentCard.Footer = function (_ref5) {
  var className = _ref5.className,
      props = (0, _objectWithoutProperties2.default)(_ref5, ["className"]);
  return /*#__PURE__*/_react.default.createElement("footer", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ContentCard__footer', className)
  }, props));
};

ContentCard.defaultProps = {};
ContentCard.propTypes = {};
ContentCard.Content.defaultProps = {
  fixedHeight: false,
  readMoreButtonText: 'Read more…'
};
ContentCard.Content.propTypes = {
  fixedHeight: _propTypes.default.bool,
  readMoreButtonText: _propTypes.default.string
};