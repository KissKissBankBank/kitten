"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HorizontalProjectCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _progress = require("../../../feedback/progress");

var _text = require("../../../typography/text");

const StyledCard = _styledComponents.default.a.withConfig({
  displayName: "horizontal-project-card__StyledCard",
  componentId: "sc-1k9w47l-0"
})(["border:var(--border-width) solid transparent;background-color:", ";box-sizing:border-box;height:", ";width:100%;padding:", ";display:grid;gap:", " ", ";grid-template-columns:", " ", " 1fr;grid-template-rows:auto repeat(2,1fr);text-decoration:none;color:", ";border-radius:calc(", " + var(--border-width));transition:background-color 0.2s ease,border-color 0.2s ease;&[href]:hover{border-color:var(--color-grey-400);background-color:", ";}&[href]:active{border-color:var(--color-grey-500);background-color:", ";}&[href]:focus-visible{outline:auto;}.k-HorizontalProjectCard__imageWrapper{grid-column:1 / span 1;grid-row:1 / span 3;img{width:", ";height:", ";object-fit:cover;object-position:center;border-radius:var(--border-radius-xs);}}.k-HorizontalProjectCard__title{grid-column:2 / span 2;grid-row:1 / 2;margin:0;line-height:1.2;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}.k-HorizontalProjectCard__description{grid-column:2 / span 2;grid-row:2 / 3;margin:0;line-height:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}.k-HorizontalProjectCard__info{grid-column:2 / span 1;grid-row:3 / 4;}.k-HorizontalProjectCard__progress{grid-column:3 / span 1;grid-row:3 / 4;place-self:center stretch;display:flex;gap:", ";align-items:center;.k-HorizontalProjectCard__progress__ramp{flex:1 0 calc(100% - ", ");}.k-HorizontalProjectCard__progress__value{flex:0 0 ", ";width:", ";}@media (max-width:", "){display:none;}}&.k-HorizontalProjectCard--noBottomLine{grid-template-rows:repeat(2,1fr);.k-HorizontalProjectCard__imageWrapper{grid-row:1 / span 2;}.k-HorizontalProjectCard__title{align-self:end;}}@media (max-width:", "){&.k-HorizontalProjectCard--noProgressOnMobile{.k-HorizontalProjectCard__progress{display:none;}.k-HorizontalProjectCard__info{grid-column:2 / span 2;}}}"], _colorsConfig.default.background1, (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(110), _colorsConfig.default.font1, (0, _typography.pxToRem)(4 + 4), _colorsConfig.default.background2, _colorsConfig.default.background3, (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5 + 46), (0, _typography.pxToRem)(46), (0, _typography.pxToRem)(46), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XXS.max), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max));

const HorizontalProjectCard = _ref => {
  let {
    href = '#',
    imageProps = {
      src: '',
      alt: ''
    },
    title = '',
    titleTag = 'h3',
    description = '',
    info = null,
    progress = 0,
    progressColor = _colorsConfig.default.primary1,
    className,
    noProgressOnMobile = false,
    noProgress = false,
    progressLabel = 'progression',
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledCard, (0, _extends2.default)({
    href: href,
    className: (0, _classnames.default)('k-HorizontalProjectCard', className, {
      'k-HorizontalProjectCard--noProgressOnMobile': noProgressOnMobile,
      'k-HorizontalProjectCard--noBottomLine': !info && noProgress
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-HorizontalProjectCard__imageWrapper"
  }, /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({}, imageProps, {
    alt: imageProps.alt || ''
  }))), /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "500",
    size: "small",
    as: titleTag,
    className: "k-HorizontalProjectCard__title"
  }, title), /*#__PURE__*/_react.default.createElement(_text.Text, {
    as: "p",
    weight: "400",
    size: "micro",
    className: "k-HorizontalProjectCard__description"
  }, description), !!info && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-HorizontalProjectCard__info"
  }, info), !noProgress && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-HorizontalProjectCard__progress"
  }, /*#__PURE__*/_react.default.createElement(_progress.Progress, {
    "aria-label": progressLabel,
    value: progress,
    color: progressColor,
    rampProps: {
      style: {
        height: 4
      }
    },
    className: "k-HorizontalProjectCard__progress__ramp"
  }), /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "400",
    size: "micro",
    className: "k-HorizontalProjectCard__progress__value"
  }, progress, "\xA0%")));
};

exports.HorizontalProjectCard = HorizontalProjectCard;
HorizontalProjectCard.propTypes = {
  href: _propTypes.default.string,
  imageProps: _propTypes.default.object,
  title: _propTypes.default.string,
  titleTag: _propTypes.default.string,
  description: _propTypes.default.string,
  info: _propTypes.default.node,
  progress: _propTypes.default.number,
  progressColor: _propTypes.default.string,
  progressLabel: _propTypes.default.string,
  noProgress: _propTypes.default.bool,
  noProgressOnMobile: _propTypes.default.bool
};