import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["items", "disabled", "className", "name", "error", "design", "label", "children", "fontWeight", "weight", "labelProps"],
    _excluded2 = ["id", "className"];
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { Radio } from '../../form/radio';
import { pxToRem } from '../../../helpers/utils/typography';
import { Label } from '../../form/label';
import { checkDeprecatedWeights } from '../../../helpers/utils/deprecated';
import deprecated from 'prop-types-extra/lib/deprecated';
var StyledRadioSet = styled.fieldset.withConfig({
  displayName: "radio-set__StyledRadioSet",
  componentId: "sc-tsmzen-0"
})(["margin:0;padding:0;border:0;line-height:1.3rem;& > legend{padding:0;}.k-Form-RadioSet__legend{margin-bottom:", ";}.k-Form-RadioSet__radioContainer{display:flex;flex-direction:column;gap:", " 0;}"], pxToRem(10), pxToRem(5));
export var RadioSet = function RadioSet(_ref) {
  var items = _ref.items,
      disabled = _ref.disabled,
      className = _ref.className,
      name = _ref.name,
      error = _ref.error,
      design = _ref.design,
      label = _ref.label,
      children = _ref.children,
      fontWeight = _ref.fontWeight,
      weight = _ref.weight,
      labelProps = _ref.labelProps,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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
  }, items.map(function (_ref2) {
    var id = _ref2.id,
        className = _ref2.className,
        itemProps = _objectWithoutPropertiesLoose(_ref2, _excluded2);

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
  weight: PropTypes.oneOf(['400', '500', '700'])
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