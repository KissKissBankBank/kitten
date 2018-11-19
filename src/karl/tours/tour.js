"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlHeaderTour2 = exports.KarlHeaderTour1 = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = require("kitten/components/buttons/button");

var _marger = require("kitten/components/layout/marger");

var _title = require("kitten/components/typography/title");

var _paragraph = require("kitten/components/typography/paragraph");

var _text = require("kitten/components/typography/text");

var _closeButton = require("kitten/components/buttons/close-button");

var _arrowIcon = require("kitten/components/icons/arrow-icon");

var _mixIllustration = require("kitten/components/illustrations/mix-illustration");

var _loudspeakerIllustration = require("kitten/components/illustrations/loudspeaker-illustration");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlHeaderTour1 = function KarlHeaderTour1(props) {
  return _react.default.createElement("div", {
    className: "k-Popover",
    role: "dialog",
    "aria-hidden": "true",
    "aria-labelledby": "dialogtitle"
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)('k-Popover__container', 'k-Tour__popover__container')
  }, _react.default.createElement("div", {
    className: "k-Tour__popover__illustration"
  }, _react.default.createElement(_mixIllustration.MixIllustration, {
    className: "k-Tour__popover__svg--primary"
  })), _react.default.createElement(_marger.Marger, {
    top: "4",
    className: "k-Tour__popover__content"
  }, _react.default.createElement(_marger.Marger, {
    bottom: "1"
  }, _react.default.createElement(_title.Title, {
    tag: "p",
    modifier: "senary",
    id: "dialogtitle",
    margin: false
  }, "What\u2018s new")), _react.default.createElement(_marger.Marger, {
    top: "1"
  }, _react.default.createElement(_paragraph.Paragraph, {
    margin: false,
    modifier: "quaternary"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), _react.default.createElement("div", {
    className: "k-Tour__popover__navigation"
  }, _react.default.createElement(_text.Text, {
    className: "k-Tour__popover__step",
    size: "tiny",
    weight: "regular"
  }, "1 on 2"), _react.default.createElement("div", {
    className: "k-Tour__popover__buttons"
  }, _react.default.createElement(_button.Button, {
    title: "Pr\xE9c\xE9dent",
    className: "k-Tour__popover__button",
    modifier: "hydrogen",
    size: "tiny",
    icon: true,
    disabled: true
  }, _react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: "left",
    className: "k-Button__icon k-Button__icon--arrow"
  }), "Back"), _react.default.createElement(_button.Button, {
    title: "Suivant",
    className: (0, _classnames.default)('k-Tour__popover__button', 'k-Tour__popover__button--right'),
    modifier: "helium",
    size: "tiny",
    icon: true,
    iconOnRight: true
  }, "Next", _react.default.createElement(_arrowIcon.ArrowIcon, {
    className: "k-Button__icon k-Button__icon--arrow"
  }))))), _react.default.createElement("div", null, _react.default.createElement(_closeButton.CloseButton, {
    modifier: "beryllium",
    size: "tiny"
  }))));
};

exports.KarlHeaderTour1 = KarlHeaderTour1;

var KarlHeaderTour2 = function KarlHeaderTour2(props) {
  return _react.default.createElement("div", {
    className: "k-Popover",
    role: "dialog",
    "aria-hidden": "true",
    "aria-labelledby": "dialogtitle"
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)('k-Popover__container', 'k-Tour__popover__container')
  }, _react.default.createElement("div", {
    className: "k-Tour__popover__illustration"
  }, _react.default.createElement(_loudspeakerIllustration.LoudspeakerIllustration, {
    className: "k-Tour__popover__svg--primary"
  })), _react.default.createElement(_marger.Marger, {
    top: "4",
    className: "k-Tour__popover__content"
  }, _react.default.createElement(_marger.Marger, {
    bottom: "1"
  }, _react.default.createElement(_title.Title, {
    modifier: "senary",
    margin: false,
    id: "dialogtitle"
  }, "What\u2018s new")), _react.default.createElement(_marger.Marger, {
    top: "1"
  }, _react.default.createElement(_paragraph.Paragraph, {
    modifier: "quaternary",
    margin: false
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")), _react.default.createElement("div", {
    className: "k-Tour__popover__navigation"
  }, _react.default.createElement(_text.Text, {
    className: "k-Tour__popover__step",
    size: "tiny",
    weight: "regular"
  }, "1 on 2"), _react.default.createElement("div", {
    className: "k-Tour__popover__buttons"
  }, _react.default.createElement(_button.Button, {
    title: "Pr\xE9c\xE9dent",
    className: "k-Tour__popover__button",
    modifier: "helium",
    size: "tiny",
    icon: true
  }, _react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: "left",
    className: "k-Button__icon k-Button__icon--arrow"
  }), "Back"), _react.default.createElement(_button.Button, {
    title: "Suivant",
    className: (0, _classnames.default)('k-Tour__popover__button', 'k-Tour__popover__button--right'),
    modifier: "hydrogen",
    size: "tiny",
    icon: true,
    disabled: true,
    iconOnRight: true
  }, "Next", _react.default.createElement(_arrowIcon.ArrowIcon, {
    className: "k-Button__icon k-Button__icon--arrow"
  }))))), _react.default.createElement("div", null, _react.default.createElement(_closeButton.CloseButton, {
    modifier: "beryllium",
    size: "tiny"
  }))));
};

exports.KarlHeaderTour2 = KarlHeaderTour2;