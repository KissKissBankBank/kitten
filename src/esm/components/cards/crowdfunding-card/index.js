import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from './components/image';
import TitleComponent from './components/title';
import Subtitle from './components/subtitle';
import Informations from './components/informations';
import ProgressBar from './components/progress';
import State from './components/state';
import classNames from 'classnames';
import { StyledCrowdfundingCard } from './styles';
import { Text } from '../../../components/typography/text';
import { domElementHelper } from '../../../helpers/dom/element-helper';
export var CrowdfundingCard = function CrowdfundingCard(_ref) {
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
      others = _objectWithoutProperties(_ref, ["additionalInfo", "avatarProps", "cardSubTitle", "cardTitle", "className", "href", "imageContainerBackground", "imageProps", "info1", "info2", "info3", "loading", "ownerDescription", "ownerTitle", "progress", "progressColor", "imageContainerRatio", "state", "stretch", "subTitleTruncate", "titleProps", "titlesMinHeight", "titleTruncate", "videoProps", "videoSources", "widgetState"]);

  var removeCurrentFocus = function removeCurrentFocus() {
    document.activeElement.blur();
  };

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      shouldTruncateTitle = _useState2[0],
      setTitleTruncate = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      shouldTruncateSubTitle = _useState4[0],
      setSubTitleTruncate = _useState4[1];

  useEffect(function () {
    if (domElementHelper.canUseDom() && typeof document !== 'undefined' && 'fonts' in document // IE11 Fix, tests `document.fonts.ready.then()`
    ) {
        document.fonts.ready.then(function () {
          setTitleTruncate(titleTruncate);
          setSubTitleTruncate(subTitleTruncate);
        });
      }
  }, []);
  return /*#__PURE__*/React.createElement(StyledCrowdfundingCard, _extends({}, others, {
    as: href ? 'a' : 'div',
    imageContainerRatio: imageContainerRatio,
    onClick: removeCurrentFocus,
    className: classNames('k-CrowdfundingCard', 'k-Card k-Card--light k-Card--withoutBoxShadowOnHover', className, {
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
    videoProps: videoProps,
    videoSources: videoSources,
    avatarProps: avatarProps,
    loading: loading
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-CrowdfundingCard__titleAndDesc"
  }, /*#__PURE__*/React.createElement(TitleComponent, {
    title: cardTitle,
    loading: loading,
    titleTruncate: shouldTruncateTitle
  }), /*#__PURE__*/React.createElement(Subtitle, {
    subTitle: cardSubTitle,
    subTitleTruncate: shouldTruncateSubTitle,
    loading: loading
  }), !loading && additionalInfo && /*#__PURE__*/React.createElement("span", {
    className: "k-CrowdfundingCard__additionalInfo"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    lineHeight: "normal",
    weight: "light"
  }, additionalInfo))), /*#__PURE__*/React.createElement(Informations, {
    info1: info1,
    info2: info2,
    info3: info3,
    loading: loading
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    progress: progress,
    progressColor: progressColor,
    loading: loading
  }), /*#__PURE__*/React.createElement(State, {
    state: state,
    widgetState: widgetState,
    loading: loading
  }), loading && /*#__PURE__*/React.createElement("span", {
    className: "k-CrowdfundingCard__loading"
  }));
};
CrowdfundingCard.propTypes = {
  href: PropTypes.string,
  titlesMinHeight: PropTypes.bool,
  stretch: PropTypes.bool,
  imageContainerRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CrowdfundingCard.defaultProps = {
  href: null,
  titlesMinHeight: true,
  stretch: false,
  imageContainerRatio: 10 / 16
};