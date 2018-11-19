"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlHeroExamples = void 0;

var _react = _interopRequireWildcard(require("react"));

var _hero = require("kitten/components/heroes/hero");

var _title = require("kitten/components/typography/title");

var _paragraph = require("kitten/components/typography/paragraph");

var _marger = require("kitten/components/layout/marger");

var _button = require("kitten/components/buttons/button");

var _radium = require("radium");

var _grid = require("kitten/components/grid/grid");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var lorem = 'Lorem ipsum dolor sit amet.';
var loremIpsum = "".concat(lorem, " Consectetuer adipiscing elit. ") + 'Aenean commodo ligula eget dolor. Aenean massa.';
var loremIpsumSitAmet = "".concat(loremIpsum, " Cum sociis natoque penatibus") + 'et magnis dis parturient montes, nascetur ridiculus ' + 'mus. Donec quam  felis, ultricies nec, pellentesque ' + 'eu, pretium quis, sem. Nulla consequat massa quis enim.' + ' Donec pede justo, fringilla vel, aliquet nec, ' + 'vulputate eget, arcu enim justo, rhoncus ut.';
var imageSrc = 'https://placehold.it/40x40/caf4fe/caf4fe';

var KarlHeroExamples = function KarlHeroExamples(props) {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, null, _react.default.createElement("div", {
    className: "karl-Example"
  }, _react.default.createElement("p", {
    className: "karl-Example__title"
  }, "Hero left")), _react.default.createElement(_hero.Hero, {
    imageSrc: imageSrc,
    direction: "left"
  }, _react.default.createElement(_marger.Marger, {
    bottom: "5"
  }, _react.default.createElement(_title.Title, {
    modifier: "secondary",
    margin: false
  }, lorem)), _react.default.createElement(_marger.Marger, {
    top: "5",
    bottom: 4
  }, _react.default.createElement(_paragraph.Paragraph, {
    modifier: "primary",
    margin: false
  }, loremIpsumSitAmet)), _react.default.createElement(_marger.Marger, {
    top: "4"
  }, _react.default.createElement(_button.Button, {
    modifier: "helium"
  }, "Button"))), _react.default.createElement("div", {
    className: "karl-Example"
  }, _react.default.createElement("p", {
    className: "karl-Example__title"
  }, "Hero right")), _react.default.createElement(_hero.Hero, {
    imageSrc: imageSrc,
    direction: "right"
  }, _react.default.createElement(_marger.Marger, {
    bottom: "5"
  }, _react.default.createElement(_title.Title, {
    modifier: "secondary",
    margin: false
  }, lorem)), _react.default.createElement(_marger.Marger, {
    top: "5",
    bottom: 4
  }, _react.default.createElement(_paragraph.Paragraph, {
    modifier: "primary",
    margin: false
  }, loremIpsumSitAmet)), _react.default.createElement(_marger.Marger, {
    top: "4"
  }, _react.default.createElement(_button.Button, {
    modifier: "helium"
  }, "Button"))), _react.default.createElement("div", {
    className: "karl-Example"
  }, _react.default.createElement("p", {
    className: "karl-Example__title"
  }, "Hero with small text")), _react.default.createElement(_hero.Hero, {
    imageSrc: imageSrc,
    direction: "left",
    tiny: true
  }, _react.default.createElement(_marger.Marger, {
    bottom: "5"
  }, _react.default.createElement(_title.Title, {
    modifier: "secondary",
    margin: false
  }, lorem)), _react.default.createElement(_marger.Marger, {
    top: "5"
  }, _react.default.createElement(_paragraph.Paragraph, {
    modifier: "primary",
    margin: false
  }, loremIpsum))))));
};

exports.KarlHeroExamples = KarlHeroExamples;