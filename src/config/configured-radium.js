"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ConfiguredRadium = void 0;

var _radium = _interopRequireDefault(require("radium"));

// DEPRECATED: This configuration is the Radium default configuration.
var config = {
  userAgent: 'all',
  plugins: [_radium.default.Plugins.mergeStyleArray, _radium.default.Plugins.checkProps, _radium.default.Plugins.resolveMediaQueries, _radium.default.Plugins.resolveInteractionStyles, _radium.default.Plugins.keyframes, _radium.default.Plugins.visited, _radium.default.Plugins.removeNestedStyles, _radium.default.Plugins.prefix, _radium.default.Plugins.checkProps]
};

var ConfiguredRadium = function ConfiguredRadium(component) {
  return (0, _radium.default)(config)(component);
};

exports.ConfiguredRadium = ConfiguredRadium;