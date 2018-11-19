"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlInformationBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _title = require("kitten/components/typography/title");

var _paragraph = require("kitten/components/typography/paragraph");

var _informationBox = require("kitten/components/box/information-box");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var KarlInformationBox = function KarlInformationBox() {
  return _react.default.createElement(_informationBox.InformationBox, {
    title: "Lorem ipsum dolor sit amet"
  }, _react.default.createElement(_paragraph.Paragraph, {
    modifier: "quaternary",
    margin: false
  }, "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."));
};

exports.KarlInformationBox = KarlInformationBox;