import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["name", "className", "style"];
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
export var Cell = function Cell(_ref) {
  var name = _ref.name,
      className = _ref.className,
      style = _ref.style,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-SummaryCard__cell', className, "k-SummaryCard__cell__" + name),
    style: _extends({}, style, {
      '--summaryCardCell-name': name
    })
  }));
};
Cell.propTypes = {
  name: PropTypes.string.isRequired
};