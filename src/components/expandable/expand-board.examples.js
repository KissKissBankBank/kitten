"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandBoardWithButtonItemList = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _expandBoard = require("kitten/components/expandable/expand-board");

var _list = require("kitten/components/lists/list");

var _grid = require("kitten/components/grid/grid");

var _text = require("kitten/components/typography/text");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var ExpandBoardWithButtonItemList =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ExpandBoardWithButtonItemList, _Component);

  function ExpandBoardWithButtonItemList() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ExpandBoardWithButtonItemList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ExpandBoardWithButtonItemList)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.list = [{
      size: 'Size XS',
      availability: 'Availability: 10/30',
      disabled: false
    }, {
      size: 'Size M',
      availability: 'Availability: 10/30',
      disabled: true
    }, {
      size: 'Size XXL',
      availability: 'Availability: 10/30',
      disabled: false
    }];
    _this.state = {
      isShrinking: false,
      expanded: false
    };

    _this.handleClick = function (_ref) {
      var isShrinking = _ref.isShrinking,
          expanded = _ref.expanded;

      _this.setState({
        isShrinking: isShrinking,
        expanded: expanded
      });
    };

    _this.buttonListItemStyle = function (key) {
      if (!_this.props.withAnimation) return null;

      if (_this.state.expanded) {
        return [styles.buttonListItem.expandAnimation, {
          animationDelay: "".concat(0.2 * key, "s")
        }];
      }

      return [styles.buttonListItem.shrinkAnimation, {
        animationDelay: "".concat(0.1 * key, "s")
      }];
    };

    return _this;
  }

  (0, _createClass2.default)(ExpandBoardWithButtonItemList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          withAnimation = _this$props.withAnimation,
          expandedButtonText = _this$props.expandedButtonText,
          buttonText = _this$props.buttonText;
      return _react.default.createElement(_expandBoard.ExpandBoard, {
        onClick: this.handleClick,
        withAnimation: withAnimation
      }, _react.default.createElement(_expandBoard.ExpandBoard.Button, {
        expandChildren: expandedButtonText
      }, buttonText), _react.default.createElement(_expandBoard.ExpandBoard.Content, null, _react.default.createElement(_list.List, null, this.list.map(function (item, key) {
        return _react.default.createElement(_list.List.ButtonItem, {
          key: item.size,
          disabled: item.disabled,
          style: _this2.buttonListItemStyle(key)
        }, _react.default.createElement("div", {
          style: styles.buttonListItem.base
        }, _react.default.createElement(_text.Text, {
          tag: "p",
          weight: "regular",
          color: "font1",
          size: "tiny",
          style: styles.buttonListItem.content
        }, item.size), _react.default.createElement(_text.Text, {
          tag: "small",
          color: item.disabled ? 'font2' : 'font1',
          size: "micro"
        }, item.availability)));
      }))));
    }
  }]);
  return ExpandBoardWithButtonItemList;
}(_react.Component);

exports.ExpandBoardWithButtonItemList = ExpandBoardWithButtonItemList;

var fadeInAnimation = _radium.default.keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
}, 'fadeIn');

var fadeOutAnimation = _radium.default.keyframes({
  '0%': {
    opacity: 1,
    height: 'auto'
  },
  '100%': {
    opacity: 0,
    height: 0
  }
}, 'fadeOut');

var styles = {
  buttonListItem: {
    content: {
      margin: 0,
      padding: 0,
      lineHeight: '1.2rem'
    },
    base: {
      margin: '1rem 0',
      padding: 0
    },
    expandAnimation: {
      opacity: 0,
      animationDuration: '1s',
      animationIterationCount: 1,
      animationFillMode: 'forwards',
      animationName: fadeInAnimation,
      animationTimingFunction: 'ease-in-out'
    },
    shrinkAnimation: {
      opacity: 1,
      animationDuration: '.6s',
      animationIterationCount: 1,
      animationFillMode: 'forwards',
      animationName: fadeOutAnimation,
      animationTimingFunction: 'ease-in-out'
    }
  }
};