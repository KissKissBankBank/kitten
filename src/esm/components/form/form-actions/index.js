import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var FormActions = function FormActions(props) {
  var className = props.className,
      spreadOutAt = props.spreadOutAt,
      others = _objectWithoutProperties(props, ["className", "spreadOutAt"]);

  var formActionsClassName = classNames('k-FormActions', className, _defineProperty({}, "k-FormActions--spreadOut@".concat(spreadOutAt), spreadOutAt));
  return /*#__PURE__*/React.createElement("div", _extends({
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