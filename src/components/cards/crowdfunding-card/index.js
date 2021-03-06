"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrowdfundingCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _image = _interopRequireDefault(require("./components/image"));

var _title = _interopRequireDefault(require("./components/title"));

var _subtitle = _interopRequireDefault(require("./components/subtitle"));

var _informations = _interopRequireDefault(require("./components/informations"));

var _progress = _interopRequireDefault(require("./components/progress"));

var _state = _interopRequireDefault(require("./components/state"));

var _button = _interopRequireDefault(require("./components/button"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

var _text = require("../../../components/typography/text");

var _elementHelper = require("../../../helpers/dom/element-helper");

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
      buttonText = _ref.buttonText,
      forceVersion = _ref.forceVersion,
      progressLabel = _ref.progressLabel,
      others = (0, _objectWithoutProperties2.default)(_ref, ["additionalInfo", "avatarProps", "cardSubTitle", "cardTitle", "className", "href", "imageContainerBackground", "imageProps", "info1", "info2", "info3", "loading", "ownerDescription", "ownerTitle", "progress", "progressColor", "imageContainerRatio", "state", "stretch", "subTitleTruncate", "titleProps", "titlesMinHeight", "titleTruncate", "videoProps", "videoSources", "widgetState", "buttonText", "forceVersion", "progressLabel"]);

  var removeCurrentFocus = function removeCurrentFocus() {
    document.activeElement.blur();
  };

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      shouldTruncateTitle = _useState2[0],
      setTitleTruncate = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      shouldTruncateSubTitle = _useState4[0],
      setSubTitleTruncate = _useState4[1];

  (0, _react.useEffect)(function () {
    if (_elementHelper.domElementHelper.canUseDom() && typeof document !== 'undefined' && 'fonts' in document // IE11 Fix, tests `document.fonts.ready.then()`
    ) {
        document.fonts.ready.then(function () {
          setTitleTruncate(titleTruncate);
          setSubTitleTruncate(subTitleTruncate);
        });
      }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.StyledCrowdfundingCard, (0, _extends2.default)({}, others, {
    as: href ? 'a' : 'div',
    imageContainerRatio: imageContainerRatio,
    onClick: removeCurrentFocus,
    className: (0, _classnames.default)('k-CrowdfundingCard', 'k-Card k-Card--light k-Card--withoutBoxShadowOnHover', className, {
      'k-CrowdfundingCard--titlesMinHeight': titlesMinHeight,
      'k-CrowdfundingCard--isLoading': loading,
      'k-CrowdfundingCard--isStretched': stretch
    }),
    href: href,
    forceVersion: forceVersion
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
    titleTruncate: shouldTruncateTitle
  }), /*#__PURE__*/_react.default.createElement(_subtitle.default, {
    subTitle: cardSubTitle,
    subTitleTruncate: shouldTruncateSubTitle,
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
    loading: loading,
    progressLabel: progressLabel
  }), buttonText && /*#__PURE__*/_react.default.createElement(_button.default, {
    text: buttonText,
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
  imageContainerRatio: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  buttonText: _propTypes.default.string,
  forceVersion: _propTypes.default.oneOf(['mobile', 'tablet', 'desktop']),
  progressLabel: _propTypes.default.string,
  progress: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool])
};
CrowdfundingCard.defaultProps = {
  href: null,
  titlesMinHeight: true,
  stretch: false,
  imageContainerRatio: 10 / 16,
  buttonText: null,
  forceVersion: null,
  progress: null
};