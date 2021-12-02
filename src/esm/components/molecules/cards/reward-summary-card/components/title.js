import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className"];
import React from 'react';
import { Text } from '../../../../../components/atoms/typography/text';
import classNames from 'classnames';
export var Title = function Title(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Text, _extends({
    color: "font1",
    weight: "regular",
    size: "tiny"
  }, props, {
    className: classNames('k-RewardSummaryCard__title', className)
  }));
};