import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "textSize", "truncateText", "style"];
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../../typography/text';
export var Title = function Title(_ref) {
  var className = _ref.className,
      textSize = _ref.textSize,
      truncateText = _ref.truncateText,
      style = _ref.style,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-RewardCard__titleWrapper', 'k-RewardCard__drawer', {
      'k-RewardCard__titleWrapper--truncateText': truncateText
    })
  }, /*#__PURE__*/React.createElement(Text, _extends({
    tag: "h3",
    weight: "regular",
    className: classNames('k-RewardCard__title', 'k-u-margin-none', 'k-u-align-center', className, {
      'k-u-clamp': truncateText
    }),
    size: textSize,
    style: _extends({
      '--line-clamp': 2
    }, style)
  }, props)));
};
Title.defaultProps = {
  textSize: 'large',
  truncateText: true
};