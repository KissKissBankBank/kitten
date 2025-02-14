import _extends from "@babel/runtime/helpers/extends";
import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledRewardCard } from './styles';
import { Info, Form, Title, Image, Amount, Button, TagList, HeadingTag, Description, Contents } from './components';
import { getReactElementsByType, getReactElementsWithoutTypeArray } from '../../../../helpers/react/get-react-elements';
export const RewardCard = _ref => {
  let {
    children,
    className,
    disabled,
    hasBorder,
    hasShadow,
    stretch,
    ...props
  } = _ref;
  const contentsChild = getReactElementsByType({
    children,
    type: RewardCard.Contents
  })[0];

  if (!!contentsChild) {
    return /*#__PURE__*/React.createElement(StyledRewardCard, _extends({}, props, {
      className: classNames('k-RewardCard', className, {
        'k-RewardCard--disabled': disabled,
        'k-RewardCard--hasBorder': hasBorder,
        'k-RewardCard--hasShadow': hasShadow,
        'k-RewardCard--isStretched': stretch
      })
    }), children);
  } // Old card version


  console.warn('This use of the RewardCard is deprecated. Please wrap contents with `RewardCard.Contents`.');
  const imageChild = getReactElementsByType({
    children,
    type: RewardCard.Image
  })[0];
  const buttonChild = getReactElementsByType({
    children,
    type: RewardCard.Button
  })[0];
  const wrappedChildren = getReactElementsWithoutTypeArray({
    children,
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
  }, wrappedChildren && wrappedChildren.map((item, index) => /*#__PURE__*/cloneElement(item, {
    key: "RewardCard-" + index
  }))), buttonChild && /*#__PURE__*/cloneElement(buttonChild, {
    disabled
  }));
};
RewardCard.Info = Info;
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
  hasShadow: true,
  disabled: false,
  stretch: false
};
RewardCard.propTypes = {
  hasBorder: PropTypes.bool,
  hasShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  stretch: PropTypes.bool
};