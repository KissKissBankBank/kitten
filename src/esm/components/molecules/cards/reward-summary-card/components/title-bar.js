import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Text } from '../../../../../components/atoms/typography/text';
import { StyledRewardSummaryTitles } from '../styles';
export var TitleBar = function TitleBar(_ref) {
  var className = _ref.className,
      values = _ref.values,
      size = _ref.size,
      id = _ref.id;
  var image = values.image,
      title = values.title,
      amount = values.amount,
      contributions = values.contributions,
      availability = values.availability;
  return /*#__PURE__*/React.createElement(StyledRewardSummaryTitles, {
    className: classNames('k-RewardSummaryCard-TitleBar', className, "k-RewardSummaryCard-Wrapper--".concat(size))
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-RewardSummaryCard-Wrapper__imageWrapper"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    weight: "regular",
    className: "k-RewardSummaryCard-TitleBar__image",
    id: "".concat(id, "-image")
  }, image)), /*#__PURE__*/React.createElement("div", {
    className: "k-RewardSummaryCard-Wrapper__gridWrapper"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    weight: "regular",
    className: "k-RewardSummaryCard-TitleBar__title",
    id: "".concat(id, "-title")
  }, title), /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    weight: "regular",
    className: "k-RewardSummaryCard-TitleBar__amount",
    id: "".concat(id, "-amount")
  }, amount), /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    weight: "regular",
    className: "k-RewardSummaryCard-TitleBar__contributions",
    id: "".concat(id, "-contributions")
  }, contributions), /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    weight: "regular",
    className: "k-RewardSummaryCard-TitleBar__availability",
    id: "".concat(id, "-availability")
  }, availability)));
};
TitleBar.defaultProps = {
  size: 'large'
};
TitleBar.propTypes = {
  id: PropTypes.string.isRequired,
  values: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.string,
    contributions: PropTypes.string,
    availability: PropTypes.string
  }),
  size: PropTypes.oneOf(['large', 'medium', 'tablet', 'small', 'mobile'])
};