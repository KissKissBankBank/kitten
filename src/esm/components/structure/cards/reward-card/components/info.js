import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "legend", "value", "fullWidth"];
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../../typography/text';
export var Info = function Info(_ref) {
  var className = _ref.className,
      legend = _ref.legend,
      value = _ref.value,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  console.warn('This subcomponent is deprecated. Please use another one.');
  return /*#__PURE__*/React.createElement("p", _extends({
    className: classNames('k-RewardCard__info', 'k-u-size-small', 'k-u-line-height-normal', className, {
      'k-RewardCard__halfDrawer': !fullWidth,
      'k-RewardCard__drawer': fullWidth
    })
  }, props), /*#__PURE__*/React.createElement(Text, {
    className: "k-RewardCard__info__legend",
    weight: "500",
    size: "small",
    lineHeight: "normal"
  }, legend), ' ', /*#__PURE__*/React.createElement(Text, {
    className: "k-RewardCard__info__value",
    weight: "400",
    size: "small",
    lineHeight: "normal"
  }, value));
};