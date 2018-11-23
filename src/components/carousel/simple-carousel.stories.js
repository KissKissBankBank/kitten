"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _simpleCarousel = require("kitten/karl/carousel/simple-carousel");

(0, _react2.storiesOf)('Carousel/SimpleCarousel', module).addDecorator(_react3.withKnobs).add('default', (0, _addonInfo.withInfo)('common info')(function () {
  return _react.default.createElement(_simpleCarousel.KarlSimpleCarousel, null);
}));