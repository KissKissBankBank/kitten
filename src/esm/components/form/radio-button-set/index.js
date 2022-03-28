import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["items", "disabled", "className", "name", "error", "variant", "design", "label", "children", "size", "fontWeight", "paragraphStyle", "labelProps"],
    _excluded2 = ["id", "className"];
import React from 'react';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import styled from 'styled-components';
import classNames from 'classnames';
import { RadioButton } from '../../form/radio-button';
import { pxToRem } from '../../../helpers/utils/typography';
import { Label } from '../../form/label';
var StyledRadioButtonSet = styled.fieldset.withConfig({
  displayName: "radio-button-set__StyledRadioButtonSet",
  componentId: "sc-1bde3vb-0"
})(["margin:0;padding:0;border:0;line-height:1.3rem;& > legend{padding:0;}.k-Form-RadioButtonSet__label{margin-bottom:", ";}.k-Form-RadioButtonSet__radioContainer{display:flex;flex-direction:column;gap:", " 0;.k-Form-RadioButtonSet__radioButton.k-Form-RadioButton{margin:0;}}"], pxToRem(10), pxToRem(5));
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
      size = _ref.size,
      fontWeight = _ref.fontWeight,
      paragraphStyle = _ref.paragraphStyle,
      labelProps = _ref.labelProps,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledRadioButtonSet, _extends({
    className: classNames('k-Form-RadioButtonSet', className, "k-Form-RadioButtonSet--" + (variant || 'orion')),
    disabled: disabled
  }, props), label && /*#__PURE__*/React.createElement(Label, _extends({
    tag: "legend"
  }, labelProps, {
    className: classNames('k-Form-RadioButtonSet__label', labelProps.className)
  }), label), children && !label && /*#__PURE__*/React.createElement("legend", null, children), /*#__PURE__*/React.createElement("div", {
    className: "k-Form-RadioButtonSet__radioContainer"
  }, items.map(function (_ref2) {
    var id = _ref2.id,
        className = _ref2.className,
        itemProps = _objectWithoutPropertiesLoose(_ref2, _excluded2);

    return /*#__PURE__*/React.createElement(RadioButton, _extends({
      id: id,
      variant: variant || 'orion',
      design: design,
      error: error,
      size: size,
      fontWeight: fontWeight,
      paragraphStyle: paragraphStyle,
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
  size: PropTypes.oneOf(['small', 'regular', 'big']),
  variant: deprecated(PropTypes.oneOf(['andromeda', 'orion']), 'Please use the RadioSet component instead'),
  design: PropTypes.oneOf(['disc', 'check']),
  disabled: PropTypes.bool,
  labelProps: PropTypes.object,
  fontWeight: PropTypes.oneOf(['light', 'regular', 'bold']),
  paragraphStyle: PropTypes.bool
};
RadioButtonSet.defaultProps = {
  name: 'radioButtonSet',
  error: false,
  label: null,
  items: [],
  design: 'disc',
  disabled: false,
  labelProps: {},
  size: 'regular',
  fontWeight: 'regular',
  paragraphStyle: false
};