import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var card = function card(WrappedComponent, wrappedProps) {
  var defaultProps = {
    className: null,
    light: false,
    padded: false,
    rounded: false,
    translateOnHover: false,
    withBorder: false,
    withDarkBorder: false,
    withShadow: false,
    withVerticalPadding: false
  };

  var Card = function Card(props) {
    var _defaultProps$wrapped = _extends({}, defaultProps, wrappedProps, props),
        className = _defaultProps$wrapped.className,
        light = _defaultProps$wrapped.light,
        padded = _defaultProps$wrapped.padded,
        rounded = _defaultProps$wrapped.rounded,
        translateOnHover = _defaultProps$wrapped.translateOnHover,
        withBorder = _defaultProps$wrapped.withBorder,
        withDarkBorder = _defaultProps$wrapped.withDarkBorder,
        withShadow = _defaultProps$wrapped.withShadow,
        withVerticalPadding = _defaultProps$wrapped.withVerticalPadding,
        withoutBoxShadowOnHover = _defaultProps$wrapped.withoutBoxShadowOnHover,
        others = _objectWithoutProperties(_defaultProps$wrapped, ["className", "light", "padded", "rounded", "translateOnHover", "withBorder", "withDarkBorder", "withShadow", "withVerticalPadding", "withoutBoxShadowOnHover"]);

    var cardClassName = classNames('k-Card', {
      'k-Card--light': light,
      'k-Card--padded': padded,
      'k-Card--microRounded': rounded == 'micro',
      'k-Card--tinyRounded': rounded == 'tiny',
      'k-Card--rounded': rounded == true,
      'k-Card--translateOnHover': translateOnHover,
      'k-Card--withBorder': withBorder,
      'k-Card--withDarkBorder': withDarkBorder,
      'k-Card--withShadow': withShadow,
      'k-Card--withVerticalPadding': withVerticalPadding,
      'k-Card--withoutBoxShadowOnHover': withoutBoxShadowOnHover
    }, className);
    return /*#__PURE__*/React.createElement(WrappedComponent, _extends({
      className: cardClassName
    }, others));
  };

  return Card;
};
card.propTypes = {
  rounded: PropTypes.oneOf(['micro', 'tiny'])
};