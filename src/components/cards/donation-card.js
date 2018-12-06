"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DonationCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../components/layout/marger");

var _grid = require("../../components/grid/grid");

var _title = require("../../components/typography/title");

var _horizontalStroke = require("../../components/layout/horizontal-stroke");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _mediaQueries = require("../../hoc/media-queries");

var _textInputWithUnitForm = require("../../components/form/text-input-with-unit-form");

var DonationCardComponent = function DonationCardComponent(_ref) {
  var viewportIsSOrLess = _ref.viewportIsSOrLess,
      isDisabled = _ref.isDisabled,
      title = _ref.title,
      titleTag = _ref.titleTag,
      donationForm = _ref.donationForm,
      version = _ref.version,
      others = (0, _objectWithoutProperties2.default)(_ref, ["viewportIsSOrLess", "isDisabled", "title", "titleTag", "donationForm", "version"]);
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
  })), _react.default.createElement(_textInputWithUnitForm.TextInputWithUnitForm, (0, _extends2.default)({}, donationForm, {
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