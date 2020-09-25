import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
export var RewardCardVideo = function RewardCardVideo(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      others = _objectWithoutProperties(_ref, ["className", "disabled"]);

  return /*#__PURE__*/React.createElement("video", _extends({
    loop: true,
    muted: true,
    autoPlay: true
  }, others, {
    className: classNames('k-RewardCard__video', className, {
      'k-RewardCard__image--disabled': disabled
    })
  }));
};
RewardCardVideo.propTypes = {
  disabled: PropTypes.bool
};
RewardCardVideo.defaultProps = {
  disabled: false
};