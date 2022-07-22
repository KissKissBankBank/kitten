import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { Checkbox } from '../../form/checkbox';
import { pxToRem } from '../../../helpers/utils/typography';
import { Label } from '../../form/label';
const StyledCheckboxSet = styled.fieldset.withConfig({
  displayName: "checkbox-set__StyledCheckboxSet",
  componentId: "sc-1x5pmus-0"
})(["margin:0;padding:0;border:0;display:flex;flex-direction:column;line-height:1.3rem;& > legend{padding:0;}.k-Form-CheckboxSet__label{margin-bottom:", ";}.k-Form-CheckboxSet__checkbox{margin:", " 0;&:first-of-type{margin-top:0;}&:last-of-type{margin-bottom:0;}}"], pxToRem(10), pxToRem(5));
export const CheckboxSet = _ref => {
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
  return /*#__PURE__*/React.createElement(StyledCheckboxSet, _extends({
    className: classNames('k-Form-CheckboxSet', className),
    disabled: disabled
  }, props), label && /*#__PURE__*/React.createElement(Label, {
    tag: "legend",
    className: "k-Form-CheckboxSet__label"
  }, label), children && !label && /*#__PURE__*/React.createElement("legend", null, children), items.map(_ref2 => {
    let {
      id,
      className,
      ...itemProps
    } = _ref2;
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