"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselPage = void 0;

var _react = _interopRequireDefault(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _range = require("kitten/helpers/utils/range");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CarouselPageBase =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CarouselPageBase, _React$Component);

  function CarouselPageBase() {
    _classCallCheck(this, CarouselPageBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(CarouselPageBase).apply(this, arguments));
  }

  _createClass(CarouselPageBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          numColumns = _this$props.numColumns,
          itemMinWidth = _this$props.itemMinWidth,
          itemMarginBetween = _this$props.itemMarginBetween,
          renderItem = _this$props.renderItem;
      var rangeCard = (0, _range.createRangeFromZeroTo)(numColumns);
      return _react.default.createElement("div", {
        style: styles.page
      }, rangeCard.map(function (index) {
        return _react.default.createElement("div", {
          key: index,
          style: [styles.item, {
            minWidth: itemMinWidth,
            flexBasis: itemMinWidth,
            marginLeft: index ? itemMarginBetween : 0
          }]
        }, data[index] && renderItem({
          item: data[index]
        }));
      }));
    }
  }]);

  return CarouselPageBase;
}(_react.default.Component);

var styles = {
  page: {
    display: 'flex',
    flexDirection: 'row'
  },
  item: {
    flexGrow: 1,
    flexShrink: 1
  }
};
var CarouselPage = (0, _radium.default)(CarouselPageBase);
exports.CarouselPage = CarouselPage;