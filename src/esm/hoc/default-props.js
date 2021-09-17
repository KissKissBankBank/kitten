import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
export var defaultProps = function defaultProps(WrappedComponent, props) {
  return /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(defaultProps, _React$Component);

    function defaultProps() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = defaultProps.prototype;

    _proto.render = function render() {
      return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, props, this.props));
    };

    return defaultProps;
  }(React.Component);
}; // DEPRECATED: do not use default export.

export default defaultProps;