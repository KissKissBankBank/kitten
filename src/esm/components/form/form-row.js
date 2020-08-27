import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import classNames from 'classnames';
export var FormRow = /*#__PURE__*/function (_React$Component) {
  _inherits(FormRow, _React$Component);

  var _super = _createSuper(FormRow);

  function FormRow() {
    _classCallCheck(this, FormRow);

    return _super.apply(this, arguments);
  }

  _createClass(FormRow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", _extends({}, this.props, {
        className: classNames('k-FormRow', this.props.className)
      }));
    }
  }]);

  return FormRow;
}(React.Component);
FormRow.defaultProps = {
  className: null,
  children: null
};