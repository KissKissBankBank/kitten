"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideGridAside = exports.SideGridContent = exports.SideGrid = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _string = require("kitten/helpers/utils/string");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SideGrid =
/*#__PURE__*/
function (_Component) {
  _inherits(SideGrid, _Component);

  function SideGrid() {
    _classCallCheck(this, SideGrid);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideGrid).apply(this, arguments));
  }

  _createClass(SideGrid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          containerClassName = _this$props.containerClassName,
          rowClassName = _this$props.rowClassName;
      var _this$props2 = this.props,
          asidePosition = _this$props2.asidePosition,
          asideSize = _this$props2.asideSize;
      asidePosition = _string.stringUtils.upcaseFirst(asidePosition);
      asideSize = _string.stringUtils.upcaseFirst(asideSize);
      var sideGridClassName = (0, _classnames.default)('k-SideGrid', className, "k-SideGrid--aside".concat(asidePosition), "k-SideGrid--aside".concat(asideSize));
      return _react.default.createElement("div", {
        className: sideGridClassName
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('k-SideGrid__container', containerClassName)
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('k-SideGrid__row', rowClassName)
      }, this.props.children)));
    }
  }]);

  return SideGrid;
}(_react.Component);

exports.SideGrid = SideGrid;

var SideGridContent =
/*#__PURE__*/
function (_Component2) {
  _inherits(SideGridContent, _Component2);

  function SideGridContent() {
    _classCallCheck(this, SideGridContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideGridContent).apply(this, arguments));
  }

  _createClass(SideGridContent, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('k-SideGrid__content', this.props.className)
      }, this.props.children);
    }
  }]);

  return SideGridContent;
}(_react.Component);

exports.SideGridContent = SideGridContent;

var SideGridAside =
/*#__PURE__*/
function (_Component3) {
  _inherits(SideGridAside, _Component3);

  function SideGridAside() {
    _classCallCheck(this, SideGridAside);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideGridAside).apply(this, arguments));
  }

  _createClass(SideGridAside, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('k-SideGrid__aside', this.props.className)
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('k-SideGrid__asideContent', this.props.contentClassName)
      }, this.props.children));
    }
  }]);

  return SideGridAside;
}(_react.Component);

exports.SideGridAside = SideGridAside;
SideGrid.defaultProps = {
  className: null,
  containerClassName: null,
  rowClassName: null,
  asidePosition: 'end',
  // 'start' or 'end'
  asideSize: 'default' // 'default', 'small' or 'large'

};
SideGridContent.defaultProps = {
  className: null
};
SideGridAside.defaultProps = {
  className: null,
  contentClassName: null
};