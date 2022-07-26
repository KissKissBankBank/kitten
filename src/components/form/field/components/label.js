"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldLabel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _label = require("../../../form/label");

var _toggletip = require("../../../information/toggletip");

var _line = require("../../../structure/line");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class FieldLabel extends _react.Component {
  render() {
    const {
      children,
      tooltip,
      tooltipId,
      tooltipProps,
      labelProps,
      link,
      tooltipLabel,
      className,
      center,
      ...others
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      className: (0, _classnames.default)(className, 'k-Field__label', 'k-u-margin-bottom-single')
    }, others), /*#__PURE__*/_react.default.createElement(_line.Line, {
      style: {
        lineHeight: 1
      },
      className: (0, _classnames.default)({
        'k-u-flex-justifyContent-center': center
      })
    }, /*#__PURE__*/_react.default.createElement(_line.Line.Item, null, /*#__PURE__*/_react.default.createElement(_label.Label, labelProps, children)), tooltip && /*#__PURE__*/_react.default.createElement(_line.Line.Item, null, /*#__PURE__*/_react.default.createElement(_toggletip.Toggletip, (0, _extends2.default)({
      id: tooltipId,
      bubbleProps: {
        zIndex: 2
      },
      actionLabel: "Help"
    }, tooltipProps), tooltip)), link && /*#__PURE__*/_react.default.createElement(_line.Line.Item, null, link)));
  }

}

exports.FieldLabel = FieldLabel;
FieldLabel.propTypes = {
  link: _propTypes.default.node,
  tooltip: _propTypes.default.string,
  labelProps: _propTypes.default.object,
  tooltipProps: _propTypes.default.object,
  center: _propTypes.default.bool
};
FieldLabel.defaultProps = {
  tooltip: null,
  labelProps: {},
  center: false
};