import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../typography/text';
import { HorizontalStroke } from '../../../layout/horizontal-stroke';
export var Title = function Title(_ref) {
  var className = _ref.className,
      textSize = _ref.textSize,
      strokeSize = _ref.strokeSize,
      props = _objectWithoutProperties(_ref, ["className", "textSize", "strokeSize"]);

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-BackingCard__titleWrapper', 'k-BackingCard__drawer')
  }, /*#__PURE__*/React.createElement(Text, _extends({
    tag: "h3",
    weight: "bold",
    lineHeight: "1"
  }, props, {
    size: textSize,
    className: classNames('k-BackingCard__title', 'k-u-margin-none', className)
  })), !!strokeSize && /*#__PURE__*/React.createElement(HorizontalStroke, {
    size: strokeSize,
    className: "k-u-margin-top-singleHalf k-u-margin-bottom-single"
  }));
};
Title.defaultProps = {
  textSize: 'default',
  strokeSize: null
};