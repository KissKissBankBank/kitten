"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderTour = void 0;

var _react = _interopRequireDefault(require("react"));

var _tour = require("kitten/components/tours/tour");

var _mixIllustration = require("kitten/components/illustrations/mix-illustration");

var _loudspeakerIllustration = require("kitten/components/illustrations/loudspeaker-illustration");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HeaderTour =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderTour, _React$Component);

  function HeaderTour(props) {
    _classCallCheck(this, HeaderTour);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderTour).call(this, props));
  } // Component methods.


  _createClass(HeaderTour, [{
    key: "isCrowdStep",
    value: function isCrowdStep(step) {
      return step.name == 'crowdStep';
    }
  }, {
    key: "platformSwitchStep",
    value: function platformSwitchStep() {
      var content = this.props.platformSwitchStep;
      var illustration = {
        illustration: _react.default.createElement(_mixIllustration.MixIllustration, {
          className: "k-Tour__popover__svg--primary"
        })
      };
      return _objectSpread({}, content, illustration);
    }
  }, {
    key: "crowdStep",
    value: function crowdStep() {
      var content = this.props.crowdStep;
      var illustration = {
        illustration: _react.default.createElement(_loudspeakerIllustration.LoudspeakerIllustration, {
          className: "k-Tour__popover__svg--primary"
        })
      };
      return _objectSpread({}, content, illustration);
    }
  }, {
    key: "steps",
    value: function steps() {
      return [this.platformSwitchStep(), this.crowdStep()];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          platformSwitchStep = _this$props.platformSwitchStep,
          crowdStep = _this$props.crowdStep,
          otherProps = _objectWithoutProperties(_this$props, ["platformSwitchStep", "crowdStep"]);

      return _react.default.createElement(_tour.Tour, _extends({
        className: "k-HeaderTour",
        steps: this.steps()
      }, otherProps));
    }
  }]);

  return HeaderTour;
}(_react.default.Component);

exports.HeaderTour = HeaderTour;
HeaderTour.defaultProps = {
  storeName: 'kitten.HeaderTour' // DEPRECATED: do not use default export.

};
var _default = HeaderTour;
exports.default = _default;