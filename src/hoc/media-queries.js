"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mediaQueries = exports.withMediaQueries = void 0;

var _react = _interopRequireWildcard(require("react"));

var _mediaQueries = require("kitten/helpers/utils/media-queries");

var _screenConfig = require("kitten/constants/screen-config");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var viewPortTable = {
  viewportIsMobile: _screenConfig.SCREEN_SIZE_XS,
  viewportIsSOrLess: _screenConfig.SCREEN_SIZE_S,
  viewportIsTabletOrLess: _screenConfig.SCREEN_SIZE_M,
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
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(_class2, _Component);

      function _class2(props) {
        var _this;

        _classCallCheck(this, _class2);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this, props));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setExposedMethods", function (wrappedComponentInstance) {
          if (!wrappedComponentInstance) return;
          if (!hocProps.exposedMethods) return;
          hocProps.exposedMethods.forEach(function (method) {
            _this[method] = wrappedComponentInstance[method];
          });
        });

        _this.viewports = {};
        _this.state = Object.keys(hocProps).reduce(function (result, prop) {
          return _this.isInvalidProp(prop) ? result : _objectSpread({}, result, _defineProperty({}, prop, false));
        }, {});
        return _this;
      }

      _createClass(_class2, [{
        key: "isInvalidProp",
        value: function isInvalidProp(prop) {
          return typeof hocProps[prop] === 'boolean' && !viewPortTable[prop] || !['boolean', 'string'].includes(_typeof(hocProps[prop]));
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

            _this2.viewports[prop] = typeof propValue === 'boolean' ? (0, _mediaQueries.createMatchMediaMax)(viewPortTable[prop]) : (0, _mediaQueries.createMatchMedia)(propValue);

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
          return _react.default.createElement(WrappedComponent, _extends({
            ref: this.setExposedMethods
          }, this.props, this.state));
        }
      }]);

      return _class2;
    }(_react.Component)
  );
};

exports.mediaQueries = mediaQueries;