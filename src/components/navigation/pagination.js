"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pages = pages;
exports.Pagination = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("kitten/components/typography/text");

var _arrowIcon = require("kitten/components/icons/arrow-icon");

var _screenConfig = require("kitten/constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _parser = require("kitten/helpers/utils/parser");

var _mediaQueries = require("kitten/hoc/media-queries");

var _buttonIcon, _list;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
    return _toConsumableArray(range(min, min - 1 + availableSlots - 2)).concat([null, max]);
  } // 1, …, 40, 41, 42


  if (max - currentPage < availableSlots - 2) {
    return [min, null].concat(_toConsumableArray(range(max + 1 - (availableSlots - 2), max)));
  } // 1, …, 21, …, 42


  var sides = Math.floor((availableSlots - 4) / 2);
  return [min, null].concat(_toConsumableArray(range(currentPage - sides, currentPage + sides)), [null, max]);
}

var PaginationBase =
/*#__PURE__*/
function (_Component) {
  _inherits(PaginationBase, _Component);

  function PaginationBase() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PaginationBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaginationBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "preventClickDefault", function (e) {
      return e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pageClickHandler", function (number) {
      return function (event) {
        return _this.props.onPageClick(number, event);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderPage", function (number, index) {
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
    });

    return _this;
  }

  _createClass(PaginationBase, [{
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

_defineProperty(PaginationBase, "propTypes", {
  prevButtonLabel: _propTypes.default.string,
  nextButtonLabel: _propTypes.default.string,
  goToPageLabel: _propTypes.default.func,
  goToPageHref: _propTypes.default.func,
  onPageClick: _propTypes.default.func,
  totalPages: _propTypes.default.number,
  currentPage: _propTypes.default.number,
  'aria-label': _propTypes.default.string
});

_defineProperty(PaginationBase, "defaultProps", {
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
});

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
    }, _defineProperty(_list, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      marginRight: '8px',
      marginLeft: '8px'
    }), _defineProperty(_list, "lastChild", {
      marginRight: 0
    }), _defineProperty(_list, "left", _defineProperty({
      marginRight: '30px',
      listStyle: 'none'
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      marginRight: '22px'
    })), _defineProperty(_list, "right", _defineProperty({
      marginLeft: '30px',
      listStyle: 'none'
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      marginLeft: '22px'
    })), _defineProperty(_list, "points", _defineProperty({
      listStyle: 'none',
      textDecoration: 'none',
      textAlign: 'center',
      alignSelf: 'center',
      width: '40px'
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      marginLeft: '8px',
      marginRight: '8px',
      width: '50px'
    })), _defineProperty(_list, "buttonIcon", (_buttonIcon = {
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
    }, _defineProperty(_buttonIcon, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      width: '50px',
      height: '50px',
      borderWidth: '2px'
    }), _defineProperty(_buttonIcon, "isActive", {
      cursor: 'auto',
      color: _colorsConfig.default.background1,
      borderColor: _colorsConfig.default.primary1,
      backgroundColor: _colorsConfig.default.primary1,
      ':hover': isActivedPseudoClass,
      ':focus': isActivedPseudoClass,
      ':active': isActivedPseudoClass
    }), _defineProperty(_buttonIcon, "isDisabled", {
      color: _colorsConfig.default.background1,
      borderColor: _colorsConfig.default.line2,
      backgroundColor: _colorsConfig.default.line2,
      cursor: 'not-allowed',
      ':hover': disabledPseudoClass,
      ':focus': disabledPseudoClass,
      ':active': disabledPseudoClass
    }), _defineProperty(_buttonIcon, "svg", {
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