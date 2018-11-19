"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tour = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _elementHelper = require("kitten/helpers/dom/element-helper");

var _tourStep = require("kitten/components/tours/tour-step");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Tour =
/*#__PURE__*/
function (_Component) {
  _inherits(Tour, _Component);

  function Tour(props) {
    var _this;

    _classCallCheck(this, Tour);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tour).call(this, props));
    _this.state = {
      play: false,
      visible: false,
      currentIndex: 0,
      currentStep: _this.props.steps[0]
    };
    _this.handleClickOnNext = _this.handleClickOnNext.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClickOnPrev = _this.handleClickOnPrev.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClickOnClose = _this.handleClickOnClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleTargetHighlightPosition = _this.handleTargetHighlightPosition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } // Component lifecycle.


  _createClass(Tour, [{
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
  useStore: true // DEPRECATED: do not use default export.

};
var _default = Tour;
exports.default = _default;