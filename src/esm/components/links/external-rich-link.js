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
export var ExternalRichLink = /*#__PURE__*/function (_React$Component) {
  _inherits(ExternalRichLink, _React$Component);

  var _super = _createSuper(ExternalRichLink);

  function ExternalRichLink(props) {
    _classCallCheck(this, ExternalRichLink);

    return _super.call(this, props);
  }

  _createClass(ExternalRichLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          rest = _objectWithoutProperties(_this$props, ["className"]);

      var linkClassName = classNames('k-ExternalRichLink', className);
      return /*#__PURE__*/React.createElement("a", _extends({
        className: linkClassName
      }, rest), /*#__PURE__*/React.createElement("div", {
        className: "k-ExternalRichLink__element"
      }, this.props.children), /*#__PURE__*/React.createElement("div", {
        className: classNames('k-ExternalRichLink__element', 'k-ExternalRichLink__element--animate')
      }, /*#__PURE__*/React.createElement("span", {
        className: classNames('k-ButtonIcon', 'k-ButtonIcon--hydrogen', 'k-ButtonIcon--withoutHover', 'k-ButtonIcon--tiny', 'k-ButtonIcon--verticalArrow')
      }, /*#__PURE__*/React.createElement("svg", {
        className: "k-ButtonIcon__svg",
        viewBox: "0 0 10 10",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M7.828,5L6.414,6.413L2.172,2.172l1.414-1.415L7.828,5z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7.828,5L3.586,9.243L2.172,7.827l4.242-4.241L7.828,5z"
      })))));
    }
  }]);

  return ExternalRichLink;
}(React.Component);
ExternalRichLink.defaultProps = {
  href: '#',
  children: 'I am a rich link!'
}; // DEPRECATED: do not use default export.

export default ExternalRichLink;