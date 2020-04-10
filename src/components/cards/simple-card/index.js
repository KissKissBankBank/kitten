"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _card = require("../../../hoc/card");

var _image = require("./components/image");

var _title = require("./components/title");

var _subtitle = require("./components/subtitle");

var _paragraph = require("./components/paragraph");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ContainerStyle = _styledComponents.default.a.withConfig({
  displayName: "simple-card__ContainerStyle",
  componentId: "sc-1g5bppt-0"
})(["line-height:1;position:relative;"]);

var SimpleCardComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(SimpleCardComponent, _Component);

  var _super = _createSuper(SimpleCardComponent);

  function SimpleCardComponent() {
    (0, _classCallCheck2.default)(this, SimpleCardComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SimpleCardComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageProps = _this$props.imageProps,
          withPlayerButtonOnImage = _this$props.withPlayerButtonOnImage,
          arrowColor = _this$props.arrowColor,
          ariaLabel = _this$props.ariaLabel,
          href = _this$props.href,
          title = _this$props.title,
          titleProps = _this$props.titleProps,
          subtitle = _this$props.subtitle,
          paragraph = _this$props.paragraph,
          imageContainerRatio = _this$props.imageContainerRatio,
          imageContainerBackground = _this$props.imageContainerBackground,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["imageProps", "withPlayerButtonOnImage", "arrowColor", "ariaLabel", "href", "title", "titleProps", "subtitle", "paragraph", "imageContainerRatio", "imageContainerBackground"]);
      return /*#__PURE__*/_react.default.createElement(ContainerStyle, (0, _extends2.default)({}, others, {
        as: href ? 'a' : 'div',
        href: href
      }), /*#__PURE__*/_react.default.createElement(_image.Image, {
        imageContainerRatio: imageContainerRatio,
        imageContainerBackground: imageContainerBackground,
        imageProps: imageProps,
        withPlayerButtonOnImage: withPlayerButtonOnImage,
        arrowColor: arrowColor,
        ariaLabel: ariaLabel
      }), title && /*#__PURE__*/_react.default.createElement(_title.TitleComponent, {
        title: title,
        titleProps: titleProps
      }), subtitle && /*#__PURE__*/_react.default.createElement(_subtitle.Subtitle, {
        subtitle: subtitle
      }), paragraph && /*#__PURE__*/_react.default.createElement(_paragraph.Paragraph, {
        paragraph: paragraph
      }));
    }
  }]);
  return SimpleCardComponent;
}(_react.Component);

var SimpleCard = (0, _card.card)(SimpleCardComponent, {
  withoutBoxShadowOnHover: true
});
exports.SimpleCard = SimpleCard;