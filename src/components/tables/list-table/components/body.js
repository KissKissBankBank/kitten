"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTableBody = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var ListTableBody = _styledComponents.default.ul.withConfig({
  displayName: "body__ListTableBody",
  componentId: "kjc0pl-0"
})(["list-style:none;margin:0;padding:0;"]);

exports.ListTableBody = ListTableBody;