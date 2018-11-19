"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlLinkBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _linkBox = require("kitten/components/box/link-box");

var _grid = require("kitten/components/grid/grid");

var _title = require("kitten/karl/examples/title");

var _container = require("kitten/components/grid/container");

var _marger = require("kitten/components/layout/marger");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var KarlLinkBox = function KarlLinkBox() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    "col-m": "6"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "Link box"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_linkBox.LinkBox, {
    title: "In enim justo, rhoncus ut, imperdiet a."
  })))), _react.default.createElement(_grid.GridCol, {
    "col-m": "6"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "Link box with text"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_linkBox.LinkBox, {
    title: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    text: "Aenean leo ligula, porttitor eu, vitae eleifend ac, enimiquam ante."
  }))))));
};

exports.KarlLinkBox = KarlLinkBox;