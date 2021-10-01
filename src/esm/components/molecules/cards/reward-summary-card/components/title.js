import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { Text } from '../../../../../components/atoms/typography/text';
import classNames from 'classnames';
export var Title = function Title(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/React.createElement(Text, _extends({
    color: "font1",
    weight: "regular",
    size: "tiny"
  }, props, {
    className: classNames('k-RewardSummaryCard__title', className)
  }));
};