"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManageContribution = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireDefault(require("radium"));

var _grid = require("kitten/components/grid/grid");

var _text = require("kitten/components/typography/text");

var _checkedIcon = require("kitten/components/cards/reward-card/checked-icon");

var _rewardCard = require("kitten/components/cards/reward-card");

var _deprecated = require("kitten/helpers/utils/deprecated");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Grid = (0, _radium.default)(_grid.Grid);

var ManageContributionBase = function ManageContributionBase(_ref) {
  var description = _ref.description,
      linkLabel = _ref.linkLabel,
      linkHref = _ref.linkHref,
      isDisabled = _ref.isDisabled,
      isTinyVersion = _ref.isTinyVersion,
      isSOrLessVersion = _ref.isSOrLessVersion;
  if (!description) return null;
  if (isTinyVersion && isDisabled) return null;
  var choiceButtonPaddings = isTinyVersion ? _rewardCard.styles.choiceButton.paddings.tinyVersion : _rewardCard.styles.choiceButton.paddings;
  return _react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/kitten/"
  }, _react.default.createElement(_react.Fragment, null, isSOrLessVersion && _react.default.createElement(Grid, {
    style: choiceButtonPaddings
  }, _react.default.createElement(_grid.GridCol, null, _react.default.createElement("div", {
    style: _rewardCard.styles.myContribution
  }, _react.default.createElement(_checkedIcon.RewardCardCheckedIcon, null), _react.default.createElement("div", {
    style: _rewardCard.styles.myContribution.text
  }, _react.default.createElement(_text.Text, {
    color: "font1",
    size: "tiny",
    weight: "regular"
  }, description, _react.default.createElement("br", null), _react.default.createElement(_text.Text, {
    tag: "a",
    href: linkHref,
    color: "primary1",
    weight: "regular",
    decoration: "none"
  }, linkLabel)))))), !isSOrLessVersion && _react.default.createElement("div", {
    style: _rewardCard.styles.myContribution
  }, _react.default.createElement(_checkedIcon.RewardCardCheckedIcon, null), _react.default.createElement("div", {
    style: _rewardCard.styles.myContribution.text
  }, _react.default.createElement(_text.Text, {
    color: "font1",
    size: "tiny",
    weight: "regular"
  }, description, _react.default.createElement("br", null), _react.default.createElement(_text.Text, {
    tag: "a",
    href: linkHref,
    color: "primary1",
    weight: "regular",
    decoration: "none"
  }, linkLabel))))));
};

ManageContributionBase.propTypes = {
  description: _propTypes.default.string,
  linkLabel: _propTypes.default.string,
  linkHref: _propTypes.default.string,
  isDisabled: _propTypes.default.bool,
  isTinyVersion: _propTypes.default.bool.isRequired,
  isSOrLessVersion: _propTypes.default.bool.isRequired
};
ManageContributionBase.defaultProps = {
  description: '',
  linkLabel: '',
  linkHref: '',
  isDisabled: false
};
var ManageContribution = (0, _radium.default)(ManageContributionBase);
exports.ManageContribution = ManageContribution;