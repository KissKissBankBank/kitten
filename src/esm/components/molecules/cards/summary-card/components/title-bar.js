import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["image"];
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Text } from '../../../../../components/atoms/typography/text';
import { StyledSummaryTitles } from '../styles';
export var TitleBar = function TitleBar(_ref) {
  var className = _ref.className,
      values = _ref.values,
      size = _ref.size,
      id = _ref.id,
      type = _ref.type;

  var image = values.image,
      valuesRest = _objectWithoutPropertiesLoose(values, _excluded);

  return /*#__PURE__*/React.createElement(StyledSummaryTitles, {
    className: classNames('k-SummaryCard-TitleBar', className, "k-SummaryCard-Wrapper--" + size),
    type: type
  }, image != null && /*#__PURE__*/React.createElement("div", {
    className: "k-SummaryCard-Wrapper__imageWrapper"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    weight: "regular",
    className: "k-SummaryCard-TitleBar__image",
    id: id + "-image"
  }, image)), /*#__PURE__*/React.createElement("div", {
    className: "k-SummaryCard-Wrapper__gridWrapper"
  }, Object.keys(valuesRest).map(function (item) {
    return /*#__PURE__*/React.createElement(Text, {
      key: id + "-" + item,
      id: id + "-" + item,
      size: "micro",
      weight: "regular",
      className: "k-SummaryCard-TitleBar__" + item,
      style: {
        '--summaryCardCell-name': item
      }
    }, valuesRest[item]);
  })));
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
  size: PropTypes.oneOf(['xlarge', 'large', 'medium', 'tablet', 'small', 'mobile'])
};