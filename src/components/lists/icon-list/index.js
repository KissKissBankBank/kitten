"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconList = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _item = require("./components/item");

var IconList =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(IconList, _PureComponent);

  function IconList() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, IconList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(IconList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.render = function () {
      return _react.default.createElement(StyledNav, null, _react.default.createElement(StyledList, {
        role: "tablist"
      }, _this.props.children));
    };

    return _this;
  }

  return IconList;
}(_react.PureComponent);

exports.IconList = IconList;
IconList.Item = _item.Item;

var StyledNav = _styledComponents.default.nav.withConfig({
  displayName: "icon-list__StyledNav",
  componentId: "sc-19ax3y4-0"
})(["position:relative;padding:", " 0;"], (0, _typography.pxToRem)(1));

var StyledList = _styledComponents.default.ul.withConfig({
  displayName: "icon-list__StyledList",
  componentId: "sc-19ax3y4-1"
})(["margin:0;padding:", " 0;list-style:none;:before{position:absolute;top:0;bottom:0;left:", ";z-index:-1;content:'';border-left:2px dashed ", ";}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(24), _colorsConfig.default.line1);