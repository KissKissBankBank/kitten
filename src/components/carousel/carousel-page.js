"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselPage = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _range = require("kitten/helpers/utils/range");

var CarouselPageBase =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(CarouselPageBase, _React$Component);

  function CarouselPageBase() {
    (0, _classCallCheck2.default)(this, CarouselPageBase);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CarouselPageBase).apply(this, arguments));
  }

  (0, _createClass2.default)(CarouselPageBase, [{
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