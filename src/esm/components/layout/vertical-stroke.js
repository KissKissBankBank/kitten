import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
export var VerticalStroke = /*#__PURE__*/function (_Component) {
  _inherits(VerticalStroke, _Component);

  var _super = _createSuper(VerticalStroke);

  function VerticalStroke() {
    _classCallCheck(this, VerticalStroke);

    return _super.apply(this, arguments);
  }

  _createClass(VerticalStroke, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size,
          others = _objectWithoutProperties(_this$props, ["className", "size"]);

      var verticalStrokeClassName = classNames('k-VerticalStroke', {
        'k-VerticalStroke--tiny': size == 'tiny',
        'k-VerticalStroke--default': size == 'default',
        'k-VerticalStroke--big': size == 'big',
        'k-VerticalStroke--huge': size == 'huge'
      }, className);
      return /*#__PURE__*/React.createElement("span", _extends({
        className: verticalStrokeClassName
      }, others));
    }
  }]);

  return VerticalStroke;
}(Component);
VerticalStroke.propTypes = {
  size: PropTypes.oneOf(['tiny', 'default', 'big', 'huge'])
};
VerticalStroke.defaultProps = {
  size: 'default'
};