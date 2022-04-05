"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.NavTabCarousel = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _prev = require("./components/prev");

var _next = require("./components/next");

var _pagination = require("./components/pagination");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _getReactElements = require("../../../../helpers/react/get-react-elements");

var _typography = require("../../../../helpers/utils/typography");

var _styledComponents2 = require("./components/styled-components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var NavTabCarouselStyles = _styledComponents.default.div.withConfig({
  displayName: "nav-tab-carousel__NavTabCarouselStyles",
  componentId: "sc-8z67up-0"
})(["box-sizing:border-box;display:flex;width:100%;justify-content:space-between;align-items:center;background-color:", ";padding:", " ", ";min-width:", ";"], _colorsConfig.default.font1, (0, _typography.pxToRem)(32), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(320));

var NavTabCarousel = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(NavTabCarousel, _Component);

  function NavTabCarousel() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NavTabCarousel.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    var prev = (0, _getReactElements.getReactElementsByType)({
      children: children,
      type: NavTabCarousel.Prev
    })[0];
    var next = (0, _getReactElements.getReactElementsByType)({
      children: children,
      type: NavTabCarousel.Next
    })[0];
    var pagination = (0, _getReactElements.getReactElementsByType)({
      children: children,
      type: NavTabCarousel.Pagination
    })[0];
    return /*#__PURE__*/_react.default.createElement(NavTabCarouselStyles, null, prev || /*#__PURE__*/_react.default.createElement(_styledComponents2.LeftEmptyContainer, null), pagination, next || /*#__PURE__*/_react.default.createElement(_styledComponents2.RightEmptyContainer, null));
  };

  return NavTabCarousel;
}(_react.Component);

exports.NavTabCarousel = NavTabCarousel;
NavTabCarousel.Prev = _prev.Prev;
NavTabCarousel.Next = _next.Next;
NavTabCarousel.Pagination = _pagination.Pagination;