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

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _screenConfig = require("../../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _isStringANumber = _interopRequireDefault(require("is-string-a-number"));

var _string = require("../../../helpers/utils/string");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Marger = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Marger, _Component);

  var _super = _createSuper(Marger);

  function Marger(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Marger);
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

      return (0, _isStringANumber.default)(String(value));
    };

    _this.propIsNumber = function (propName) {
      return _this.valueIsNumber(_this.props[propName]);
    };

    _this.isSetValue = function (value) {
      return value || value === 0;
    };

    _this.isPropWithViewportRange = function (propName, viewportRange) {
      return _this.props[propName] && _this.props[propName]["from".concat((0, _string.upcaseFirst)(viewportRange))];
    };

    _this.viewportRangeCssRule = function (viewportRange) {
      return "@media (min-width: ".concat(_screenConfig.ScreenConfig[viewportRange.toUpperCase()].min, "px)");
    };

    _this.propCssDeclarationForViewportRange = function (propName, viewportRange) {
      var size = _this.props[propName]["from".concat((0, _string.upcaseFirst)(viewportRange))];

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

    _this.gutter = 10 / _typographyConfig.default.root;
    return _this;
  }

  (0, _createClass2.default)(Marger, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          top = _this$props.top,
          bottom = _this$props.bottom,
          style = _this$props.style,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["top", "bottom", "style"]);
      var viewportRanges = Object.keys(_screenConfig.ScreenConfig).map(function (size) {
        return size.toLowerCase();
      }).filter(function (size) {
        return size !== 'xxs';
      });
      var viewportRangesStyles = viewportRanges.reduce(function (acc, viewportRange) {
        return [].concat((0, _toConsumableArray2.default)(acc), [_this2.viewportRangeStyleCondition('top', viewportRange), _this2.viewportRangeStyleCondition('bottom', viewportRange)]);
      }, []);
      var styles = [this.stylesForName('top'), this.stylesForName('bottom'), viewportRangesStyles, style];
      return /*#__PURE__*/_react.default.createElement(StyledMarger, (0, _extends2.default)({
        styles: styles
      }, others));
    }
  }]);
  return Marger;
}(_react.Component);

exports.Marger = Marger;
Marger.propTypes = {
  top: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.shape({
    default: _propTypes.default.number,
    fromXxs: _propTypes.default.number,
    fromXs: _propTypes.default.number,
    fromS: _propTypes.default.number,
    fromM: _propTypes.default.number,
    fromL: _propTypes.default.number,
    fromXl: _propTypes.default.number
  })]),
  bottom: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.shape({
    default: _propTypes.default.number,
    fromXxs: _propTypes.default.number,
    fromXs: _propTypes.default.number,
    fromS: _propTypes.default.number,
    fromM: _propTypes.default.number,
    fromL: _propTypes.default.number,
    fromXl: _propTypes.default.number
  })])
};
Marger.defaultProps = {
  top: null,
  bottom: null
};

var StyledMarger = _styledComponents.default.div.withConfig({
  displayName: "marger__StyledMarger",
  componentId: "sc-1qqifp5-0"
})(["", ""], function (props) {
  return props.styles;
});