"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideGridAside = exports.SideGridContent = exports.SideGrid = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _string = require("../../helpers/utils/string");

var SideGrid =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SideGrid, _Component);

  function SideGrid() {
    (0, _classCallCheck2.default)(this, SideGrid);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SideGrid).apply(this, arguments));
  }

  (0, _createClass2.default)(SideGrid, [{
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
  (0, _inherits2.default)(SideGridContent, _Component2);

  function SideGridContent() {
    (0, _classCallCheck2.default)(this, SideGridContent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SideGridContent).apply(this, arguments));
  }

  (0, _createClass2.default)(SideGridContent, [{
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
  (0, _inherits2.default)(SideGridAside, _Component3);

  function SideGridAside() {
    (0, _classCallCheck2.default)(this, SideGridAside);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SideGridAside).apply(this, arguments));
  }

  (0, _createClass2.default)(SideGridAside, [{
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