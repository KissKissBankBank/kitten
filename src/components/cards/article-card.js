"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _crowdfundingCard = require("kitten/components/cards/crowdfunding-card");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ArticleCard = function ArticleCard(_ref) {
  var articleTitle = _ref.articleTitle,
      articleSubTitle = _ref.articleSubTitle,
      props = _objectWithoutProperties(_ref, ["articleTitle", "articleSubTitle"]);

  return _react.default.createElement(_crowdfundingCard.CrowdfundingCard, _extends({
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