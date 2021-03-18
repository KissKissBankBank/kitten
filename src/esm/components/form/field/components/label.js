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
import PropTypes from 'prop-types';
import { Marger } from '../../../layout/marger';
import { Label } from '../../../form/label';
import { Toggletip } from '../../../tooltips/toggletip';
import { Line } from '../../../layout/line';
export var FieldLabel = /*#__PURE__*/function (_Component) {
  _inherits(FieldLabel, _Component);

  var _super = _createSuper(FieldLabel);

  function FieldLabel() {
    _classCallCheck(this, FieldLabel);

    return _super.apply(this, arguments);
  }

  _createClass(FieldLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          tooltip = _this$props.tooltip,
          tooltipId = _this$props.tooltipId,
          tooltipProps = _this$props.tooltipProps,
          labelProps = _this$props.labelProps,
          link = _this$props.link,
          others = _objectWithoutProperties(_this$props, ["children", "tooltip", "tooltipId", "tooltipProps", "labelProps", "link"]);

      return /*#__PURE__*/React.createElement(Marger, _extends({
        bottom: "1"
      }, others), /*#__PURE__*/React.createElement(Line, {
        style: {
          lineHeight: 1
        }
      }, /*#__PURE__*/React.createElement(Line.Item, null, /*#__PURE__*/React.createElement(Label, _extends({}, labelProps, {
        size: labelProps.size || 'micro'
      }), children)), tooltip && /*#__PURE__*/React.createElement(Line.Item, null, /*#__PURE__*/React.createElement(Toggletip, _extends({
        id: tooltipId,
        bubbleProps: {
          zIndex: 2
        }
      }, tooltipProps), tooltip)), link && /*#__PURE__*/React.createElement(Line.Item, null, link)));
    }
  }]);

  return FieldLabel;
}(Component);
FieldLabel.propTypes = {
  link: PropTypes.node,
  tooltip: PropTypes.string,
  labelProps: PropTypes.object,
  tooltipProps: PropTypes.object
};
FieldLabel.defaultProps = {
  tooltip: null,
  labelProps: {}
};