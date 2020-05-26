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

var _progress = require("../../../../components/meters/progress");

var _text = require("../../../../components/typography/text");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ProgressBar = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(ProgressBar, _PureComponent);

  var _super = _createSuper(ProgressBar);

  function ProgressBar() {
    (0, _classCallCheck2.default)(this, ProgressBar);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ProgressBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          progress = _this$props.progress,
          progressColor = _this$props.progressColor,
          loading = _this$props.loading;
      if (progress === false) return null;
      var progressValue = loading ? 65 : progress;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-CrowdfundingCard__progressBar"
      }, /*#__PURE__*/_react.default.createElement(_progress.Progress, {
        value: progressValue,
        className: (0, _classnames.default)('k-CrowdfundingCard__progressBar__progress', {
          'is-disabled': loading
        }),
        color: progressColor,
        rampProps: {
          style: {
            height: '4px'
          }
        }
      }), /*#__PURE__*/_react.default.createElement(_text.Text, {
        weight: "regular",
        size: "micro",
        color: "font1",
        className: "k-CrowdfundingCard__progressBar__percent k-u-hidden@s-down"
      }, loading && /*#__PURE__*/_react.default.createElement("span", {
        className: "k-CrowdfundingCard__progressBar__loadingPercent"
      }), !loading && "".concat(progress, " %")));
    }
  }]);
  return ProgressBar;
}(_react.PureComponent);

ProgressBar.propTypes = {
  progress: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
  progressColor: _propTypes.default.string,
  loading: _propTypes.default.bool
};
ProgressBar.defaultProps = {
  progress: 0,
  progressColor: _colorsConfig.default.primary1,
  loading: false
};
var _default = ProgressBar;
exports.default = _default;