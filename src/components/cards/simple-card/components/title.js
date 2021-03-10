"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleComponent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _parser = require("../../../../helpers/utils/parser");

var _title = require("../../../../components/typography/title");

var _marger = require("../../../../components/layout/marger");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TitleComponent = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(TitleComponent, _PureComponent);

  var _super = _createSuper(TitleComponent);

  function TitleComponent() {
    (0, _classCallCheck2.default)(this, TitleComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TitleComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          titleProps = _this$props.titleProps;
      var titleClassName = (0, _classnames.default)('k-Card__title', titleProps.className);
      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: ".3"
      }, /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
        tag: "p"
      }, titleProps, {
        className: titleClassName,
        noMargin: true,
        modifier: "senary"
      }), (0, _parser.parseHtml)(title)));
    }
  }]);
  return TitleComponent;
}(_react.PureComponent);

exports.TitleComponent = TitleComponent;
TitleComponent.propTypes = {
  title: _propTypes.default.string,
  titleProps: _propTypes.default.shape()
};
TitleComponent.defaultProps = {
  title: null,
  titleProps: {}
};