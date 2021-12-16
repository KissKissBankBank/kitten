import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
var _excluded = ["style"];
import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styled';
export var Container = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(Container, _React$PureComponent);

  function Container() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Container.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        others = _objectWithoutPropertiesLoose(_this$props, _excluded);

    return /*#__PURE__*/React.createElement(StyledContainer, _extends({
      styles: style
    }, others));
  };

  return Container;
}(React.PureComponent);
Container.defaultProps = {
  fullWidthBelowScreenSize: null
};
Container.propTypes = {
  fullWidthBelowScreenSize: PropTypes.oneOf(['XXS', 'XS', 'S', 'M', 'L', 'XL'])
};