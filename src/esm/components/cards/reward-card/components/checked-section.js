import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import { RewardCardCheckedIconLine } from './checked-icon-line';
export var RewardCardCheckedSection = function RewardCardCheckedSection(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RewardCardCheckedIconLine, null), /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-RewardCard__checkedSection', className)
  }, props), children));
};