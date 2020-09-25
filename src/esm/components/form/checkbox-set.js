import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import classNames from 'classnames';
import { Checkbox } from '../../components/form/checkbox';
export var CheckboxSet = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckboxSet, _React$Component);

  var _super = _createSuper(CheckboxSet);

  function CheckboxSet(props) {
    var _this;

    _classCallCheck(this, CheckboxSet);

    _this = _super.call(this, props);
    _this.renderCheckbox = _this.renderCheckbox.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckboxSet, [{
    key: "renderCheckbox",
    value: function renderCheckbox(item) {
      var className = item.className,
          itemProps = _objectWithoutProperties(item, ["className"]);

      var checkboxClassName = classNames('k-CheckboxSet__checkbox', className);
      return /*#__PURE__*/React.createElement(Checkbox, _extends({
        className: checkboxClassName,
        error: this.props.error,
        name: this.props.name,
        key: item.id
      }, itemProps));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          className = _this$props.className,
          name = _this$props.name,
          error = _this$props.error,
          checkboxSetProps = _objectWithoutProperties(_this$props, ["items", "className", "name", "error"]);

      var checkboxSetClassName = classNames('k-CheckboxSet', className);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: checkboxSetClassName
      }, checkboxSetProps), this.props.items.map(this.renderCheckbox));
    }
  }]);

  return CheckboxSet;
}(React.Component);
CheckboxSet.defaultProps = {
  name: 'checkboxSet[]',
  error: false,
  items: [{
    label: 'filter 1',
    defaultChecked: true,
    id: 'myCheckbox' // Replace by a real value

  }]
};