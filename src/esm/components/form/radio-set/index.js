import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { Radio } from '../../form/radio';
import { pxToRem } from '../../../helpers/utils/typography';
import { Label } from '../../form/label';
import { checkDeprecatedWeights } from '../../../helpers/utils/deprecated';
import deprecated from 'prop-types-extra/lib/deprecated';
const StyledRadioSet = styled.fieldset.withConfig({
  displayName: "radio-set__StyledRadioSet",
  componentId: "sc-tsmzen-0"
})(["margin:0;padding:0;border:0;line-height:1.3rem;& > legend{padding:0;}.k-Form-RadioSet__legend{margin-bottom:", ";}.k-Form-RadioSet__radioContainer{display:flex;flex-direction:column;gap:", " 0;}"], pxToRem(10), pxToRem(5));
export const RadioSet = _ref => {
  let {
    items,
    disabled,
    className,
    name,
    error,
    design,
    label,
    children,
    fontWeight,
    // Deprecated
    weight,
    labelProps,
    ...props
  } = _ref;
  checkDeprecatedWeights(weight);
  return /*#__PURE__*/React.createElement(StyledRadioSet, _extends({
    className: classNames('k-Form-RadioSet', className),
    disabled: disabled
  }, props), label && /*#__PURE__*/React.createElement(Label, _extends({
    tag: "legend"
  }, labelProps, {
    className: classNames('k-Form-RadioSet__legend', labelProps.className)
  }), label), children && !label && /*#__PURE__*/React.createElement("legend", null, children), /*#__PURE__*/React.createElement("div", {
    className: "k-Form-RadioSet__radioContainer"
  }, items.map(_ref2 => {
    let {
      id,
      className,
      ...itemProps
    } = _ref2;
    return /*#__PURE__*/React.createElement(Radio, _extends({
      id: id,
      design: design,
      error: error,
      weight: fontWeight || weight,
      name: name,
      key: id
    }, itemProps, {
      className: classNames('k-Form-RadioSet__radio', className)
    }));
  })));
};
RadioSet.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    defaultChecked: PropTypes.bool
  })),
  design: PropTypes.oneOf(['disc', 'check']),
  disabled: PropTypes.bool,
  labelProps: PropTypes.object,
  fontWeight: deprecated(PropTypes.string, 'Prefere use `weight` prop instead'),
  weight: PropTypes.oneOf(['400', '500', '600', '700'])
};
RadioSet.defaultProps = {
  name: 'radioSet',
  error: false,
  label: null,
  items: [],
  design: 'disc',
  disabled: false,
  labelProps: {},
  weight: '500'
};