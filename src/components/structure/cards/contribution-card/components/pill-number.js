"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PillNumber = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _pillNumberInput = require("../../../../form/pill-number-input");

const PillNumber = props => {
  return /*#__PURE__*/_react.default.createElement(_pillNumberInput.PillNumberInput, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ContributionCard__pillNumber', props.className)
  }));
};

exports.PillNumber = PillNumber;