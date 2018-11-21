"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleCarousel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireDefault(require("radium"));

var _marger = require("kitten/components/layout/marger");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _range = require("kitten/helpers/utils/range");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Marger = (0, _radium.default)(_marger.Marger);

var SimpleCarouselBase =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleCarouselBase, _Component);

  function SimpleCarouselBase(props) {
    var _this;

    _classCallCheck(this, SimpleCarouselBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleCarouselBase).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showPagination", function () {
      return _this.state.totalPagesCount > 1;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePageClick", function (numPage) {
      return function () {
        _this.setState({
          currentPageNumber: numPage
        });
      };
    });

    _this.state = {
      currentPageNumber: 0,
      totalPagesCount: _react.default.Children.toArray(props.children).length
    };
    return _this;
  }

  _createClass(SimpleCarouselBase, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _this$state = this.state,
          totalPagesCount = _this$state.totalPagesCount,
          currentPageNumber = _this$state.currentPageNumber;
      var rangePage = (0, _range.createRangeFromZeroTo)(totalPagesCount);
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
        style: styles.pagination
      }, rangePage.map(function (numPage) {
        var pageStyle = [styles.page, numPage === currentPageNumber && styles.page.active];
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
    display: 'flex',
    justifyContent: 'center'
  },
  page: {
    width: 6,
    height: 6,
    background: _colorsConfig.default.background1,
    marginRight: 5,
    cursor: 'pointer',
    active: {
      transition: "background .4s ease-in-out",
      background: _colorsConfig.default.primary1
    }
  }
};
var SimpleCarousel = (0, _radium.default)(SimpleCarouselBase);
exports.SimpleCarousel = SimpleCarousel;