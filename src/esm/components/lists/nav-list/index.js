import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
export var NavList = /*#__PURE__*/function (_React$Component) {
  _inherits(NavList, _React$Component);

  var _super = _createSuper(NavList);

  function NavList() {
    _classCallCheck(this, NavList);

    return _super.apply(this, arguments);
  }

  _createClass(NavList, [{
    key: "renderItem",
    value: function renderItem(item, i) {
      return /*#__PURE__*/React.createElement("li", {
        key: i,
        role: "menuitem"
      }, item);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          list = _this$props.list,
          others = _objectWithoutProperties(_this$props, ["list"]);

      var items = list.map(this.renderItem);
      var defaultItem = 'No choice';
      return /*#__PURE__*/React.createElement("nav", {
        role: "navigation"
      }, /*#__PURE__*/React.createElement("ul", others, items.length ? items : defaultItem));
    }
  }]);

  return NavList;
}(React.Component); // DEPRECATED: do not use default export.

export default NavList;