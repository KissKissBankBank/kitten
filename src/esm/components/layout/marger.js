import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ScreenConfig } from '../../constants/screen-config';
import TYPOGRAPHY from '../../constants/typography-config';
import isStringANumber from 'is-string-a-number';
import { upcaseFirst } from '../../helpers/utils/string';
export var Marger = /*#__PURE__*/function (_Component) {
  _inherits(Marger, _Component);

  var _super = _createSuper(Marger);

  function Marger(props) {
    var _this;

    _classCallCheck(this, Marger);

    _this = _super.call(this, props); // Use 10px as gutter base and transform it to have a rem unit.

    _this.marginSize = function (value) {
      return "".concat(value * _this.gutter, "rem");
    };

    _this.valueIsNumber = function (value) {
      // Retro-compatibility: this handles the case when the user enters `.5` as a
      // value for a margin.
      if (typeof value === 'string' && value.match(/^-?\.\d+$/)) {
        return true;
      }

      return isStringANumber(String(value));
    };

    _this.propIsNumber = function (propName) {
      return _this.valueIsNumber(_this.props[propName]);
    };

    _this.isSetValue = function (value) {
      return value || value === 0;
    };

    _this.isPropWithViewportRange = function (propName, viewportRange) {
      return _this.props[propName] && _this.props[propName]["from".concat(upcaseFirst(viewportRange))];
    };

    _this.viewportRangeCssRule = function (viewportRange) {
      return "@media (min-width: ".concat(ScreenConfig[viewportRange.toUpperCase()].min, "px)");
    };

    _this.propCssDeclarationForViewportRange = function (propName, viewportRange) {
      var size = _this.props[propName]["from".concat(upcaseFirst(viewportRange))];

      if (!_this.isSetValue(size)) return;
      return "margin-".concat(propName, ": ").concat(_this.marginSize(size), ";");
    };

    _this.viewportRangeStyleCondition = function (propName, viewportRange) {
      var hasValue = _this.isPropWithViewportRange(propName, viewportRange);

      if (!_this.isSetValue(hasValue)) return;

      var viewportRangeCssRule = _this.viewportRangeCssRule(viewportRange);

      var viewportRangeCssValue = _this.propCssDeclarationForViewportRange(propName, viewportRange);

      if (!viewportRangeCssValue) return;
      return "".concat(viewportRangeCssRule, " { ").concat(viewportRangeCssValue, " }");
    };

    _this.hasDefaultProp = function (propName) {
      return _this.props[propName] && _this.props[propName].default;
    };

    _this.hasXxsProp = function (propName) {
      return _this.props[propName] && _this.props[propName].fromXxs;
    };

    _this.defaultValue = function (propName) {
      if (_this.propIsNumber(propName)) return _this.marginSize(_this.props[propName]);
      if (_this.hasDefaultProp(propName)) return _this.marginSize(_this.props[propName].default);
      if (_this.hasXxsProp(propName)) return _this.marginSize(_this.props[propName].fromXxs);
    };

    _this.stylesForName = function (propName) {
      var value = _this.defaultValue(propName);

      if (value) return "margin-".concat(propName, ": ").concat(_this.defaultValue(propName), ";");
    };

    _this.gutter = 10 / TYPOGRAPHY.root;
    return _this;
  }

  _createClass(Marger, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          top = _this$props.top,
          bottom = _this$props.bottom,
          style = _this$props.style,
          others = _objectWithoutProperties(_this$props, ["top", "bottom", "style"]);

      var viewportRanges = Object.keys(ScreenConfig).map(function (size) {
        return size.toLowerCase();
      }).filter(function (size) {
        return size !== 'xxs';
      });
      var viewportRangesStyles = viewportRanges.reduce(function (acc, viewportRange) {
        return [].concat(_toConsumableArray(acc), [_this2.viewportRangeStyleCondition('top', viewportRange), _this2.viewportRangeStyleCondition('bottom', viewportRange)]);
      }, []);
      var styles = [this.stylesForName('top'), this.stylesForName('bottom'), viewportRangesStyles, style];
      return /*#__PURE__*/React.createElement(StyledMarger, _extends({
        styles: styles
      }, others));
    }
  }]);

  return Marger;
}(Component);
Marger.propTypes = {
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({
    default: PropTypes.number,
    fromXxs: PropTypes.number,
    fromXs: PropTypes.number,
    fromS: PropTypes.number,
    fromM: PropTypes.number,
    fromL: PropTypes.number,
    fromXl: PropTypes.number
  })]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({
    default: PropTypes.number,
    fromXxs: PropTypes.number,
    fromXs: PropTypes.number,
    fromS: PropTypes.number,
    fromM: PropTypes.number,
    fromL: PropTypes.number,
    fromXl: PropTypes.number
  })])
};
Marger.defaultProps = {
  top: null,
  bottom: null
};
var StyledMarger = styled.div.withConfig({
  displayName: "marger__StyledMarger",
  componentId: "q3lecu-0"
})(["", ""], function (props) {
  return props.styles;
});