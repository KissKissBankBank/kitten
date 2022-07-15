import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "disabled", "hasBorder", "stretch"];
import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledRewardCard } from './styles';
import { Form, Title, Image, Amount, Button, TagList, HeadingTag, Description, Contents } from './components';
import { getReactElementsByType, getReactElementsWithoutTypeArray } from '../../../../helpers/react/get-react-elements';
export var RewardCard = function RewardCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      hasBorder = _ref.hasBorder,
      stretch = _ref.stretch,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var contentsChild = getReactElementsByType({
    children: children,
    type: RewardCard.Contents
  })[0];

  if (!!contentsChild) {
    return /*#__PURE__*/React.createElement(StyledRewardCard, _extends({}, props, {
      className: classNames('k-RewardCard', className, {
        'k-RewardCard--disabled': disabled,
        'k-RewardCard--hasBorder': hasBorder,
        'k-RewardCard--isStretched': stretch
      })
    }), children);
  } // Old card version


  console.warn('This use of the RewardCard is deprecated. Please wrap contents with `RewardCard.Contents`.');
  var imageChild = getReactElementsByType({
    children: children,
    type: RewardCard.Image
  })[0];
  var buttonChild = getReactElementsByType({
    children: children,
    type: RewardCard.Button
  })[0];
  var wrappedChildren = getReactElementsWithoutTypeArray({
    children: children,
    typeArray: [RewardCard.Button, RewardCard.Image]
  });
  return /*#__PURE__*/React.createElement(StyledRewardCard, _extends({}, props, {
    className: classNames('k-RewardCard', className, {
      'k-RewardCard--disabled': disabled,
      'k-RewardCard--hasBorder': hasBorder,
      'k-RewardCard--isStretched': stretch
    })
  }), imageChild && /*#__PURE__*/cloneElement(imageChild), /*#__PURE__*/React.createElement("div", {
    className: "k-RewardCard__gridWrapper"
  }, wrappedChildren && wrappedChildren.map(function (item, index) {
    return /*#__PURE__*/cloneElement(item, {
      key: "RewardCard-" + index
    });
  })), buttonChild && /*#__PURE__*/cloneElement(buttonChild, {
    disabled: disabled
  }));
};
RewardCard.Form = Form;
RewardCard.Title = Title;
RewardCard.Image = Image;
RewardCard.Amount = Amount;
RewardCard.Button = Button;
RewardCard.TagList = TagList;
RewardCard.HeadingTag = HeadingTag;
RewardCard.Description = Description;
RewardCard.Contents = Contents;
RewardCard.defaultProps = {
  hasBorder: true,
  disabled: false,
  stretch: false
};
RewardCard.propTypes = {
  hasBorder: PropTypes.bool,
  disabled: PropTypes.bool,
  stretch: PropTypes.bool
};