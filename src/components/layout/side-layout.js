"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _bowser = _interopRequireDefault(require("bowser"));

var _sideGrid = require("kitten/components/grid/side-grid");

var _grid = require("kitten/components/grid/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SideLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideLayout, _React$Component);

  function SideLayout(props) {
    var _this;

    _classCallCheck(this, SideLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideLayout).call(this, props));
    _this.state = {
      needsFullHeight: false
    };
    return _this;
  }

  _createClass(SideLayout, [{
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
          sideGridProps = _objectWithoutProperties(_this$props, ["className"]);

      var hasFluidLayout = (className || '').search('k-VerticalGrid__fluid') != -1;
      var hasFullHeightLayout = hasFluidLayout && this.state.needsFullHeight;
      var sideLayoutClassName = (0, _classnames.default)(className, {
        'k-VerticalGrid__fullHeight': hasFullHeightLayout
      });
      return _react.default.createElement(_sideGrid.SideGrid, {
        className: sideLayoutClassName,
        containerClassName: "k-VerticalGrid__container",
        rowClassName: "k-VerticalGrid__element"
      }, _react.default.createElement(_sideGrid.SideGridContent, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
        "col-s": "12"
      }, this.props.children))), _react.default.createElement(_sideGrid.SideGridAside, {
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
  // E.g: see assets/javascripts/kitten/karl/layout/side-layout.js
  sidebar: null
};