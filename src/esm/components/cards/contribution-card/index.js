import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect, useRef, useState } from 'react';
import { CloseButton } from '../../../components/buttons/close-button';
import { StyledContributionCard } from './styles';
import classNames from 'classnames';
import COLORS from '../../../constants/colors-config';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../helpers/utils/typography';
import { Image, Title, Description, PillNumber, Amount, Input, Action } from './components';
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
      closeButton = _ref.closeButton,
      props = _objectWithoutProperties(_ref, ["className", "closeButtonLabel", "children", "show", "style", "borderWidth", "borderRadius", "imageBorderRadius", "borderColor", "borderStyle", "closeButton"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isTrashed = _useState2[0],
      trashIt = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isMounted = _useState4[0],
      setMounted = _useState4[1];

  var contributionRef = useRef(null);
  useEffect(function () {
    var clearDelayBeforeTrash;

    if (!isMounted) {
      clearDelayBeforeTrash = setTimeout(function () {
        trashIt(true);
        onAfterClose();
      }, 400);
    }

    return function () {
      return clearTimeout(clearDelayBeforeTrash);
    };
  }, [isMounted]);
  if (isTrashed || !show) return null;
  return /*#__PURE__*/React.createElement(StyledContributionCard, _extends({
    className: classNames('k-ContributionCard', className, {
      'k-contributionCard--shouldHide': !isMounted
    }),
    style: _extends({}, style, {
      '--contributionCard--border-width': pxToRem(borderWidth),
      '--contributionCard--border-radius': pxToRem(borderRadius),
      '--contributionCard--image-border-radius': pxToRem(imageBorderRadius),
      '--contributionCard--border-color': borderColor,
      '--contributionCard--border-style': borderStyle
    }),
    ref: contributionRef,
    role: "dialog"
  }, props), closeButton && /*#__PURE__*/React.createElement(CloseButton, {
    className: "k-ContributionCard__close",
    size: "micro",
    closeButtonLabel: closeButtonLabel,
    onClick: function onClick() {
      return setMounted(false);
    }
  }), React.Children.map(children, function (child) {
    if (!child) return null;
    return child.props.__TYPE === 'Image' ? child : null;
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-ContributionCard__gridWrapper"
  }, React.Children.map(children, function (child) {
    if (!child) return null;
    return ['Image'].includes(child.props.__TYPE) ? null : child;
  })));
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
  closeButton: true,
  closeButtonLabel: 'Close',
  borderColor: COLORS.line1,
  borderRadius: 8,
  borderStyle: 'solid',
  borderWidth: 2,
  imageBorderRadius: 5
};
ContributionCard.propTypes = {
  show: PropTypes.bool,
  closeButton: PropTypes.bool,
  closeButtonLabel: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageBorderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};