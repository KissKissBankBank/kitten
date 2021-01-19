import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../components/typography/text';

var State = /*#__PURE__*/function (_PureComponent) {
  _inherits(State, _PureComponent);

  var _super = _createSuper(State);

  function State() {
    _classCallCheck(this, State);

    return _super.apply(this, arguments);
  }

  _createClass(State, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          state = _this$props.state,
          widgetState = _this$props.widgetState;
      return /*#__PURE__*/React.createElement(React.Fragment, null, state && this.renderState(), widgetState && this.renderWidgetState());
    }
  }, {
    key: "renderState",
    value: function renderState() {
      var _this$props2 = this.props,
          state = _this$props2.state,
          loading = _this$props2.loading;
      return /*#__PURE__*/React.createElement(React.Fragment, null, !loading && /*#__PURE__*/React.createElement("div", {
        className: "k-CrowdfundingCard__state"
      }, /*#__PURE__*/React.createElement(Text, {
        size: "micro",
        lineHeight: "normal",
        weight: "regular",
        color: "font1"
      }, state)));
    }
  }, {
    key: "renderWidgetState",
    value: function renderWidgetState() {
      var _this$props3 = this.props,
          widgetState = _this$props3.widgetState,
          loading = _this$props3.loading;
      return /*#__PURE__*/React.createElement(React.Fragment, null, !loading && /*#__PURE__*/React.createElement("div", {
        className: "k-CrowdfundingCard__widgetState"
      }, widgetState));
    }
  }]);

  return State;
}(PureComponent);

State.propTypes = {
  state: PropTypes.node,
  widgetState: PropTypes.node,
  loading: PropTypes.bool
};
State.defaultProps = {
  state: '',
  widgetState: '',
  loading: false
};
export default State;