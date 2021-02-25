"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InformationBox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _title = require("../../../components/typography/title");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var StyledInformationBox = _styledComponents.default.div.withConfig({
  displayName: "information-box__StyledInformationBox",
  componentId: "sc-83px7p-0"
})([".k-InformationBox{display:inline-block;", "}.k-InformationBox__container{padding:", " ", " ", " ", ";color:", ";background-color:", ";border:", " solid ", ";}"], _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), _colorsConfig.default.font1, _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1);

var InformationBox = function InformationBox(_ref) {
  var title = _ref.title,
      titleProps = _ref.titleProps,
      children = _ref.children,
      other = (0, _objectWithoutProperties2.default)(_ref, ["title", "titleProps", "children"]);
  return /*#__PURE__*/_react.default.createElement(StyledInformationBox, (0, _extends2.default)({}, other, {
    className: (0, _classnames.default)('k-InformationBox', other.className)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-InformationBox__container"
  }, /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    tag: "p",
    margin: false,
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