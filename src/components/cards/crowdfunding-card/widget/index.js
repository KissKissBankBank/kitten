"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrowdfundingCardWidget = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _image = _interopRequireDefault(require("../components/image"));

var _title = _interopRequireDefault(require("../components/title"));

var _subtitle = _interopRequireDefault(require("../components/subtitle"));

var _button = _interopRequireDefault(require("../components/button"));

var _state = _interopRequireDefault(require("../components/state"));

var _styles = require("../styles");

var _classnames = _interopRequireDefault(require("classnames"));

var CrowdfundingCardWidget = function CrowdfundingCardWidget(_ref) {
  var href = _ref.href,
      imageContainerBackground = _ref.imageContainerBackground,
      imageProps = _ref.imageProps,
      videoProps = _ref.videoProps,
      videoSources = _ref.videoSources,
      avatarProps = _ref.avatarProps,
      ownerDescription = _ref.ownerDescription,
      ownerTitle = _ref.ownerTitle,
      loading = _ref.loading,
      stretch = _ref.stretch,
      state = _ref.state,
      subtitle = _ref.subtitle,
      title = _ref.title,
      titleTruncate = _ref.titleTruncate,
      titlesMinHeight = _ref.titlesMinHeight,
      subTitleTruncate = _ref.subTitleTruncate,
      dayCounter = _ref.dayCounter,
      titleProps = _ref.titleProps,
      buttonText = _ref.buttonText,
      className = _ref.className,
      imageContainerRatio = _ref.imageContainerRatio,
      others = (0, _objectWithoutProperties2.default)(_ref, ["href", "imageContainerBackground", "imageProps", "videoProps", "videoSources", "avatarProps", "ownerDescription", "ownerTitle", "loading", "stretch", "state", "subtitle", "title", "titleTruncate", "titlesMinHeight", "subTitleTruncate", "dayCounter", "titleProps", "buttonText", "className", "imageContainerRatio"]);

  var removeCurrentFocus = function removeCurrentFocus() {
    document.activeElement.blur();
  };

  return /*#__PURE__*/_react.default.createElement(_styles.StyledCrowdfundingCard, (0, _extends2.default)({}, others, {
    as: href ? 'a' : 'div',
    onClick: removeCurrentFocus,
    imageContainerRatio: imageContainerRatio,
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
    loading: loading,
    videoProps: videoProps,
    videoSources: videoSources
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
};

exports.CrowdfundingCardWidget = CrowdfundingCardWidget;
CrowdfundingCardWidget.propTypes = {
  href: _propTypes.default.string,
  titlesMinHeight: _propTypes.default.bool,
  stretch: _propTypes.default.bool,
  imageContainerRatio: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
CrowdfundingCardWidget.defaultProps = {
  href: null,
  titlesMinHeight: true,
  stretch: false,
  imageContainerRatio: 10 / 16
};