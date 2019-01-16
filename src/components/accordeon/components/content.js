"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _context = require("./context");

var _marger = require("../../layout/marger");

var ContentStyled = _styledComponents.default.div.withConfig({
  displayName: "content__ContentStyled",
  componentId: "sc-5kfom2-0"
})(["box-sizing:border-box;visibility:visible;overflow:hidden;height:auto;max-height:", ";background-color:", ";border:", " solid ", ";border-top:0;border-bottom-left-radius:", ";border-bottom-right-radius:", ";opacity:1;padding:0 ", ";", " &[aria-hidden='true']{visibility:hidden;opacity:0;max-height:0;}@media (prefers-reduced-motion:reduce){transition:none;}"], function (_ref) {
  var maxHeight = _ref.maxHeight;
  return (0, _typography.pxToRem)(maxHeight);
}, _colorsConfig.default.background3, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(30), function (_ref2) {
  var isAnimated = _ref2.isAnimated;
  return isAnimated && (0, _styledComponents.css)(["transition:visibility 0s ease,max-height 0.4s ease,opacity 0.4s ease;transition-delay:0s,0s,0s;&[aria-hidden='true']{transition-delay:0.4s,0s,0s;}"]);
});

var Content =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Content, _Component);

  function Content(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Content);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Content).call(this, props));
    _this.state = {
      maxHeight: 0
    };
    return _this;
  }

  (0, _createClass2.default)(Content, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.div) {
        this.setState({
          maxHeight: this.div.scrollHeight || 0
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.div && this.state.maxHeight !== this.div.scrollHeight) {
        this.setState({
          maxHeight: this.div.scrollHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          children = _this$props.children;
      var maxHeight = this.state.maxHeight;
      return _react.default.createElement(_context.Context.Consumer, null, function (_ref3) {
        var selectedItem = _ref3.selectedItem,
            isAnimated = _ref3.isAnimated,
            componentId = _ref3.componentId;
        return _react.default.createElement(ContentStyled, {
          "aria-hidden": selectedItem !== id,
          ref: function ref(contentDiv) {
            return _this2.div = contentDiv;
          },
          maxHeight: maxHeight,
          isAnimated: isAnimated,
          id: "".concat(componentId, "-content").concat(id),
          "aria-labelledby": "".concat(componentId, "-header").concat(id)
        }, _react.default.createElement(_marger.Marger, {
          top: "3",
          bottom: "3"
        }, children));
      });
    }
  }]);
  return Content;
}(_react.Component);

exports.Content = Content;