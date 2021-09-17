import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "closeButtonLabel", "children", "show", "style", "borderWidth", "borderRadius", "borderColor", "borderStyle", "onClose", "largeInput", "largeTitle"];
import "core-js/modules/es.object.assign.js";
import "core-js/modules/es.array.map.js";
import React, { useState, cloneElement } from 'react';
import { CloseButton } from '../../../../components/molecules/buttons/close-button';
import { StyledContributionCard } from './styles';
import classNames from 'classnames';
import COLORS from '../../../../constants/colors-config';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Image, Title, Description, PillNumber, Amount, Input, Action } from './components';
import { Context } from './context';
import { getReactElementsByType, getReactElementsWithoutType } from '../../../../helpers/react/react-elements';
export var ContributionCard = function ContributionCard(_ref) {
  var className = _ref.className,
      closeButtonLabel = _ref.closeButtonLabel,
      children = _ref.children,
      show = _ref.show,
      style = _ref.style,
      borderWidth = _ref.borderWidth,
      borderRadius = _ref.borderRadius,
      borderColor = _ref.borderColor,
      borderStyle = _ref.borderStyle,
      onClose = _ref.onClose,
      largeInput = _ref.largeInput,
      largeTitle = _ref.largeTitle,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var imageChild = getReactElementsByType({
    children: children,
    type: ContributionCard.Image
  })[0];
  var wrappedChildren = getReactElementsWithoutType({
    children: children,
    type: ContributionCard.Image
  });

  var _useState = useState(true),
      isInputEmpty = _useState[0],
      setEmptyInput = _useState[1];

  if (!show) return null;
  return /*#__PURE__*/React.createElement(StyledContributionCard, _extends({
    className: classNames('k-ContributionCard', className),
    style: Object.assign({}, style, {
      '--contributionCard--border-width': pxToRem(borderWidth),
      '--contributionCard--border-radius': pxToRem(borderRadius),
      '--contributionCard--border-color': borderColor,
      '--contributionCard--border-style': borderStyle
    })
  }, props), onClose && /*#__PURE__*/React.createElement(CloseButton, {
    className: "k-ContributionCard__close",
    size: "micro",
    closeButtonLabel: closeButtonLabel,
    onClick: onClose
  }), imageChild && /*#__PURE__*/cloneElement(imageChild), /*#__PURE__*/React.createElement("div", {
    className: classNames('k-ContributionCard__gridWrapper', {
      'k-ContributionCard__gridWrapper--largeInput': largeInput
    })
  }, /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      isInputEmpty: isInputEmpty,
      setEmptyInput: setEmptyInput
    }
  }, wrappedChildren.map(function (item, index) {
    return /*#__PURE__*/cloneElement(item, {
      key: "ContributionCard-" + index
    });
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
  onClose: undefined,
  largeInput: false,
  largeTitle: false
};
ContributionCard.propTypes = {
  show: PropTypes.bool,
  closeButtonLabel: PropTypes.string,
  onClose: PropTypes.func,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  largeInput: PropTypes.bool,
  largeTitle: PropTypes.bool
};