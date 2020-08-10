"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _context = require("./context");

var _marger = require("../../layout/marger");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ContentStyled = _styledComponents.default.div.withConfig({
  displayName: "content__ContentStyled",
  componentId: "sc-5kfom2-0"
})(["box-sizing:border-box;visibility:visible;height:auto;background-color:", ";border:", " solid ", ";border-top:0;border-bottom-left-radius:", ";border-bottom-right-radius:", ";opacity:1;padding:", " ", ";", " &[aria-hidden='true']{visibility:hidden;opacity:0;max-height:0;}@media (prefers-reduced-motion:reduce){transition:none;}"], _colorsConfig.default.background3, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(0.1), (0, _typography.pxToRem)(30), function (_ref) {
  var isAnimated = _ref.isAnimated,
      maxHeight = _ref.maxHeight;
  return isAnimated ? (0, _styledComponents.css)(["overflow:hidden;max-height:", ";transition:visibility 0s ease,max-height 0.4s ease,opacity 0.4s ease;transition-delay:0s,0s,0s;&[aria-hidden='true']{transition-delay:0.4s,0s,0s;}"], (0, _typography.pxToRem)(maxHeight)) : (0, _styledComponents.css)(["max-height:unset;overflow:visible;"]);
});

var Content = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Content, _Component);

  var _super = _createSuper(Content);

  function Content(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Content);
    _this = _super.call(this, props);
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
      return /*#__PURE__*/_react.default.createElement(_context.Context.Consumer, null, function (_ref2) {
        var selectedItem = _ref2.selectedItem,
            isAnimated = _ref2.isAnimated,
            componentId = _ref2.componentId;
        return /*#__PURE__*/_react.default.createElement(ContentStyled, {
          "aria-hidden": selectedItem !== id,
          ref: function ref(contentDiv) {
            return _this2.div = contentDiv;
          },
          maxHeight: maxHeight,
          isAnimated: isAnimated,
          id: "".concat(componentId, "-content").concat(id),
          "aria-labelledby": "".concat(componentId, "-header").concat(id)
        }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
          top: "3",
          bottom: "3"
        }, children));
      });
    }
  }]);
  return Content;
}(_react.Component);

exports.Content = Content;