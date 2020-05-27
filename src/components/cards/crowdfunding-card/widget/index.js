"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrowdfundingCardWidget = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _image = _interopRequireDefault(require("../components/image"));

var _title = _interopRequireDefault(require("../components/title"));

var _subtitle = _interopRequireDefault(require("../components/subtitle"));

var _button = _interopRequireDefault(require("../components/button"));

var _state = _interopRequireDefault(require("../components/state"));

var _styles = require("../styles");

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CrowdfundingCardWidget = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(CrowdfundingCardWidget, _PureComponent);

  var _super = _createSuper(CrowdfundingCardWidget);

  function CrowdfundingCardWidget() {
    var _this;

    (0, _classCallCheck2.default)(this, CrowdfundingCardWidget);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.removeCurrentFocus = function () {
      document.activeElement.blur();
    };

    return _this;
  }

  (0, _createClass2.default)(CrowdfundingCardWidget, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          href = _this$props.href,
          imageContainerBackground = _this$props.imageContainerBackground,
          imageProps = _this$props.imageProps,
          avatarProps = _this$props.avatarProps,
          ownerDescription = _this$props.ownerDescription,
          ownerTitle = _this$props.ownerTitle,
          loading = _this$props.loading,
          stretch = _this$props.stretch,
          state = _this$props.state,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          titleTruncate = _this$props.titleTruncate,
          titlesMinHeight = _this$props.titlesMinHeight,
          subTitleTruncate = _this$props.subTitleTruncate,
          dayCounter = _this$props.dayCounter,
          titleProps = _this$props.titleProps,
          buttonText = _this$props.buttonText,
          className = _this$props.className,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["href", "imageContainerBackground", "imageProps", "avatarProps", "ownerDescription", "ownerTitle", "loading", "stretch", "state", "subtitle", "title", "titleTruncate", "titlesMinHeight", "subTitleTruncate", "dayCounter", "titleProps", "buttonText", "className"]);
      return /*#__PURE__*/_react.default.createElement(_styles.StyledCrowdfundingCard, (0, _extends2.default)({}, others, {
        as: href ? 'a' : 'div',
        onClick: this.removeCurrentFocus,
        className: (0, _classnames.default)('k-CrowdfundingCard', 'k-CrowdfundingCardWidget', 'k-Card k-Card--light k-Card--withoutBoxShadowOnHover', className, {
          'k-CrowdfundingCard--titlesMinHeight': titlesMinHeight,
          'k-CrowdfundingCard--isLoading': loading,
          'k-CrowdfundingCard--isStretched': stretch
        }),
        href: href
      }), /*#__PURE__*/_react.default.createElement(_image.default, {
        ownerTitle: ownerTitle,
        ownerDescription: ownerDescription,
        imageContainerBackground: imageContainerBackground,
        imageProps: imageProps,
        avatarProps: avatarProps,
        loading: loading
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "k-CrowdfundingCard__titleAndDesc k-CrowdfundingCard__paddedContainer"
      }, /*#__PURE__*/_react.default.createElement(_title.default, {
        titleTruncate: titleTruncate,
        loading: loading,
        widgetTitle: title,
        dayCounter: dayCounter
      }), /*#__PURE__*/_react.default.createElement(_subtitle.default, {
        widgetSubtitle: subtitle,
        subTitleTruncate: subTitleTruncate,
        loading: loading
      })), /*#__PURE__*/_react.default.createElement(_button.default, {
        text: buttonText,
        loading: loading
      }), /*#__PURE__*/_react.default.createElement(_state.default, {
        widgetState: state,
        loading: loading
      }), loading && /*#__PURE__*/_react.default.createElement("span", {
        className: "k-CrowdfundingCard__loading"
      }));
    }
  }]);
  return CrowdfundingCardWidget;
}(_react.PureComponent);

exports.CrowdfundingCardWidget = CrowdfundingCardWidget;
CrowdfundingCardWidget.propTypes = {
  href: _propTypes.default.string,
  titlesMinHeight: _propTypes.default.bool,
  stretch: _propTypes.default.bool
};
CrowdfundingCardWidget.defaultProps = {
  href: null,
  titlesMinHeight: true,
  stretch: false
};