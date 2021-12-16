import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../../components/atoms/typography/text';

var State = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(State, _PureComponent);

  function State() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = State.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        state = _this$props.state,
        widgetState = _this$props.widgetState;
    return /*#__PURE__*/React.createElement(React.Fragment, null, state && this.renderState(), widgetState && this.renderWidgetState());
  };

  _proto.renderState = function renderState() {
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
  };

  _proto.renderWidgetState = function renderWidgetState() {
    var _this$props3 = this.props,
        widgetState = _this$props3.widgetState,
        loading = _this$props3.loading;
    return /*#__PURE__*/React.createElement(React.Fragment, null, !loading && /*#__PURE__*/React.createElement("div", {
      className: "k-CrowdfundingCard__widgetState"
    }, widgetState));
  };

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