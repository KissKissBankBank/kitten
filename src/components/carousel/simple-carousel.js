"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleCarousel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireDefault(require("radium"));

var _marger = require("../../components/layout/marger");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _range = require("../../helpers/utils/range");

var Marger = (0, _radium.default)(_marger.Marger);

var SimpleCarouselBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SimpleCarouselBase, _Component);

  function SimpleCarouselBase(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SimpleCarouselBase);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SimpleCarouselBase).call(this, props));

    _this.showPagination = function () {
      return _this.state.totalPagesCount > 1;
    };

    _this.handlePageClick = function (numPage) {
      return function () {
        _this.setState({
          currentPageNumber: numPage
        });
      };
    };

    _this.state = {
      currentPageNumber: 0,
      totalPagesCount: _react.default.Children.toArray(props.children).length
    };
    return _this;
  }

  (0, _createClass2.default)(SimpleCarouselBase, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          activePaginationColor = _this$props.activePaginationColor,
          paginationColor = _this$props.paginationColor,
          paginationAlign = _this$props.paginationAlign;
      var _this$state = this.state,
          totalPagesCount = _this$state.totalPagesCount,
          currentPageNumber = _this$state.currentPageNumber;
      var rangePage = (0, _range.createRangeFromZeroTo)(totalPagesCount);
      var paginationStyle = [styles.pagination, paginationAlign && {
        justifyContent: paginationAlign
      }];
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Marger, {
        bottom: this.showPagination() ? 4 : 0,
        style: styles.container
      }, _react.default.Children.map(children, function (item, index) {
        var itemStyle = [styles.item, index !== currentPageNumber && styles.item.hide];
        return _react.default.createElement("div", {
          key: item.key,
          style: itemStyle
        }, item);
      })), this.showPagination() && _react.default.createElement(Marger, {
        top: "4",
        bottom: "4",
        style: paginationStyle
      }, rangePage.map(function (numPage) {
        var pageStyle = [styles.page, paginationColor && {
          background: paginationColor
        }, numPage === currentPageNumber && {
          background: activePaginationColor
        }];
        return _react.default.createElement("div", {
          key: numPage,
          style: pageStyle,
          onClick: _this2.handlePageClick(numPage)
        });
      })));
    }
  }]);
  return SimpleCarouselBase;
}(_react.Component);

SimpleCarouselBase.propTypes = {
  activePaginationColor: _propTypes.default.string,
  paginationColor: _propTypes.default.string,
  paginationAlign: _propTypes.default.oneOf(['start', 'center', 'space-between', 'space-around'])
};
SimpleCarouselBase.defaultProps = {
  activePaginationColor: _colorsConfig.default.primary1,
  paginationColor: _colorsConfig.default.background1,
  paginationAlign: 'center'
};
var styles = {
  container: {
    display: 'grid',
    gap: 0
  },
  item: {
    gridColumn: 1,
    gridRow: 1,
    visibility: 'visible',
    opacity: 1,
    transition: "all .8s ease-in-out",
    hide: {
      visibility: 'hidden',
      opacity: 0,
      pointerEvents: 'none'
    }
  },
  pagination: {
    display: 'flex'
  },
  page: {
    width: 6,
    height: 6,
    marginRight: 5,
    cursor: 'pointer',
    transition: "background .4s ease-in-out"
  }
};
var SimpleCarousel = (0, _radium.default)(SimpleCarouselBase);
exports.SimpleCarousel = SimpleCarousel;