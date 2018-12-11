"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marger = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _screenConfig = require("../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../constants/typography-config"));

var _isStringANumber = _interopRequireDefault(require("is-string-a-number"));

var _string = require("../../helpers/utils/string");

var Marger =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Marger, _Component);

  function Marger(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Marger);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Marger).call(this, props)); // Use 10px as gutter base and transform it to have a rem unit.

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

    _this.isPropWithViewportRange = function (propName, viewportRange) {
      return _this.props[propName] && _this.props[propName]["from".concat((0, _string.upcaseFirst)(viewportRange))];
    };

    _this.viewportRangeCssRule = function (viewportRange) {
      return "@media (min-width: ".concat(_screenConfig.ScreenConfig[viewportRange.toUpperCase()].min, "px)");
    };

    _this.propCssDeclarationForViewportRange = function (propName, viewportRange) {
      var size = _this.props[propName]["from".concat((0, _string.upcaseFirst)(viewportRange))];

      return "margin-".concat(propName, ": ").concat(_this.marginSize(size), ";");
    };

    _this.viewportRangeStyleCondition = function (propName, viewportRange) {
      var hasValue = _this.isPropWithViewportRange(propName, viewportRange);

      if (!hasValue) return null;

      var viewportRangeCssRule = _this.viewportRangeCssRule(viewportRange);

      var viewportRangeCssValue = _this.propCssDeclarationForViewportRange(propName, viewportRange);

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
        return (0, _toConsumableArray2.default)(acc).concat([_this2.viewportRangeStyleCondition('top', viewportRange), _this2.viewportRangeStyleCondition('bottom', viewportRange)]);
      }, []);

      var StyledMarger = _styledComponents.default.div.withConfig({
        displayName: "marger__StyledMarger",
        componentId: "q3lecu-0"
      })(["", " ", " ", " ", ""], this.stylesForName('top'), this.stylesForName('bottom'), viewportRangesStyles, style);

      return _react.default.createElement(StyledMarger, others);
    }
  }]);
  return Marger;
}(_react.Component);

exports.Marger = Marger;
Marger.propTypes = {
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
Marger.defaultProps = {
  top: null,
  bottom: null
};