"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SearchInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _textInputWithButton = require("../../../form/input/text-input-with-button");

var _searchIcon = require("../../../graphics/icons/search-icon");

var _crossIcon = require("../../../graphics/icons/cross-icon");

var _button = require("../../../action/button");

var _context = require("./context");

var _useDropdown = require("../hooks/use-dropdown");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const namespace = 'kkbbAndCo';
const CLOSE_EVENT = namespace + ":searchMenu:close";

const SearchInput = _ref => {
  let {
    children,
    className,
    searchInputProps = {},
    searchButtonProps = {},
    onMenuToggle = () => {},
    closeEvents = [],
    a11yMobileOpen = 'Ouvrir la recherche',
    a11yMobileClose = 'Fermer la recherche',
    ...props
  } = _ref;
  const {
    id,
    callOnToggle
  } = (0, _react.useContext)(_context.Context);
  const [isMobileInvisible, setMobileInvibility] = (0, _react.useState)(true);
  const buttonElement = (0, _react.useRef)(null);
  const {
    dropdownProps,
    menuProps,
    inputProps,
    isDropdownExpanded,
    openDropdown,
    closeDropdown
  } = (0, _useDropdown.useDropdown)({
    callOnToggle,
    dropdownClass: 'k-HeaderNav__searchInputDropdown',
    closeEvents: [CLOSE_EVENT, ...closeEvents],
    inputId: id + "__SearchMenu__Input",
    menuId: id + "__SearchMenu__Menu"
  });

  const handleFoldButtonClick = () => {
    setMobileInvibility(current => {
      return !current;
    });
  };

  (0, _react.useEffect)(() => {
    if (isMobileInvisible) {
      closeDropdown();
    } else {
      // Wait 5ms for the input to appear
      setTimeout(() => {
        var _dropdownProps$ref$cu;

        dropdownProps == null ? void 0 : (_dropdownProps$ref$cu = dropdownProps.ref.current) == null ? void 0 : _dropdownProps$ref$cu.querySelector('input').focus();
      }, 5);
    }
  }, [isMobileInvisible]);
  (0, _react.useEffect)(() => {
    buttonElement.current.disabled = !isDropdownExpanded;

    if (isDropdownExpanded) {
      var _dropdownProps$ref, _dropdownProps$ref$cu2;

      dropdownProps == null ? void 0 : (_dropdownProps$ref = dropdownProps.ref) == null ? void 0 : (_dropdownProps$ref$cu2 = _dropdownProps$ref.current) == null ? void 0 : _dropdownProps$ref$cu2.querySelector('input').focus();
    } else {
      var _dropdownProps$ref2, _dropdownProps$ref2$c;

      dropdownProps == null ? void 0 : (_dropdownProps$ref2 = dropdownProps.ref) == null ? void 0 : (_dropdownProps$ref2$c = _dropdownProps$ref2.current) == null ? void 0 : _dropdownProps$ref2$c.addEventListener('focusin', handleFocusIn);
    }

    return () => {
      var _dropdownProps$ref3, _dropdownProps$ref3$c;

      dropdownProps == null ? void 0 : (_dropdownProps$ref3 = dropdownProps.ref) == null ? void 0 : (_dropdownProps$ref3$c = _dropdownProps$ref3.current) == null ? void 0 : _dropdownProps$ref3$c.removeEventListener('focusin', handleFocusIn);
    };
  }, [isDropdownExpanded]);

  const handleFocusIn = () => {
    var _dropdownProps$ref$cu3;

    if ((dropdownProps == null ? void 0 : (_dropdownProps$ref$cu3 = dropdownProps.ref.current) == null ? void 0 : _dropdownProps$ref$cu3.querySelector('input').value.length) > 0) {
      openDropdown();
    }
  };

  (0, _react.useEffect)(() => {
    onMenuToggle({
      isDropdownExpanded
    });
  }, [isDropdownExpanded]);

  const handleInputChange = event => {
    inputProps.onChange(event);
    searchInputProps.onChange(event);
  };

  const handleKeyDown = event => {
    if (!isDropdownExpanded) return;
    const arrowKeys = ['ArrowDown', 'ArrowUp'];
    if (!arrowKeys.includes(event.key)) return;
    const wrapper = event.target.closest('form.k-HeaderNav__searchInput');
    const focusableElements = Array.from(wrapper.querySelectorAll('.k-HeaderNav__floatingDropdown button, .k-HeaderNav__floatingDropdown a, input'));
    const focusedElementIndex = focusableElements.findIndex(el => el === document.activeElement);
    let destination = 0;

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
    id: "SearchInput",
    size: "small",
    rounded: true,
    buttonValue: /*#__PURE__*/_react.default.createElement(_searchIcon.SearchIcon, null),
    buttonProps: { ...searchButtonProps,
      ref: buttonElement
    },
    autoComplete: "off",
    inset: true
  }, searchInputProps, inputProps, {
    onChange: handleInputChange,
    className: (0, _classnames.default)('k-HeaderNav__searchInput__input', searchInputProps.className)
  })), isMobileInvisible ? /*#__PURE__*/_react.default.createElement(_button.Button, {
    fit: "icon",
    size: "small",
    rounded: true,
    onClick: handleFoldButtonClick,
    className: "k-u-hidden@m-up"
  }, /*#__PURE__*/_react.default.createElement(_searchIcon.SearchIcon, null), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-u-a11y-visuallyHidden"
  }, a11yMobileOpen)) : /*#__PURE__*/_react.default.createElement("button", {
    className: "k-u-reset-button k-HeaderNav__searchInput__mobileFold",
    onClick: handleFoldButtonClick
  }, /*#__PURE__*/_react.default.createElement(_crossIcon.CrossIcon, {
    size: "large"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-u-a11y-visuallyHidden"
  }, a11yMobileClose)), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, menuProps, {
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
  closeEvents: _propTypes.default.array,
  a11yMobileOpen: _propTypes.default.node,
  a11yMobileClose: _propTypes.default.node
};