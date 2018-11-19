"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DonationCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("kitten/components/layout/marger");

var _grid = require("kitten/components/grid/grid");

var _title = require("kitten/components/typography/title");

var _horizontalStroke = require("kitten/components/layout/horizontal-stroke");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _mediaQueries = require("kitten/hoc/media-queries");

var _textInputWithUnitForm = require("kitten/components/form/text-input-with-unit-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DonationCardComponent = function DonationCardComponent(_ref) {
  var viewportIsSOrLess = _ref.viewportIsSOrLess,
      isDisabled = _ref.isDisabled,
      title = _ref.title,
      titleTag = _ref.titleTag,
      donationForm = _ref.donationForm,
      version = _ref.version,
      others = _objectWithoutProperties(_ref, ["viewportIsSOrLess", "isDisabled", "title", "titleTag", "donationForm", "version"]);

  var isTinyVersion = version === 'tiny' || viewportIsSOrLess;
  var gridColProps = isTinyVersion ? {} : {
    'col-m': 10,
    'offset-m': 1,
    'col-l': 8,
    'offset-l': 2
  };
  var cardStyles = [others.style, styles.card, isDisabled && styles.card.isDisabled];
  return _react.default.createElement("div", {
    style: cardStyles
  }, _react.default.createElement(_marger.Marger, {
    bottom: isTinyVersion ? 3 : 4,
    top: isTinyVersion ? 3 : 4
  }, _react.default.createElement(_grid.Grid, {
    style: styles.card.content
  }, _react.default.createElement(_grid.GridCol, gridColProps, _react.default.createElement(_marger.Marger, {
    bottom: "2"
  }, _react.default.createElement(_title.Title, {
    modifier: isTinyVersion ? 'quinary' : 'quaternary',
    margin: false,
    tag: titleTag,
    style: styles.text
  }, title)), _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "3"
  }, _react.default.createElement(_horizontalStroke.HorizontalStroke, {
    size: "big",
    style: styles.horizontalStroke
  })), _react.default.createElement(_textInputWithUnitForm.TextInputWithUnitForm, _extends({}, donationForm, {
    align: "center",
    formIsDisabled: isDisabled,
    version: version
  }))))));
};

DonationCardComponent.propTypes = {
  viewportIsSOrLess: _propTypes.default.bool.isRequired,
  title: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  isDisabled: _propTypes.default.bool,
  donationForm: _propTypes.default.object.isRequired,
  version: _propTypes.default.oneOf(['default', 'tiny'])
};
DonationCardComponent.defaultProps = {
  titleTag: 'h2',
  isDisabled: false,
  version: 'default'
};
var styles = {
  card: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: _colorsConfig.default.line1,
    content: {
      paddingLeft: 20,
      paddingRight: 20
    },
    isDisabled: {
      filter: 'grayscale(1) opacity(.4)',
      cursor: 'not-allowed'
    }
  },
  text: {
    color: _colorsConfig.default.font1,
    textAlign: 'center'
  },
  horizontalStroke: {
    margin: '0 auto'
  }
};
var DonationCard = (0, _mediaQueries.mediaQueries)((0, _radium.default)(DonationCardComponent), {
  viewportIsSOrLess: true
});
exports.DonationCard = DonationCard;