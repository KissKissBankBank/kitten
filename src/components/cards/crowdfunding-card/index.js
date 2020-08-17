"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrowdfundingCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _image = _interopRequireDefault(require("./components/image"));

var _title = _interopRequireDefault(require("./components/title"));

var _subtitle = _interopRequireDefault(require("./components/subtitle"));

var _informations = _interopRequireDefault(require("./components/informations"));

var _progress = _interopRequireDefault(require("./components/progress"));

var _state = _interopRequireDefault(require("./components/state"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

var _text = require("../../../components/typography/text");

var CrowdfundingCard = function CrowdfundingCard(_ref) {
  var additionalInfo = _ref.additionalInfo,
      avatarProps = _ref.avatarProps,
      cardSubTitle = _ref.cardSubTitle,
      cardTitle = _ref.cardTitle,
      className = _ref.className,
      href = _ref.href,
      imageContainerBackground = _ref.imageContainerBackground,
      imageProps = _ref.imageProps,
      info1 = _ref.info1,
      info2 = _ref.info2,
      info3 = _ref.info3,
      loading = _ref.loading,
      ownerDescription = _ref.ownerDescription,
      ownerTitle = _ref.ownerTitle,
      progress = _ref.progress,
      progressColor = _ref.progressColor,
      imageContainerRatio = _ref.imageContainerRatio,
      state = _ref.state,
      stretch = _ref.stretch,
      subTitleTruncate = _ref.subTitleTruncate,
      titleProps = _ref.titleProps,
      titlesMinHeight = _ref.titlesMinHeight,
      titleTruncate = _ref.titleTruncate,
      videoProps = _ref.videoProps,
      videoSources = _ref.videoSources,
      widgetState = _ref.widgetState,
      others = (0, _objectWithoutProperties2.default)(_ref, ["additionalInfo", "avatarProps", "cardSubTitle", "cardTitle", "className", "href", "imageContainerBackground", "imageProps", "info1", "info2", "info3", "loading", "ownerDescription", "ownerTitle", "progress", "progressColor", "imageContainerRatio", "state", "stretch", "subTitleTruncate", "titleProps", "titlesMinHeight", "titleTruncate", "videoProps", "videoSources", "widgetState"]);

  var removeCurrentFocus = function removeCurrentFocus() {
    document.activeElement.blur();
  };

  return /*#__PURE__*/_react.default.createElement(_styles.StyledCrowdfundingCard, (0, _extends2.default)({}, others, {
    as: href ? 'a' : 'div',
    imageContainerRatio: imageContainerRatio,
    onClick: removeCurrentFocus,
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
    videoProps: videoProps,
    videoSources: videoSources,
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
  }), !loading && additionalInfo && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-CrowdfundingCard__additionalInfo"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    lineHeight: "normal",
    weight: "light"
  }, additionalInfo))), /*#__PURE__*/_react.default.createElement(_informations.default, {
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
    widgetState: widgetState,
    loading: loading
  }), loading && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-CrowdfundingCard__loading"
  }));
};

exports.CrowdfundingCard = CrowdfundingCard;
CrowdfundingCard.propTypes = {
  href: _propTypes.default.string,
  titlesMinHeight: _propTypes.default.bool,
  stretch: _propTypes.default.bool,
  imageContainerRatio: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
CrowdfundingCard.defaultProps = {
  href: null,
  titlesMinHeight: true,
  stretch: false,
  imageContainerRatio: 10 / 16
};