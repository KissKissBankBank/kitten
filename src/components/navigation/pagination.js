"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pages = pages;
exports.Pagination = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../components/typography/text");

var _arrowIcon = require("../../components/icons/arrow-icon");

var _screenConfig = require("../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _parser = require("../../helpers/utils/parser");

var _mediaQueries = require("../../hoc/media-queries");

var _buttonIcon, _list;

var Text = (0, _radium.default)(_text.Text);
var ArrowIcon = (0, _radium.default)(_arrowIcon.ArrowIcon); // Returns an array with the given bounds

var range = function range(start, end) {
  return Array(end - start + 1).fill().map(function (_, index) {
    return start + index;
  });
}; // Returns an array of size `availableSlots` with page number integers
// and breaks "…" (represented as nulls).


function pages(min, max, currentPage, availableSlots) {
  // 1, 2, 3
  if (max - min < availableSlots) {
    return range(min, max);
  } // 1, 2, 3, …, 42


  if (currentPage - min + 1 < availableSlots - 2) {
    return [].concat((0, _toConsumableArray2.default)(range(min, min - 1 + availableSlots - 2)), [null, max]);
  } // 1, …, 40, 41, 42


  if (max - currentPage < availableSlots - 2) {
    return [min, null].concat((0, _toConsumableArray2.default)(range(max + 1 - (availableSlots - 2), max)));
  } // 1, …, 21, …, 42


  var sides = Math.floor((availableSlots - 4) / 2);
  return [min, null].concat((0, _toConsumableArray2.default)(range(currentPage - sides, currentPage + sides)), [null, max]);
}

var PaginationBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(PaginationBase, _Component);

  function PaginationBase() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, PaginationBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(PaginationBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.preventClickDefault = function (e) {
      return e.preventDefault();
    };

    _this.pageClickHandler = function (number) {
      return function (event) {
        return _this.props.onPageClick(number, event);
      };
    };

    _this.renderPage = function (number, index) {
      if (!number) return _this.renderSpacer(index);
      var isActive = number === _this.props.currentPage;
      var tag = isActive ? 'span' : 'a';
      var href = isActive ? null : _this.props.goToPageHref(number);
      var styleButtonIcon = [styles.group.list.buttonIcon, isActive && styles.group.list.buttonIcon.isActive];
      return _react.default.createElement("li", {
        style: styles.group.list,
        key: "page-".concat(number)
      }, _react.default.createElement(Text, {
        tag: tag,
        weight: "regular",
        size: "tiny",
        href: href,
        key: "link-".concat(number),
        style: styleButtonIcon,
        "aria-label": _this.props.goToPageLabel(number),
        onClick: isActive ? null : _this.pageClickHandler(number)
      }, number));
    };

    return _this;
  }

  (0, _createClass2.default)(PaginationBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          totalPages = _this$props.totalPages,
          currentPage = _this$props.currentPage;
      var size = this.props.viewportIsTabletOrLess ? 5 : 7;
      var pageNumbers = pages(1, totalPages, currentPage, size);
      return _react.default.createElement("nav", {
        role: "navigation",
        "aria-label": this.props['aria-label']
      }, _react.default.createElement("ul", {
        style: styles.group
      }, this.renderArrowButton('left'), pageNumbers.map(this.renderPage), this.renderArrowButton('right')));
    }
  }, {
    key: "renderSpacer",
    value: function renderSpacer(index) {
      return _react.default.createElement("li", {
        key: "spacer-".concat(index),
        style: styles.group.list.points
      }, '…');
    }
  }, {
    key: "renderArrowButton",
    value: function renderArrowButton(direction) {
      var _this$props2 = this.props,
          prevButtonLabel = _this$props2.prevButtonLabel,
          nextButtonLabel = _this$props2.nextButtonLabel,
          currentPage = _this$props2.currentPage,
          totalPages = _this$props2.totalPages;
      var buttonLabel = direction == 'left' ? (0, _parser.parseHtml)(prevButtonLabel) : (0, _parser.parseHtml)(nextButtonLabel);
      var isDisabled = direction == 'left' ? currentPage == 1 : currentPage == totalPages;

      var linkIsHovered = _radium.default.getState(this.state, "link-".concat(direction), ':hover');

      var linkIsFocused = _radium.default.getState(this.state, "link-".concat(direction), ':focus');

      var linkIsActived = _radium.default.getState(this.state, "link-".concat(direction), ':active');

      var styleList = [direction == 'left' && styles.group.list.left, direction == 'right' && styles.group.list.right];
      var styleButtonIcon = [styles.group.list.buttonIcon, isDisabled && styles.group.list.buttonIcon.isDisabled];
      var styleSvg = [styles.group.list.buttonIcon.svg, linkIsHovered && !isDisabled && styles.group.list.buttonIcon.svg.hover, linkIsFocused && !isDisabled && styles.group.list.buttonIcon.svg.focus, linkIsActived && !isDisabled && styles.group.list.buttonIcon.svg.active];
      var number = direction == 'left' ? currentPage == 1 ? 1 : currentPage - 1 : currentPage == totalPages ? totalPages : currentPage + 1;
      return _react.default.createElement("li", {
        style: styleList
      }, _react.default.createElement("a", {
        href: this.props.goToPageHref(number),
        key: "link-".concat(direction),
        style: styleButtonIcon,
        "aria-label": buttonLabel,
        title: buttonLabel,
        tabIndex: isDisabled ? -1 : null,
        onClick: isDisabled ? this.preventClickDefault : this.pageClickHandler(number)
      }, _react.default.createElement(ArrowIcon, {
        direction: direction,
        disabled: isDisabled,
        style: styleSvg
      })));
    }
  }]);
  return PaginationBase;
}(_react.Component);

PaginationBase.propTypes = {
  prevButtonLabel: _propTypes.default.string,
  nextButtonLabel: _propTypes.default.string,
  goToPageLabel: _propTypes.default.func,
  goToPageHref: _propTypes.default.func,
  onPageClick: _propTypes.default.func,
  totalPages: _propTypes.default.number,
  currentPage: _propTypes.default.number,
  'aria-label': _propTypes.default.string
};
PaginationBase.defaultProps = {
  prevButtonLabel: 'Previous page',
  nextButtonLabel: 'Next page',
  goToPageLabel: function goToPageLabel(n) {
    return "Go to page ".concat(n);
  },
  goToPageHref: function goToPageHref(n) {
    return "#".concat(n);
  },
  onPageClick: function onPageClick() {},
  currentPage: 1,
  totalPages: 1,
  'aria-label': 'Pagination navigation'
};
var linkHoveredAndFocused = {
  color: _colorsConfig.default.primary1,
  borderColor: _colorsConfig.default.primary1,
  backgroundColor: _colorsConfig.default.background1
};
var disabledPseudoClass = {
  color: _colorsConfig.default.background1,
  borderColor: _colorsConfig.default.line2,
  backgroundColor: _colorsConfig.default.line2
};
var isActivedPseudoClass = {
  color: _colorsConfig.default.background1,
  borderColor: _colorsConfig.default.primary1,
  backgroundColor: _colorsConfig.default.primary1
};
var styles = {
  group: {
    display: 'inline-flex',
    padding: 0,
    list: (_list = {
      listStyle: 'none',
      marginRight: 0
    }, (0, _defineProperty2.default)(_list, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      marginRight: '8px',
      marginLeft: '8px'
    }), (0, _defineProperty2.default)(_list, "lastChild", {
      marginRight: 0
    }), (0, _defineProperty2.default)(_list, "left", (0, _defineProperty2.default)({
      marginRight: '30px',
      listStyle: 'none'
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      marginRight: '22px'
    })), (0, _defineProperty2.default)(_list, "right", (0, _defineProperty2.default)({
      marginLeft: '30px',
      listStyle: 'none'
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      marginLeft: '22px'
    })), (0, _defineProperty2.default)(_list, "points", (0, _defineProperty2.default)({
      listStyle: 'none',
      textDecoration: 'none',
      textAlign: 'center',
      alignSelf: 'center',
      width: '40px'
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      marginLeft: '8px',
      marginRight: '8px',
      width: '50px'
    })), (0, _defineProperty2.default)(_list, "buttonIcon", (_buttonIcon = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      cursor: 'pointer',
      width: '40px',
      height: '40px',
      borderRadius: 0,
      borderWidth: 0,
      borderStyle: 'solid',
      textDecoration: 'none',
      outline: 'none',
      color: _colorsConfig.default.font1,
      borderColor: _colorsConfig.default.line1,
      backgroundColor: _colorsConfig.default.background1,
      ':hover': linkHoveredAndFocused,
      ':focus': linkHoveredAndFocused,
      ':active': isActivedPseudoClass
    }, (0, _defineProperty2.default)(_buttonIcon, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      width: '50px',
      height: '50px',
      borderWidth: '2px'
    }), (0, _defineProperty2.default)(_buttonIcon, "isActive", {
      cursor: 'auto',
      color: _colorsConfig.default.background1,
      borderColor: _colorsConfig.default.primary1,
      backgroundColor: _colorsConfig.default.primary1,
      ':hover': isActivedPseudoClass,
      ':focus': isActivedPseudoClass,
      ':active': isActivedPseudoClass
    }), (0, _defineProperty2.default)(_buttonIcon, "isDisabled", {
      color: _colorsConfig.default.background1,
      borderColor: _colorsConfig.default.line2,
      backgroundColor: _colorsConfig.default.line2,
      cursor: 'not-allowed',
      ':hover': disabledPseudoClass,
      ':focus': disabledPseudoClass,
      ':active': disabledPseudoClass
    }), (0, _defineProperty2.default)(_buttonIcon, "svg", {
      alignSelf: 'center',
      margin: '0',
      padding: '0',
      width: '6px',
      height: '6px',
      pointerEvents: 'none',
      hover: {
        fill: _colorsConfig.default.primary1
      },
      focus: {
        fill: _colorsConfig.default.primary1
      },
      active: {
        fill: _colorsConfig.default.background1
      },
      isDisabled: {
        fill: _colorsConfig.default.background1
      }
    }), _buttonIcon)), _list)
  }
};
var Pagination = (0, _mediaQueries.mediaQueries)((0, _radium.default)(PaginationBase), {
  viewportIsTabletOrLess: true
});
exports.Pagination = Pagination;