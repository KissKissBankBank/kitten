"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionMarkWithTooltip = void 0;

var _withTooltip = require("kitten/hoc/with-tooltip");

var _buttonQuestionMarkIcon = require("kitten/components/buttons/button-question-mark-icon");

var QuestionMarkWithTooltip = (0, _withTooltip.withTooltip)(_buttonQuestionMarkIcon.ButtonQuestionMarkIcon, {});
exports.QuestionMarkWithTooltip = QuestionMarkWithTooltip;