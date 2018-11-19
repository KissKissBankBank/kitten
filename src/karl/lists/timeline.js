"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlTimeline = void 0;

var _react = _interopRequireWildcard(require("react"));

var _timeline = require("kitten/components/lists/timeline");

var _text = require("kitten/components/typography/text");

var _paragraph = require("kitten/components/typography/paragraph");

var _marger = require("kitten/components/layout/marger");

var _title = require("kitten/karl/examples/title");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var KarlTimeline = function KarlTimeline(props) {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_title.KarlExampleTitle, null, "Large timeline"), _react.default.createElement(_timeline.Timeline, null, _react.default.createElement("div", null, _react.default.createElement(_marger.Marger, {
    bottom: "1"
  }, _react.default.createElement(_text.Text, {
    size: "huge",
    weight: "bold"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")), _react.default.createElement(_text.Text, {
    size: "tiny"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta blandit est in tincidunt. Aenean et orci pellentesque, iaculis turpis id, elementum nisl.")), _react.default.createElement(_paragraph.Paragraph, {
    margin: false,
    modifier: "primary"
  }, "Ut porta blandit est in tincidunt. Aenean et orci pellentesque, iaculis turpis id, elementum nisl. Donec ultrices turpis eget sem congue, eu fringilla sem hendrerit."), _react.default.createElement("span", null, "Maecenas vestibulum purus vitae nulla aliquet, nec faucibus ex semper."), _react.default.createElement("span", null, "Aliquam in luctus libero. Phasellus pretium posuere leo, in semper odio ullamcorper at. Suspendisse placerat tincidunt tincidunt."), _react.default.createElement(_react.Fragment, null, "Ut ut arcu maximus, condimentum metus nec, luctus odio. Aliquam maximus lacus et mauris convallis varius. Vivamus volutpat et metus at consequat.")), _react.default.createElement(_title.KarlExampleTitle, null, "Thin timeline"), _react.default.createElement(_timeline.Timeline, {
    itemHeight: "thin"
  }, _react.default.createElement(_react.Fragment, null, "Ut porta blandit est in tincidunt. Aenean et orci pellentesque, iaculis turpis id, elementum nisl."), _react.default.createElement(_react.Fragment, null, "Maecenas vestibulum purus vitae nulla aliquet, nec faucibus ex semper."), _react.default.createElement(_react.Fragment, null, "Aliquam in luctus libero. Phasellus pretium posuere leo, in semper odio ullamcorper at. Suspendisse placerat tincidunt tincidunt.")));
};

exports.KarlTimeline = KarlTimeline;