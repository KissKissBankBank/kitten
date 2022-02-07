import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "display"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var Centered = function Centered(_ref) {
  var children = _ref.children,
      className = _ref.className,
      display = _ref.display,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var classNameProps = classNames('k-HeaderNav__centered', {
    'k-HeaderNav__column': display === 'column'
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNameProps
  }), children);
};
Centered.propTypes = {
  display: PropTypes.oneOf(['column'])
};
Centered.defaultProps = {
  display: null
};