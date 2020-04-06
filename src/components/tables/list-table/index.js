"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTable = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _header = require("./components/header");

var _body = require("./components/body");

var _row = require("./components/row");

var _col = require("./components/col");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _context = require("./components/context");

var StyledSection = _styledComponents.default.section.withConfig({
  displayName: "list-table__StyledSection",
  componentId: "sc-1q4tayn-0"
})(["&,& *{box-sizing:border-box;}"]);

var ListTable = function ListTable(_ref) {
  var id = _ref.id,
      children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["id", "children"]);
  return /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
    value: {
      id: id
    }
  }, /*#__PURE__*/_react.default.createElement(StyledSection, (0, _extends2.default)({
    id: id
  }, props), children));
};

exports.ListTable = ListTable;
ListTable.Header = _header.ListTableHeader;
ListTable.Body = _body.ListTableBody;
ListTable.Row = _row.ListTableRow;
ListTable.Col = _col.ListTableCol;
ListTable.propTypes = {
  id: _propTypes.default.string.isRequired
};