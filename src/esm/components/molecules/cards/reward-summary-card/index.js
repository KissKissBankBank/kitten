import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "show", "className", "actionProps", "size"],
    _excluded2 = ["className", "as"];
import "core-js/modules/es.array.map.js";
import React, { cloneElement } from 'react';
import { StyledRewardSummaryCard } from './styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Image, Title, TitleTag, Availability, Contribution, Amount, Options, TitleBar } from './components';
import { getReactElementsByType, getReactElementsWithoutType } from '../../../../helpers/react/react-elements';
import { NoImageIcon } from '../../../../components/graphics/icons/no-image-icon';
export var RewardSummaryCard = function RewardSummaryCard(_ref) {
  var children = _ref.children,
      show = _ref.show,
      className = _ref.className,
      actionProps = _ref.actionProps,
      size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var imageChild = getReactElementsByType({
    children: children,
    type: RewardSummaryCard.Image
  })[0];
  var wrappedChildren = getReactElementsWithoutType({
    children: children,
    type: RewardSummaryCard.Image
  });

  var actionClassName = actionProps.className,
      _actionProps$as = actionProps.as,
      actionAs = _actionProps$as === void 0 ? 'a' : _actionProps$as,
      action = _objectWithoutPropertiesLoose(actionProps, _excluded2);

  var ActionElement = actionAs;
  if (!show) return null;
  return /*#__PURE__*/React.createElement(StyledRewardSummaryCard, _extends({
    className: classNames('k-RewardSummaryCard', className, "k-RewardSummaryCard-Wrapper--" + size)
  }, props), /*#__PURE__*/React.createElement(ActionElement, _extends({
    className: classNames('k-RewardSummaryCard__action', actionClassName)
  }, action)), /*#__PURE__*/React.createElement("div", {
    className: classNames('k-RewardSummaryCard__imageWrapper', 'k-RewardSummaryCard-Wrapper__imageWrapper', {
      'k-u-hidden@s-down': !imageChild
    })
  }, !!imageChild ? /*#__PURE__*/cloneElement(imageChild) : /*#__PURE__*/React.createElement(NoImageIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: "k-RewardSummaryCard__gridWrapper k-RewardSummaryCard-Wrapper__gridWrapper"
  }, wrappedChildren.map(function (item, index) {
    return /*#__PURE__*/cloneElement(item, {
      key: "RewardSummaryCard-" + index
    });
  })));
};
export { useResizeObserver as useRewardSummaryCardResizeObserver } from './hooks/use-resize-observer';
RewardSummaryCard.Image = Image;
RewardSummaryCard.Title = Title;
RewardSummaryCard.TitleTag = TitleTag;
RewardSummaryCard.Amount = Amount;
RewardSummaryCard.Contribution = Contribution;
RewardSummaryCard.Availability = Availability;
RewardSummaryCard.Options = Options;
RewardSummaryCard.TitleBar = TitleBar;
RewardSummaryCard.defaultProps = {
  show: true,
  actionProps: {},
  size: 'large'
};
RewardSummaryCard.propTypes = {
  show: PropTypes.bool,
  actionProps: PropTypes.object,
  size: PropTypes.oneOf(['large', 'medium', 'tablet', 'small', 'mobile'])
};