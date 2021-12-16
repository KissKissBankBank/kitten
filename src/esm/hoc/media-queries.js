import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
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
export var mediaQueries = function mediaQueries(WrappedComponent, hocProps) {
  if (hocProps === void 0) {
    hocProps = {};
  }

  return /*#__PURE__*/function (_Component) {
    _inheritsLoose(_class2, _Component);

    function _class2(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _this.setExposedMethods = function (wrappedComponentInstance) {
        if (!wrappedComponentInstance) return;
        if (!hocProps.exposedMethods) return;
        hocProps.exposedMethods.forEach(function (method) {
          _this[method] = wrappedComponentInstance[method];
        });
      };

      _this.viewports = {};
      _this.state = Object.keys(hocProps).reduce(function (result, prop) {
        var _extends2;

        return _this.isInvalidProp(prop) ? result : _extends({}, result, (_extends2 = {}, _extends2[prop] = false, _extends2));
      }, {});
      return _this;
    }

    var _proto = _class2.prototype;

    _proto.isInvalidProp = function isInvalidProp(prop) {
      return typeof hocProps[prop] === 'boolean' && !viewPortTable[prop] || !['boolean', 'string'].includes(typeof hocProps[prop]);
    };

    _proto.warnIfHocPropIsDeprecated = function warnIfHocPropIsDeprecated(prop) {
      if (process.env.NODE_ENV === 'development') {
        var deprecatedPropsToNewProps = {
          viewportIsMobile: 'viewportIsXSOrLess',
          viewportIsTabletOrLess: 'viewportIsMOrLess'
        };

        if (Object.keys(deprecatedPropsToNewProps).includes(prop)) {
          console.warn(prop + " is deprecated. Please use " + deprecatedPropsToNewProps[prop] + " instead now.");
        }
      }
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this2 = this;

      var _loop = function _loop(prop) {
        var propValue = hocProps[prop];

        if (_this2.isInvalidProp(prop)) {
          return "break";
        }

        _this2.warnIfHocPropIsDeprecated(prop);

        _this2.viewports[prop] = typeof propValue === 'boolean' ? createMatchMediaMax(viewPortTable[prop]) : createMatchMedia(propValue);

        _this2.viewports[prop].cb = function (event) {
          var _this2$setState;

          return _this2.setState((_this2$setState = {}, _this2$setState[prop] = event.matches, _this2$setState));
        };

        _this2.viewports[prop].addListener(_this2.viewports[prop].cb);

        _this2.viewports[prop].cb(_this2.viewports[prop]);
      };

      for (var prop in hocProps) {
        var _ret = _loop(prop);

        if (_ret === "break") break;
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      var _this3 = this;

      Object.keys(this.viewports).forEach(function (prop) {
        return _this3.viewports[prop].removeListener(_this3.viewports[prop].cb);
      });
    };

    _proto.render = function render() {
      return /*#__PURE__*/React.createElement(WrappedComponent, _extends({
        ref: this.setExposedMethods
      }, this.props, this.state));
    };

    return _class2;
  }(Component);
};