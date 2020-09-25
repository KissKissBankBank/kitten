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
import { RadioButton } from '../../components/form/radio-button';
export var RadioButtonSet = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioButtonSet, _React$Component);

  var _super = _createSuper(RadioButtonSet);

  function RadioButtonSet(props) {
    var _this;

    _classCallCheck(this, RadioButtonSet);

    _this = _super.call(this, props);
    _this.renderRadioButton = _this.renderRadioButton.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RadioButtonSet, [{
    key: "renderRadioButton",
    value: function renderRadioButton(item) {
      var className = item.className,
          itemProps = _objectWithoutProperties(item, ["className"]);

      var radioButtonClassName = classNames('k-RadioButtonSet__radioButton', className);
      return /*#__PURE__*/React.createElement(RadioButton, _extends({
        className: radioButtonClassName,
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
          radioButtonSetProps = _objectWithoutProperties(_this$props, ["items", "className", "name", "error"]);

      var radioButtonSetClassName = classNames('k-RadioButtonSet', className);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: radioButtonSetClassName
      }, radioButtonSetProps), this.props.items.map(this.renderRadioButton));
    }
  }]);

  return RadioButtonSet;
}(React.Component);
RadioButtonSet.defaultProps = {
  name: 'radioButtonSet',
  error: false,
  items: [{
    text: 'filter 1',
    children: 'lorem ipsum dolor',
    defaultChecked: true,
    id: 'myRadioButton' // Replace by a real value

  }]
};