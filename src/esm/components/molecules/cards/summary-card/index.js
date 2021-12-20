import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "show", "className", "actionProps", "size", "type"],
    _excluded2 = ["className", "as"];
import React, { cloneElement } from 'react';
import { StyledSummaryCard } from './styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Image, TitleTag, TitleBar, Cell } from './components';
import { getReactElementsByType, getReactElementsWithoutType } from '../../../../helpers/react/react-elements';
import { NoImageIcon } from '../../../../components/graphics/icons/no-image-icon';
export var SummaryCard = function SummaryCard(_ref) {
  var _imageChild$props;

  var children = _ref.children,
      show = _ref.show,
      className = _ref.className,
      actionProps = _ref.actionProps,
      size = _ref.size,
      type = _ref.type,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var imageChild = getReactElementsByType({
    children: children,
    type: SummaryCard.Image
  })[0];
  var wrappedChildren = getReactElementsWithoutType({
    children: children,
    type: SummaryCard.Image
  });

  var actionClassName = actionProps.className,
      _actionProps$as = actionProps.as,
      actionAs = _actionProps$as === void 0 ? 'a' : _actionProps$as,
      action = _objectWithoutPropertiesLoose(actionProps, _excluded2);

  var ActionElement = actionAs;
  if (!show) return null;
  return /*#__PURE__*/React.createElement(StyledSummaryCard, _extends({
    className: classNames('k-SummaryCard', className, "k-SummaryCard-Wrapper--" + size, {
      'k-SummaryCard--hasAction': Object.keys(actionProps).length > 0
    }),
    type: type
  }, props), Object.keys(actionProps).length > 0 && /*#__PURE__*/React.createElement(ActionElement, _extends({
    className: classNames('k-SummaryCard__action', actionClassName)
  }, action)), /*#__PURE__*/React.createElement("div", {
    className: classNames('k-SummaryCard__imageWrapper', 'k-SummaryCard-Wrapper__imageWrapper', imageChild == null ? void 0 : (_imageChild$props = imageChild.props) == null ? void 0 : _imageChild$props.className, {
      'k-u-hidden@s-down': !imageChild
    })
  }, !!imageChild ? /*#__PURE__*/cloneElement(imageChild) : /*#__PURE__*/React.createElement(NoImageIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: "k-SummaryCard__gridWrapper k-SummaryCard-Wrapper__gridWrapper"
  }, wrappedChildren.map(function (item, index) {
    return /*#__PURE__*/cloneElement(item, {
      key: "SummaryCard-" + index
    });
  })));
};
export { useResizeObserver as useSummaryCardResizeObserver } from './hooks/use-resize-observer';
SummaryCard.Image = Image;
SummaryCard.TitleTag = TitleTag;
SummaryCard.TitleBar = TitleBar;
SummaryCard.Cell = Cell;
SummaryCard.defaultProps = {
  show: true,
  actionProps: {},
  size: 'large',
  type: 'ownerContribution'
};
SummaryCard.propTypes = {
  show: PropTypes.bool,
  actionProps: PropTypes.object,
  size: PropTypes.oneOf(['xlarge', 'large', 'medium', 'tablet', 'small', 'mobile']),
  type: PropTypes.oneOf(['ownerContribution', 'ownerSubscription', 'contributorContribution', 'contributorSubscription'])
};