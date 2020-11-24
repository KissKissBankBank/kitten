import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { RadioButton } from '../../../components/form/radio-button';
import { pxToRem } from '../../../helpers/utils/typography';
import { Label } from '../../../components/form/label';
var StyledRadioButtonSet = styled.fieldset.withConfig({
  displayName: "radio-button-set__StyledRadioButtonSet",
  componentId: "sc-1bde3vb-0"
})(["margin:0;padding:0;border:0;display:flex;flex-direction:column;line-height:1.3rem;& > legend{padding:0;}.k-Form-RadioButtonSet__label{margin-bottom:", ";}.k-Form-RadioButtonSet__radioButton{margin:", " 0;&:first-of-type{margin-top:0;}&:last-of-type{margin-bottom:0;}}"], pxToRem(10), pxToRem(5));
export var RadioButtonSet = function RadioButtonSet(_ref) {
  var items = _ref.items,
      disabled = _ref.disabled,
      className = _ref.className,
      name = _ref.name,
      error = _ref.error,
      variant = _ref.variant,
      design = _ref.design,
      label = _ref.label,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["items", "disabled", "className", "name", "error", "variant", "design", "label", "children"]);

  return /*#__PURE__*/React.createElement(StyledRadioButtonSet, _extends({
    className: classNames('k-Form-RadioButtonSet', className, "k-Form-RadioButtonSet--".concat(variant)),
    disabled: disabled
  }, props), label && /*#__PURE__*/React.createElement(Label, {
    tag: "legend",
    className: "k-Form-RadioButtonSet__label"
  }, label), children && !label && /*#__PURE__*/React.createElement("legend", null, children), /*#__PURE__*/React.createElement("div", {
    className: "k-Form-RadioButtonSet__radioContainer"
  }, items.map(function (_ref2) {
    var id = _ref2.id,
        className = _ref2.className,
        itemProps = _objectWithoutProperties(_ref2, ["id", "className"]);

    return /*#__PURE__*/React.createElement(RadioButton, _extends({
      id: id,
      variant: variant,
      design: design,
      error: error,
      name: name,
      key: id
    }, itemProps, {
      className: classNames('k-Form-RadioButtonSet__radioButton', className)
    }));
  })));
};
RadioButtonSet.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    defaultChecked: PropTypes.bool
  })),
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  design: PropTypes.oneOf(['disc', 'check']),
  disabled: PropTypes.bool
};
RadioButtonSet.defaultProps = {
  name: 'radioButtonSet',
  error: false,
  label: null,
  items: [{
    text: 'filter 1',
    children: 'lorem ipsum dolor',
    defaultChecked: true,
    id: 'myRadioButton' // Replace by a real value

  }],
  variant: 'andromeda',
  design: 'disc',
  disabled: false
};