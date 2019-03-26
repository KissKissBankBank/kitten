"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavTabCarousel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _prev = require("./components/prev");

var _next = require("./components/next");

var _pagination = require("./components/pagination");

var _colorsConfig = _interopRequireDefault(require("./../../../constants/colors-config"));

var _reactElements = require("./../../../helpers/react/react-elements");

var _typography = require("./../../../helpers/utils/typography");

var _styledComponents2 = require("./components/styled-components");

var NavTabCarouselStyles = _styledComponents.default.div.withConfig({
  displayName: "nav-tab-carousel__NavTabCarouselStyles",
  componentId: "sc-1fg6mhx-0"
})(["box-sizing:border-box;display:flex;width:100%;justify-content:space-between;align-items:center;background-color:", ";padding:", " ", ";min-width:", ";"], _colorsConfig.default.font1, (0, _typography.pxToRem)(32), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(320));

var NavTabCarousel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(NavTabCarousel, _Component);

  function NavTabCarousel() {
    (0, _classCallCheck2.default)(this, NavTabCarousel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NavTabCarousel).apply(this, arguments));
  }

  (0, _createClass2.default)(NavTabCarousel, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var prev = (0, _reactElements.getReactElementsByType)({
        children: children,
        type: NavTabCarousel.Prev
      })[0];
      var next = (0, _reactElements.getReactElementsByType)({
        children: children,
        type: NavTabCarousel.Next
      })[0];
      var pagination = (0, _reactElements.getReactElementsByType)({
        children: children,
        type: NavTabCarousel.Pagination
      })[0];
      return _react.default.createElement(NavTabCarouselStyles, null, prev || _react.default.createElement(_styledComponents2.LeftEmptyContainer, null), pagination, next || _react.default.createElement(_styledComponents2.RightEmptyContainer, null));
    }
  }]);
  return NavTabCarousel;
}(_react.Component);

exports.NavTabCarousel = NavTabCarousel;
NavTabCarousel.Prev = _prev.Prev;
NavTabCarousel.Next = _next.Next;
NavTabCarousel.Pagination = _pagination.Pagination;