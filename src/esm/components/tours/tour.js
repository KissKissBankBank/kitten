import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import classNames from 'classnames';
import { domElementHelper } from '../../helpers/dom/element-helper';
import { TourStep } from '../../components/tours/tour-step';
export var Tour = /*#__PURE__*/function (_Component) {
  _inherits(Tour, _Component);

  var _super = _createSuper(Tour);

  function Tour(props) {
    var _this;

    _classCallCheck(this, Tour);

    _this = _super.call(this, props);
    _this.state = {
      play: false,
      visible: false,
      currentIndex: 0,
      currentStep: _this.props.steps[0]
    };
    _this.handleClickOnNext = _this.handleClickOnNext.bind(_assertThisInitialized(_this));
    _this.handleClickOnPrev = _this.handleClickOnPrev.bind(_assertThisInitialized(_this));
    _this.handleClickOnClose = _this.handleClickOnClose.bind(_assertThisInitialized(_this));
    _this.handleTargetHighlightPosition = _this.handleTargetHighlightPosition.bind(_assertThisInitialized(_this));
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
    value: function handleTargetHighlightPosition() {
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
      if (!domElementHelper.canUseDom()) {
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
      return /*#__PURE__*/React.createElement(TourStep, {
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
      var tourClassName = classNames('k-Tour', {
        'is-hidden': !this.state.visible
      }, this.props.className);
      return /*#__PURE__*/React.createElement("div", {
        className: tourClassName
      }, this.renderTourStep());
    }
  }]);

  return Tour;
}(Component);
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

export default Tour;