import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styled';
export var Container = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Container, _React$PureComponent);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          others = _objectWithoutProperties(_this$props, ["style"]);

      return /*#__PURE__*/React.createElement(StyledContainer, _extends({
        styles: style
      }, others));
    }
  }]);

  return Container;
}(React.PureComponent);
Container.defaultProps = {
  fullWidthBelowScreenSize: null
};
Container.propTypes = {
  fullWidthBelowScreenSize: PropTypes.oneOf(['XXS', 'XS', 'S', 'M', 'L', 'XL'])
};