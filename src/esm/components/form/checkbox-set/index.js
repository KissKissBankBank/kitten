import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { Checkbox } from '../../../components/form/checkbox';
import { pxToRem } from '../../../helpers/utils/typography';
import { Label } from '../../../components/form/label';
var StyledCheckboxSet = styled.fieldset.withConfig({
  displayName: "checkbox-set__StyledCheckboxSet",
  componentId: "sc-1x5pmus-0"
})(["margin:0;padding:0;border:0;display:flex;flex-direction:column;line-height:1.3rem;& > legend{padding:0;}.k-Form-CheckboxSet__label{margin-bottom:", ";}.k-Form-CheckboxSet__checkbox{margin:", " 0;&:first-of-type{margin-top:0;}&:last-of-type{margin-bottom:0;}}"], pxToRem(10), pxToRem(5));
export var CheckboxSet = function CheckboxSet(_ref) {
  var items = _ref.items,
      disabled = _ref.disabled,
      className = _ref.className,
      name = _ref.name,
      error = _ref.error,
      label = _ref.label,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["items", "disabled", "className", "name", "error", "label", "children"]);

  return /*#__PURE__*/React.createElement(StyledCheckboxSet, _extends({
    className: classNames('k-Form-CheckboxSet', className),
    disabled: disabled
  }, props), label && /*#__PURE__*/React.createElement(Label, {
    tag: "legend",
    className: "k-Form-CheckboxSet__label"
  }, label), children && !label && /*#__PURE__*/React.createElement("legend", null, children), items.map(function (_ref2) {
    var id = _ref2.id,
        className = _ref2.className,
        itemProps = _objectWithoutProperties(_ref2, ["id", "className"]);

    return /*#__PURE__*/React.createElement(Checkbox, _extends({
      id: id,
      error: error,
      name: name,
      key: id
    }, itemProps, {
      className: classNames('k-Form-CheckboxSet__checkbox', className)
    }));
  }));
};
CheckboxSet.propTypes = {
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
CheckboxSet.defaultProps = {
  name: 'checkboxSet',
  error: false,
  label: null,
  items: [{
    label: null,
    children: null,
    defaultChecked: true,
    id: 'myCheckbox' // Replace by a real value

  }],
  disabled: false
};