import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { CrowdfundingCard } from '../../../components/cards/crowdfunding-card';
export var ArticleCard = function ArticleCard(_ref) {
  var articleTitle = _ref.articleTitle,
      articleSubTitle = _ref.articleSubTitle,
      props = _objectWithoutProperties(_ref, ["articleTitle", "articleSubTitle"]);

  return /*#__PURE__*/React.createElement(CrowdfundingCard, _extends({
    cardTitle: articleTitle,
    cardSubTitle: articleSubTitle
  }, props, {
    info1: "",
    info2: "",
    info3: "",
    progress: false,
    state: "",
    titlesMinHeight: false,
    titleTruncate: false
  }));
};