"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandBoardWithButtonItemList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _index = require("./index");

var _ = require("../../../..");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var fadeInAnimation = function fadeInAnimation() {
  return (0, _styledComponents.keyframes)(["0%:{opacity:0;}100%:{opacity:1;}fadeIn;"]);
};

var fadeOutAnimation = function fadeOutAnimation() {
  return (0, _styledComponents.keyframes)(["0%:{opacity:1;height:auto}100%:{opacity:0;height:0;}fadeOut;"]);
};

var StyledButtonListItem = (0, _styledComponents.default)(_.Text).withConfig({
  displayName: "examples__StyledButtonListItem",
  componentId: "sc-5uxjow-0"
})(["margin:0;padding:0;line-height:", ";"], (0, _.pxToRem)(19.2));

var StyledButtonList = _styledComponents.default.div.withConfig({
  displayName: "examples__StyledButtonList",
  componentId: "sc-5uxjow-1"
})(["margin:", " ", ";padding:0;"], (0, _.pxToRem)(16), (0, _.pxToRem)(0));

var ExpandBoardWithButtonItemList = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(ExpandBoardWithButtonItemList, _PureComponent);

  var _super = _createSuper(ExpandBoardWithButtonItemList);

  function ExpandBoardWithButtonItemList() {
    var _this;

    (0, _classCallCheck2.default)(this, ExpandBoardWithButtonItemList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
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
        return {
          animationDuration: '1s',
          animationIterationCount: 1,
          animationFillMode: 'forwards',
          animationName: fadeInAnimation,
          animationTimingFunction: 'ease-in-out',
          animationDelay: "".concat(0.2 * key, "s")
        };
      }

      return {
        animationDuration: '.6s',
        animationIterationCount: 1,
        animationFillMode: 'forwards',
        animationName: fadeOutAnimation,
        animationTimingFunction: 'ease-in-out',
        animationDelay: "".concat(0.1 * key, "s")
      };
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
          buttonText = _this$props.buttonText,
          borderRadius = _this$props.borderRadius,
          withBottomBorderRadius = _this$props.withBottomBorderRadius,
          big = _this$props.big;
      return /*#__PURE__*/_react.default.createElement(_index.ExpandBoard, {
        onClick: this.handleClick,
        withAnimation: withAnimation
      }, /*#__PURE__*/_react.default.createElement(_index.ExpandBoard.Button, {
        expandChildren: expandedButtonText,
        borderRadius: borderRadius,
        big: big
      }, buttonText), /*#__PURE__*/_react.default.createElement(_index.ExpandBoard.Content, null, /*#__PURE__*/_react.default.createElement(_.List, {
        withBottomBorderRadius: withBottomBorderRadius
      }, this.list.map(function (item, key) {
        return /*#__PURE__*/_react.default.createElement(_.List.ButtonItem, (0, _extends2.default)({
          key: item.size,
          disabled: item.disabled
        }, _this2.buttonListItemStyle(key)), /*#__PURE__*/_react.default.createElement(StyledButtonList, null, /*#__PURE__*/_react.default.createElement(StyledButtonListItem, {
          tag: "p",
          weight: "regular",
          color: "font1",
          size: "tiny"
        }, item.size), /*#__PURE__*/_react.default.createElement(_.Text, {
          tag: "small",
          color: item.disabled ? 'font2' : 'font1',
          size: "micro",
          weight: "light"
        }, item.availability)));
      }))));
    }
  }]);
  return ExpandBoardWithButtonItemList;
}(_react.PureComponent);

exports.ExpandBoardWithButtonItemList = ExpandBoardWithButtonItemList;