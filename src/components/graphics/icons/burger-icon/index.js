"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var StyledItem = _styledComponents.default.svg.withConfig({
  displayName: "burger-icon__StyledItem",
  componentId: "sc-122wqdc-0"
})(["overflow:visible;fill:var(--burgerIcon-mainColor,", ");:hover,button:hover &{fill:var(--burgerIcon-hoverColor,", ");}rect{transition:transform 0.2s ease-out,fill 0.15s;}&.k-BurgerIcon--isActive{.k-BurgerIcon__bun{transform:translateX(2px);}.k-BurgerIcon__patty{transform:translateX(-2px);}}&.k-BurgerIcon--isAnimatedOnHover{&:hover,button:hover &,&:focus,button:focus &{.k-BurgerIcon__bun{transform:translateX(2px);}.k-BurgerIcon__patty{transform:translateX(-2px);}}}"], _colorsConfig.default.font1, _colorsConfig.default.primary1);

var BurgerIcon = function BurgerIcon(_ref) {
  var mainColor = _ref.mainColor,
      hoverColor = _ref.hoverColor,
      isActive = _ref.isActive,
      iconTitle = _ref.iconTitle,
      title = _ref.title,
      width = _ref.width,
      height = _ref.height,
      isAnimatedOnHover = _ref.isAnimatedOnHover,
      style = _ref.style,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["mainColor", "hoverColor", "isActive", "iconTitle", "title", "width", "height", "isAnimatedOnHover", "style", "className"]);
  return /*#__PURE__*/_react.default.createElement(StyledItem, (0, _extends2.default)({
    role: "img",
    "aria-label": iconTitle || title,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 10",
    width: width,
    height: height,
    style: (0, _extends2.default)({}, style, {
      '--burgerIcon-mainColor': mainColor,
      '--burgerIcon-hoverColor': hoverColor
    }),
    className: (0, _classnames.default)('k-BurgerIcon', className, {
      'k-BurgerIcon--isActive': isActive,
      'k-BurgerIcon--isAnimatedOnHover': isAnimatedOnHover
    })
  }, props), (iconTitle || title) && /*#__PURE__*/_react.default.createElement("title", null, iconTitle || title), /*#__PURE__*/_react.default.createElement("rect", {
    y: "0",
    width: "12",
    height: "2",
    className: "k-BurgerIcon__bun"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    y: "4",
    width: "12",
    height: "2",
    className: "k-BurgerIcon__patty"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    y: "8",
    width: "12",
    height: "2",
    className: "k-BurgerIcon__bun"
  }));
};

exports.BurgerIcon = BurgerIcon;
BurgerIcon.propTypes = {
  mainColor: _propTypes.default.string,
  hoverColor: _propTypes.default.string,
  isActive: _propTypes.default.bool,
  iconTitle: (0, _deprecated.default)(_propTypes.default.string, 'Prefere use `title` prop instead'),
  title: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
BurgerIcon.defaultProps = {
  mainColor: _colorsConfig.default.font1,
  hoverColor: _colorsConfig.default.primary1,
  isActive: false,
  title: null,
  width: 12,
  height: 10,
  isAnimatedOnHover: false
};