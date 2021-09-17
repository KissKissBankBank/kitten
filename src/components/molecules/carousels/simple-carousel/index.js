"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SimpleCarousel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.array.map.js");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _range = require("../../../../helpers/utils/range");

var _typography = require("../../../../helpers/utils/typography");

var _visuallyHidden = require("../../../../components/accessibility/visually-hidden");

var _excluded = ["children", "containerStyle", "activePaginationColor", "paginationColor", "paginationAlign", "paginationStyle", "bulletStyle"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "simple-carousel__StyledContainer",
  componentId: "sc-1bgum05-0"
})(["", " display:-ms-grid;display:grid;grid-gap:0;gap:0;> div{grid-column:1;grid-row:1;visibility:visible;opacity:1;transition:all 0.8s ease-in-out;&[aria-hidden='true']{visibility:hidden;opacity:0;pointer-events:none;}}button,a{&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}"], function (_ref) {
  var addBottomMargin = _ref.addBottomMargin;
  return addBottomMargin && (0, _styledComponents.css)(["margin-bottom:", ";"], (0, _typography.pxToRem)(40));
}, _colorsConfig.default.primary3, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary3);

var StyledPagination = _styledComponents.default.div.withConfig({
  displayName: "simple-carousel__StyledPagination",
  componentId: "sc-1bgum05-1"
})(["justify-content:", ";margin:", " 0;padding:0;display:flex;li{list-style-type:none;line-height:", ";}"], function (_ref2) {
  var paginationAlign = _ref2.paginationAlign;
  return paginationAlign;
}, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(6));

var StyledPaginationButton = _styledComponents.default.button.withConfig({
  displayName: "simple-carousel__StyledPaginationButton",
  componentId: "sc-1bgum05-2"
})(["margin-right:", ";width:", ";height:", ";border:0;padding:0;border-radius:0;appearance:none;cursor:pointer;transition:background 0.4s ease-in-out;background:", ";vertical-align:top;&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&[aria-selected='true']{background:", ";}"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), function (_ref3) {
  var paginationColor = _ref3.paginationColor;
  return paginationColor;
}, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, function (_ref4) {
  var activePaginationColor = _ref4.activePaginationColor;
  return activePaginationColor;
});

var SimpleCarousel = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(SimpleCarousel, _Component);

  function SimpleCarousel(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.showPagination = function () {
      return _this.state.totalPagesCount > 1;
    };

    _this.updateCurrentPageNumber = function (pageNumber) {
      _this.setState({
        currentPageNumber: pageNumber
      });
    };

    _this.handlePageClick = function (numPage) {
      return function () {
        _this.updateCurrentPageNumber(numPage);
      };
    };

    _this.handleKeyDown = function (event) {
      if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
        var _this$state = _this.state,
            currentPageNumber = _this$state.currentPageNumber,
            totalPagesCount = _this$state.totalPagesCount;

        var tabs = _this.paginationRef.current.querySelectorAll('button');

        tabs[currentPageNumber].setAttribute('tabindex', -1); // default: ArrowLeft

        var pageNumber = currentPageNumber - 1;

        if (pageNumber < 0) {
          pageNumber = totalPagesCount - 1;
        } // change in case of ArrowRight


        if (event.key === 'ArrowRight') {
          pageNumber = currentPageNumber + 1;

          if (pageNumber >= totalPagesCount) {
            pageNumber = 0;
          }
        }

        _this.updateCurrentPageNumber(pageNumber);

        tabs[pageNumber].setAttribute('tabindex', 0);
        tabs[pageNumber].focus();
      }
    };

    _this.paginationRef = /*#__PURE__*/(0, _react.createRef)();
    _this.state = {
      currentPageNumber: 0,
      totalPagesCount: _react.default.Children.toArray(props.children).length
    };
    return _this;
  }

  var _proto = SimpleCarousel.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        containerStyle = _this$props.containerStyle,
        activePaginationColor = _this$props.activePaginationColor,
        paginationColor = _this$props.paginationColor,
        paginationAlign = _this$props.paginationAlign,
        paginationStyle = _this$props.paginationStyle,
        bulletStyle = _this$props.bulletStyle,
        others = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);
    var _this$state2 = this.state,
        totalPagesCount = _this$state2.totalPagesCount,
        currentPageNumber = _this$state2.currentPageNumber;
    var rangePage = (0, _range.createRangeFromZeroTo)(totalPagesCount);
    var id = this.props.id ? this.props.id + '_' : '';
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledContainer, (0, _extends2.default)({
      style: containerStyle,
      addBottomMargin: this.showPagination()
    }, others), _react.default.Children.map(children, function (item, index) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: item.key,
        "aria-hidden": index !== currentPageNumber,
        id: id + "carouselItem_" + index,
        "aria-labelledby": id + "carouselTab_" + index,
        role: "tabpanel"
      }, item);
    })), this.showPagination() && /*#__PURE__*/_react.default.createElement(StyledPagination, {
      style: paginationStyle,
      paginationAlign: paginationAlign,
      role: "tablist",
      onKeyDown: this.handleKeyDown,
      ref: this.paginationRef
    }, rangePage.map(function (numPage) {
      return /*#__PURE__*/_react.default.createElement(StyledPaginationButton, {
        key: numPage,
        id: id + "carouselTab_" + numPage,
        type: "button",
        "aria-controls": id + "carouselItem_" + numPage,
        role: "tab",
        "aria-selected": numPage === currentPageNumber,
        paginationColor: paginationColor,
        activePaginationColor: activePaginationColor,
        style: bulletStyle,
        onClick: _this2.handlePageClick(numPage)
      }, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, "Page " + (numPage + 1)));
    })));
  };

  return SimpleCarousel;
}(_react.Component);

exports.SimpleCarousel = SimpleCarousel;
SimpleCarousel.propTypes = {
  id: _propTypes.default.string,
  containerStyle: _propTypes.default.object,
  activePaginationColor: _propTypes.default.string,
  paginationColor: _propTypes.default.string,
  paginationAlign: _propTypes.default.oneOf(['start', 'center', 'space-between', 'space-around']),
  paginationStyle: _propTypes.default.object,
  bulletStyle: _propTypes.default.object
};
SimpleCarousel.defaultProps = {
  id: '',
  containerStyle: {},
  activePaginationColor: _colorsConfig.default.primary1,
  paginationColor: _colorsConfig.default.background1,
  paginationAlign: 'center',
  paginationStyle: {},
  bulletStyle: {}
};