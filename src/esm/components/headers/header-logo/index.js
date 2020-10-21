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
import classNames from 'classnames';
export var HeaderLogo = /*#__PURE__*/function (_React$Component) {
  _inherits(HeaderLogo, _React$Component);

  var _super = _createSuper(HeaderLogo);

  function HeaderLogo() {
    _classCallCheck(this, HeaderLogo);

    return _super.apply(this, arguments);
  }

  _createClass(HeaderLogo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          src = _this$props.src,
          alt = _this$props.alt,
          width = _this$props.width,
          height = _this$props.height,
          lightOnM = _this$props.lightOnM,
          lightOnXxs = _this$props.lightOnXxs,
          other = _objectWithoutProperties(_this$props, ["className", "src", "alt", "width", "height", "lightOnM", "lightOnXxs"]);

      var imgProps = {
        src: src,
        alt: alt,
        width: width,
        height: height
      };
      var linkClassName = classNames('k-Header__logo', className, {
        'k-Header__logo--lightOnM': lightOnM,
        'k-Header__logo--lightOnXxs': lightOnXxs
      });
      return /*#__PURE__*/React.createElement("a", _extends({
        className: linkClassName
      }, other), /*#__PURE__*/React.createElement("img", imgProps));
    }
  }]);

  return HeaderLogo;
}(React.Component);
HeaderLogo.defaultProps = {
  href: '#',
  src: '#',
  alt: null,
  width: null,
  height: null,
  lightOnM: false,
  lightOnXxs: false
};