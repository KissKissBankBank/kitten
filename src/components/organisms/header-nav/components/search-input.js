"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SearchInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _textInputWithButton = require("../../../../components/form/text-input-with-button");

var _searchIcon = require("../../../../components/graphics/icons/search-icon");

var _crossIcon = require("../../../../components/graphics/icons/cross-icon");

var _button = require("../../../../components/molecules/buttons/button");

var _context = require("./context");

var _useDropdown2 = require("../hooks/use-dropdown");

var _excluded = ["children", "className", "searchInputProps", "searchButtonProps", "onMenuToggle", "closeEvents"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var namespace = 'kkbbAndCo';
var CLOSE_EVENT = namespace + ":searchMenu:close";

var SearchInput = function SearchInput(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$searchInputProps = _ref.searchInputProps,
      searchInputProps = _ref$searchInputProps === void 0 ? {} : _ref$searchInputProps,
      _ref$searchButtonProp = _ref.searchButtonProps,
      searchButtonProps = _ref$searchButtonProp === void 0 ? {} : _ref$searchButtonProp,
      _ref$onMenuToggle = _ref.onMenuToggle,
      onMenuToggle = _ref$onMenuToggle === void 0 ? function () {} : _ref$onMenuToggle,
      _ref$closeEvents = _ref.closeEvents,
      closeEvents = _ref$closeEvents === void 0 ? [] : _ref$closeEvents,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_context.Context),
      id = _useContext.id,
      callOnToggle = _useContext.callOnToggle;

  var _useState = (0, _react.useState)(true),
      isMobileInvisible = _useState[0],
      setMobileInvibility = _useState[1];

  var buttonElement = (0, _react.useRef)(null);

  var _useDropdown = (0, _useDropdown2.useDropdown)({
    callOnToggle: callOnToggle,
    dropdownClass: 'k-HeaderNav__searchInputDropdown',
    closeEvents: [CLOSE_EVENT].concat(closeEvents),
    inputId: id + "__SearchMenu__Input",
    menuId: id + "__SearchMenu__Menu"
  }),
      dropdownProps = _useDropdown.dropdownProps,
      menuProps = _useDropdown.menuProps,
      inputProps = _useDropdown.inputProps,
      isDropdownExpanded = _useDropdown.isDropdownExpanded,
      openDropdown = _useDropdown.openDropdown,
      closeDropdown = _useDropdown.closeDropdown;

  var handleFoldButtonClick = function handleFoldButtonClick() {
    setMobileInvibility(function (current) {
      return !current;
    });
  };

  (0, _react.useEffect)(function () {
    if (isMobileInvisible) {
      closeDropdown();
    } else {
      // Wait 5ms for the input to appear
      setTimeout(function () {
        var _dropdownProps$ref$cu;

        dropdownProps == null ? void 0 : (_dropdownProps$ref$cu = dropdownProps.ref.current) == null ? void 0 : _dropdownProps$ref$cu.querySelector('input').focus();
      }, 5);
    }
  }, [isMobileInvisible]);
  (0, _react.useEffect)(function () {
    buttonElement.current.disabled = !isDropdownExpanded;

    if (isDropdownExpanded) {
      var _dropdownProps$ref, _dropdownProps$ref$cu2;

      dropdownProps == null ? void 0 : (_dropdownProps$ref = dropdownProps.ref) == null ? void 0 : (_dropdownProps$ref$cu2 = _dropdownProps$ref.current) == null ? void 0 : _dropdownProps$ref$cu2.querySelector('input').focus();
    } else {
      var _dropdownProps$ref2, _dropdownProps$ref2$c;

      dropdownProps == null ? void 0 : (_dropdownProps$ref2 = dropdownProps.ref) == null ? void 0 : (_dropdownProps$ref2$c = _dropdownProps$ref2.current) == null ? void 0 : _dropdownProps$ref2$c.addEventListener('focusin', handleFocusIn);
    }

    return function () {
      var _dropdownProps$ref3, _dropdownProps$ref3$c;

      dropdownProps == null ? void 0 : (_dropdownProps$ref3 = dropdownProps.ref) == null ? void 0 : (_dropdownProps$ref3$c = _dropdownProps$ref3.current) == null ? void 0 : _dropdownProps$ref3$c.removeEventListener('focusin', handleFocusIn);
    };
  }, [isDropdownExpanded]);

  var handleFocusIn = function handleFocusIn() {
    var _dropdownProps$ref$cu3;

    if ((dropdownProps == null ? void 0 : (_dropdownProps$ref$cu3 = dropdownProps.ref.current) == null ? void 0 : _dropdownProps$ref$cu3.querySelector('input').value.length) > 0) {
      openDropdown();
    }
  };

  (0, _react.useEffect)(function () {
    onMenuToggle({
      isDropdownExpanded: isDropdownExpanded
    });
  }, [isDropdownExpanded]);

  var handleInputChange = function handleInputChange(event) {
    inputProps.onChange(event);
    searchInputProps.onChange(event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (!isDropdownExpanded) return;
    var arrowKeys = ['ArrowDown', 'ArrowUp'];
    if (!arrowKeys.includes(event.key)) return;
    var wrapper = event.target.closest('form.k-HeaderNav__searchInput');
    var focusableElements = Array.from(wrapper.querySelectorAll('.k-HeaderNav__floatingDropdown button, .k-HeaderNav__floatingDropdown a, input'));
    var focusedElementIndex = focusableElements.findIndex(function (el) {
      return el === document.activeElement;
    });
    var destination = 0;

    if (event.key === 'ArrowDown' && focusedElementIndex < focusableElements.length - 1) {
      destination = focusedElementIndex + 1;
    }

    if (event.key === 'ArrowUp' && focusedElementIndex > 0) {
      destination = focusedElementIndex - 1;
    }

    event.preventDefault();
    focusableElements[destination].focus();
  };

  return /*#__PURE__*/_react.default.createElement("form", (0, _extends2.default)({}, props, dropdownProps, {
    className: (0, _classnames.default)('k-HeaderNav__searchInput', className, dropdownProps.className, {
      'k-HeaderNav__searchInput--mobileInvisible': isMobileInvisible
    }),
    onKeyDown: handleKeyDown
  }), /*#__PURE__*/_react.default.createElement(_textInputWithButton.TextInputWithButton, (0, _extends2.default)({
    size: "tiny",
    rounded: true,
    buttonValue: /*#__PURE__*/_react.default.createElement(_searchIcon.SearchIcon, null),
    buttonProps: (0, _extends2.default)({}, searchButtonProps, {
      ref: buttonElement
    }),
    autoComplete: "off",
    inset: true
  }, searchInputProps, inputProps, {
    onChange: handleInputChange,
    className: (0, _classnames.default)('k-HeaderNav__searchInput__input', searchInputProps.className)
  })), isMobileInvisible ? /*#__PURE__*/_react.default.createElement(_button.Button, {
    fit: "icon",
    size: "tiny",
    rounded: true,
    onClick: handleFoldButtonClick,
    className: "k-u-hidden@m-up"
  }, /*#__PURE__*/_react.default.createElement(_searchIcon.SearchIcon, null)) : /*#__PURE__*/_react.default.createElement("button", {
    className: "k-u-reset-button k-HeaderNav__searchInput__mobileFold",
    onClick: handleFoldButtonClick
  }, /*#__PURE__*/_react.default.createElement(_crossIcon.CrossIcon, {
    size: "big"
  })), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, menuProps, {
    className: (0, _classnames.default)('k-HeaderNav__floatingDropdown', menuProps.className, {
      'k-HeaderNav__floatingDropdown--isExpanded': isDropdownExpanded
    })
  }), isDropdownExpanded && children));
};

exports.SearchInput = SearchInput;
SearchInput.propTypes = {
  searchInputProps: _propTypes.default.object,
  searchButtonProps: _propTypes.default.object,
  onMenuToggle: _propTypes.default.func,
  closeEvents: _propTypes.default.array
};