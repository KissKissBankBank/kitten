"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/typography/text");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Informations = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Informations, _PureComponent);

  var _super = _createSuper(Informations);

  function Informations() {
    (0, _classCallCheck2.default)(this, Informations);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Informations, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          info1 = _this$props.info1,
          info2 = _this$props.info2,
          info3 = _this$props.info3;
      if (!info1 && !info2 && !info3) return null;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-CrowdfundingCard__informations"
      }, this.renderInfo(info1), this.renderInfo(info2), this.renderInfo(info3));
    }
  }, {
    key: "renderInfo",
    value: function renderInfo(text) {
      var loading = this.props.loading;
      if (!text) return null;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-CrowdfundingCard__informations__infoContainer"
      }, !loading && /*#__PURE__*/_react.default.createElement(_text.Text, {
        lineHeight: "normal",
        weight: "light",
        color: "font1",
        className: "k-CrowdfundingCard__informations__info"
      }, text), loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
        className: "k-CrowdfundingCard__informations__loadingElement"
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "k-CrowdfundingCard__informations__loadingElement"
      })));
    }
  }]);
  return Informations;
}(_react.PureComponent);

Informations.propTypes = {
  info1: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.bool]),
  info2: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.bool]),
  info3: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.bool]),
  loading: _propTypes.default.bool
};
Informations.defaultProps = {
  info1: '',
  info2: '',
  info3: '',
  loading: false
};
var _default = Informations;
exports.default = _default;