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
import classNames from 'classnames';
export var DropdownButton = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownButton, _React$Component);

  var _super = _createSuper(DropdownButton);

  function DropdownButton() {
    _classCallCheck(this, DropdownButton);

    return _super.apply(this, arguments);
  }

  _createClass(DropdownButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          isExpanded = _this$props.isExpanded,
          rest = _objectWithoutProperties(_this$props, ["className", "isExpanded"]);

      var buttonClassName = classNames('k-Dropdown__button', className);
      return /*#__PURE__*/React.createElement("button", _extends({
        ref: "dropdownButton",
        className: buttonClassName,
        "aria-haspopup": "true",
        "aria-expanded": isExpanded
      }, rest));
    }
  }]);

  return DropdownButton;
}(React.Component);
DropdownButton.propTypes = {
  onClick: PropTypes.func,
  isExpanded: PropTypes.bool
};
DropdownButton.defaultProps = {
  children: 'Toggle button',
  onClick: function onClick() {},
  isExpanded: false
}; // DEPRECATED: do not use default export.

export default DropdownButton;