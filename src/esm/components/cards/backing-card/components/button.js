import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button as KittenButton } from '../../../buttons/button/button';
export var Button = function Button(props) {
  var cleanProps = Object.assign({}, props);
  delete cleanProps.__TYPE;
  return /*#__PURE__*/React.createElement(KittenButton, _extends({
    borderRadius: 4,
    modifier: "helium"
  }, cleanProps, {
    className: classNames('k-BackingCard__button', 'k-BackingCard__drawer', props.className)
  }));
};
Button.propTypes = {
  children: PropTypes.node,
  __TYPE: PropTypes.string
};
Button.defaultProps = {
  __TYPE: 'Button'
};