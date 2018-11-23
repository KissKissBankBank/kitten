"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _crowdfundingCard = require("kitten/components/cards/crowdfunding-card");

var ArticleCard = function ArticleCard(_ref) {
  var articleTitle = _ref.articleTitle,
      articleSubTitle = _ref.articleSubTitle,
      props = (0, _objectWithoutProperties2.default)(_ref, ["articleTitle", "articleSubTitle"]);
  return _react.default.createElement(_crowdfundingCard.CrowdfundingCard, (0, _extends2.default)({
    cardTitle: articleTitle,
    cardSubTitle: articleSubTitle
  }, props, {
    info1: false,
    info2: false,
    info3: false,
    progress: false,
    state: false,
    titlesMinHeight: false,
    titleTruncate: false
  }));
};

exports.ArticleCard = ArticleCard;