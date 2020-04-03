"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var loadingKeyframes = (0, _styledComponents.keyframes)(["from{transform:translateX(-100%)}to{transform:translateX(100%)}"]);

var StyledLoading = _styledComponents.default.span.withConfig({
  displayName: "loading__StyledLoading",
  componentId: "sc-1abxxfa-0"
})(["position:absolute;top:0;bottom:0;left:0;right:0;transform:translateX(-100%);background:linear-gradient( 90deg,rgba(0,0,0,0),rgba(255,255,255,0.3),rgba(0,0,0,0) );animation:x 1s linear infinite;animation-name:", ";"], loadingKeyframes);

var Loading = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Loading, _PureComponent);

  var _super = _createSuper(Loading);

  function Loading() {
    (0, _classCallCheck2.default)(this, Loading);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Loading, [{
    key: "render",
    value: function render() {
      var loading = this.props.loading;
      if (!loading) return null;
      return _react.default.createElement(StyledLoading, null);
    }
  }]);
  return Loading;
}(_react.PureComponent);

Loading.propTypes = {
  loading: _propTypes.default.bool
};
Loading.defaultProps = {
  loading: false
};
var _default = Loading;
exports.default = _default;