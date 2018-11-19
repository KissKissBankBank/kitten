"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _radium = require("radium");

var _grid = require("kitten/components/grid/grid");

var _arrowIcon = require("kitten/components/icons/arrow-icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(0, _react2.storiesOf)('Icons', module).add('ArrowIcon', (0, _addonInfo.withInfo)('The ArrowIcon is an arrow that can be used in 4 differents directions.')(function () {
  return _react.default.createElement("div", null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "10"
  }, _react.default.createElement("div", null, _react.default.createElement(_arrowIcon.ArrowIcon, {
    version: "solid",
    direction: "top"
  })), _react.default.createElement("div", null, _react.default.createElement(_arrowIcon.ArrowIcon, {
    version: "solid",
    direction: "right"
  })), _react.default.createElement("div", null, _react.default.createElement(_arrowIcon.ArrowIcon, {
    version: "solid",
    direction: "bottom"
  })), _react.default.createElement("div", null, _react.default.createElement(_arrowIcon.ArrowIcon, {
    version: "solid",
    direction: "left"
  })), _react.default.createElement("div", null, _react.default.createElement(_arrowIcon.ArrowIcon, {
    version: "solid",
    direction: "top",
    disabled: true
  })))));
}));