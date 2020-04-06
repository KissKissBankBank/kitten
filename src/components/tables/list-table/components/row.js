"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTableRow = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _gridConfig = require("../../../../constants/grid-config");

var _typography = require("../../../../helpers/utils/typography");

var _context = require("./context");

var StyledRow = _styledComponents.default.li.withConfig({
  displayName: "row__StyledRow",
  componentId: "sc-1vlimsn-0"
})(["border-bottom:2px solid ", ";", ""], _colorsConfig.default.line1, function (_ref) {
  var isHighlighted = _ref.isHighlighted;
  return isHighlighted && (0, _styledComponents.css)(["background:", ";"], _colorsConfig.default.primary6);
});

var StyledItemList = _styledComponents.default.ul.withConfig({
  displayName: "row__StyledItemList",
  componentId: "sc-1vlimsn-1"
})(["height:", ";margin:0 auto;max-width:", ";padding-left:", ";padding-right:", ";display:flex;justify-content:space-between;align-items:flex-end;list-style:none;@media screen and (min-width:", "px){padding-left:", ";padding-right:", ";}"], (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING));

var ListTableRow = function ListTableRow(_ref2) {
  var children = _ref2.children,
      listProps = _ref2.listProps,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["children", "listProps"]);
  return /*#__PURE__*/_react.default.createElement(StyledRow, others, /*#__PURE__*/_react.default.createElement(StyledItemList, listProps, /*#__PURE__*/_react.default.createElement(_context.Context.Consumer, null, function (_ref3) {
    var id = _ref3.id;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _react.default.Children.map(children, function (child, index) {
      return _react.default.cloneElement(child, {
        'aria-describedby': "".concat(id, "-col-").concat(index)
      });
    }));
  })));
};

exports.ListTableRow = ListTableRow;
ListTableRow.defaultProps = {
  isHighlighted: false,
  listProps: {}
};
ListTableRow.propTypes = {
  isHighlighted: _propTypes.default.bool,
  listProps: _propTypes.default.object
};