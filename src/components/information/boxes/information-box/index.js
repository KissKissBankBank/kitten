"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.InformationBox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _title = require("../../../typography/title");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

const StyledInformationBox = _styledComponents.default.div.withConfig({
  displayName: "information-box__StyledInformationBox",
  componentId: "sc-1vnii5x-0"
})(["&.k-InformationBox{display:inline-block;", "}.k-InformationBox__container{padding:", " ", " ", " ", ";color:", ";background-color:", ";border:var(--border);}"], _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), _colorsConfig.default.font1, _colorsConfig.default.background1);

const InformationBox = _ref => {
  let {
    title,
    titleProps,
    children,
    ...other
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledInformationBox, (0, _extends2.default)({}, other, {
    className: (0, _classnames.default)('k-InformationBox', other.className)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-InformationBox__container"
  }, /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    tag: "p",
    noMargin: true,
    modifier: "quaternary"
  }, titleProps, {
    className: (0, _classnames.default)('k-InformationBox__title', 'k-u-margin-bottom-single', titleProps.className)
  }), title), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-InformationBox__content k-u-margin-top-single"
  }, children)));
};

exports.InformationBox = InformationBox;
InformationBox.defaultProps = {
  title: null,
  titleProps: {},
  children: null
};
InformationBox.propTypes = {
  title: _propTypes.default.node,
  titleProps: _propTypes.default.object,
  children: _propTypes.default.node
};