"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragAndDropList = exports.BUTTON_SHIFT = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@dnd-kit/core");

var _sortable = require("@dnd-kit/sortable");

var _modifiers = require("@dnd-kit/modifiers");

var _reactDom = require("react-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _typography = require("../../../helpers/utils/typography");

var _button = require("../../../components/molecules/buttons/button");

var _menuIcon = require("../../../components/graphics/icons/menu-icon");

var _templateObject;

var BUTTON_SHIFT = (0, _typography.pxToRem)(15 + 40);
exports.BUTTON_SHIFT = BUTTON_SHIFT;
var DragAndDropListStyles = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  .k-DragAndDropList {\n    display: flex;\n    flex-direction: column;\n    gap: var(--dragAndDropList-gap, ", ");\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .k-DragAndDropList__itemWrapper {\n    list-style: none;\n    display: block;\n    transform: translate3d(var(--translate-x, 0), var(--translate-y, 0), 0);\n    transform-origin: 0 0;\n    position: relative;\n    z-index: 1;\n\n    &:focus-within {\n      z-index: 2;\n    }\n  }\n\n  .k-DragAndDropList__item {\n    display: flex;\n    gap: ", ";\n    align-items: center;\n\n    &.k-DragAndDropList__item--isDragging:not(.k-DragAndDropList__item--dragOverlay) {\n      opacity: 0.4;\n\n      .k-DragAndDropList__item__button {\n        opacity: 0;\n      }\n    }\n\n    &.k-DragAndDropList__item--dragOverlay {\n      cursor: move;\n      z-index: 150;\n\n      .k-DragAndDropList__item__button {\n        cursor: move;\n      }\n    }\n\n    .k-DragAndDropList__item__child {\n      flex: 1 0 calc(100% - var(--dragAndDropList-button-shift, 0));\n      width: calc(100% - var(--dragAndDropList-button-shift, 0));\n      flex-grow: 1;\n    }\n\n    &.k-DragAndDropList__item--hasButton {\n      .k-DragAndDropList__item__button {\n        flex: 0 0 ", ";\n        padding: 0;\n        width: ", ";\n        box-sizing: border-box;\n        border-radius: ", ";\n        cursor: grab;\n      }\n\n      &.gu-mirror .k-DragAndDropList__item__button {\n        cursor: grabbing;\n      }\n\n      .k-DragAndDropList__item__child {\n        --dragAndDropList-button-shift: ", ";\n      }\n    }\n  }\n"])), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(20), BUTTON_SHIFT);

var DragAndDropList = function DragAndDropList(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onChange = _ref.onChange,
      a11yButtonLabel = _ref.a11yButtonLabel,
      a11yAnnouncement = _ref.a11yAnnouncement,
      a11yContainerLabelElement = _ref.a11yContainerLabelElement,
      a11yInstructions = _ref.a11yInstructions,
      gap = _ref.gap,
      style = _ref.style,
      showHandle = _ref.showHandle,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "onChange", "a11yButtonLabel", "a11yAnnouncement", "a11yContainerLabelElement", "a11yInstructions", "gap", "style", "showHandle"]);

  var _useState = (0, _react.useState)(_react.default.Children.toArray(children).map(function (child) {
    return child.props.id;
  })),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = (0, _react.useState)(_react.default.Children.toArray(children).reduce(function (acc, current) {
    return (0, _extends3.default)({}, acc, (0, _defineProperty2.default)({}, current.props.id, current));
  }, {})),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 1),
      childrenDict = _useState4[0];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      activeId = _useState6[0],
      setActiveId = _useState6[1];

  var sensors = (0, _core.useSensors)((0, _core.useSensor)(_core.MouseSensor, {
    activationConstraint: {
      distance: 5
    }
  }), (0, _core.useSensor)(_core.TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  }), (0, _core.useSensor)(_core.KeyboardSensor, {
    coordinateGetter: _sortable.sortableKeyboardCoordinates
  }));
  var announcements = {
    onDragStart: function onDragStart(id) {
      var position = items.indexOf(id) + 1;
      var name = childrenDict[id].props.simpleName || id;
      return a11yAnnouncement.onDragStart(name, position, items.length);
    },
    onDragOver: function onDragOver(id, overId) {
      var position = items.indexOf(overId) + 1;
      var name = childrenDict[id].props.simpleName || id;
      return a11yAnnouncement.onDragOver(name, position, items.length);
    },
    onDragEnd: function onDragEnd(id, overId) {
      var position = items.indexOf(overId) + 1;
      var name = childrenDict[id].props.simpleName || id;
      return a11yAnnouncement.onDragEnd(name, position, items.length);
    },
    onDragCancel: function onDragCancel() {
      return a11yAnnouncement.cancel;
    }
  };

  var handleDragEnd = function handleDragEnd(_ref2) {
    var active = _ref2.active,
        over = _ref2.over;
    setActiveId(null);

    if (over && active.id !== over.id) {
      var oldIndex = items.indexOf(active.id);
      var newIndex = items.indexOf(over.id);
      setItems(function (items) {
        return (0, _sortable.arrayMove)(items, oldIndex, newIndex);
      });
      onChange({
        movedItem: active.id,
        newPosition: newIndex + 1
      });
    }
  };

  var handleDragStart = function handleDragStart(_ref3) {
    var active = _ref3.active;
    if (!active) return;
    setActiveId(active.id);
  };

  var handleDragCancel = function handleDragCancel() {
    return setActiveId(null);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.DndContext, {
    sensors: sensors,
    collisonDetection: _core.closestCenter,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
    onDragCancel: handleDragCancel,
    modifiers: [_modifiers.restrictToVerticalAxis, _modifiers.restrictToWindowEdges],
    announcements: announcements,
    screenReaderInstructions: a11yInstructions
  }, /*#__PURE__*/_react.default.createElement("ol", (0, _extends3.default)({
    className: (0, _classnames.default)('k-DragAndDropList', className),
    "aria-labelledby": a11yContainerLabelElement,
    style: (0, _extends3.default)({}, style, {
      '--dragAndDropList-gap': (0, _typography.pxToRem)(gap)
    })
  }, props), /*#__PURE__*/_react.default.createElement(_sortable.SortableContext, {
    items: items,
    strategy: _sortable.verticalListSortingStrategy
  }, items.map(function (id) {
    return /*#__PURE__*/_react.default.createElement(SortableItem, {
      key: id,
      id: id,
      showHandle: showHandle,
      a11yButtonLabel: a11yButtonLabel
    }, _react.default.cloneElement(childrenDict[id]));
  }))), (0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement(_core.DragOverlay, null, activeId ? /*#__PURE__*/_react.default.createElement(Item, {
    showHandle: showHandle,
    dragOverlay: true
  }, _react.default.cloneElement(childrenDict[activeId])) : null), document.body)), /*#__PURE__*/_react.default.createElement(DragAndDropListStyles, null));
};

exports.DragAndDropList = DragAndDropList;

var SortableItem = function SortableItem(_ref4) {
  var id = _ref4.id,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["id"]);

  var _useSortable = (0, _sortable.useSortable)({
    id: id
  }),
      attributes = _useSortable.attributes,
      listeners = _useSortable.listeners,
      setNodeRef = _useSortable.setNodeRef,
      transform = _useSortable.transform,
      transition = _useSortable.transition,
      isSorting = _useSortable.isSorting,
      isDragging = _useSortable.isDragging;

  return /*#__PURE__*/_react.default.createElement("li", {
    ref: setNodeRef,
    id: id,
    className: (0, _classnames.default)('k-DragAndDropList__itemWrapper'),
    style: {
      transition: transition,
      '--translate-x': transform ? "".concat(Math.round(transform.x), "px") : undefined,
      '--translate-y': transform ? "".concat(Math.round(transform.y), "px") : undefined
    }
  }, /*#__PURE__*/_react.default.createElement(Item, (0, _extends3.default)({
    listeners: listeners,
    attributes: attributes,
    isSorting: isSorting,
    isDragging: isDragging
  }, props)));
};

var Item = function Item(_ref5) {
  var showHandle = _ref5.showHandle,
      listeners = _ref5.listeners,
      attributes = _ref5.attributes,
      a11yButtonLabel = _ref5.a11yButtonLabel,
      children = _ref5.children,
      _ref5$dragOverlay = _ref5.dragOverlay,
      dragOverlay = _ref5$dragOverlay === void 0 ? false : _ref5$dragOverlay,
      isSorting = _ref5.isSorting,
      isDragging = _ref5.isDragging;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends3.default)({
    className: (0, _classnames.default)('k-DragAndDropList__item', {
      'k-DragAndDropList__item--hasButton': !!showHandle,
      'k-DragAndDropList__item--dragOverlay': !!dragOverlay,
      'k-DragAndDropList__item--isSorting': !!isSorting,
      'k-DragAndDropList__item--isDragging': !!isDragging
    })
  }, !showHandle ? listeners : undefined, {
    tabIndex: !showHandle ? 0 : undefined
  }, attributes), !!showHandle && /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends3.default)({
    fit: "content",
    "aria-label": a11yButtonLabel,
    className: "k-DragAndDropList__item__button",
    modifier: !!dragOverlay ? 'helium' : 'hydrogen'
  }, listeners), /*#__PURE__*/_react.default.createElement(_menuIcon.MenuIcon, {
    width: 10,
    height: 10
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DragAndDropList__item__child"
  }, children));
};

DragAndDropList.defaultProps = {
  a11yInstructions: "To pick up a draggable item, press space or enter.\n    While dragging, use the arrow keys to move the item in any given direction.\n    Press space or enter again to drop the item in its new position,\n    or press escape to cancel.",
  a11yButtonLabel: 'Reorder',
  a11yAnnouncement: {
    onDragStart: function onDragStart(name, position, length) {
      return "".concat(name, " grabbed from position ").concat(position, " of ").concat(length);
    },
    onDragOver: function onDragOver(name, position, length) {
      return "".concat(name, " was moved to position ").concat(position, " of ").concat(length);
    },
    onDragEnd: function onDragEnd(name, position, length) {
      return "".concat(name, " was dropped at position ").concat(position, " of ").concat(length);
    },
    cancel: 'Reranking cancelled.'
  },
  onChange: function onChange() {},
  gap: 15,
  showHandle: true
};
DragAndDropList.propTypes = {
  a11yInstructions: _propTypes.default.string,
  a11yButtonLabel: _propTypes.default.string,
  a11yAnnouncement: _propTypes.default.shape({
    onDragStart: _propTypes.default.func,
    onDragOver: _propTypes.default.func,
    onDragEnd: _propTypes.default.func,
    cancel: _propTypes.default.string
  }),
  onChange: _propTypes.default.func,
  gap: _propTypes.default.number,
  showHandle: _propTypes.default.bool
};