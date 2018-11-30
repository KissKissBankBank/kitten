"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderTitles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _header = require("kitten/components/headers/header");

var HeaderTitles =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(HeaderTitles, _React$Component);

  function HeaderTitles() {
    (0, _classCallCheck2.default)(this, HeaderTitles);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HeaderTitles).apply(this, arguments));
  }

  (0, _createClass2.default)(HeaderTitles, [{
    key: "renderSubtitle",
    value: function renderSubtitle() {
      if (!this.props.subtitle) return;
      return _react.default.createElement("p", {
        className: (0, _classnames.default)('k-Header__subtitle', this.props.subtitleClassName)
      }, this.props.subtitle);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          className = _this$props.className,
          titleClassName = _this$props.titleClassName,
          subtitleClassName = _this$props.subtitleClassName,
          headerItemProps = (0, _objectWithoutProperties2.default)(_this$props, ["title", "subtitle", "className", "titleClassName", "subtitleClassName"]);
      return _react.default.createElement(_header.HeaderItem, (0, _extends2.default)({
        className: (0, _classnames.default)('k-Header__titles', className)
      }, headerItemProps), _react.default.createElement("p", {
        className: (0, _classnames.default)('k-Header__title', titleClassName)
      }, title), this.renderSubtitle());
    }
  }]);
  return HeaderTitles;
}(_react.default.Component);

exports.HeaderTitles = HeaderTitles;
HeaderTitles.defaultProps = {
  title: 'You forgot the title!',
  subtitle: null,
  className: null,
  titleClassName: null,
  subtitleClassName: null
};