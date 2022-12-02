import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { RadioButton } from '../../form/radio-button';
import { pxToRem } from '../../../helpers/utils/typography';
import { Label } from '../../form/label';
import { checkDeprecatedWeights } from '../../../helpers/utils/deprecated';
import deprecated from 'prop-types-extra/lib/deprecated';
const StyledRadioButtonSet = styled.fieldset.withConfig({
  displayName: "radio-button-set__StyledRadioButtonSet",
  componentId: "sc-1bde3vb-0"
})(["margin:0;padding:0;border:0;line-height:1.3rem;& > legend{padding:0;}.k-Form-RadioButtonSet__label{margin-bottom:", ";}.k-Form-RadioButtonSet__radioContainer{display:flex;flex-direction:column;gap:", " 0;.k-Form-RadioButtonSet__radioButton.k-Form-RadioButton{margin:0;}}"], pxToRem(10), pxToRem(5));
export const RadioButtonSet = _ref => {
  let {
    items,
    disabled,
    className,
    name,
    error,
    design,
    label,
    children,
    size,
    fontWeight,
    // Deprecated
    weight,
    paragraphStyle,
    labelProps,
    ...props
  } = _ref;
  checkDeprecatedWeights(weight);
  return /*#__PURE__*/React.createElement(StyledRadioButtonSet, _extends({
    className: classNames('k-Form-RadioButtonSet', className),
    disabled: disabled
  }, props), label && /*#__PURE__*/React.createElement(Label, _extends({
    tag: "legend"
  }, labelProps, {
    className: classNames('k-Form-RadioButtonSet__label', labelProps.className)
  }), label), children && !label && /*#__PURE__*/React.createElement("legend", null, children), /*#__PURE__*/React.createElement("div", {
    className: "k-Form-RadioButtonSet__radioContainer"
  }, items.map(_ref2 => {
    let {
      id,
      className,
      ...itemProps
    } = _ref2;
    return /*#__PURE__*/React.createElement(RadioButton, _extends({
      id: id,
      design: design,
      error: error,
      size: size,
      weight: fontWeight || weight,
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  design: PropTypes.oneOf(['disc', 'check']),
  disabled: PropTypes.bool,
  labelProps: PropTypes.object,
  fontWeight: deprecated(PropTypes.string, 'Prefere use `weight` prop instead'),
  weight: PropTypes.oneOf(['400', '500', '600', '700']),
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
  size: 'medium',
  weight: '500',
  paragraphStyle: false
};