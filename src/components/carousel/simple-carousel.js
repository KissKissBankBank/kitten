"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleCarousel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _range = require("../../helpers/utils/range");

var _typography = require("../../helpers/utils/typography");

var _visuallyHidden = require("../../components/accessibility/visually-hidden");

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "simple-carousel__StyledContainer",
  componentId: "t6k8ig-0"
})(["", " display:-ms-grid;display:grid;grid-gap:0;gap:0;> div{grid-column:1;grid-row:1;visibility:visible;opacity:1;transition:all 0.8s ease-in-out;&[aria-hidden='true']{visibility:hidden;opacity:0;pointer-events:none;}}"], function (_ref) {
  var addBottomMargin = _ref.addBottomMargin;
  return addBottomMargin && (0, _styledComponents.css)(["margin-bottom:", ";"], (0, _typography.pxToRem)(40));
});

var StyledPagination = _styledComponents.default.div.withConfig({
  displayName: "simple-carousel__StyledPagination",
  componentId: "t6k8ig-1"
})(["justify-content:", ";margin:", " 0;padding:0;display:flex;li{list-style-type:none;line-height:", ";}"], function (_ref2) {
  var paginationAlign = _ref2.paginationAlign;
  return paginationAlign;
}, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(6));

var StyledPaginationButton = _styledComponents.default.button.withConfig({
  displayName: "simple-carousel__StyledPaginationButton",
  componentId: "t6k8ig-2"
})(["margin-right:", ";width:", ";height:", ";border:0;padding:0;border-radius:0;appearance:none;cursor:pointer;transition:background 0.4s ease-in-out;background:", ";vertical-align:top;&[aria-selected='true']{background:", ";}"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), function (_ref3) {
  var paginationColor = _ref3.paginationColor;
  return paginationColor;
}, function (_ref4) {
  var activePaginationColor = _ref4.activePaginationColor;
  return activePaginationColor;
});

var SimpleCarousel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SimpleCarousel, _Component);

  function SimpleCarousel(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SimpleCarousel);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SimpleCarousel).call(this, props));

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

    _this.paginationRef = (0, _react.createRef)();
    _this.state = {
      currentPageNumber: 0,
      totalPagesCount: _react.default.Children.toArray(props.children).length
    };
    return _this;
  }

  (0, _createClass2.default)(SimpleCarousel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          containerStyle = _this$props.containerStyle,
          activePaginationColor = _this$props.activePaginationColor,
          paginationColor = _this$props.paginationColor,
          paginationAlign = _this$props.paginationAlign,
          paginationStyle = _this$props.paginationStyle,
          bulletStyle = _this$props.bulletStyle,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["children", "containerStyle", "activePaginationColor", "paginationColor", "paginationAlign", "paginationStyle", "bulletStyle"]);
      var _this$state2 = this.state,
          totalPagesCount = _this$state2.totalPagesCount,
          currentPageNumber = _this$state2.currentPageNumber;
      var rangePage = (0, _range.createRangeFromZeroTo)(totalPagesCount);
      var id = this.props.id ? this.props.id + '_' : '';
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(StyledContainer, (0, _extends2.default)({
        style: containerStyle,
        addBottomMargin: this.showPagination()
      }, others), _react.default.Children.map(children, function (item, index) {
        return _react.default.createElement("div", {
          key: item.key,
          "aria-hidden": index !== currentPageNumber,
          id: "".concat(id, "carouselItem_").concat(index),
          "aria-labelledby": "".concat(id, "carouselTab_").concat(index),
          role: "tabpanel"
        }, item);
      })), this.showPagination() && _react.default.createElement(StyledPagination, {
        style: paginationStyle,
        paginationAlign: paginationAlign,
        role: "tablist",
        onKeyDown: this.handleKeyDown,
        ref: this.paginationRef
      }, rangePage.map(function (numPage) {
        return _react.default.createElement(StyledPaginationButton, {
          key: numPage,
          id: "".concat(id, "carouselTab_").concat(numPage),
          type: "button",
          "aria-controls": "".concat(id, "carouselItem_").concat(numPage),
          role: "tab",
          "aria-selected": numPage === currentPageNumber,
          paginationColor: paginationColor,
          activePaginationColor: activePaginationColor,
          style: bulletStyle,
          onClick: _this2.handlePageClick(numPage)
        }, _react.default.createElement(_visuallyHidden.VisuallyHidden, null, "Page ".concat(numPage + 1)));
      })));
    }
  }]);
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