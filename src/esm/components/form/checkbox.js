import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import { Text } from '../../components/typography/text';
export var Checkbox = function Checkbox(_ref) {
  var className = _ref.className,
      id = _ref.id,
      children = _ref.children,
      inputClassName = _ref.inputClassName,
      error = _ref.error,
      textProps = _ref.textProps,
      onLabelClick = _ref.onLabelClick,
      indeterminate = _ref.indeterminate,
      inputProps = _objectWithoutProperties(_ref, ["className", "id", "children", "inputClassName", "error", "textProps", "onLabelClick", "indeterminate"]);

  var inputElement = useRef(null);
  useEffect(function () {
    if (inputElement.current != null) {
      inputElement.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  var checkboxInputClassNames = classNames('k-Checkbox__input', inputClassName, {
    'is-error': error
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-Checkbox', className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: inputElement,
    id: id,
    type: "checkbox",
    className: checkboxInputClassNames
  }, inputProps)), /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "k-Checkbox__label",
    onClick: onLabelClick
  }, /*#__PURE__*/React.createElement(Text, textProps, children)));
};
Checkbox.defaultProps = {
  children: 'Filter 1',
  textProps: {},
  indeterminate: false
};