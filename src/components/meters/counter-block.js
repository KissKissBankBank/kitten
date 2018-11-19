"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CounterBlock = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _title = require("kitten/components/typography/title");

var _text = require("kitten/components/typography/text");

var _marger = require("kitten/components/layout/marger");

var _horizontalStroke = require("kitten/components/layout/horizontal-stroke");

var _screenConfig = require("kitten/constants/screen-config");

var _mediaQueries = require("kitten/hoc/media-queries");

var _counterText;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Text = (0, _radium.default)(_text.Text);
var Title = (0, _radium.default)(_title.Title);

var CounterBlockBase =
/*#__PURE__*/
function (_Component) {
  _inherits(CounterBlockBase, _Component);

  function CounterBlockBase() {
    _classCallCheck(this, CounterBlockBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(CounterBlockBase).apply(this, arguments));
  }

  _createClass(CounterBlockBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          titleTag = _this$props.titleTag,
          subTitle = _this$props.subTitle,
          subTitleTag = _this$props.subTitleTag,
          counter = _this$props.counter,
          viewportIsMobile = _this$props.viewportIsMobile;
      var titleSize = viewportIsMobile ? 'quinary' : 'tertiary';
      var subTitleSize = viewportIsMobile ? 'tiny' : 'huge';
      var margin = viewportIsMobile ? 2 : 4;
      return _react.default.createElement(_radium.StyleRoot, {
        style: styles.counterBlock
      }, _react.default.createElement(_marger.Marger, {
        bottom: margin
      }, _react.default.createElement(Title, {
        modifier: titleSize,
        margin: false,
        tag: titleTag
      }, title)), _react.default.createElement("div", {
        style: styles.flexGrid
      }, _react.default.createElement("div", {
        style: styles.strokeContainer,
        className: "k-u-hidden@m-down"
      }, _react.default.createElement(_horizontalStroke.HorizontalStroke, {
        style: styles.stroke,
        size: "big"
      })), _react.default.createElement(Text, {
        style: styles.counterText,
        fontStyle: "italic",
        weight: "bold",
        tag: titleTag
      }, counter), _react.default.createElement("div", {
        style: styles.strokeContainer,
        className: "k-u-hidden@m-down"
      }, _react.default.createElement(_horizontalStroke.HorizontalStroke, {
        style: styles.stroke,
        size: "big"
      }))), _react.default.createElement(_marger.Marger, {
        top: margin
      }, _react.default.createElement(Text, _defineProperty({
        style: styles.subTitle,
        size: subTitleSize,
        tag: subTitleTag,
        fontStyle: "italic",
        weight: "bold"
      }, "tag", "p"), subTitle)));
    }
  }]);

  return CounterBlockBase;
}(_react.Component);

CounterBlockBase.defaultProps = {
  title: null,
  titleTag: 'p',
  subTitle: null,
  subTitleTag: 'p',
  counter: '0'
};
var styles = {
  counterBlock: {
    textAlign: 'center'
  },
  flexGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stroke: {
    width: '100%',
    height: 6
  },
  strokeContainer: {
    flexGrow: 2
  },
  counterText: (_counterText = {
    fontSize: '3rem',
    lineHeight: 0.7,
    whiteSpace: 'nowrap',
    display: 'block',
    paddingBottom: 4,
    margin: 0,
    flexGrow: 1,
    textIndent: '-1.5rem'
  }, _defineProperty(_counterText, "@media (min-width: ".concat(_screenConfig.ScreenConfig.XS.min, "px)"), {
    fontSize: '4.125rem'
  }), _defineProperty(_counterText, "@media (min-width: ".concat(_screenConfig.ScreenConfig.S.min, "px)"), {
    fontSize: '6rem',
    paddingBottom: 6
  }), _defineProperty(_counterText, "@media (min-width: ".concat(_screenConfig.ScreenConfig.M.min, "px)"), {
    fontSize: '7.3rem',
    paddingBottom: 7
  }), _defineProperty(_counterText, "@media (min-width: ".concat(_screenConfig.ScreenConfig.L.min, "px)"), {
    fontSize: '9.9rem',
    paddingBottom: 10
  }), _counterText),
  subTitle: {
    margin: 0
  }
};
var CounterBlock = (0, _mediaQueries.withMediaQueries)({
  viewportIsMobile: true
})(CounterBlockBase);
exports.CounterBlock = CounterBlock;