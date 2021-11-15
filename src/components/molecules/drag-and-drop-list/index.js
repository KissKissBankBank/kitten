"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragAndDropList = exports.BUTTON_SHIFT = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dragOnDrop = _interopRequireDefault(require("drag-on-drop"));

var _styledComponents = require("styled-components");

var _typography = require("../../../helpers/utils/typography");

var _button = require("../../../components/molecules/buttons/button");

var _menuIcon = require("../../../components/graphics/icons/menu-icon");

var _templateObject;

var BUTTON_SHIFT = (0, _typography.pxToRem)(40 + 15);
exports.BUTTON_SHIFT = BUTTON_SHIFT;
var DragAndDropListStyles = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  .k-DragAndDropList {\n    display: flex;\n    flex-direction: column;\n    gap: var(--dragAndDropList-gap, ", ");\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .k-DragAndDropList__item {\n    display: flex;\n    gap: ", ";\n    align-items: center;\n    transition: opacity 0.2s ease;\n\n    &.gu-unselectable {\n      user-select: none !important;\n    }\n\n    &.gu-transit {\n      opacity: 0.2;\n      cursor: move;\n    }\n\n    &.gu-mirror {\n      box-sizing: border-box;\n      position: fixed !important;\n      margin: 0 !important;\n      z-index: 9999 !important;\n      opacity: 0.9;\n    }\n\n    &.gu-hide {\n      display: none !important;\n    }\n\n    .k-DragAndDropList__item__child {\n      flex: 1 0 100%;\n      max-width: 100%;\n    }\n\n  }\n  .k-DragAndDropList__item--hasButton {\n    .k-DragAndDropList__item__button {\n      flex: 0 0 ", ";\n      padding: 0;\n      width: ", ";\n      box-sizing: border-box;\n      border-radius: ", ";\n      cursor: grab;\n    }\n\n    &.gu-mirror .k-DragAndDropList__item__button {\n      cursor: grabbing;\n    }\n\n    .k-DragAndDropList__item__child {\n      flex: 1 0 calc(100% - ", ");\n      max-width: calc(100% - ", ");\n    }\n  }\n"])), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(20), BUTTON_SHIFT, BUTTON_SHIFT);

var DragAndDropList = function DragAndDropList(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onChange = _ref.onChange,
      a11yButtonLabel = _ref.a11yButtonLabel,
      a11yAnnouncement = _ref.a11yAnnouncement,
      a11yButtonDescElement = _ref.a11yButtonDescElement,
      a11yContainerLabelElement = _ref.a11yContainerLabelElement,
      gap = _ref.gap,
      style = _ref.style,
      showHandle = _ref.showHandle,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "onChange", "a11yButtonLabel", "a11yAnnouncement", "a11yButtonDescElement", "a11yContainerLabelElement", "gap", "style", "showHandle"]);
  var listElement = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      dragonInstance = _useState2[0],
      setDragonInstance = _useState2[1];

  var dragonOptions = {
    activeClass: 'k-DragAndDropList__item--active',
    inactiveClass: 'k-DragAndDropList__item--inactive',
    announcement: {
      grabbed: function grabbed(element) {
        return a11yAnnouncement.grabbed(element.dataset.simpleName);
      },
      dropped: function dropped(element) {
        return a11yAnnouncement.dropped(element.dataset.simpleName);
      },
      reorder: function reorder(element, items) {
        var position = items.indexOf(element) + 1;
        var name = element.dataset.simpleName;
        return a11yAnnouncement.reorder(name, position, items.length);
      },
      cancel: a11yAnnouncement.cancel
    }
  };
  (0, _react.useEffect)(function () {
    if (!listElement) return;
    var dragon = new _dragOnDrop.default(listElement.current, (0, _extends2.default)({}, dragonOptions, {
      handle: showHandle && 'button.k-DragAndDropList__item__button'
    }));
    dragon.on('dropped', handleChange);
    setDragonInstance(dragon);
  }, [listElement, showHandle]);
  (0, _react.useEffect)(function () {
    if (!dragonInstance) return;
    if (!listElement) return;
    if (children.length == 0) return;
    dragonInstance.initElements(listElement.current);
  }, [children, listElement, showHandle]);

  var handleChange = function handleChange(container, item) {
    var newPosition = (0, _toConsumableArray2.default)(container.children).indexOf(item) + 1;
    var newList = (0, _toConsumableArray2.default)(container.children).map(function (child) {
      var _child$dataset;

      return (_child$dataset = child.dataset) === null || _child$dataset === void 0 ? void 0 : _child$dataset.id;
    });
    onChange({
      movedItem: item.dataset.id,
      newPosition: newPosition,
      newList: newList
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("ol", (0, _extends2.default)({
    ref: listElement,
    className: (0, _classnames.default)('k-DragAndDropList', className),
    "aria-labelledby": a11yContainerLabelElement,
    style: (0, _extends2.default)({}, style, {
      '--dragAndDropList-gap': (0, _typography.pxToRem)(gap)
    })
  }, props), (children === null || children === void 0 ? void 0 : children.length) > 0 && (0, _toConsumableArray2.default)(children).map(function (child, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: child.props.id + index,
      className: (0, _classnames.default)('k-DragAndDropList__item', {
        'k-DragAndDropList__item--hasButton': !!showHandle
      }),
      "data-simple-name": child.props.simpleName,
      "data-id": child.props.id
    }, !!showHandle && /*#__PURE__*/_react.default.createElement(_button.Button, {
      fit: "content",
      "aria-label": a11yButtonLabel,
      "aria-describedby": a11yButtonDescElement,
      className: "k-DragAndDropList__item__button"
    }, /*#__PURE__*/_react.default.createElement(_menuIcon.MenuIcon, {
      width: 10,
      height: 10
    })), _react.default.cloneElement(child, (0, _extends2.default)({}, child.props, {
      className: (0, _classnames.default)(child.props.className, 'k-DragAndDropList__item__child')
    })));
  })), /*#__PURE__*/_react.default.createElement(DragAndDropListStyles, null));
};

exports.DragAndDropList = DragAndDropList;
DragAndDropList.defaultProps = {
  a11yButtonLabel: 'Reorder',
  a11yAnnouncement: {
    grabbed: function grabbed(name) {
      return "".concat(name, " grabbed");
    },
    dropped: function dropped(name) {
      return "".concat(name, " dropped");
    },
    reorder: function reorder(name, position, length) {
      return "The rankings have been updated, ".concat(name, " is now ranked #").concat(position, " out of ").concat(length);
    },
    cancel: 'Reranking cancelled.'
  },
  onChange: function onChange() {},
  gap: 15,
  showHandle: true
};
DragAndDropList.propTypes = {
  a11yButtonLabel: _propTypes.default.string,
  a11yAnnouncement: _propTypes.default.shape({
    grabbed: _propTypes.default.func,
    dropped: _propTypes.default.func,
    reorder: _propTypes.default.func,
    cancel: _propTypes.default.string
  }),
  onChange: _propTypes.default.func,
  gap: _propTypes.default.number,
  showHandle: _propTypes.default.bool
};