import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var Image = function Image(props) {
  var cleanProps = Object.assign({}, props);
  delete cleanProps.__TYPE;
  return /*#__PURE__*/React.createElement("div", _extends({}, cleanProps, {
    className: classNames('k-BackingCard__imageWrapper', props.className)
  }));
};
Image.propTypes = {
  children: PropTypes.node,
  __TYPE: PropTypes.string
};
Image.defaultProps = {
  __TYPE: 'Image'
};