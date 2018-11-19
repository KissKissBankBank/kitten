"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlCarouselProjectCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _container = require("kitten/components/grid/container");

var _carousel = require("kitten/components/carousel/carousel");

var _projectCard = require("kitten/components/cards/project-card");

var _screenConfig = require("kitten/constants/screen-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var KarlCarouselProjectCard = function KarlCarouselProjectCard(props) {
  return _react.default.createElement(_container.Container, {
    fullWidthBelowScreenSize: _screenConfig.SCREEN_SIZE_M
  }, _react.default.createElement(_carousel.Carousel, _extends({
    itemMinWidth: _projectCard.MIN_WIDTH,
    baseItemMarginBetween: _projectCard.MARGIN_BETWEEN,
    renderItem: function renderItem(_ref) {
      var item = _ref.item;
      return _react.default.createElement(_projectCard.ProjectCard, {
        linkHref: item.linkHref,
        title: item.title
      });
    }
  }, props)));
};

exports.KarlCarouselProjectCard = KarlCarouselProjectCard;