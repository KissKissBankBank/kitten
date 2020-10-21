import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Title } from '../../../../components/typography/title';
export var RewardCardTitle = function RewardCardTitle(_ref) {
  var children = _ref.children,
      tagName = _ref.tagName,
      disabled = _ref.disabled,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "tagName", "disabled", "className"]);

  return /*#__PURE__*/React.createElement(Title, _extends({}, props, {
    italic: true,
    margin: false,
    tag: tagName,
    modifier: "senary",
    className: classNames('k-RewardCard__title', className, {
      'k-RewardCard__title--disabled': disabled
    }, 'k-u-color-font1')
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