import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["items", "disabled", "className", "name", "error", "label", "children"],
    _excluded2 = ["id", "className"];
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { CheckboxButton } from '../../form/checkbox-button';
import { pxToRem } from '../../../helpers/utils/typography';
import { Label } from '../../form/label';
var StyledCheckboxButtonSet = styled.fieldset.withConfig({
  displayName: "checkbox-button-set__StyledCheckboxButtonSet",
  componentId: "sc-15b13i9-0"
})(["margin:0;padding:0;border:0;display:flex;flex-direction:column;line-height:1.3rem;& > legend{padding:0;}.k-Form-CheckboxButtonSet__label{margin-bottom:", ";}.k-Form-CheckboxButtonSet__checkbox{margin:", " 0;&:first-of-type{margin-top:0;}&:last-of-type{margin-bottom:0;}}"], pxToRem(10), pxToRem(5));
export var CheckboxButtonSet = function CheckboxButtonSet(_ref) {
  var items = _ref.items,
      disabled = _ref.disabled,
      className = _ref.className,
      name = _ref.name,
      error = _ref.error,
      label = _ref.label,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledCheckboxButtonSet, _extends({
    className: classNames('k-Form-CheckboxButtonSet', className),
    disabled: disabled
  }, props), label && /*#__PURE__*/React.createElement(Label, {
    tag: "legend",
    className: "k-Form-CheckboxButtonSet__label"
  }, label), children && !label && /*#__PURE__*/React.createElement("legend", null, children), items.map(function (_ref2) {
    var id = _ref2.id,
        className = _ref2.className,
        itemProps = _objectWithoutPropertiesLoose(_ref2, _excluded2);

    return /*#__PURE__*/React.createElement(CheckboxButton, _extends({
      id: id,
      error: error,
      name: name,
      key: id
    }, itemProps, {
      className: classNames('k-Form-CheckboxButtonSet__checkbox', className)
    }));
  }));
};
CheckboxButtonSet.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    defaultChecked: PropTypes.bool,
    children: PropTypes.node
  })),
  disabled: PropTypes.bool
};
CheckboxButtonSet.defaultProps = {
  name: 'checkboxSet',
  error: false,
  label: null,
  items: [{
    label: null,
    children: null,
    defaultChecked: true,
    id: 'myCheckboxButton' // Replace by a real value

  }],
  disabled: false
};