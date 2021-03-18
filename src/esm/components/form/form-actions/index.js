import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledFormActions = styled.div.withConfig({
  displayName: "form-actions__StyledFormActions",
  componentId: "sc-86ge76-0"
})(["display:flex;flex-wrap:wrap;justify-content:center;.k-FormActions__item{margin-left:", ";margin-right:", ";}&.k-FormActions--spreadOut-s-up{@media (min-width:", "){justify-content:space-between;.k-FormActions__item{&:first-child{margin-left:0;}&:last-child{margin-right:0;}}}}"], pxToRem(5), pxToRem(5), pxToRem(ScreenConfig.S.min));
export var FormActions = function FormActions(_ref) {
  var className = _ref.className,
      spreadOutAt = _ref.spreadOutAt,
      others = _objectWithoutProperties(_ref, ["className", "spreadOutAt"]);

  var formActionsClassName = classNames('k-FormActions', className, _defineProperty({}, "k-FormActions--spreadOut-".concat(spreadOutAt), spreadOutAt));
  return /*#__PURE__*/React.createElement(StyledFormActions, _extends({
    className: formActionsClassName
  }, others));
};

FormActions.Item = function (props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-FormActions__item', props.className)
  }));
};

FormActions.propTypes = {
  spreadOutAt: PropTypes.oneOf(['s-up'])
};
FormActions.defaultProps = {
  spreadOutAt: 's-up',
  children: null
};
FormActions.Item.defaultProps = {
  className: null,
  children: null
};