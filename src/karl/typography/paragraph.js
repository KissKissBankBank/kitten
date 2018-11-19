"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlParagraphWithLink = exports.KarlParagraphQuaternary = exports.KarlParagraphTertiary = exports.KarlParagraphSecondary = exports.KarlParagraph = void 0;

var _react = _interopRequireDefault(require("react"));

var _paragraph = require("kitten/components/typography/paragraph");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlParagraph = function KarlParagraph(props) {
  return _react.default.createElement(_paragraph.Paragraph, props, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.");
};

exports.KarlParagraph = KarlParagraph;

var KarlParagraphSecondary = function KarlParagraphSecondary() {
  return _react.default.createElement(_paragraph.Paragraph, {
    modifier: "secondary"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.");
};

exports.KarlParagraphSecondary = KarlParagraphSecondary;

var KarlParagraphTertiary = function KarlParagraphTertiary() {
  return _react.default.createElement(_paragraph.Paragraph, {
    modifier: "tertiary"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.");
};

exports.KarlParagraphTertiary = KarlParagraphTertiary;

var KarlParagraphQuaternary = function KarlParagraphQuaternary() {
  return _react.default.createElement(_paragraph.Paragraph, {
    modifier: "quaternary"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.");
};

exports.KarlParagraphQuaternary = KarlParagraphQuaternary;

var KarlParagraphWithLink = function KarlParagraphWithLink() {
  return _react.default.createElement(_paragraph.Paragraph, {
    modifier: "quaternary"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud", ' ', _react.default.createElement("a", {
    href: "#",
    className: "k-Paragraph__link"
  }, "exercitation ullamco laboris nisi ut aliquip"), ' ', "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.");
};

exports.KarlParagraphWithLink = KarlParagraphWithLink;