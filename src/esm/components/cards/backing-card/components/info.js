import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../typography/text';
export var Info = function Info(_ref) {
  var legend = _ref.legend,
      value = _ref.value,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      props = _objectWithoutProperties(_ref, ["legend", "value", "fullWidth"]);

  return /*#__PURE__*/React.createElement("p", _extends({}, props, {
    className: classNames('k-BackingCard__info', 'k-u-size-tiny', 'k-u-line-height-normal', props.className, {
      'k-BackingCard__halfDrawer': !fullWidth,
      'k-BackingCard__drawer': fullWidth
    })
  }), /*#__PURE__*/React.createElement(Text, {
    className: "k-BackingCard__info__legend",
    weight: "regular",
    size: "tiny",
    lineHeight: "normal"
  }, legend), ' ', /*#__PURE__*/React.createElement(Text, {
    className: "k-BackingCard__info__value",
    weight: "light",
    size: "tiny",
    lineHeight: "normal"
  }, value));
};