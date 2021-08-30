import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
export var CLOSE_OVERLAY_EVENT = 'overlay-close';
export var OPEN_OVERLAY_EVENT = 'overlay-open';
var StyledOverlay = styled.div.withConfig({
  displayName: "overlay__StyledOverlay",
  componentId: "sc-1wmk8kg-0"
})(["left:0;top:0;right:100%;bottom:100%;z-index:", ";visibility:hidden;opacity:0;background:rgba(0,0,0,0.4);transition:visibility 0s ease,opacity 0.2s ease,bottom 0s,right 0s;transition-delay:0.2s,0s,0.2s,0.2s;&.k-Overlay--absolute{position:absolute;}&.k-Overlay--fixed{position:fixed;}&.k-Overlay--isActive{right:0;bottom:0;visibility:visible;opacity:1;transition-delay:0s,0s,0s,0s;}"], function (_ref) {
  var zIndex = _ref.zIndex;
  return zIndex;
});
export var Overlay = /*#__PURE__*/function (_Component) {
  _inherits(Overlay, _Component);

  var _super = _createSuper(Overlay);

  function Overlay(props) {
    var _this;

    _classCallCheck(this, Overlay);

    _this = _super.call(this, props);

    _this.toggleActiveState = function () {
      return _this.setState({
        isActive: !_this.state.isActive
      });
    };

    _this.disableActiveState = function () {
      return _this.setState({
        isActive: false
      });
    };

    _this.enableActiveState = function () {
      return _this.setState({
        isActive: true
      });
    };

    _this.state = {
      isActive: props.isActive
    };
    return _this;
  }

  _createClass(Overlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.toggleEvent && window.addEventListener(this.props.toggleEvent, this.toggleActiveState);
      this.props.closeEvent && window.addEventListener(this.props.closeEvent, this.disableActiveState);
      this.props.openEvent && window.addEventListener(this.props.openEvent, this.enableActiveState);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.toggleEvent && window.removeEventListener(this.props.toggleEvent, this.toggleActiveState);
      this.props.closeEvent && window.removeEventListener(this.props.closeEvent, this.disableActiveState);
      this.props.openEvent && window.removeEventListener(this.props.openEvent, this.enableActiveState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          zIndex = _this$props.zIndex,
          position = _this$props.position,
          other = _objectWithoutProperties(_this$props, ["className", "zIndex", "position"]);

      var isActive = this.state.isActive;
      return /*#__PURE__*/React.createElement(StyledOverlay, _extends({
        zIndex: zIndex,
        className: classNames(className, 'k-Overlay', "k-Overlay--".concat(position), {
          'k-Overlay--isActive': isActive
        })
      }, other));
    }
  }]);

  return Overlay;
}(Component);
Overlay.propTypes = {
  zIndex: PropTypes.number,
  isActive: PropTypes.bool,
  toggleEvent: PropTypes.string,
  closeEvent: PropTypes.string,
  openEvent: PropTypes.string,
  position: PropTypes.oneOf(['absolute', 'fixed'])
};
Overlay.defaultProps = {
  zIndex: 100,
  isActive: false,
  toggleEvent: '',
  closeEvent: CLOSE_OVERLAY_EVENT,
  openEvent: OPEN_OVERLAY_EVENT,
  position: 'absolute'
};