"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mediaQueries = exports.withMediaQueries = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _mediaQueries = require("../helpers/utils/media-queries");

var _screenConfig = require("../constants/screen-config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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

var mediaQueries = function mediaQueries(WrappedComponent) {
  var hocProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function (_Component) {
    (0, _inherits2.default)(_class2, _Component);

    var _super = _createSuper(_class2);

    function _class2(props) {
      var _this;

      (0, _classCallCheck2.default)(this, _class2);
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
        return _this.isInvalidProp(prop) ? result : (0, _extends3.default)({}, result, (0, _defineProperty2.default)({}, prop, false));
      }, {});
      return _this;
    }

    (0, _createClass2.default)(_class2, [{
      key: "isInvalidProp",
      value: function isInvalidProp(prop) {
        return typeof hocProps[prop] === 'boolean' && !viewPortTable[prop] || !['boolean', 'string'].includes((0, _typeof2.default)(hocProps[prop]));
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

          _this2.viewports[prop] = typeof propValue === 'boolean' ? (0, _mediaQueries.createMatchMediaMax)(viewPortTable[prop]) : (0, _mediaQueries.createMatchMedia)(propValue);

          _this2.viewports[prop].cb = function (event) {
            return _this2.setState((0, _defineProperty2.default)({}, prop, event.matches));
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
        return /*#__PURE__*/_react.default.createElement(WrappedComponent, (0, _extends3.default)({
          ref: this.setExposedMethods
        }, this.props, this.state));
      }
    }]);
    return _class2;
  }(_react.Component);
};

exports.mediaQueries = mediaQueries;