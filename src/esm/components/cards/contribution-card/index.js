import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import { CloseButton } from '../../../components/buttons/close-button';
import { StyledContributionCard } from './styles';
import classNames from 'classnames';
import COLORS from '../../../constants/colors-config';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../helpers/utils/typography';
import { Image, Title, Description, PillNumber, Amount, Input, Action } from './components';
import { Context } from './context';
export var ContributionCard = function ContributionCard(_ref) {
  var className = _ref.className,
      closeButtonLabel = _ref.closeButtonLabel,
      children = _ref.children,
      show = _ref.show,
      style = _ref.style,
      borderWidth = _ref.borderWidth,
      borderRadius = _ref.borderRadius,
      imageBorderRadius = _ref.imageBorderRadius,
      borderColor = _ref.borderColor,
      borderStyle = _ref.borderStyle,
      onClose = _ref.onClose,
      largeInput = _ref.largeInput,
      props = _objectWithoutProperties(_ref, ["className", "closeButtonLabel", "children", "show", "style", "borderWidth", "borderRadius", "imageBorderRadius", "borderColor", "borderStyle", "onClose", "largeInput"]);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isInputEmpty = _useState2[0],
      setEmptyInput = _useState2[1];

  if (!show) return null;
  return /*#__PURE__*/React.createElement(StyledContributionCard, _extends({
    className: classNames('k-ContributionCard', className),
    style: _extends({}, style, {
      '--contributionCard--border-width': pxToRem(borderWidth),
      '--contributionCard--border-radius': pxToRem(borderRadius),
      '--contributionCard--image-border-radius': pxToRem(imageBorderRadius),
      '--contributionCard--border-color': borderColor,
      '--contributionCard--border-style': borderStyle
    })
  }, props), onClose && /*#__PURE__*/React.createElement(CloseButton, {
    className: "k-ContributionCard__close",
    size: "micro",
    closeButtonLabel: closeButtonLabel,
    onClick: onClose
  }), React.Children.map(children, function (child) {
    if (!child) return null;
    return child.props.__TYPE === 'Image' ? child : null;
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames('k-ContributionCard__gridWrapper', {
      'k-ContributionCard__gridWrapper--largeInput': largeInput
    })
  }, /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      isInputEmpty: isInputEmpty,
      setEmptyInput: setEmptyInput
    }
  }, React.Children.map(children, function (child) {
    if (!child) return null;
    return ['Image'].includes(child.props.__TYPE) ? null : child;
  }))));
};
ContributionCard.Image = Image;
ContributionCard.Title = Title;
ContributionCard.Description = Description;
ContributionCard.PillNumber = PillNumber;
ContributionCard.Amount = Amount;
ContributionCard.Input = Input;
ContributionCard.Action = Action;
ContributionCard.defaultProps = {
  show: true,
  closeButtonLabel: 'Close',
  borderColor: COLORS.line1,
  borderRadius: 8,
  borderStyle: 'solid',
  borderWidth: 2,
  imageBorderRadius: 5,
  onClose: undefined,
  largeInput: false
};
ContributionCard.propTypes = {
  show: PropTypes.bool,
  closeButtonLabel: PropTypes.string,
  onClose: PropTypes.func,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageBorderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  largeInput: PropTypes.bool
};