import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import classNames from 'classnames';
import bowser from 'bowser';
import { SideGrid, SideGridContent, SideGridAside } from '../../../components/grid/side-grid';
import { Grid, GridCol } from '../../../components/grid/grid';
export var SideLayout = /*#__PURE__*/function (_React$Component) {
  _inherits(SideLayout, _React$Component);

  var _super = _createSuper(SideLayout);

  function SideLayout(props) {
    var _this;

    _classCallCheck(this, SideLayout);

    _this = _super.call(this, props);
    _this.state = {
      needsFullHeight: false
    };
    return _this;
  }

  _createClass(SideLayout, [{
    key: "needsFullHeight",
    value: function needsFullHeight() {
      return !!bowser.safari;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        needsFullHeight: this.needsFullHeight()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var hasFluidLayout = (className || '').search('k-VerticalGrid__fluid') != -1;
      var hasFullHeightLayout = hasFluidLayout && this.state.needsFullHeight;
      var sideLayoutClassName = classNames(className, {
        'k-VerticalGrid__fullHeight': hasFullHeightLayout
      });
      return /*#__PURE__*/React.createElement(SideGrid, {
        className: sideLayoutClassName,
        containerClassName: "k-VerticalGrid__container",
        rowClassName: "k-VerticalGrid__element"
      }, /*#__PURE__*/React.createElement(SideGridContent, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(GridCol, {
        "col-s": "12"
      }, this.props.children))), /*#__PURE__*/React.createElement(SideGridAside, {
        className: "k-VerticalGrid__element"
      }, this.props.sidebar));
    }
  }]);

  return SideLayout;
}(React.Component);
SideLayout.defaultProps = {
  children: 'Children',
  // sidebar: renderOfWhatYouWant() // Content for aside grid
  // E.g: see assets/javascripts/../../karl/layout/side-layout.js
  sidebar: null
};