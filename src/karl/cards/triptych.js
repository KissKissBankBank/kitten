"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlTriptych = void 0;

var _react = _interopRequireDefault(require("react"));

var _title = require("kitten/components/typography/title");

var _verticalCardWithAction = require("kitten/components/cards/vertical-card-with-action");

var _triptych = require("kitten/components/cards/triptych");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlTriptych = function KarlTriptych(props) {
  return _react.default.createElement(_triptych.Triptych, {
    title: _react.default.createElement(_title.Title, {
      tag: "h2",
      modifier: "secondary",
      margin: false
    }, "Main title goes here !"),
    item1: _react.default.createElement(_verticalCardWithAction.VerticalCardWithAction, {
      imageProps: {
        src: "http://via.placeholder.com/349x465/19b4fa/19b4fa",
        alt: ''
      },
      title: "Lorem ipsum dolor sit amet",
      button: "Lorem"
    }),
    item2: _react.default.createElement(_verticalCardWithAction.VerticalCardWithAction, {
      imageProps: {
        src: "http://via.placeholder.com/349x465/ff8846/ff8846",
        alt: ''
      },
      title: "Donsectetur adipiscing elit",
      description: "Nulla ut orci velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      button: "Ipsum"
    }),
    item3: _react.default.createElement(_verticalCardWithAction.VerticalCardWithAction, {
      imageProps: {
        src: "http://via.placeholder.com/349x465/61d079/61d079",
        alt: ''
      },
      title: "Praesent tincidunt ultrices sem",
      button: "Dolor"
    })
  });
};

exports.KarlTriptych = KarlTriptych;