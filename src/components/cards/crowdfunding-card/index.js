"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrowdfundingCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _image = _interopRequireDefault(require("./components/image"));

var _title = _interopRequireDefault(require("./components/title"));

var _subtitle = _interopRequireDefault(require("./components/subtitle"));

var _informations = _interopRequireDefault(require("./components/informations"));

var _progress = _interopRequireDefault(require("./components/progress"));

var _state = _interopRequireDefault(require("./components/state"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CrowdfundingCard = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(CrowdfundingCard, _PureComponent);

  var _super = _createSuper(CrowdfundingCard);

  function CrowdfundingCard() {
    var _this;

    (0, _classCallCheck2.default)(this, CrowdfundingCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.removeCurrentFocus = function () {
      document.activeElement.blur();
    };

    return _this;
  }

  (0, _createClass2.default)(CrowdfundingCard, [{
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
          cardTitle = _this$props.cardTitle,
          cardSubTitle = _this$props.cardSubTitle,
          titleTruncate = _this$props.titleTruncate,
          subTitleTruncate = _this$props.subTitleTruncate,
          titlesMinHeight = _this$props.titlesMinHeight,
          titleProps = _this$props.titleProps,
          info1 = _this$props.info1,
          info2 = _this$props.info2,
          info3 = _this$props.info3,
          progress = _this$props.progress,
          progressColor = _this$props.progressColor,
          className = _this$props.className,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["href", "imageContainerBackground", "imageProps", "avatarProps", "ownerDescription", "ownerTitle", "loading", "stretch", "state", "cardTitle", "cardSubTitle", "titleTruncate", "subTitleTruncate", "titlesMinHeight", "titleProps", "info1", "info2", "info3", "progress", "progressColor", "className"]);
      return /*#__PURE__*/_react.default.createElement(_styles.StyledCrowdfundingCard, (0, _extends2.default)({}, others, {
        as: href ? 'a' : 'div',
        onClick: this.removeCurrentFocus,
        className: (0, _classnames.default)('k-CrowdfundingCard', 'k-Card k-Card--light k-Card--withoutBoxShadowOnHover', className, {
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
        className: "k-CrowdfundingCard__titleAndDesc"
      }, /*#__PURE__*/_react.default.createElement(_title.default, {
        title: cardTitle,
        loading: loading,
        titleTruncate: titleTruncate
      }), /*#__PURE__*/_react.default.createElement(_subtitle.default, {
        subTitle: cardSubTitle,
        subTitleTruncate: subTitleTruncate,
        loading: loading
      })), /*#__PURE__*/_react.default.createElement(_informations.default, {
        info1: info1,
        info2: info2,
        info3: info3,
        loading: loading
      }), /*#__PURE__*/_react.default.createElement(_progress.default, {
        progress: progress,
        progressColor: progressColor,
        loading: loading
      }), /*#__PURE__*/_react.default.createElement(_state.default, {
        state: state,
        loading: loading
      }), loading && /*#__PURE__*/_react.default.createElement("span", {
        className: "k-CrowdfundingCard__loading"
      }));
    }
  }]);
  return CrowdfundingCard;
}(_react.PureComponent);

exports.CrowdfundingCard = CrowdfundingCard;
CrowdfundingCard.propTypes = {
  href: _propTypes.default.string,
  titlesMinHeight: _propTypes.default.bool,
  stretch: _propTypes.default.bool
};
CrowdfundingCard.defaultProps = {
  href: null,
  titlesMinHeight: true,
  stretch: false
};