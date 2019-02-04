"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Step = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _status = require("./status");

var _label = require("./label");

var _link = require("./link");

var _list = require("./list");

var Step =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Step, _Component);

  function Step() {
    (0, _classCallCheck2.default)(this, Step);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Step).apply(this, arguments));
  }

  (0, _createClass2.default)(Step, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          valid = _this$props.valid,
          error = _this$props.error,
          statusProps = _this$props.statusProps,
          children = _this$props.children,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["valid", "error", "statusProps", "children"]);
      return _react.default.createElement(StyledItem, other, _react.default.createElement(_status.Status, (0, _extends2.default)({
        valid: valid,
        error: error
      }, statusProps)), _react.default.createElement(StyledContent, {
        error: error
      }, children));
    }
  }]);
  return Step;
}(_react.Component);

exports.Step = Step;
Step.Label = _label.Label;
Step.List = _list.List;
Step.Link = _link.Link;

var StyledItem = _styledComponents.default.li.withConfig({
  displayName: "step__StyledItem",
  componentId: "sc-1you76f-0"
})(["display:flex;margin ", " 0;"], (0, _typography.pxToRem)(30));

var StyledContent = _styledComponents.default.div.withConfig({
  displayName: "step__StyledContent",
  componentId: "sc-1you76f-1"
})(["display:flex;flex-direction:column;justify-content:center;color:", ";", ""], _colorsConfig.default.font1, function (_ref) {
  var error = _ref.error;
  return error && (0, _styledComponents.css)(["color:", ";"], _colorsConfig.default.error);
});