"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../../components/atoms/typography/text");

var _styles = require("../styles");

var TitleBar = function TitleBar(_ref) {
  var className = _ref.className,
      values = _ref.values,
      size = _ref.size,
      id = _ref.id;
  var image = values.image,
      title = values.title,
      amount = values.amount,
      contributions = values.contributions,
      availability = values.availability;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledRewardSummaryTitles, {
    className: (0, _classnames.default)('k-RewardSummaryCard-TitleBar', className, "k-RewardSummaryCard-Wrapper--".concat(size))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-RewardSummaryCard-Wrapper__imageWrapper"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    weight: "regular",
    className: "k-RewardSummaryCard-TitleBar__image",
    id: "".concat(id, "-image")
  }, image)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-RewardSummaryCard-Wrapper__gridWrapper"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    weight: "regular",
    className: "k-RewardSummaryCard-TitleBar__title",
    id: "".concat(id, "-title")
  }, title), /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    weight: "regular",
    className: "k-RewardSummaryCard-TitleBar__amount",
    id: "".concat(id, "-amount")
  }, amount), /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    weight: "regular",
    className: "k-RewardSummaryCard-TitleBar__contributions",
    id: "".concat(id, "-contributions")
  }, contributions), /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    weight: "regular",
    className: "k-RewardSummaryCard-TitleBar__availability",
    id: "".concat(id, "-availability")
  }, availability)));
};

exports.TitleBar = TitleBar;
TitleBar.defaultProps = {
  size: 'large'
};
TitleBar.propTypes = {
  id: _propTypes.default.string.isRequired,
  values: _propTypes.default.shape({
    image: _propTypes.default.string,
    title: _propTypes.default.string,
    amount: _propTypes.default.string,
    contributions: _propTypes.default.string,
    availability: _propTypes.default.string
  }),
  size: _propTypes.default.oneOf(['large', 'medium', 'tablet', 'small', 'mobile'])
};