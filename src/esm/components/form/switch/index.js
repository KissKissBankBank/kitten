import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
export var Switch = function Switch(_ref) {
  var id = _ref.id,
      isChecked = _ref.isChecked,
      disabled = _ref.disabled,
      label = _ref.label,
      big = _ref.big,
      others = _objectWithoutProperties(_ref, ["id", "isChecked", "disabled", "label", "big"]);

  return /*#__PURE__*/React.createElement("div", {
    className: "k-Switch"
  }, /*#__PURE__*/React.createElement("input", _extends({}, others, {
    id: id,
    type: "checkbox",
    className: classNames('k-Switch__input', others.className),
    defaultChecked: isChecked,
    disabled: disabled
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: classNames('k-Switch__label', {
      'k-Switch__label--big': big
    })
  }, label));
};