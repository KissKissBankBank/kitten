"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Row = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _container = require("../../layout/container");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _screenConfig = require("../../../constants/screen-config");

const StyledRow = _styledComponents.default.div.withConfig({
  displayName: "row__StyledRow",
  componentId: "sc-aqavk0-0"
})(["&.k-Row--centered{text-align:center;}&.k-Row--light{background:", ";}&.k-Row--dark{background:", ";color:", ";}&.k-Row--lightTopBorder{border-top:var(--border);}&.k-Row--lightBottomBorder{border-bottom:var(--border);}&.k-Row--padded .k-Row__content{padding-top:", ";padding-bottom:", ";@media (min-width:", "){padding-top:", ";padding-bottom:", ";}}"], _colorsConfig.default.primary6, _colorsConfig.default.line2, _colorsConfig.default.background1, (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80));

const Row = _ref => {
  let {
    className,
    contentClassName,
    centered,
    light,
    dark,
    lightTopBorder,
    lightBottomBorder,
    padded,
    children,
    ...others
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledRow, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Row', {
      'k-Row--centered': centered,
      'k-Row--light': light,
      'k-Row--dark': dark,
      'k-Row--lightTopBorder': lightTopBorder,
      'k-Row--lightBottomBorder': lightBottomBorder,
      'k-Row--padded': padded
    }, className)
  }, others), /*#__PURE__*/_react.default.createElement(_container.Container, {
    className: (0, _classnames.default)('k-Row__content', contentClassName)
  }, children));
};

exports.Row = Row;
Row.defaultProps = {
  className: null,
  contentClassName: null,
  centered: false,
  light: false,
  dark: false,
  lightTopBorder: false,
  lightBottomBorder: false,
  padded: false
};
Row.propTypes = {
  className: _propTypes.default.string,
  contentClassName: _propTypes.default.string,
  centered: _propTypes.default.bool,
  light: _propTypes.default.bool,
  dark: _propTypes.default.bool,
  lightTopBorder: _propTypes.default.bool,
  lightBottomBorder: _propTypes.default.bool,
  padded: _propTypes.default.bool
};