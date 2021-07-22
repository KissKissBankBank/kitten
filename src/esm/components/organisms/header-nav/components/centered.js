import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var Centered = function Centered(_ref) {
  var children = _ref.children,
      className = _ref.className,
      display = _ref.display,
      props = _objectWithoutProperties(_ref, ["children", "className", "display"]);

  var classNameProps = classNames('k-HeaderNav--centered', {
    'k-HeaderNav--column': display === 'column'
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