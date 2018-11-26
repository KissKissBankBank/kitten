"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _radium = require("radium");

var _container = require("../../components/grid/container");

var _embedPlayer = require("../../components/media/embed-player");

var _grid = require("../../components/grid/grid");

(0, _react2.storiesOf)('Media/EmbedPlayer', module).addDecorator(_react3.withKnobs).add('default', (0, _addonInfo.withInfo)('common info')(function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_container.Container, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "10"
  }, _react.default.createElement(_embedPlayer.EmbedPlayer, {
    previewProps: (0, _react3.object)('thumbnail', {
      thumbnail: {
        src: 'https://placehold.it/620x376/caf4fe/caf4fe',
        alt: 'Une image'
      }
    }),
    playButtonLabel: (0, _react3.text)('Label in player button for accessibility', 'Play'),
    ratio: (0, _react3.text)('Video ratio', 376.0 / 620 * 100),
    iframeHtml: (0, _react3.text)('Iframe video', "<iframe\n                    width=\"620\"\n                    height=\"376\"\n                    src=\"https://www.youtube.com/embed/30wT8ZJOeDA\"\n                    frameborder=\"0\" allow=\"autoplay; encrypted-media\"\n                    allowfullscreen\n                  ></iframe>".replace(/\s+/g, ' '))
  })))));
}));