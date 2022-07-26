"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DragAndDropList = exports.BUTTON_SHIFT = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@dnd-kit/core");

var _sortable = require("@dnd-kit/sortable");

var _modifiers = require("@dnd-kit/modifiers");

var _reactDom = require("react-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _typography = require("../../../helpers/utils/typography");

var _button = require("../../action/button");

var _menuIcon = require("../../graphics/icons/menu-icon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const BUTTON_SHIFT = (0, _typography.pxToRem)(15 + 40);
exports.BUTTON_SHIFT = BUTTON_SHIFT;
const DragAndDropListStyles = (0, _styledComponents.createGlobalStyle)([".k-DragAndDropList{display:flex;flex-direction:column;gap:var(--dragAndDropList-gap,", ");list-style:none;padding:0;margin:0;}.k-DragAndDropList__itemWrapper{list-style:none;display:block;transform:translate3d(var(--translate-x,0),var(--translate-y,0),0);transform-origin:0 0;position:relative;z-index:1;&:focus-within{z-index:2;}}.k-DragAndDropList__item{display:flex;gap:", ";align-items:center;&.k-DragAndDropList__item--isDragging:not(.k-DragAndDropList__item--dragOverlay){opacity:0.4;.k-DragAndDropList__item__button{opacity:0;}}&.k-DragAndDropList__item--dragOverlay{cursor:move;z-index:150;.k-DragAndDropList__item__button{cursor:move;}}.k-DragAndDropList__item__child{flex:1 0 calc(100% - var(--dragAndDropList-button-shift,0));width:calc(100% - var(--dragAndDropList-button-shift,0));flex-grow:1;}&.k-DragAndDropList__item--hasButton{.k-DragAndDropList__item__button{flex:0 0 ", ";padding:0;width:", ";box-sizing:border-box;border-radius:var(--border-radius-rounded);cursor:grab;}&.gu-mirror .k-DragAndDropList__item__button{cursor:grabbing;}.k-DragAndDropList__item__child{--dragAndDropList-button-shift:", ";}}}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), BUTTON_SHIFT);

const DragAndDropList = _ref => {
  let {
    children,
    className,
    onChange,
    a11yButtonLabel,
    a11yAnnouncement,
    a11yContainerLabelElement,
    a11yInstructions,
    gap,
    style,
    showHandle,
    ...props
  } = _ref;

  const onSetChildrenDict = () => {
    return _react.default.Children.toArray(children).reduce((acc, current) => ({ ...acc,
      [current.props.id]: current
    }), {});
  };

  const onSetItems = () => {
    return _react.default.Children.toArray(children).map(child => child.props.id);
  };

  const [items, setItems] = (0, _react.useState)(onSetItems());
  const [childrenDict, setChildrenDict] = (0, _react.useState)(onSetChildrenDict());
  const [activeId, setActiveId] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    setItems(onSetItems());
    setChildrenDict(onSetChildrenDict());
  }, [children == null ? void 0 : children.length]);
  const sensors = (0, _core.useSensors)((0, _core.useSensor)(_core.MouseSensor, {
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
  const announcements = {
    onDragStart: id => {
      const position = items.indexOf(id) + 1;
      const name = childrenDict[id].props.simpleName || id;
      return a11yAnnouncement.onDragStart(name, position, items.length);
    },
    onDragOver: (id, overId) => {
      const position = items.indexOf(overId) + 1;
      const name = childrenDict[id].props.simpleName || id;
      return a11yAnnouncement.onDragOver(name, position, items.length);
    },
    onDragEnd: (id, overId) => {
      const position = items.indexOf(overId) + 1;
      const name = childrenDict[id].props.simpleName || id;
      return a11yAnnouncement.onDragEnd(name, position, items.length);
    },
    onDragCancel: () => a11yAnnouncement.cancel
  };

  const handleDragEnd = _ref2 => {
    let {
      active,
      over
    } = _ref2;
    setActiveId(null);

    if (over && active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      setItems(items => (0, _sortable.arrayMove)(items, oldIndex, newIndex));
      onChange({
        movedItem: active.id,
        newPosition: newIndex + 1
      });
    }
  };

  const handleDragStart = _ref3 => {
    let {
      active
    } = _ref3;
    if (!active) return;
    setActiveId(active.id);
  };

  const handleDragCancel = () => setActiveId(null);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.DndContext, {
    sensors: sensors,
    collisonDetection: _core.closestCenter,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
    onDragCancel: handleDragCancel,
    modifiers: [_modifiers.restrictToVerticalAxis, _modifiers.restrictToWindowEdges],
    announcements: announcements,
    screenReaderInstructions: a11yInstructions
  }, /*#__PURE__*/_react.default.createElement("ol", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DragAndDropList', className),
    "aria-labelledby": a11yContainerLabelElement,
    style: { ...style,
      '--dragAndDropList-gap': (0, _typography.pxToRem)(gap)
    }
  }, props), /*#__PURE__*/_react.default.createElement(_sortable.SortableContext, {
    items: items,
    strategy: _sortable.verticalListSortingStrategy
  }, items.map(id => /*#__PURE__*/_react.default.createElement(SortableItem, {
    key: id,
    id: id,
    showHandle: showHandle,
    a11yButtonLabel: a11yButtonLabel
  }, /*#__PURE__*/_react.default.cloneElement(childrenDict[id]))))), /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement(_core.DragOverlay, null, activeId ? /*#__PURE__*/_react.default.createElement(Item, {
    showHandle: showHandle,
    dragOverlay: true
  }, /*#__PURE__*/_react.default.cloneElement(childrenDict[activeId])) : null), document.body)), /*#__PURE__*/_react.default.createElement(DragAndDropListStyles, null));
};

exports.DragAndDropList = DragAndDropList;

const SortableItem = _ref4 => {
  let {
    id,
    ...props
  } = _ref4;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isSorting,
    isDragging
  } = (0, _sortable.useSortable)({
    id
  });
  return /*#__PURE__*/_react.default.createElement("li", {
    ref: setNodeRef,
    id: id,
    className: (0, _classnames.default)('k-DragAndDropList__itemWrapper'),
    style: {
      transition,
      '--translate-x': transform ? Math.round(transform.x) + "px" : undefined,
      '--translate-y': transform ? Math.round(transform.y) + "px" : undefined
    }
  }, /*#__PURE__*/_react.default.createElement(Item, (0, _extends2.default)({
    listeners: listeners,
    attributes: attributes,
    isSorting: isSorting,
    isDragging: isDragging
  }, props)));
};

const Item = _ref5 => {
  let {
    showHandle,
    listeners,
    attributes,
    a11yButtonLabel,
    children,
    dragOverlay = false,
    isSorting,
    isDragging
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DragAndDropList__item', {
      'k-DragAndDropList__item--hasButton': !!showHandle,
      'k-DragAndDropList__item--dragOverlay': !!dragOverlay,
      'k-DragAndDropList__item--isSorting': !!isSorting,
      'k-DragAndDropList__item--isDragging': !!isDragging
    })
  }, !showHandle ? listeners : undefined, {
    tabIndex: !showHandle ? 0 : undefined
  }, attributes), !!showHandle && /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
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
    onDragStart: (name, position, length) => name + " grabbed from position " + position + " of " + length,
    onDragOver: (name, position, length) => {
      return name + " was moved to position " + position + " of " + length;
    },
    onDragEnd: (name, position, length) => {
      return name + " was dropped at position " + position + " of " + length;
    },
    cancel: 'Reranking cancelled.'
  },
  onChange: () => {},
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