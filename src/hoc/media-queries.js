"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.withMediaQueries = exports.mediaQueries = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _mediaQueries = require("../helpers/utils/media-queries");

var _screenConfig = require("../constants/screen-config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const viewPortTable = {
  viewportIsMobile: _screenConfig.SCREEN_SIZE_XS,
  viewportIsTabletOrLess: _screenConfig.SCREEN_SIZE_M,
  viewportIsXXS: _screenConfig.SCREEN_SIZE_XXS,
  viewportIsXSOrLess: _screenConfig.SCREEN_SIZE_XS,
  viewportIsSOrLess: _screenConfig.SCREEN_SIZE_S,
  viewportIsMOrLess: _screenConfig.SCREEN_SIZE_M,
  viewportIsLOrLess: _screenConfig.SCREEN_SIZE_L
};

const withMediaQueries = hocProps => WrapperComponent => mediaQueries(WrapperComponent, hocProps);

exports.withMediaQueries = withMediaQueries;

const mediaQueries = function (WrappedComponent, hocProps) {
  if (hocProps === void 0) {
    hocProps = {};
  }

  return class extends _react.Component {
    constructor(props) {
      super(props);

      this.setExposedMethods = wrappedComponentInstance => {
        if (!wrappedComponentInstance) return;
        if (!hocProps.exposedMethods) return;
        hocProps.exposedMethods.forEach(method => {
          this[method] = wrappedComponentInstance[method];
        });
      };

      this.viewports = {};
      this.state = Object.keys(hocProps).reduce((result, prop) => {
        return this.isInvalidProp(prop) ? result : { ...result,
          [prop]: false
        };
      }, {});
    }

    isInvalidProp(prop) {
      return typeof hocProps[prop] === 'boolean' && !viewPortTable[prop] || !['boolean', 'string'].includes(typeof hocProps[prop]);
    }

    warnIfHocPropIsDeprecated(prop) {
      if (process.env.NODE_ENV === 'development') {
        const deprecatedPropsToNewProps = {
          viewportIsMobile: 'viewportIsXSOrLess',
          viewportIsTabletOrLess: 'viewportIsMOrLess'
        };

        if (Object.keys(deprecatedPropsToNewProps).includes(prop)) {
          console.warn(prop + " is deprecated. Please use " + deprecatedPropsToNewProps[prop] + " instead now.");
        }
      }
    }

    componentDidMount() {
      for (let prop in hocProps) {
        const propValue = hocProps[prop];

        if (this.isInvalidProp(prop)) {
          break;
        }

        this.warnIfHocPropIsDeprecated(prop);
        this.viewports[prop] = typeof propValue === 'boolean' ? (0, _mediaQueries.createMatchMediaMax)(viewPortTable[prop]) : (0, _mediaQueries.createMatchMedia)(propValue);

        this.viewports[prop].cb = event => this.setState({
          [prop]: event.matches
        });

        this.viewports[prop].addListener(this.viewports[prop].cb);
        this.viewports[prop].cb(this.viewports[prop]);
      }
    }

    componentWillUnmount() {
      Object.keys(this.viewports).forEach(prop => this.viewports[prop].removeListener(this.viewports[prop].cb));
    }

    render() {
      return /*#__PURE__*/_react.default.createElement(WrappedComponent, (0, _extends2.default)({
        ref: this.setExposedMethods
      }, this.props, this.state));
    }

  };
};

exports.mediaQueries = mediaQueries;