import _typeof from "@babel/runtime/helpers/esm/typeof";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import { createMatchMediaMax, createMatchMedia } from '../helpers/utils/media-queries';
import { SCREEN_SIZE_XXS, SCREEN_SIZE_XS, SCREEN_SIZE_S, SCREEN_SIZE_M, SCREEN_SIZE_L } from '../constants/screen-config';
var viewPortTable = {
  viewportIsMobile: SCREEN_SIZE_XS,
  viewportIsTabletOrLess: SCREEN_SIZE_M,
  viewportIsXXS: SCREEN_SIZE_XXS,
  viewportIsXSOrLess: SCREEN_SIZE_XS,
  viewportIsSOrLess: SCREEN_SIZE_S,
  viewportIsMOrLess: SCREEN_SIZE_M,
  viewportIsLOrLess: SCREEN_SIZE_L
};
export var withMediaQueries = function withMediaQueries(hocProps) {
  return function (WrapperComponent) {
    return mediaQueries(WrapperComponent, hocProps);
  };
};
export var mediaQueries = function mediaQueries(WrappedComponent) {
  var _temp;

  var hocProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _temp = /*#__PURE__*/function (_Component) {
    _inherits(_temp, _Component);

    var _super = _createSuper(_temp);

    function _temp(props) {
      var _this;

      _classCallCheck(this, _temp);

      _this = _super.call(this, props);

      _this.setExposedMethods = function (wrappedComponentInstance) {
        if (!wrappedComponentInstance) return;
        if (!hocProps.exposedMethods) return;
        hocProps.exposedMethods.forEach(function (method) {
          _this[method] = wrappedComponentInstance[method];
        });
      };

      _this.viewports = {};
      _this.state = Object.keys(hocProps).reduce(function (result, prop) {
        return _this.isInvalidProp(prop) ? result : _extends({}, result, _defineProperty({}, prop, false));
      }, {});
      return _this;
    }

    _createClass(_temp, [{
      key: "isInvalidProp",
      value: function isInvalidProp(prop) {
        return typeof hocProps[prop] === 'boolean' && !viewPortTable[prop] || !['boolean', 'string'].includes(_typeof(hocProps[prop]));
      }
    }, {
      key: "warnIfHocPropIsDeprecated",
      value: function warnIfHocPropIsDeprecated(prop) {
        if (process.env.NODE_ENV === 'development') {
          var deprecatedPropsToNewProps = {
            viewportIsMobile: 'viewportIsXSOrLess',
            viewportIsTabletOrLess: 'viewportIsMOrLess'
          };

          if (Object.keys(deprecatedPropsToNewProps).includes(prop)) {
            console.warn("".concat(prop, " is deprecated. Please use ").concat(deprecatedPropsToNewProps[prop], " instead now."));
          }
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var _loop = function _loop(prop) {
          var propValue = hocProps[prop];

          if (_this2.isInvalidProp(prop)) {
            return "break";
          }

          _this2.warnIfHocPropIsDeprecated(prop);

          _this2.viewports[prop] = typeof propValue === 'boolean' ? createMatchMediaMax(viewPortTable[prop]) : createMatchMedia(propValue);

          _this2.viewports[prop].cb = function (event) {
            return _this2.setState(_defineProperty({}, prop, event.matches));
          };

          _this2.viewports[prop].addListener(_this2.viewports[prop].cb);

          _this2.viewports[prop].cb(_this2.viewports[prop]);
        };

        for (var prop in hocProps) {
          var _ret = _loop(prop);

          if (_ret === "break") break;
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this3 = this;

        Object.keys(this.viewports).forEach(function (prop) {
          return _this3.viewports[prop].removeListener(_this3.viewports[prop].cb);
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(WrappedComponent, _extends({
          ref: this.setExposedMethods
        }, this.props, this.state));
      }
    }]);

    return _temp;
  }(Component), _temp;
};