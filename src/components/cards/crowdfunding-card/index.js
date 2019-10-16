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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _image = _interopRequireDefault(require("./components/image"));

var _description = _interopRequireDefault(require("./components/description"));

var _informations = _interopRequireDefault(require("./components/informations"));

var _progress = _interopRequireDefault(require("./components/progress"));

var _loading = _interopRequireDefault(require("./components/loading"));

var _state = _interopRequireDefault(require("./components/state"));

var _typography = require("../../../helpers/utils/typography");

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "crowdfunding-card__StyledContainer",
  componentId: "sc-1b0f5ki-0"
})(["position:relative;padding-bottom:", ";"], (0, _typography.pxToRem)(5));

var CrowdfundingCard =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(CrowdfundingCard, _PureComponent);

  function CrowdfundingCard() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CrowdfundingCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CrowdfundingCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
          others = (0, _objectWithoutProperties2.default)(_this$props, ["href", "imageContainerBackground", "imageProps", "avatarProps", "ownerDescription", "ownerTitle", "loading", "state", "cardTitle", "cardSubTitle", "titleTruncate", "subTitleTruncate", "titlesMinHeight", "titleProps", "info1", "info2", "info3", "progress", "progressColor"]);
      return _react.default.createElement(StyledContainer, (0, _extends2.default)({}, others, {
        as: href ? 'a' : 'div',
        onClick: this.removeCurrentFocus,
        className: "k-Card k-Card--light k-Card--withoutBoxShadowOnHover",
        href: href
      }), _react.default.createElement(_image.default, {
        ownerTitle: ownerTitle,
        ownerDescription: ownerDescription,
        imageContainerBackground: imageContainerBackground,
        imageProps: imageProps,
        avatarProps: avatarProps,
        loading: loading
      }), _react.default.createElement(_description.default, {
        title: cardTitle,
        subTitle: cardSubTitle,
        titleTruncate: titleTruncate,
        subTitleTruncate: subTitleTruncate,
        titlesMinHeight: titlesMinHeight,
        titleProps: titleProps,
        loading: loading
      }), _react.default.createElement(_informations.default, {
        info1: info1,
        info2: info2,
        info3: info3,
        loading: loading
      }), _react.default.createElement(_progress.default, {
        progress: progress,
        progressColor: progressColor,
        loading: loading
      }), _react.default.createElement(_state.default, {
        state: state,
        loading: loading
      }), _react.default.createElement(_loading.default, {
        loading: loading
      }));
    }
  }]);
  return CrowdfundingCard;
}(_react.PureComponent);

exports.CrowdfundingCard = CrowdfundingCard;
CrowdfundingCard.propTypes = {
  href: _propTypes.default.string
};
CrowdfundingCard.defaultProps = {
  href: null
};