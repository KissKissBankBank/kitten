import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Title } from '../../../../components/typography/title';
import COLORS from '../../../../constants/colors-config';
export var RewardCardTitle = function RewardCardTitle(_ref) {
  var children = _ref.children,
      tagName = _ref.tagName,
      disabled = _ref.disabled,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "tagName", "disabled", "className"]);

  return /*#__PURE__*/React.createElement(Title, _extends({}, props, {
    cssColor: disabled ? COLORS.font2 : COLORS.font1,
    tag: tagName,
    modifier: "quinary",
    className: classNames('k-RewardCard__title', className, 'k-u-margin-bottom-double', 'k-u-margin-top-none')
  }), children);
};
RewardCardTitle.propTypes = {
  children: PropTypes.string,
  tagName: PropTypes.string,
  disabled: PropTypes.bool
};
RewardCardTitle.defaultProps = {
  children: '',
  tagName: 'h6',
  disabled: false
};