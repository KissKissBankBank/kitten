"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideLayout = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _bowser = _interopRequireDefault(require("bowser"));

var _sideGrid = require("../../components/grid/side-grid");

var _grid = require("../../components/grid/grid");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SideLayout = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SideLayout, _React$Component);

  var _super = _createSuper(SideLayout);

  function SideLayout(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SideLayout);
    _this = _super.call(this, props);
    _this.state = {
      needsFullHeight: false
    };
    return _this;
  }

  (0, _createClass2.default)(SideLayout, [{
    key: "needsFullHeight",
    value: function needsFullHeight() {
      return !!_bowser.default.safari;
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
      var _this$props = this.props,
          className = _this$props.className,
          sideGridProps = (0, _objectWithoutProperties2.default)(_this$props, ["className"]);
      var hasFluidLayout = (className || '').search('k-VerticalGrid__fluid') != -1;
      var hasFullHeightLayout = hasFluidLayout && this.state.needsFullHeight;
      var sideLayoutClassName = (0, _classnames.default)(className, {
        'k-VerticalGrid__fullHeight': hasFullHeightLayout
      });
      return /*#__PURE__*/_react.default.createElement(_sideGrid.SideGrid, {
        className: sideLayoutClassName,
        containerClassName: "k-VerticalGrid__container",
        rowClassName: "k-VerticalGrid__element"
      }, /*#__PURE__*/_react.default.createElement(_sideGrid.SideGridContent, null, /*#__PURE__*/_react.default.createElement(_grid.Grid, null, /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
        "col-s": "12"
      }, this.props.children))), /*#__PURE__*/_react.default.createElement(_sideGrid.SideGridAside, {
        className: "k-VerticalGrid__element"
      }, this.props.sidebar));
    }
  }]);
  return SideLayout;
}(_react.default.Component);

exports.SideLayout = SideLayout;
SideLayout.defaultProps = {
  children: 'Children',
  // sidebar: renderOfWhatYouWant() // Content for aside grid
  // E.g: see assets/javascripts/../../karl/layout/side-layout.js
  sidebar: null
};