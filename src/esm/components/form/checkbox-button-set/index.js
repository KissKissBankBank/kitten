import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { CheckboxButton } from '../../form/checkbox-button';
import { pxToRem } from '../../../helpers/utils/typography';
import { Label } from '../../form/label';
const StyledCheckboxButtonSet = styled.fieldset.withConfig({
  displayName: "checkbox-button-set__StyledCheckboxButtonSet",
  componentId: "sc-15b13i9-0"
})(["margin:0;padding:0;border:0;display:flex;flex-direction:column;line-height:1.3rem;& > legend{padding:0;}.k-Form-CheckboxButtonSet__label{margin-bottom:", ";}.k-Form-CheckboxButtonSet__checkbox{margin:", " 0;&:first-of-type{margin-top:0;}&:last-of-type{margin-bottom:0;}}"], pxToRem(10), pxToRem(5));
export const CheckboxButtonSet = _ref => {
  let {
    items,
    disabled,
    className,
    name,
    error,
    label,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledCheckboxButtonSet, _extends({
    className: classNames('k-Form-CheckboxButtonSet', className),
    disabled: disabled
  }, props), label && /*#__PURE__*/React.createElement(Label, {
    tag: "legend",
    className: "k-Form-CheckboxButtonSet__label"
  }, label), children && !label && /*#__PURE__*/React.createElement("legend", null, children), items.map(_ref2 => {
    let {
      id,
      className,
      ...itemProps
    } = _ref2;
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