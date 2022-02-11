import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "disabled", "hasBorder", "stretch"];
import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledBackingCard } from './styles';
import { Info, Form, Title, Image, Amount, Button, TagList, HeadingTag, Description, Contents } from './components';
import { getReactElementsByType, getReactElementsWithoutTypeArray } from '../../../../helpers/react/react-elements';
export var BackingCard = function BackingCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      hasBorder = _ref.hasBorder,
      stretch = _ref.stretch,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var contentsChild = getReactElementsByType({
    children: children,
    type: BackingCard.Contents
  })[0];

  if (!!contentsChild) {
    return /*#__PURE__*/React.createElement(StyledBackingCard, _extends({}, props, {
      className: classNames('k-BackingCard', className, {
        'k-BackingCard--disabled': disabled,
        'k-BackingCard--hasBorder': hasBorder,
        'k-BackingCard--isStretched': stretch
      })
    }), children);
  } // Old card version


  console.warn('This use of the BackingCard is deprecated. Please wrap contents with `BackingCard.Contents`.');
  var imageChild = getReactElementsByType({
    children: children,
    type: BackingCard.Image
  })[0];
  var buttonChild = getReactElementsByType({
    children: children,
    type: BackingCard.Button
  })[0];
  var wrappedChildren = getReactElementsWithoutTypeArray({
    children: children,
    typeArray: [BackingCard.Button, BackingCard.Image]
  });
  return /*#__PURE__*/React.createElement(StyledBackingCard, _extends({}, props, {
    className: classNames('k-BackingCard', className, {
      'k-BackingCard--disabled': disabled,
      'k-BackingCard--hasBorder': hasBorder,
      'k-BackingCard--isStretched': stretch
    })
  }), imageChild && /*#__PURE__*/cloneElement(imageChild), /*#__PURE__*/React.createElement("div", {
    className: "k-BackingCard__gridWrapper"
  }, wrappedChildren && wrappedChildren.map(function (item, index) {
    return /*#__PURE__*/cloneElement(item, {
      key: "BackingCard-" + index
    });
  })), buttonChild && /*#__PURE__*/cloneElement(buttonChild, {
    disabled: disabled
  }));
};
BackingCard.Info = Info;
BackingCard.Form = Form;
BackingCard.Title = Title;
BackingCard.Image = Image;
BackingCard.Amount = Amount;
BackingCard.Button = Button;
BackingCard.TagList = TagList;
BackingCard.HeadingTag = HeadingTag;
BackingCard.Description = Description;
BackingCard.Contents = Contents;
BackingCard.defaultProps = {
  hasBorder: true,
  disabled: false,
  stretch: false
};
BackingCard.propTypes = {
  hasBorder: PropTypes.bool,
  disabled: PropTypes.bool,
  stretch: PropTypes.bool
};