import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Image from '../components/image';
import TitleComponent from '../components/title';
import Subtitle from '../components/subtitle';
import CardButton from '../components/button';
import State from '../components/state';
import { StyledCrowdfundingCard } from '../styles';
import classNames from 'classnames';
export var CrowdfundingCardWidget = function CrowdfundingCardWidget(_ref) {
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
      others = _objectWithoutProperties(_ref, ["href", "imageContainerBackground", "imageProps", "videoProps", "videoSources", "avatarProps", "ownerDescription", "ownerTitle", "loading", "stretch", "state", "subtitle", "title", "titleTruncate", "titlesMinHeight", "subTitleTruncate", "dayCounter", "titleProps", "buttonText", "className", "imageContainerRatio"]);

  var removeCurrentFocus = function removeCurrentFocus() {
    document.activeElement.blur();
  };

  return /*#__PURE__*/React.createElement(StyledCrowdfundingCard, _extends({}, others, {
    as: href ? 'a' : 'div',
    onClick: removeCurrentFocus,
    imageContainerRatio: imageContainerRatio,
    className: classNames('k-CrowdfundingCard', 'k-CrowdfundingCardWidget', 'k-Card k-Card--light k-Card--withoutBoxShadowOnHover', className, {
      'k-CrowdfundingCard--titlesMinHeight': titlesMinHeight,
      'k-CrowdfundingCard--isLoading': loading,
      'k-CrowdfundingCard--isStretched': stretch
    }),
    href: href
  }), /*#__PURE__*/React.createElement(Image, {
    ownerTitle: ownerTitle,
    ownerDescription: ownerDescription,
    imageContainerBackground: imageContainerBackground,
    imageProps: imageProps,
    avatarProps: avatarProps,
    loading: loading,
    videoProps: videoProps,
    videoSources: videoSources
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-CrowdfundingCard__titleAndDesc k-CrowdfundingCard__paddedContainer"
  }, /*#__PURE__*/React.createElement(TitleComponent, {
    titleTruncate: titleTruncate,
    loading: loading,
    widgetTitle: title,
    dayCounter: dayCounter
  }), /*#__PURE__*/React.createElement(Subtitle, {
    widgetSubtitle: subtitle,
    subTitleTruncate: subTitleTruncate,
    loading: loading
  })), /*#__PURE__*/React.createElement(CardButton, {
    text: buttonText,
    loading: loading
  }), /*#__PURE__*/React.createElement(State, {
    widgetState: state,
    loading: loading
  }), loading && /*#__PURE__*/React.createElement("span", {
    className: "k-CrowdfundingCard__loading"
  }));
};
CrowdfundingCardWidget.propTypes = {
  href: PropTypes.string,
  titlesMinHeight: PropTypes.bool,
  stretch: PropTypes.bool,
  imageContainerRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CrowdfundingCardWidget.defaultProps = {
  href: null,
  titlesMinHeight: true,
  stretch: false,
  imageContainerRatio: 10 / 16
};