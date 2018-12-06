"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marger = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _screenConfig = require("../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../constants/typography-config"));

var _isStringANumber = _interopRequireDefault(require("is-string-a-number"));

var _string = require("../../helpers/utils/string");

var margerWrapper = function margerWrapper(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      (0, _inherits2.default)(_class2, _Component);

      function _class2() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, _class2);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(_class2)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _this.needsStyleRoot = function () {
          var _this$props = _this.props,
              top = _this$props.top,
              bottom = _this$props.bottom;
          var isTopAnObject = top && (0, _typeof2.default)(top) === 'object';
          var isBottomAnObject = bottom && (0, _typeof2.default)(bottom) === 'object';
          return isTopAnObject || isBottomAnObject;
        };

        return _this;
      }

      (0, _createClass2.default)(_class2, [{
        key: "render",
        value: function render() {
          if (!this.needsStyleRoot()) return _react.default.createElement(WrappedComponent, this.props);
          return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(WrappedComponent, this.props));
        }
      }]);
      return _class2;
    }(_react.Component)
  );
};

var MargerBaseWithoutStyleRoot =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2.default)(MargerBaseWithoutStyleRoot, _Component2);

  function MargerBaseWithoutStyleRoot(props) {
    var _this2;

    (0, _classCallCheck2.default)(this, MargerBaseWithoutStyleRoot);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(MargerBaseWithoutStyleRoot).call(this, props)); // Use 10px as gutter base and transform it to have a rem unit.

    _this2.marginSize = function (value) {
      return "".concat(value * _this2.gutter, "rem");
    };

    _this2.valueIsNumber = function (value) {
      // Retro-compatibility: this handles the case when the user enters `.5` as a
      // value for a margin.
      if (typeof value === 'string' && value.match(/^-?\.\d+$/)) {
        return true;
      }

      return (0, _isStringANumber.default)(String(value));
    };

    _this2.propIsNumber = function (propName) {
      return _this2.valueIsNumber(_this2.props[propName]);
    };

    _this2.isPropWithViewportRange = function (propName, viewportRange) {
      return _this2.props[propName] && _this2.props[propName]["from".concat((0, _string.upcaseFirst)(viewportRange))];
    };

    _this2.viewportRangeCssRule = function (viewportRange) {
      return "@media (min-width: ".concat(_screenConfig.ScreenConfig[viewportRange.toUpperCase()].min, "px)");
    };

    _this2.propCssDeclarationForViewportRange = function (propName, viewportRange) {
      var size = _this2.props[propName]["from".concat((0, _string.upcaseFirst)(viewportRange))];

      var cssRule = "margin".concat((0, _string.upcaseFirst)(propName));
      return (0, _defineProperty2.default)({}, cssRule, _this2.marginSize(size));
    };

    _this2.viewportRangeStyleCondition = function (propName, viewportRange) {
      var hasValue = _this2.isPropWithViewportRange(propName, viewportRange);

      if (!hasValue) return null;

      var viewportRangeCssRule = _this2.viewportRangeCssRule(viewportRange);

      var viewportRangeCssValue = _this2.propCssDeclarationForViewportRange(propName, viewportRange);

      return (0, _defineProperty2.default)({}, viewportRangeCssRule, viewportRangeCssValue);
    };

    _this2.hasDefaultProp = function (propName) {
      return _this2.props[propName] && _this2.props[propName].default;
    };

    _this2.hasXxsProp = function (propName) {
      return _this2.props[propName] && _this2.props[propName].fromXxs;
    };

    _this2.defaultProp = function (propName) {
      var mediaQueryRule = "@media (min-width: 0)";
      var cssRule = "margin".concat((0, _string.upcaseFirst)(propName));

      if (_this2.hasDefaultProp(propName)) {
        return (0, _defineProperty2.default)({}, mediaQueryRule, (0, _defineProperty2.default)({}, cssRule, _this2.marginSize(_this2.props[propName].default)));
      }

      if (_this2.hasXxsProp(propName)) {
        return (0, _defineProperty2.default)({}, mediaQueryRule, (0, _defineProperty2.default)({}, cssRule, _this2.marginSize(_this2.props[propName].fromXxs)));
      }
    };

    _this2.gutter = 10 / _typographyConfig.default.root;
    return _this2;
  }

  (0, _createClass2.default)(MargerBaseWithoutStyleRoot, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          top = _this$props2.top,
          bottom = _this$props2.bottom,
          style = _this$props2.style,
          others = (0, _objectWithoutProperties2.default)(_this$props2, ["top", "bottom", "style"]);
      var viewportRanges = Object.keys(_screenConfig.ScreenConfig).map(function (size) {
        return size.toLowerCase();
      }).filter(function (size) {
        return size !== 'xxs';
      });
      var viewportRangesStyles = viewportRanges.reduce(function (acc, viewportRange) {
        return (0, _toConsumableArray2.default)(acc).concat([_this3.viewportRangeStyleCondition('top', viewportRange), _this3.viewportRangeStyleCondition('bottom', viewportRange)]);
      }, []);
      var styles = [style, this.propIsNumber('top') && {
        marginTop: this.marginSize(top)
      }, this.propIsNumber('bottom') && {
        marginBottom: this.marginSize(bottom)
      }, this.defaultProp('top'), this.defaultProp('bottom')].concat((0, _toConsumableArray2.default)(viewportRangesStyles));
      return _react.default.createElement("div", (0, _extends2.default)({
        style: styles
      }, others));
    }
  }]);
  return MargerBaseWithoutStyleRoot;
}(_react.Component);

MargerBaseWithoutStyleRoot.propTypes = {
  top: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.shape({
    default: _propTypes.default.number,
    fromXxs: _propTypes.default.number,
    frommXs: _propTypes.default.number,
    fromS: _propTypes.default.number,
    fromM: _propTypes.default.number,
    fromL: _propTypes.default.number,
    fromXl: _propTypes.default.number
  })]),
  bottom: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.shape({
    default: _propTypes.default.number,
    fromXxs: _propTypes.default.number,
    frommXs: _propTypes.default.number,
    fromS: _propTypes.default.number,
    fromM: _propTypes.default.number,
    fromL: _propTypes.default.number,
    fromXl: _propTypes.default.number
  })])
};
MargerBaseWithoutStyleRoot.defaultProps = {
  top: null,
  bottom: null
};
var Marger = margerWrapper((0, _radium.default)(MargerBaseWithoutStyleRoot));
exports.Marger = Marger;