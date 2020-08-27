import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
export var defaultProps = function defaultProps(WrappedComponent, props) {
  return /*#__PURE__*/function (_React$Component) {
    _inherits(defaultProps, _React$Component);

    var _super = _createSuper(defaultProps);

    function defaultProps() {
      _classCallCheck(this, defaultProps);

      return _super.apply(this, arguments);
    }

    _createClass(defaultProps, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, props, this.props));
      }
    }]);

    return defaultProps;
  }(React.Component);
}; // DEPRECATED: do not use default export.

export default defaultProps;