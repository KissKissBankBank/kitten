"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.VerticalCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../../layout/marger");

var _title = require("../../../typography/title");

var _next = require("../../../typography/paragraph/next");

var _horizontalStroke = require("../../../typography/horizontal-stroke");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Img = _styledComponents.default.img.withConfig({
  displayName: "vertical-card__Img",
  componentId: "sc-1myvu7f-0"
})(["width:100%;display:block;margin-bottom:", ";", ""], (0, _typography.pxToRem)(30), _ref => {
  let {
    styles
  } = _ref;
  return styles && (0, _styledComponents.css)(["", ""], styles);
});

const Card = _styledComponents.default.div.withConfig({
  displayName: "vertical-card__Card",
  componentId: "sc-1myvu7f-1"
})(["color:", ";", ""], _colorsConfig.default.font1, _ref2 => {
  let {
    textAlign
  } = _ref2;
  return textAlign && (0, _styledComponents.css)(["text-align:", ";"], textAlign);
});

const StyledHorizontalStroke = (0, _styledComponents.default)(_horizontalStroke.HorizontalStroke).withConfig({
  displayName: "vertical-card__StyledHorizontalStroke",
  componentId: "sc-1myvu7f-2"
})(["margin-top:", ";margin-bottom:", ";width:", ";"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30));

const justifyContent = align => {
  switch (align) {
    case 'left':
      return 'flex-start';

    case 'right':
      return 'flex-end';

    default:
      return 'center';
  }
};

const StrokePosition = _styledComponents.default.div.withConfig({
  displayName: "vertical-card__StrokePosition",
  componentId: "sc-1myvu7f-3"
})(["", ""], _ref3 => {
  let {
    selfAlign
  } = _ref3;
  return selfAlign && (0, _styledComponents.css)(["display:flex;justify-content:", ";"], justifyContent(selfAlign));
});

const VerticalCard = _ref4 => {
  let {
    imageProps,
    title,
    titleTag,
    description,
    descriptionTag,
    withTitleStroke,
    textAlign,
    ...others
  } = _ref4;
  const {
    style,
    ...imgProps
  } = imageProps;
  return /*#__PURE__*/_react.default.createElement(Card, (0, _extends2.default)({
    textAlign: textAlign
  }, others), /*#__PURE__*/_react.default.createElement(Img, (0, _extends2.default)({}, imgProps, {
    styles: style
  })), /*#__PURE__*/_react.default.createElement(_title.Title, {
    modifier: "senary",
    tag: titleTag,
    noMargin: true
  }, title), withTitleStroke && /*#__PURE__*/_react.default.createElement(StrokePosition, {
    selfAlign: textAlign
  }, /*#__PURE__*/_react.default.createElement(StyledHorizontalStroke, null)), description && /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: withTitleStroke ? 0 : 1
  }, /*#__PURE__*/_react.default.createElement(_next.Paragraph, {
    modifier: "tertiary",
    tag: descriptionTag,
    noMargin: true
  }, description)));
};

exports.VerticalCard = VerticalCard;
VerticalCard.propTypes = {
  imageProps: _propTypes.default.shape({
    src: _propTypes.default.string.isRequired,
    alt: _propTypes.default.string.isRequired,
    style: _propTypes.default.object
  }).isRequired,
  title: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  description: _propTypes.default.node,
  descriptionTag: _propTypes.default.string,
  withTitleStroke: _propTypes.default.bool,
  textAlign: _propTypes.default.oneOf(['left', 'center', 'right'])
};
VerticalCard.defaultProps = {
  imageProps: {
    style: {}
  },
  titleTag: 'h1',
  description: '',
  descriptionTag: 'p',
  textAlign: 'center',
  withTitleStroke: false
};