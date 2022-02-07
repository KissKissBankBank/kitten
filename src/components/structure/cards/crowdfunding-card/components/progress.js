"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _progress = require("../../../../feedback/progress");

var _text = require("../../../../typography/text");

var _colorsConfig = _interopRequireDefault(require("../../../../../constants/colors-config"));

var _classnames = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProgressBar = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(ProgressBar, _PureComponent);

  function ProgressBar() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ProgressBar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        progress = _this$props.progress,
        progressColor = _this$props.progressColor,
        loading = _this$props.loading,
        progressLabel = _this$props.progressLabel;
    if (progress === false || progress === null) return null;
    var progressValue = loading ? 65 : parseInt(progress, 10);
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
      },
      "aria-label": progressLabel
    }), /*#__PURE__*/_react.default.createElement(_text.Text, {
      weight: "regular",
      size: "micro",
      color: "font1",
      className: "k-CrowdfundingCard__progressBar__percent"
    }, loading && /*#__PURE__*/_react.default.createElement("span", {
      className: "k-CrowdfundingCard__progressBar__loadingPercent"
    }), !loading && progress + " %"));
  };

  return ProgressBar;
}(_react.PureComponent);

ProgressBar.propTypes = {
  progress: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
  progressColor: _propTypes.default.string,
  loading: _propTypes.default.bool,
  progressLabel: _propTypes.default.string.isRequired
};
ProgressBar.defaultProps = {
  progress: 0,
  progressColor: _colorsConfig.default.primary1,
  loading: false
};
var _default = ProgressBar;
exports.default = _default;