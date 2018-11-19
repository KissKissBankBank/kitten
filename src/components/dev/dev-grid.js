"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevGrid = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// Grid over all elements that is toggled when calling ctrl+g.
var DevGrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DevGrid, _React$Component);

  function DevGrid(props) {
    var _this;

    _classCallCheck(this, DevGrid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DevGrid).call(this, props));
    _this.state = {
      visible: !!props.visible
    };
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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