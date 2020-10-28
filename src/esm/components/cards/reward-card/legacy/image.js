import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Deprecated } from '../../../../helpers/utils/deprecated';
export var RewardCardImage = function RewardCardImage(_ref) {
  var isDisabled = _ref.isDisabled,
      imageProps = _ref.imageProps;
  var shouldDisplayImage = imageProps && imageProps.src;
  if (!shouldDisplayImage) return null;
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/React.createElement("div", {
    className: isDisabled ? 'k-LegacyRewardCard__element--disabled' : null
  }, /*#__PURE__*/React.createElement("img", _extends({}, imageProps, {
    alt: imageProps.alt || '',
    className: classNames('k-LegacyRewardCard__image', imageProps.className)
  }))));
};
RewardCardImage.propTypes = {
  isDisabled: PropTypes.bool,
  imageProps: PropTypes.object
};
RewardCardImage.defaultProps = {
  isDisabled: false,
  imageProps: {}
};