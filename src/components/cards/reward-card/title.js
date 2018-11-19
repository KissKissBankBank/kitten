"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardTitle = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireDefault(require("radium"));

var _text = require("kitten/components/typography/text");

var _horizontalStroke = require("kitten/components/layout/horizontal-stroke");

var _marger = require("kitten/components/layout/marger");

var _typography = require("kitten/helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Text = (0, _radium.default)(_text.Text);
var HorizontalStroke = (0, _radium.default)(_horizontalStroke.HorizontalStroke);

var RewardCardTitleBase =
/*#__PURE__*/
function (_Component) {
  _inherits(RewardCardTitleBase, _Component);

  function RewardCardTitleBase() {
    _classCallCheck(this, RewardCardTitleBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(RewardCardTitleBase).apply(this, arguments));
  }

  _createClass(RewardCardTitleBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          tagName = _this$props.tagName,
          disabled = _this$props.disabled;
      var titleStyles = [styles.base, disabled && styles.disabled];
      var strokeStyles = [styles.stroke.base, disabled && styles.stroke.disabled];
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Text, {
        fontStyle: "italic",
        weight: "bold",
        tag: tagName,
        color: "font1",
        style: titleStyles
      }, children), _react.default.createElement(HorizontalStroke, {
        size: "default",
        style: strokeStyles
      }));
    }
  }]);

  return RewardCardTitleBase;
}(_react.Component);

_defineProperty(RewardCardTitleBase, "propTypes", {
  children: _propTypes.default.string,
  tagName: _propTypes.default.string,
  disabled: _propTypes.default.bool
});

_defineProperty(RewardCardTitleBase, "defaultProps", {
  children: '',
  tagName: 'h6',
  disabled: false
});

var styles = {
  base: {
    fontSize: (0, _typography.pxToRem)(24),
    lineHeight: (0, _typography.pxToRem)(34),
    margin: "0 0 ".concat((0, _typography.pxToRem)(15), " 0")
  },
  stroke: {
    base: {
      marginBottom: (0, _typography.pxToRem)(30)
    },
    disabled: {
      backgroundColor: _colorsConfig.default.font2
    }
  },
  disabled: {
    color: _colorsConfig.default.font2,
    cursor: 'not-allowed'
  }
};
var RewardCardTitle = (0, _radium.default)(RewardCardTitleBase);
exports.RewardCardTitle = RewardCardTitle;