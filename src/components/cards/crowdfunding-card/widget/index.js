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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _image = _interopRequireDefault(require("../components/image"));

var _title = _interopRequireDefault(require("../components/title"));

var _subtitle = _interopRequireDefault(require("../components/subtitle"));

var _button = _interopRequireDefault(require("../components/button"));

var _loading = _interopRequireDefault(require("../components/loading"));

var _state = _interopRequireDefault(require("../components/state"));

var _typography = require("../../../../helpers/utils/typography");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var COMPONENT_GUTTER = (0, _typography.pxToRem)(10);

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "widget__StyledContainer",
  componentId: "sc-1tlhy8x-0"
})(["position:relative;"]);

var StyledTitleAndDescription = _styledComponents.default.div.withConfig({
  displayName: "widget__StyledTitleAndDescription",
  componentId: "sc-1tlhy8x-1"
})(["padding:0 ", ";margin-top:", ";", ""], COMPONENT_GUTTER, (0, _typography.pxToRem)(5), function (_ref) {
  var titlesMinHeight = _ref.titlesMinHeight;
  return titlesMinHeight && (0, _styledComponents.css)(["min-height:", ";"], (0, _typography.pxToRem)(75));
});

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
          state = _this$props.state,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          titleTruncate = _this$props.titleTruncate,
          titlesMinHeight = _this$props.titlesMinHeight,
          subTitleTruncate = _this$props.subTitleTruncate,
          dayCounter = _this$props.dayCounter,
          titleProps = _this$props.titleProps,
          buttonText = _this$props.buttonText,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["href", "imageContainerBackground", "imageProps", "avatarProps", "ownerDescription", "ownerTitle", "loading", "state", "subtitle", "title", "titleTruncate", "titlesMinHeight", "subTitleTruncate", "dayCounter", "titleProps", "buttonText"]);
      return /*#__PURE__*/_react.default.createElement(StyledContainer, (0, _extends2.default)({}, others, {
        as: href ? 'a' : 'div',
        onClick: this.removeCurrentFocus,
        className: "k-Card k-Card--light k-Card--withoutBoxShadowOnHover",
        href: href
      }), /*#__PURE__*/_react.default.createElement(_image.default, {
        ownerTitle: ownerTitle,
        ownerDescription: ownerDescription,
        imageContainerBackground: imageContainerBackground,
        imageProps: imageProps,
        avatarProps: avatarProps,
        loading: loading
      }), /*#__PURE__*/_react.default.createElement(StyledTitleAndDescription, {
        titlesMinHeight: titlesMinHeight
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
      }), /*#__PURE__*/_react.default.createElement(_loading.default, {
        loading: loading
      }));
    }
  }]);
  return CrowdfundingCardWidget;
}(_react.PureComponent);

exports.CrowdfundingCardWidget = CrowdfundingCardWidget;
CrowdfundingCardWidget.propTypes = {
  href: _propTypes.default.string,
  titlesMinHeight: _propTypes.default.bool
};
CrowdfundingCardWidget.defaultProps = {
  href: null,
  titlesMinHeight: true
};