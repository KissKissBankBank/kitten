import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Text } from '../../../../typography/text';
import { StyledSummaryTitles } from '../styles';
export const TitleBar = _ref => {
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
  return /*#__PURE__*/React.createElement(StyledSummaryTitles, {
    className: classNames('k-SummaryCard-TitleBar', className, "k-SummaryCard-Wrapper--" + size),
    type: type
  }, image != null && /*#__PURE__*/React.createElement("div", {
    className: "k-SummaryCard-Wrapper__imageWrapper"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    weight: "500",
    cssColor: "var(--color-grey-700)",
    className: "k-SummaryCard-TitleBar__image",
    id: id + "-image"
  }, image)), /*#__PURE__*/React.createElement("div", {
    className: "k-SummaryCard-Wrapper__gridWrapper"
  }, Object.keys(valuesRest).map(item => /*#__PURE__*/React.createElement(Text, {
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
TitleBar.defaultProps = {
  size: 'large'
};
TitleBar.propTypes = {
  id: PropTypes.string.isRequired,
  values: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.string,
    frequency: PropTypes.string,
    subscription: PropTypes.string,
    contributions: PropTypes.string,
    availability: PropTypes.string
  }),
  size: PropTypes.oneOf(['huge', 'large', 'medium', 'tablet', 'small', 'mobile'])
};