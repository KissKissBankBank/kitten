"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.mediaQueries = exports.withMediaQueries = void 0;

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _mediaQueries = require("../helpers/utils/media-queries");

var _screenConfig = require("../constants/screen-config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var viewPortTable = {
  viewportIsMobile: _screenConfig.SCREEN_SIZE_XS,
  viewportIsTabletOrLess: _screenConfig.SCREEN_SIZE_M,
  viewportIsXXS: _screenConfig.SCREEN_SIZE_XXS,
  viewportIsXSOrLess: _screenConfig.SCREEN_SIZE_XS,
  viewportIsSOrLess: _screenConfig.SCREEN_SIZE_S,
  viewportIsMOrLess: _screenConfig.SCREEN_SIZE_M,
  viewportIsLOrLess: _screenConfig.SCREEN_SIZE_L
};

var withMediaQueries = function withMediaQueries(hocProps) {
  return function (WrapperComponent) {
    return mediaQueries(WrapperComponent, hocProps);
  };
};

exports.withMediaQueries = withMediaQueries;

var mediaQueries = function mediaQueries(WrappedComponent, hocProps) {
  if (hocProps === void 0) {
    hocProps = {};
  }

  return /*#__PURE__*/function (_Component) {
    (0, _inheritsLoose2.default)(_class2, _Component);

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
        var _Object$assign;

        return _this.isInvalidProp(prop) ? result : Object.assign({}, result, (_Object$assign = {}, _Object$assign[prop] = false, _Object$assign));
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

        _this2.viewports[prop] = typeof propValue === 'boolean' ? (0, _mediaQueries.createMatchMediaMax)(viewPortTable[prop]) : (0, _mediaQueries.createMatchMedia)(propValue);

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
      return /*#__PURE__*/_react.default.createElement(WrappedComponent, (0, _extends2.default)({
        ref: this.setExposedMethods
      }, this.props, this.state));
    };

    return _class2;
  }(_react.Component);
};

exports.mediaQueries = mediaQueries;