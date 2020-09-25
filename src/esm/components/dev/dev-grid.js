import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react'; // Grid over all elements that is toggled when calling ctrl+g.

export var DevGrid = /*#__PURE__*/function (_React$Component) {
  _inherits(DevGrid, _React$Component);

  var _super = _createSuper(DevGrid);

  function DevGrid(props) {
    var _this;

    _classCallCheck(this, DevGrid);

    _this = _super.call(this, props);
    _this.state = {
      visible: !!props.visible
    };
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DevGrid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
      if (window.sessionStorage.getItem(this.props.storageKey)) this.setState({
        visible: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      var char = String.fromCharCode(e.keyCode).toLowerCase();
      if (!e.ctrlKey || char != 'g') return;
      if (this.state.visible) this.hide();else this.show();
    }
  }, {
    key: "show",
    value: function show() {
      window.sessionStorage.setItem(this.props.storageKey, 'on');
      this.setState({
        visible: true
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      window.sessionStorage.removeItem(this.props.storageKey);
      this.setState({
        visible: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var style = this.state.visible ? null : {
        display: 'none'
      };
      return /*#__PURE__*/React.createElement("div", {
        style: style
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevBreakpoint"
      }), /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__inner"
      })), /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__inner"
      })), /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__inner"
      })), /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__inner"
      })), /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__inner"
      })), /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__inner"
      })), /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__inner"
      })), /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__inner"
      })), /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__inner"
      })), /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__inner"
      })), /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__inner"
      })), /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-DevGrid__inner"
      }))))));
    }
  }]);

  return DevGrid;
}(React.Component);
DevGrid.defaultProps = {
  storageKey: 'k-devgrid'
};