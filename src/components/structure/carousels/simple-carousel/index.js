"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SimpleCarousel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _range = require("../../../../helpers/utils/range");

var _typography = require("../../../../helpers/utils/typography");

var _visuallyHidden = require("../../../accessibility/visually-hidden");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledWrapper = _styledComponents.default.div.withConfig({
  displayName: "simple-carousel__StyledWrapper",
  componentId: "sc-wg0blv-0"
})(["display:flex;flex-direction:column;gap:", ";@media ", "{gap:", ";}.k-SimpleCarousel__container{display:grid;gap:0;> div{grid-column:1;grid-row:1;visibility:visible;opacity:1;transition:all calc(var(--transition-timing) * 3) var(--transition-timing-function);&[aria-hidden]{visibility:hidden;opacity:0;pointer-events:none;}}}.k-SimpleCarousel__pagination{display:flex;justify-content:var(--simple-carousel-paginationAlign);gap:", ";li{list-style-type:none;}}.k-SimpleCarousel__button{position:relative;display:block;width:", ";height:", ";border-radius:var(--border-radius-rounded);transition:background var(--transition);background:var(--simple-carousel-paginationColor);outline-offset:", ";&::after{content:'';position:absolute;top:", ";left:", ";right:", ";bottom:", ";}&:hover,&[aria-selected='true']{background:var(--simple-carousel-activePaginationColor);}}"], (0, _typography.pxToRem)(40), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(-4), (0, _typography.pxToRem)(-4), (0, _typography.pxToRem)(-4), (0, _typography.pxToRem)(-4));

const SimpleCarousel = _ref => {
  let {
    className,
    children,
    containerStyle,
    activePaginationColor,
    paginationColor,
    paginationAlign,
    paginationStyle,
    bulletStyle,
    id,
    ...props
  } = _ref;
  const paginationRef = (0, _react.useRef)(null);
  const [currentPageNumber, setCurrentPageNumber] = (0, _react.useState)(0);
  const [totalPagesCount] = (0, _react.useState)(_react.Children.toArray(children).length);

  const handlePageClick = numPage => () => {
    setCurrentPageNumber(numPage);
  };

  const handleKeyDown = event => {
    if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
      const tabs = paginationRef.current.querySelectorAll('button');
      tabs[currentPageNumber].setAttribute('tabindex', -1); // default: ArrowLeft

      let pageNumber = currentPageNumber - 1;

      if (pageNumber < 0) {
        pageNumber = totalPagesCount - 1;
      } // change in case of ArrowRight


      if (event.key === 'ArrowRight') {
        pageNumber = currentPageNumber + 1;

        if (pageNumber >= totalPagesCount) {
          pageNumber = 0;
        }
      }

      setCurrentPageNumber(pageNumber);
      tabs[pageNumber].setAttribute('tabindex', 0);
      tabs[pageNumber].focus();
    }
  };

  const rangePage = (0, _range.createRangeFromZeroTo)(totalPagesCount);
  return /*#__PURE__*/_react.default.createElement(StyledWrapper, (0, _extends2.default)({
    className: (0, _classnames.default)('k-SimpleCarousel', className),
    style: {
      '--simple-carousel-paginationAlign': paginationAlign,
      '--simple-carousel-paginationColor': paginationColor,
      '--simple-carousel-activePaginationColor': activePaginationColor
    }
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    style: containerStyle,
    className: "k-SimpleCarousel__container"
  }, _react.Children.map(children, (item, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item.key,
      "aria-hidden": index !== currentPageNumber || null,
      id: id + "_carouselItem_" + index,
      "aria-labelledby": id + "_carouselTab_" + index,
      role: "tabpanel"
    }, item);
  })), totalPagesCount > 1 && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SimpleCarousel__pagination",
    style: paginationStyle,
    role: "tablist",
    onKeyDown: handleKeyDown,
    ref: paginationRef
  }, rangePage.map(numPage => {
    return /*#__PURE__*/_react.default.createElement("button", {
      key: numPage,
      className: "k-SimpleCarousel__button k-u-reset-button",
      id: id + "_carouselTab_" + numPage,
      type: "button",
      "aria-controls": id + "_carouselItem_" + numPage,
      role: "tab",
      "aria-selected": numPage === currentPageNumber,
      style: bulletStyle,
      onClick: handlePageClick(numPage)
    }, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, "Page " + (numPage + 1)));
  })));
};

exports.SimpleCarousel = SimpleCarousel;
SimpleCarousel.propTypes = {
  id: _propTypes.default.string.isRequired,
  containerStyle: _propTypes.default.object,
  activePaginationColor: _propTypes.default.string,
  paginationColor: _propTypes.default.string,
  paginationAlign: _propTypes.default.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
  paginationStyle: _propTypes.default.object,
  bulletStyle: _propTypes.default.object
};
SimpleCarousel.defaultProps = {
  containerStyle: {},
  activePaginationColor: _colorsConfig.default.font1,
  paginationColor: _colorsConfig.default.line2,
  paginationAlign: 'start',
  paginationStyle: {},
  bulletStyle: {}
};