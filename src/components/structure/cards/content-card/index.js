"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ContentCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _screenConfig = require("../../../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _title = require("../../../typography/title");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledCard = _styledComponents.default.article.withConfig({
  displayName: "content-card__StyledCard",
  componentId: "sc-axl17i-0"
})(["padding:", ";box-shadow:var(--box-shadow-m);border-radius:var(--border-radius-m);background-color:var(--color-grey-000);width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:", ";@media ", "{padding:", " ", " ", ";}.k-ContentCard__header{", ";font-size:", ";}.k-ContentCard__title{}.k-ContentCard__content{position:relative;> :first-child{margin-top:0;}> :last-child{margin-bottom:0;}font-size:", ";@media ", "{font-size:", ";}img{max-width:100%;}}.k-ContentCard__content--fixedHeight{max-height:", ";overflow:hidden;.k-ContentCard__content__readMore{position:absolute;bottom:0;left:0;right:0;width:100%;height:", ";text-align:left;display:flex;align-items:flex-end;background:linear-gradient( to top,var(--color-grey-000) 1em,rgba(255,255,255,0) 100% );@media ", "{height:", ";}}}.k-ContentCard__footer{border-top:var(--border);padding-top:", ";}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(30), _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(16), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(150), (0, _typography.pxToRem)(60), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(20));

const ContentCard = _ref => {
  let {
    children,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ContentCard', className)
  }, props), children);
};

exports.ContentCard = ContentCard;

ContentCard.Header = _ref2 => {
  let {
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("aside", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ContentCard__header', className)
  }, props));
};

ContentCard.Title = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    as: "header",
    modifier: "quaternary",
    noMargin: true,
    className: (0, _classnames.default)('k-ContentCard__title', className)
  }, props));
};

ContentCard.Content = _ref4 => {
  let {
    children,
    className,
    fixedHeight,
    readMoreButtonText,
    ...props
  } = _ref4;
  const [innerFixedHeight, setInnerFixedHeight] = (0, _react.useState)(fixedHeight);
  (0, _react.useEffect)(() => {
    setInnerFixedHeight(fixedHeight);
  }, [fixedHeight]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ContentCard__content', className, {
      'k-ContentCard__content--fixedHeight': innerFixedHeight
    })
  }, props), children, innerFixedHeight && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "k-u-reset-button k-u-link k-u-link-font1 k-ContentCard__content__readMore",
    onClick: () => setInnerFixedHeight(false)
  }, /*#__PURE__*/_react.default.createElement("span", null, readMoreButtonText)));
};

ContentCard.Footer = _ref5 => {
  let {
    className,
    ...props
  } = _ref5;
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