import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledBackingCard } from './styles';
import { Info, Form, Title, Image, Amount, Button, TagList, HeadingTag, Description } from './components';
export var BackingCard = function BackingCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      hasBorder = _ref.hasBorder,
      props = _objectWithoutProperties(_ref, ["children", "className", "disabled", "hasBorder"]);

  return /*#__PURE__*/React.createElement(StyledBackingCard, _extends({}, props, {
    className: classNames('k-BackingCard', className, {
      'k-BackingCard--disabled': disabled,
      'k-BackingCard--hasBorder': hasBorder
    })
  }), React.Children.map(children, function (child) {
    if (!child) return null;
    return child.props.__TYPE === 'Image' ? child : null;
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-BackingCard__gridWrapper"
  }, React.Children.map(children, function (child) {
    if (!child) return null;
    return ['Image', 'Button'].includes(child.props.__TYPE) ? null : child;
  })), React.Children.map(children, function (child) {
    if (!child) return null;
    return child.props.__TYPE === 'Button' ? cloneElement(child, {
      disabled: disabled
    }) : null;
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
BackingCard.defaultProps = {
  hasBorder: true,
  disabled: false
};
BackingCard.propTypes = {
  hasBorder: PropTypes.bool,
  disabled: PropTypes.bool
};