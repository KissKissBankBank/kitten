import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { Tour } from '../../../components/tours/tour'; // We directly use svg-react loader for the moment.
// TODO: update webpack config to manage svg in jsx files.

import { MixIllustration } from '../../../components/illustrations/mix-illustration';
import { LoudspeakerIllustration } from '../../../components/illustrations/loudspeaker-illustration';
export var HeaderTour = /*#__PURE__*/function (_React$Component) {
  _inherits(HeaderTour, _React$Component);

  var _super = _createSuper(HeaderTour);

  function HeaderTour(props) {
    _classCallCheck(this, HeaderTour);

    return _super.call(this, props);
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
        illustration: /*#__PURE__*/React.createElement(MixIllustration, {
          className: "k-Tour__popover__svg--primary"
        })
      };
      return _extends({}, content, illustration);
    }
  }, {
    key: "crowdStep",
    value: function crowdStep() {
      var content = this.props.crowdStep;
      var illustration = {
        illustration: /*#__PURE__*/React.createElement(LoudspeakerIllustration, {
          className: "k-Tour__popover__svg--primary"
        })
      };
      return _extends({}, content, illustration);
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

      return /*#__PURE__*/React.createElement(Tour, _extends({
        className: "k-HeaderTour",
        steps: this.steps()
      }, otherProps));
    }
  }]);

  return HeaderTour;
}(React.Component);
HeaderTour.defaultProps = {
  storeName: 'kitten.HeaderTour'
}; // DEPRECATED: do not use default export.

export default HeaderTour;