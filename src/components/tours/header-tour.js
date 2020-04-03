"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderTour = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _tour = require("../../components/tours/tour");

var _mixIllustration = require("../../components/illustrations/mix-illustration");

var _loudspeakerIllustration = require("../../components/illustrations/loudspeaker-illustration");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var HeaderTour = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(HeaderTour, _React$Component);

  var _super = _createSuper(HeaderTour);

  function HeaderTour(props) {
    (0, _classCallCheck2.default)(this, HeaderTour);
    return _super.call(this, props);
  } // Component methods.


  (0, _createClass2.default)(HeaderTour, [{
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
      return (0, _extends2.default)({}, content, {}, illustration);
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
      return (0, _extends2.default)({}, content, {}, illustration);
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
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["platformSwitchStep", "crowdStep"]);
      return _react.default.createElement(_tour.Tour, (0, _extends2.default)({
        className: "k-HeaderTour",
        steps: this.steps()
      }, otherProps));
    }
  }]);
  return HeaderTour;
}(_react.default.Component);

exports.HeaderTour = HeaderTour;
HeaderTour.defaultProps = {
  storeName: 'kitten.HeaderTour'
}; // DEPRECATED: do not use default export.

var _default = HeaderTour;
exports.default = _default;