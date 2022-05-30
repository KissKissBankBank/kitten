import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "onChange", "a11yButtonLabel", "a11yAnnouncement", "a11yContainerLabelElement", "a11yInstructions", "gap", "style", "showHandle"],
    _excluded2 = ["id"];
import React, { useEffect, useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors, DragOverlay } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { restrictToWindowEdges, restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { Button } from '../../action/button';
import { MenuIcon } from '../../graphics/icons/menu-icon';
export var BUTTON_SHIFT = pxToRem(15 + 40);
var DragAndDropListStyles = createGlobalStyle([".k-DragAndDropList{display:flex;flex-direction:column;gap:var(--dragAndDropList-gap,", ");list-style:none;padding:0;margin:0;}.k-DragAndDropList__itemWrapper{list-style:none;display:block;transform:translate3d(var(--translate-x,0),var(--translate-y,0),0);transform-origin:0 0;position:relative;z-index:1;&:focus-within{z-index:2;}}.k-DragAndDropList__item{display:flex;gap:", ";align-items:center;&.k-DragAndDropList__item--isDragging:not(.k-DragAndDropList__item--dragOverlay){opacity:0.4;.k-DragAndDropList__item__button{opacity:0;}}&.k-DragAndDropList__item--dragOverlay{cursor:move;z-index:150;.k-DragAndDropList__item__button{cursor:move;}}.k-DragAndDropList__item__child{flex:1 0 calc(100% - var(--dragAndDropList-button-shift,0));width:calc(100% - var(--dragAndDropList-button-shift,0));flex-grow:1;}&.k-DragAndDropList__item--hasButton{.k-DragAndDropList__item__button{flex:0 0 ", ";padding:0;width:", ";box-sizing:border-box;border-radius:var(--border-radius-rounded);cursor:grab;}&.gu-mirror .k-DragAndDropList__item__button{cursor:grabbing;}.k-DragAndDropList__item__child{--dragAndDropList-button-shift:", ";}}}"], pxToRem(15), pxToRem(15), pxToRem(40), pxToRem(40), BUTTON_SHIFT);
export var DragAndDropList = function DragAndDropList(_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var onSetChildrenDict = function onSetChildrenDict() {
    return React.Children.toArray(children).reduce(function (acc, current) {
      var _extends2;

      return _extends({}, acc, (_extends2 = {}, _extends2[current.props.id] = current, _extends2));
    }, {});
  };

  var onSetItems = function onSetItems() {
    return React.Children.toArray(children).map(function (child) {
      return child.props.id;
    });
  };

  var _useState = useState(onSetItems()),
      items = _useState[0],
      setItems = _useState[1];

  var _useState2 = useState(onSetChildrenDict()),
      childrenDict = _useState2[0],
      setChildrenDict = _useState2[1];

  var _useState3 = useState(null),
      activeId = _useState3[0],
      setActiveId = _useState3[1];

  useEffect(function () {
    setItems(onSetItems());
    setChildrenDict(onSetChildrenDict());
  }, [children == null ? void 0 : children.length]);
  var sensors = useSensors(useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5
    }
  }), useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  }), useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates
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
        return arrayMove(items, oldIndex, newIndex);
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DndContext, {
    sensors: sensors,
    collisonDetection: closestCenter,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
    onDragCancel: handleDragCancel,
    modifiers: [restrictToVerticalAxis, restrictToWindowEdges],
    announcements: announcements,
    screenReaderInstructions: a11yInstructions
  }, /*#__PURE__*/React.createElement("ol", _extends({
    className: classNames('k-DragAndDropList', className),
    "aria-labelledby": a11yContainerLabelElement,
    style: _extends({}, style, {
      '--dragAndDropList-gap': pxToRem(gap)
    })
  }, props), /*#__PURE__*/React.createElement(SortableContext, {
    items: items,
    strategy: verticalListSortingStrategy
  }, items.map(function (id) {
    return /*#__PURE__*/React.createElement(SortableItem, {
      key: id,
      id: id,
      showHandle: showHandle,
      a11yButtonLabel: a11yButtonLabel
    }, /*#__PURE__*/React.cloneElement(childrenDict[id]));
  }))), /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(DragOverlay, null, activeId ? /*#__PURE__*/React.createElement(Item, {
    showHandle: showHandle,
    dragOverlay: true
  }, /*#__PURE__*/React.cloneElement(childrenDict[activeId])) : null), document.body)), /*#__PURE__*/React.createElement(DragAndDropListStyles, null));
};

var SortableItem = function SortableItem(_ref4) {
  var id = _ref4.id,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded2);

  var _useSortable = useSortable({
    id: id
  }),
      attributes = _useSortable.attributes,
      listeners = _useSortable.listeners,
      setNodeRef = _useSortable.setNodeRef,
      transform = _useSortable.transform,
      transition = _useSortable.transition,
      isSorting = _useSortable.isSorting,
      isDragging = _useSortable.isDragging;

  return /*#__PURE__*/React.createElement("li", {
    ref: setNodeRef,
    id: id,
    className: classNames('k-DragAndDropList__itemWrapper'),
    style: {
      transition: transition,
      '--translate-x': transform ? Math.round(transform.x) + "px" : undefined,
      '--translate-y': transform ? Math.round(transform.y) + "px" : undefined
    }
  }, /*#__PURE__*/React.createElement(Item, _extends({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-DragAndDropList__item', {
      'k-DragAndDropList__item--hasButton': !!showHandle,
      'k-DragAndDropList__item--dragOverlay': !!dragOverlay,
      'k-DragAndDropList__item--isSorting': !!isSorting,
      'k-DragAndDropList__item--isDragging': !!isDragging
    })
  }, !showHandle ? listeners : undefined, {
    tabIndex: !showHandle ? 0 : undefined
  }, attributes), !!showHandle && /*#__PURE__*/React.createElement(Button, _extends({
    fit: "content",
    "aria-label": a11yButtonLabel,
    className: "k-DragAndDropList__item__button",
    modifier: !!dragOverlay ? 'helium' : 'hydrogen'
  }, listeners), /*#__PURE__*/React.createElement(MenuIcon, {
    width: 10,
    height: 10
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-DragAndDropList__item__child"
  }, children));
};

DragAndDropList.defaultProps = {
  a11yInstructions: "To pick up a draggable item, press space or enter.\n    While dragging, use the arrow keys to move the item in any given direction.\n    Press space or enter again to drop the item in its new position,\n    or press escape to cancel.",
  a11yButtonLabel: 'Reorder',
  a11yAnnouncement: {
    onDragStart: function onDragStart(name, position, length) {
      return name + " grabbed from position " + position + " of " + length;
    },
    onDragOver: function onDragOver(name, position, length) {
      return name + " was moved to position " + position + " of " + length;
    },
    onDragEnd: function onDragEnd(name, position, length) {
      return name + " was dropped at position " + position + " of " + length;
    },
    cancel: 'Reranking cancelled.'
  },
  onChange: function onChange() {},
  gap: 15,
  showHandle: true
};
DragAndDropList.propTypes = {
  a11yInstructions: PropTypes.string,
  a11yButtonLabel: PropTypes.string,
  a11yAnnouncement: PropTypes.shape({
    onDragStart: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragEnd: PropTypes.func,
    cancel: PropTypes.string
  }),
  onChange: PropTypes.func,
  gap: PropTypes.number,
  showHandle: PropTypes.bool
};