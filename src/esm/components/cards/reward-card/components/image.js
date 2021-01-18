import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
export var RewardCardImage = function RewardCardImage(_ref) {
  var alt = _ref.alt,
      className = _ref.className,
      disabled = _ref.disabled,
      others = _objectWithoutProperties(_ref, ["alt", "className", "disabled"]);

  return /*#__PURE__*/React.createElement("div", {
    className: "k-RewardCard__figureWrapper"
  }, /*#__PURE__*/React.createElement("img", _extends({}, others, {
    alt: alt,
    className: classNames('k-RewardCard__image', className, {
      'k-RewardCard__image--disabled': disabled
    })
  })));
};
RewardCardImage.propTypes = {
  alt: PropTypes.string,
  disabled: PropTypes.bool
};
RewardCardImage.defaultProps = {
  alt: '',
  disabled: false
};