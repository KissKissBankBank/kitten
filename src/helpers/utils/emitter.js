"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.emitter = void 0;

var _eventEmitter = _interopRequireDefault(require("event-emitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emitter = (0, _eventEmitter.default)(); // DEPRECATED: do not use default export.

exports.emitter = emitter;
var _default = emitter;
exports.default = _default;