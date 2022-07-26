"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.InfoLines = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

const StyledInfoLines = _styledComponents.default.dl.withConfig({
  displayName: "info-lines__StyledInfoLines",
  componentId: "sc-wen3t4-0"
})(["&.k-InfoLines--withBorderRadius{border-radius:var(--border-radius-m);}&.k-InfoLines--withLeftRightBorder{border-left:", " solid var(--InfoLines-borderColor);border-right:", " solid var(--InfoLines-borderColor);.k-InfoLines__line{padding:", " ", ";}}&:not(.k-InfoLines--withoutTopBottomBorder){border-top:", " solid var(--InfoLines-borderColor);border-bottom:", " solid var(--InfoLines-borderColor);}.k-InfoLines__line{box-sizing:border-box;display:flex;padding:", " 0;min-height:", ";gap:", " ", ";align-items:center;flex-direction:row;justify-content:space-between;&:not(:first-child){border-top:", " solid var(--InfoLines-borderColor);}}.k-InfoLines__key,.k-InfoLines__value{margin:0;}&:not(.k-InfoLines--withoutResponsive){@media (max-width:", "px){.k-InfoLines__line{align-items:flex-start;flex-direction:column;}.k-InfoLines__key{flex:0;}}}"], (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(1), _screenConfig.ScreenConfig.S.max);

const InfoLines = _ref => {
  let {
    className,
    style,
    infos,
    withBorderRadius,
    withLeftRightBorder,
    withoutTopBottomBorder,
    withoutResponsive,
    borderColor,
    descriptionTagList,
    titleTagList,
    itemTagList,
    ...others
  } = _ref;
  const TitleElement = titleTagList;
  const ItemElement = itemTagList;
  return /*#__PURE__*/_react.default.createElement(StyledInfoLines, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Infolines', className, {
      'k-InfoLines--withBorderRadius': withBorderRadius,
      'k-InfoLines--withLeftRightBorder': withLeftRightBorder,
      'k-InfoLines--withoutTopBottomBorder': withoutTopBottomBorder,
      'k-InfoLines--withoutResponsive': withoutResponsive
    }),
    style: { ...style,
      '--InfoLines-borderColor': borderColor
    },
    as: descriptionTagList
  }, others), infos.map(info => /*#__PURE__*/_react.default.createElement("div", {
    className: "k-InfoLines__line",
    key: info.id || info.key
  }, /*#__PURE__*/_react.default.createElement(TitleElement, {
    className: "k-InfoLines__key"
  }, info.key), /*#__PURE__*/_react.default.createElement(ItemElement, {
    className: "k-InfoLines__value"
  }, info.value))));
};

exports.InfoLines = InfoLines;
InfoLines.propTypes = {
  infos: _propTypes.default.array.isRequired,
  borderColor: _propTypes.default.string,
  withBorderRadius: _propTypes.default.bool,
  withLeftRightBorder: _propTypes.default.bool,
  withoutTopBottomBorder: _propTypes.default.bool,
  withoutResponsive: _propTypes.default.bool,
  descriptionTagList: _propTypes.default.string,
  titleTagList: _propTypes.default.string,
  itemTagList: _propTypes.default.string
};
InfoLines.defaultProps = {
  borderColor: 'var(--color-grey-400)',
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutTopBottomBorder: false,
  withoutResponsive: false,
  descriptionTagList: 'dl',
  titleTagList: 'dt',
  itemTagList: 'dd'
};