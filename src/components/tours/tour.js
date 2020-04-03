"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tour = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _elementHelper = require("../../helpers/dom/element-helper");

var _tourStep = require("../../components/tours/tour-step");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Tour = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Tour, _Component);

  var _super = _createSuper(Tour);

  function Tour(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Tour);
    _this = _super.call(this, props);
    _this.state = {
      play: false,
      visible: false,
      currentIndex: 0,
      currentStep: _this.props.steps[0]
    };
    _this.handleClickOnNext = _this.handleClickOnNext.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleClickOnPrev = _this.handleClickOnPrev.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleClickOnClose = _this.handleClickOnClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleTargetHighlightPosition = _this.handleTargetHighlightPosition.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  } // Component lifecycle.


  (0, _createClass2.default)(Tour, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.shouldStart()) {
        this.start();
      }
    } // Component listener callbacks.

  }, {
    key: "handleTargetHighlightPosition",
    value: function handleTargetHighlightPosition(step) {
      this.setState({
        visible: true
      });
    }
  }, {
    key: "handleClickOnNext",
    value: function handleClickOnNext() {
      var newIndex = this.state.currentIndex + 1;
      this.toggleStep(newIndex);
      this.dispatchEvent('k:tour:next');
    }
  }, {
    key: "handleClickOnPrev",
    value: function handleClickOnPrev() {
      var newIndex = this.state.currentIndex - 1;
      this.toggleStep(newIndex);
      this.dispatchEvent('k:tour:prev');
    }
  }, {
    key: "handleClickOnClose",
    value: function handleClickOnClose() {
      this.stop();
      this.dispatchEvent('k:tour:close');
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(eventLabel) {
      var event = document.createEvent('Event');
      event.initEvent(eventLabel, true, true);
      window.dispatchEvent(event);
    } // Component methods.

  }, {
    key: "start",
    value: function start() {
      this.setState({
        play: true
      });
      var tourState = JSON.stringify({
        hasPlayed: true
      });

      if (this.props.useStore) {
        localStorage.setItem(this.props.storeName, tourState);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.setState({
        play: false
      });
    }
  }, {
    key: "toggleStep",
    value: function toggleStep(newIndex) {
      this.setState({
        currentIndex: newIndex,
        currentStep: this.props.steps[newIndex]
      });
    }
  }, {
    key: "getProgress",
    value: function getProgress() {
      var currentStep = this.state.currentIndex + 1;
      var totalSteps = this.props.steps.length;
      return "".concat(currentStep, " ").concat(this.props.pagingLabel, " ").concat(totalSteps);
    }
  }, {
    key: "isNextButtonActive",
    value: function isNextButtonActive() {
      var currentStep = this.state.currentIndex + 1;
      return currentStep != this.props.steps.length;
    }
  }, {
    key: "isPrevButtonActive",
    value: function isPrevButtonActive() {
      return this.state.currentIndex != 0;
    }
  }, {
    key: "shouldStart",
    value: function shouldStart() {
      if (!_elementHelper.domElementHelper.canUseDom()) {
        return false;
      } // TODO: better implementation of localStorage as state store for React
      // component.


      var tourState = JSON.parse(localStorage.getItem(this.props.storeName));
      return !(tourState && tourState.hasPlayed);
    }
  }, {
    key: "getButtonsList",
    value: function getButtonsList() {
      return {
        next: {
          active: this.isNextButtonActive(),
          label: this.props.nextButtonLabel,
          title: this.props.nextButtonTitle
        },
        prev: {
          active: this.isPrevButtonActive(),
          label: this.props.prevButtonLabel,
          title: this.props.prevButtonTitle
        },
        close: {
          active: true,
          label: this.props.closeButtonLabel
        }
      };
    }
  }, {
    key: "renderTourStep",
    value: function renderTourStep() {
      if (!this.state.play) return;
      return _react.default.createElement(_tourStep.TourStep, {
        onNextClick: this.handleClickOnNext,
        onPrevClick: this.handleClickOnPrev,
        onCloseClick: this.handleClickOnClose,
        name: this.state.currentStep.name,
        title: this.state.currentStep.title,
        content: this.state.currentStep.content,
        targetElement: this.state.currentStep.targetElement,
        popoverPosition: this.state.currentStep.popoverPosition,
        illustration: this.state.currentStep.illustration,
        buttons: this.getButtonsList(),
        onTargetHighlightPosition: this.handleTargetHighlightPosition,
        progress: this.getProgress()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var tourClassName = (0, _classnames.default)('k-Tour', {
        'is-hidden': !this.state.visible
      }, this.props.className);
      return _react.default.createElement("div", {
        className: tourClassName
      }, this.renderTourStep());
    }
  }]);
  return Tour;
}(_react.Component);

exports.Tour = Tour;
Tour.defaultProps = {
  nextButtonLabel: 'Next',
  nextButtonTitle: 'Next',
  prevButtonLabel: 'Prev',
  prevButtonTitle: 'Previous',
  closeButtonLabel: 'Close',
  pagingLabel: 'on',
  storeName: 'kitten.Tour',
  useStore: true
}; // DEPRECATED: do not use default export.

var _default = Tour;
exports.default = _default;