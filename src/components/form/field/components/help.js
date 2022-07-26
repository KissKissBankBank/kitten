"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldHelp = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _text = require("../../../typography/text");

var _typography = require("../../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = require("styled-components");

const FieldHelpGlobalStyles = (0, _styledComponents.createGlobalStyle)([".k-Field__control + .k-Field__help--hiddenOnBlur,.k-Field__control + .k-Field__error + .k-Field__help--hiddenOnBlur{opacity:0;max-height:0;margin-top:0;transition:opacity var(--transition),max-height var(--transition),margin-top var(--transition);}.k-Field__control:focus-within + .k-Field__help--hiddenOnBlur,.k-Field__control:focus-within + .k-Field__error + .k-Field__help--hiddenOnBlur{opacity:1;max-height:", ";margin-top:", " !important;}"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(10));

const FieldHelp = _ref => {
  let {
    children,
    className,
    hiddenOnBlur = false,
    ...others
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(FieldHelpGlobalStyles, null), /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "p",
    cssColor: "var(--color-grey-700)",
    size: "micro",
    weight: "400",
    lineHeight: "normal",
    className: (0, _classnames.default)('k-Field__help', className, 'k-u-margin-none', {
      'k-u-margin-top-single': !hiddenOnBlur,
      'k-Field__help--hiddenOnBlur': hiddenOnBlur
    })
  }, others), children));
};

exports.FieldHelp = FieldHelp;