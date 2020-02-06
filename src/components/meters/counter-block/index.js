"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CounterBlock = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _title = require("../../../components/typography/title");

var _text = require("../../../components/typography/text");

var _marger = require("../../../components/layout/marger");

var _horizontalStroke = require("../../../components/layout/horizontal-stroke");

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var Container = _styledComponents.default.div.withConfig({
  displayName: "counter-block__Container",
  componentId: "dpxp7s-0"
})(["text-align:center;.styledText{line-height:0.7;white-space:nowrap;display:flex;padding-bottom:", ";margin:0;flex-grow:1;font-size:", ";justify-content:center;@media (min-width:", "px){font-size:", ";}@media (min-width:", "px){font-size:", ";padding-bottom:", ";}@media (min-width:", "px){font-size:", ";padding-bottom:", ";}@media (min-width:", "px){font-size:", ";padding-bottom:", ";}}.styledSubTitle{margin:0;}"], (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(50), _screenConfig.ScreenConfig.XS.min, (0, _typography.pxToRem)(66), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(96), (0, _typography.pxToRem)(6), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(116), (0, _typography.pxToRem)(7), _screenConfig.ScreenConfig.L.min, (0, _typography.pxToRem)(158), (0, _typography.pxToRem)(10));

var FlexContainer = _styledComponents.default.div.withConfig({
  displayName: "counter-block__FlexContainer",
  componentId: "dpxp7s-1"
})(["display:flex;justify-content:center;align-items:center;"]);

var StrokeContainer = _styledComponents.default.div.withConfig({
  displayName: "counter-block__StrokeContainer",
  componentId: "dpxp7s-2"
})(["flex-grow:2;.styledStroke{width:100%;height:", ";}"], (0, _typography.pxToRem)(6));

var Unit = _styledComponents.default.span.withConfig({
  displayName: "counter-block__Unit",
  componentId: "dpxp7s-3"
})(["display:inline-flex;align-self:center;font-size:0.5em;"]);

var isString = function isString(val) {
  return typeof val === 'string';
};

var CounterBlock = function CounterBlock(_ref) {
  var _React$createElement;

  var title = _ref.title,
      titleTag = _ref.titleTag,
      subTitle = _ref.subTitle,
      subTitleTag = _ref.subTitleTag,
      counter = _ref.counter,
      unit = _ref.unit;
  var margin = {
    default: 2,
    fromS: 4
  };
  return _react.default.createElement(Container, null, isString(title) ? _react.default.createElement(_marger.Marger, {
    bottom: margin
  }, _react.default.createElement(_title.Title, {
    modifier: "tertiary",
    margin: false,
    tag: titleTag
  }, title)) : title, _react.default.createElement(FlexContainer, null, _react.default.createElement(StrokeContainer, {
    className: "k-u-hidden@m-down"
  }, _react.default.createElement(_horizontalStroke.HorizontalStroke, {
    className: "styledStroke",
    size: "big"
  })), isString(counter) ? _react.default.createElement(_text.Text, {
    className: "styledText",
    weight: "bold",
    tag: titleTag,
    fontStyle: "italic"
  }, counter, unit && _react.default.createElement(Unit, null, "\xA0", unit)) : counter, _react.default.createElement(StrokeContainer, {
    className: "k-u-hidden@m-down"
  }, _react.default.createElement(_horizontalStroke.HorizontalStroke, {
    className: "styledStroke",
    size: "big"
  }))), isString(subTitle) ? _react.default.createElement(_marger.Marger, {
    top: margin
  }, _react.default.createElement(_text.Text, (_React$createElement = {
    className: "styledSubTitle",
    size: "huge",
    tag: subTitleTag
  }, (0, _defineProperty2.default)(_React$createElement, "tag", "p"), (0, _defineProperty2.default)(_React$createElement, "fontStyle", "italic"), _React$createElement), subTitle)) : subTitle);
};

exports.CounterBlock = CounterBlock;
CounterBlock.propTypes = {
  title: _propTypes.default.node,
  titleTag: _propTypes.default.string,
  subTitle: _propTypes.default.node,
  subTitleTag: _propTypes.default.string,
  counter: _propTypes.default.node,
  unit: _propTypes.default.string
};
CounterBlock.defaultProps = {
  title: null,
  titleTag: 'p',
  subTitle: null,
  subTitleTag: 'p',
  counter: '0',
  unit: null
};