"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTableHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _gridConfig = require("../../../../constants/grid-config");

var _typography = require("../../../../helpers/utils/typography");

var _context = require("./context");

var StyledHeader = _styledComponents.default.header.withConfig({
  displayName: "header__StyledHeader",
  componentId: "sc-1f8str-0"
})(["position:sticky;top:0;background:", ";color:", ";"], _colorsConfig.default.font1, _colorsConfig.default.background1);

var StyledList = _styledComponents.default.ul.withConfig({
  displayName: "header__StyledList",
  componentId: "sc-1f8str-1"
})(["height:", ";margin:0 auto;max-width:", ";padding-left:", ";padding-right:", ";display:flex;justify-content:space-between;align-items:center;list-style:none;@media screen and (min-width:", "px){padding-left:", ";padding-right:", ";}"], (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING));

var ListTableHeader = function ListTableHeader(props) {
  return _react.default.createElement(StyledHeader, null, _react.default.createElement(StyledList, null, _react.default.createElement(_context.Context.Consumer, null, function (_ref) {
    var id = _ref.id;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.Children.map(props.children, function (child, index) {
      return _react.default.cloneElement(child, {
        id: "".concat(id, "-col-").concat(index)
      });
    }));
  })));
};

exports.ListTableHeader = ListTableHeader;