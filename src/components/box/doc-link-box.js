"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DocLinkBox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _linkBox = _interopRequireDefault(require("./link-box"));

var _linkBoxIllustration = require("../../components/illustrations/link-box-illustration");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DocLinkBox = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DocLinkBox, _React$Component);

  var _super = _createSuper(DocLinkBox);

  function DocLinkBox() {
    (0, _classCallCheck2.default)(this, DocLinkBox);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(DocLinkBox, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_linkBox.default, (0, _extends2.default)({}, this.props, {
        displayIcon: true
      }), /*#__PURE__*/_react.default.createElement(_linkBoxIllustration.LinkBoxIllustration, {
        className: "k-LinkBox__icon--svg"
      }));
    }
  }]);
  return DocLinkBox;
}(_react.default.Component); // DEPRECATED: do not use default export.


exports.DocLinkBox = DocLinkBox;
var _default = DocLinkBox;
exports.default = _default;