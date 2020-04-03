"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevGrid = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Grid over all elements that is toggled when calling ctrl+g.
var DevGrid = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DevGrid, _React$Component);

  var _super = _createSuper(DevGrid);

  function DevGrid(props) {
    var _this;

    (0, _classCallCheck2.default)(this, DevGrid);
    _this = _super.call(this, props);
    _this.state = {
      visible: !!props.visible
    };
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(DevGrid, [{
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
      return _react.default.createElement("div", {
        style: style
      }, _react.default.createElement("div", {
        className: "k-DevBreakpoint"
      }), _react.default.createElement("div", {
        className: "k-DevGrid"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__container"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__row"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__col"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__inner"
      })), _react.default.createElement("div", {
        className: "k-DevGrid__col"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__inner"
      })), _react.default.createElement("div", {
        className: "k-DevGrid__col"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__inner"
      })), _react.default.createElement("div", {
        className: "k-DevGrid__col"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__inner"
      })), _react.default.createElement("div", {
        className: "k-DevGrid__col"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__inner"
      })), _react.default.createElement("div", {
        className: "k-DevGrid__col"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__inner"
      })), _react.default.createElement("div", {
        className: "k-DevGrid__col"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__inner"
      })), _react.default.createElement("div", {
        className: "k-DevGrid__col"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__inner"
      })), _react.default.createElement("div", {
        className: "k-DevGrid__col"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__inner"
      })), _react.default.createElement("div", {
        className: "k-DevGrid__col"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__inner"
      })), _react.default.createElement("div", {
        className: "k-DevGrid__col"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__inner"
      })), _react.default.createElement("div", {
        className: "k-DevGrid__col"
      }, _react.default.createElement("div", {
        className: "k-DevGrid__inner"
      }))))));
    }
  }]);
  return DevGrid;
}(_react.default.Component);

exports.DevGrid = DevGrid;
DevGrid.defaultProps = {
  storageKey: 'k-devgrid'
};