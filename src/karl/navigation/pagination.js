"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlPaginationExamples = void 0;

var _react = _interopRequireDefault(require("react"));

var _pagination = require("kitten/components/navigation/pagination");

var _row = require("kitten/components/grid/row");

var _radium = require("radium");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlPaginationExamples = function KarlPaginationExamples() {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_row.Row, null, _react.default.createElement(_pagination.Pagination, {
    totalPages: 1,
    currentPage: 1
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 2,
    currentPage: 1
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 2,
    currentPage: 2
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 7,
    currentPage: 1
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 42,
    currentPage: 1
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 42,
    currentPage: 2
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 42,
    currentPage: 3
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 42,
    currentPage: 4
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 42,
    currentPage: 5
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 42,
    currentPage: 6
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 42,
    currentPage: 38
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 42,
    currentPage: 39
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 42,
    currentPage: 40
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 42,
    currentPage: 41
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 42,
    currentPage: 42
  }), _react.default.createElement(_pagination.Pagination, {
    totalPages: 9999,
    currentPage: 9042
  })));
};

exports.KarlPaginationExamples = KarlPaginationExamples;