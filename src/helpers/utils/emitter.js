"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.emitter = void 0;

var _eventEmitter = _interopRequireDefault(require("event-emitter"));

var emitter = (0, _eventEmitter.default)(); // DEPRECATED: do not use default export.

exports.emitter = emitter;
var _default = emitter;
exports.default = _default;