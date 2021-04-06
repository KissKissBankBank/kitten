"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stepper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var _stepperIcon = require("../../../components/atoms/stepper-icon");

var StyledStepper = _styledComponents.default.nav.withConfig({
  displayName: "deprecated__StyledStepper",
  componentId: "q4ca4f-0"
})(["", " font-size:", ";line-height:1.3;color:", ";text-align:left;.k-Stepper__list{display:flex;align-items:center;justify-content:center;margin:0;padding:", " 0;list-style:none;@media (max-width:", "){flex-direction:column;align-items:flex-start;}}.k-Stepper__list--alignStart{justify-content:flex-start;flex-wrap:wrap;}.k-Stepper__item{margin:0 ", ";&:first-child{margin-left:0;}&:last-child{margin-right:0;}@media (max-width:", "){margin:", " 0;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}}}.k-Stepper__list--alignStart .k-Stepper__item{margin:0 ", " ", " 0;}.k-Stepper__item--tinySpacing{@media (min-width:", "){margin-left:", ";margin-right:", ";}}.k-Stepper__link{display:flex;align-items:center;color:", ";text-decoration:none;cursor:pointer;transition:.2s color;&:hover{color:", ";text-decoration:none;}&:active{color:", ";text-decoration:none;}}.k-Stepper__link--inProgress{color:", ";&:hover{color:", ";text-decoration:none;}&:active{color:", ";text-decoration:none;}}.k-Stepper__link--inactive{color:", ";cursor:not-allowed;&:hover,&:active{color:", ";}}.k-Stepper__icon{margin-right:", ";}.k-Stepper__break{display:block;@media (min-width:", "){display:none;}@media (max-width:", "){display:none;}}"], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.max), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.max), (0, _typography.pxToRem)(20 / 3), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20 / 3 * 2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), _colorsConfig.default.font1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.primary2, _colorsConfig.default.primary3, _colorsConfig.default.font2, _colorsConfig.default.font2, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.max));

var Stepper = function Stepper(_ref) {
  var items = _ref.items,
      withAlignStart = _ref.withAlignStart,
      withTinySpacing = _ref.withTinySpacing;

  var insertLineBreaks = function insertLineBreaks(text) {
    var regex = /(\n)/i;
    var brClassNames = (0, _classnames.default)({
      'k-Stepper__break': !withAlignStart
    });
    return text.split(regex).map(function (line, index) {
      return line.match(regex) ? /*#__PURE__*/_react.default.createElement("br", {
        className: brClassNames,
        key: index
      }) : line;
    });
  };

  var Link = function Link(_ref2) {
    var href = _ref2.href,
        iconType = _ref2.iconType,
        linkClassNames = _ref2.linkClassNames,
        text = _ref2.text,
        other = (0, _objectWithoutProperties2.default)(_ref2, ["href", "iconType", "linkClassNames", "text"]);
    var Tag = href ? 'a' : 'span';
    var className = (0, _classnames.default)('k-Stepper__link', linkClassNames);
    return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({
      className: className,
      href: href
    }, other), /*#__PURE__*/_react.default.createElement(_stepperIcon.StepperIcon, {
      state: iconType,
      className: (0, _classnames.default)('k-Stepper__icon', "k-Stepper__icon--".concat(iconType))
    }), insertLineBreaks(text));
  };

  return /*#__PURE__*/_react.default.createElement(StyledStepper, {
    className: "k-Stepper",
    role: "navigation"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: (0, _classnames.default)('k-Stepper__list', {
      'k-Stepper__list--alignStart': withAlignStart
    })
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: (0, _classnames.default)('k-Stepper__item', {
        'k-Stepper__item--tinySpacing': withTinySpacing
      }),
      key: index
    }, /*#__PURE__*/_react.default.createElement(Link, item));
  })));
};

exports.Stepper = Stepper;
Stepper.propTypes = {
  withAlignStart: _propTypes.default.bool,
  withTinySpacing: _propTypes.default.bool,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    href: _propTypes.default.string,
    iconType: _propTypes.default.oneOf(['default', 'inProgress', 'validated']),
    linkClassNames: _propTypes.default.string,
    text: _propTypes.default.string
  }))
};
Stepper.defaultProps = {
  withAlignStart: false,
  withTinySpacing: false,
  items: []
};