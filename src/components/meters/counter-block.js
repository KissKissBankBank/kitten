"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CounterBlock = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _title = require("../../components/typography/title");

var _text = require("../../components/typography/text");

var _marger = require("../../components/layout/marger");

var _horizontalStroke = require("../../components/layout/horizontal-stroke");

var _screenConfig = require("../../constants/screen-config");

var _mediaQueries = require("../../hoc/media-queries");

var _counterText;

var Text = (0, _radium.default)(_text.Text);
var Title = (0, _radium.default)(_title.Title);

var CounterBlockBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CounterBlockBase, _Component);

  function CounterBlockBase() {
    (0, _classCallCheck2.default)(this, CounterBlockBase);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CounterBlockBase).apply(this, arguments));
  }

  (0, _createClass2.default)(CounterBlockBase, [{
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
      }, _react.default.createElement(Text, (0, _defineProperty2.default)({
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
  }, (0, _defineProperty2.default)(_counterText, "@media (min-width: ".concat(_screenConfig.ScreenConfig.XS.min, "px)"), {
    fontSize: '4.125rem'
  }), (0, _defineProperty2.default)(_counterText, "@media (min-width: ".concat(_screenConfig.ScreenConfig.S.min, "px)"), {
    fontSize: '6rem',
    paddingBottom: 6
  }), (0, _defineProperty2.default)(_counterText, "@media (min-width: ".concat(_screenConfig.ScreenConfig.M.min, "px)"), {
    fontSize: '7.3rem',
    paddingBottom: 7
  }), (0, _defineProperty2.default)(_counterText, "@media (min-width: ".concat(_screenConfig.ScreenConfig.L.min, "px)"), {
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