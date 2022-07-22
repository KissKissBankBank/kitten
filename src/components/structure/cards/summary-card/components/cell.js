"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Cell = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const Cell = _ref => {
  let {
    name,
    className,
    style,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-SummaryCard__cell', className, "k-SummaryCard__cell__" + name),
    style: { ...style,
      '--summaryCardCell-name': name
    }
  }));
};

exports.Cell = Cell;
Cell.propTypes = {
  name: _propTypes.default.string.isRequired
};