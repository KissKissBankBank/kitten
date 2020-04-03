"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _range = require("../../../../helpers/utils/range");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledPage = _styledComponents.default.div.withConfig({
  displayName: "carousel-page__StyledPage",
  componentId: "sc-12ynwqa-0"
})(["display:flex;flex-direction:row;"]);

var StyledItem = _styledComponents.default.div.withConfig({
  displayName: "carousel-page__StyledItem",
  componentId: "sc-12ynwqa-1"
})(["flex-grow:1;flex-shrink:1;", " ", ""], function (_ref) {
  var itemMinWidth = _ref.itemMinWidth;
  return (0, _styledComponents.css)(["min-width:", "px;flex-basis:", "px;"], itemMinWidth, itemMinWidth);
}, function (_ref2) {
  var index = _ref2.index,
      itemMarginBetween = _ref2.itemMarginBetween;
  return index && (0, _styledComponents.css)(["margin-left:", "px;"], itemMarginBetween);
});

var CarouselPage = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(CarouselPage, _Component);

  var _super = _createSuper(CarouselPage);

  function CarouselPage() {
    (0, _classCallCheck2.default)(this, CarouselPage);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CarouselPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          numColumns = _this$props.numColumns,
          itemMinWidth = _this$props.itemMinWidth,
          itemMarginBetween = _this$props.itemMarginBetween,
          renderItem = _this$props.renderItem;
      var rangeCard = (0, _range.createRangeFromZeroTo)(numColumns);
      return _react.default.createElement(StyledPage, null, rangeCard.map(function (index) {
        return _react.default.createElement(StyledItem, {
          key: index,
          index: index,
          itemMinWidth: itemMinWidth,
          itemMarginBetween: itemMarginBetween
        }, renderItem[index]);
      }));
    }
  }]);
  return CarouselPage;
}(_react.Component);

exports.CarouselPage = CarouselPage;