"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManageContribution = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _grid = require("../../../../components/grid/grid");

var _text = require("../../../../components/typography/text");

var _checkedIcon = require("./checked-icon");

var _deprecated = require("../../../../helpers/utils/deprecated");

var ManageContribution = function ManageContribution(_ref) {
  var description = _ref.description,
      linkLabel = _ref.linkLabel,
      linkHref = _ref.linkHref,
      isDisabled = _ref.isDisabled,
      isTinyVersion = _ref.isTinyVersion,
      isSOrLessVersion = _ref.isSOrLessVersion;
  if (!description) return null;
  if (isTinyVersion && isDisabled) return null;
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, isSOrLessVersion && /*#__PURE__*/_react.default.createElement(_grid.Grid, {
    className: "k-LegacyRewardCard__choiceButton"
  }, /*#__PURE__*/_react.default.createElement(_grid.GridCol, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-LegacyRewardCard__myContribution"
  }, /*#__PURE__*/_react.default.createElement(_checkedIcon.RewardCardCheckedIcon, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-LegacyRewardCard__myContribution__text"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    color: "font1",
    size: "tiny",
    weight: "regular"
  }, description, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "a",
    href: linkHref,
    color: "primary1",
    weight: "regular",
    decoration: "none"
  }, linkLabel)))))), !isSOrLessVersion && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-LegacyRewardCard__myContribution"
  }, /*#__PURE__*/_react.default.createElement(_checkedIcon.RewardCardCheckedIcon, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-LegacyRewardCard__myContribution__text"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    color: "font1",
    size: "tiny",
    weight: "regular"
  }, description, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "a",
    href: linkHref,
    color: "primary1",
    weight: "regular",
    decoration: "none"
  }, linkLabel))))));
};

exports.ManageContribution = ManageContribution;
ManageContribution.propTypes = {
  description: _propTypes.default.string,
  linkLabel: _propTypes.default.string,
  linkHref: _propTypes.default.string,
  isDisabled: _propTypes.default.bool,
  isTinyVersion: _propTypes.default.bool.isRequired,
  isSOrLessVersion: _propTypes.default.bool.isRequired
};
ManageContribution.defaultProps = {
  description: '',
  linkLabel: '',
  linkHref: '',
  isDisabled: false
};