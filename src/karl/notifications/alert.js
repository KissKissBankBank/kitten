"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlAlertWithMarkdown = exports.KarlAlertWithButton = exports.KarlAlert = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _alert = require("kitten/components/notifications/alert");

var _button = require("kitten/components/buttons/button");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: make helper to manage class.
var markdownRenderers = {
  Paragraph: function Paragraph(props) {
    return _react.default.createElement("p", {
      className: "k-Alert__paragraph"
    }, props.children);
  },
  Strong: function Strong(props) {
    return _react.default.createElement("strong", {
      className: "k-Alert__strong"
    }, props.children);
  },
  Link: function Link(props) {
    return _react.default.createElement("a", {
      className: (0, _classnames.default)('k-Alert__link', 'k-Alert__strong'),
      href: props.href
    }, props.children);
  },
  List: function List(props) {
    return _react.default.createElement("ul", {
      className: "k-Alert__list"
    }, props.children);
  }
};
var markdownExample = "It's very easy to make some words **bold** and " + 'other words *italic* with Markdown.\n\nYou can even ' + '[link to components!](#)\n\n' + 'Sometimes you want numbered lists:\n\n' + '1. One\n2. Two\n3. Three\n\nSometimes you want bullet points:\n\n' + '* Start a line with a star\n* Profit!\n\nAlternatively,\n\n' + '- Dashes work just as well\n- And if you have sub points, put two spaces ' + 'before the dash or star:\n\t- Like this\n\t- And this';

var KarlAlert = function KarlAlert(props) {
  return _react.default.createElement(_alert.Alert, props, _react.default.createElement(_reactMarkdown.default, {
    renderers: markdownRenderers,
    source: "Lorem ipsum dolor sit amet, [consectetuer adipiscing](#) elit."
  }));
};

exports.KarlAlert = KarlAlert;

var KarlAlertWithButton = function KarlAlertWithButton(props) {
  return _react.default.createElement(_alert.Alert, props, _react.default.createElement(_reactMarkdown.default, {
    renderers: markdownRenderers,
    source: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }), _react.default.createElement(_button.Button, {
    modifier: "carbon",
    className: "k-u-margin-top-double"
  }, "Button"));
};

exports.KarlAlertWithButton = KarlAlertWithButton;

var KarlAlertWithMarkdown = function KarlAlertWithMarkdown(props) {
  return _react.default.createElement(_alert.Alert, null, _react.default.createElement(_reactMarkdown.default, {
    renderers: markdownRenderers,
    source: markdownExample
  }));
};

exports.KarlAlertWithMarkdown = KarlAlertWithMarkdown;