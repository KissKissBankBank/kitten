"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

// React 16 Enzyme adapter
_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
}); // Make Enzyme functions available in all test files without importing


global.shallow = _enzyme.shallow;
global.render = _enzyme.render;
global.mount = _enzyme.mount;