"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TitleBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../typography/text");

var _styles = require("../styles");

const TitleBar = _ref => {
  let {
    className,
    values,
    size,
    id,
    type
  } = _ref;
  const {
    image,
    ...valuesRest
  } = values;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledSummaryTitles, {
    className: (0, _classnames.default)('k-SummaryCard-TitleBar', className, "k-SummaryCard-Wrapper--" + size),
    type: type
  }, image != null && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SummaryCard-Wrapper__imageWrapper"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    weight: "500",
    cssColor: "var(--color-grey-700)",
    className: "k-SummaryCard-TitleBar__image",
    id: id + "-image"
  }, image)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SummaryCard-Wrapper__gridWrapper"
  }, Object.keys(valuesRest).map(item => /*#__PURE__*/_react.default.createElement(_text.Text, {
    key: id + "-" + item,
    id: id + "-" + item,
    size: "micro",
    weight: "500",
    cssColor: "var(--color-grey-700)",
    className: "k-SummaryCard-TitleBar__" + item,
    style: {
      '--summaryCardCell-name': item
    }
  }, valuesRest[item]))));
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
    frequency: _propTypes.default.string,
    subscription: _propTypes.default.string,
    contributions: _propTypes.default.string,
    availability: _propTypes.default.string
  }),
  size: _propTypes.default.oneOf(['huge', 'large', 'medium', 'tablet', 'small', 'mobile'])
};