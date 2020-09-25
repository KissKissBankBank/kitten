import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import ReactDOM from 'react-dom';
export var GrabberIcon = /*#__PURE__*/function (_React$Component) {
  _inherits(GrabberIcon, _React$Component);

  var _super = _createSuper(GrabberIcon);

  function GrabberIcon() {
    _classCallCheck(this, GrabberIcon);

    return _super.apply(this, arguments);
  }

  _createClass(GrabberIcon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var element = ReactDOM.findDOMNode(this);
      element.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("svg", _extends({
        viewBox: "0 0 100 100",
        width: "32",
        height: "32"
      }, this.props), /*#__PURE__*/React.createElement("title", null, "Grabber"), /*#__PURE__*/React.createElement("path", {
        d: "M0 0 v100 h20 v-100 z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M40 0 v100 h20 v-100 z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M80 0 v100 h20 v-100 z"
      }));
    }
  }]);

  return GrabberIcon;
}(React.Component); // DEPRECATED: do not use default export.

export default GrabberIcon;