import _extends from "@babel/runtime/helpers/extends";
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
export const BUTTON_SHIFT = pxToRem(15 + 40);
const DragAndDropListStyles = createGlobalStyle([".k-DragAndDropList{display:flex;flex-direction:column;gap:var(--dragAndDropList-gap,", ");list-style:none;padding:0;margin:0;}.k-DragAndDropList__itemWrapper{list-style:none;display:block;transform:translate3d(var(--translate-x,0),var(--translate-y,0),0);transform-origin:0 0;position:relative;z-index:1;&:focus-within{z-index:2;}}.k-DragAndDropList__item{display:flex;gap:", ";align-items:center;&.k-DragAndDropList__item--isDragging:not(.k-DragAndDropList__item--dragOverlay){opacity:0.4;.k-DragAndDropList__item__button{opacity:0;}}&.k-DragAndDropList__item--dragOverlay{cursor:move;z-index:150;.k-DragAndDropList__item__button{cursor:move;}}.k-DragAndDropList__item__child{flex:1 0 calc(100% - var(--dragAndDropList-button-shift,0));width:calc(100% - var(--dragAndDropList-button-shift,0));flex-grow:1;}&.k-DragAndDropList__item--hasButton{.k-DragAndDropList__item__button{flex:0 0 ", ";padding:0;width:", ";box-sizing:border-box;border-radius:var(--border-radius-rounded);cursor:grab;}&.gu-mirror .k-DragAndDropList__item__button{cursor:grabbing;}.k-DragAndDropList__item__child{--dragAndDropList-button-shift:", ";}}}"], pxToRem(15), pxToRem(15), pxToRem(40), pxToRem(40), BUTTON_SHIFT);
export const DragAndDropList = _ref => {
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
    return React.Children.toArray(children).reduce((acc, current) => ({ ...acc,
      [current.props.id]: current
    }), {});
  };

  const onSetItems = () => {
    return React.Children.toArray(children).map(child => child.props.id);
  };

  const [items, setItems] = useState(onSetItems());
  const [childrenDict, setChildrenDict] = useState(onSetChildrenDict());
  const [activeId, setActiveId] = useState(null);
  useEffect(() => {
    setItems(onSetItems());
    setChildrenDict(onSetChildrenDict());
  }, [children == null ? void 0 : children.length]);
  const sensors = useSensors(useSensor(MouseSensor, {
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
      setItems(items => arrayMove(items, oldIndex, newIndex));
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
    style: { ...style,
      '--dragAndDropList-gap': pxToRem(gap)
    }
  }, props), /*#__PURE__*/React.createElement(SortableContext, {
    items: items,
    strategy: verticalListSortingStrategy
  }, items.map(id => /*#__PURE__*/React.createElement(SortableItem, {
    key: id,
    id: id,
    showHandle: showHandle,
    a11yButtonLabel: a11yButtonLabel
  }, /*#__PURE__*/React.cloneElement(childrenDict[id]))))), /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(DragOverlay, null, activeId ? /*#__PURE__*/React.createElement(Item, {
    showHandle: showHandle,
    dragOverlay: true
  }, /*#__PURE__*/React.cloneElement(childrenDict[activeId])) : null), document.body)), /*#__PURE__*/React.createElement(DragAndDropListStyles, null));
};

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
  } = useSortable({
    id
  });
  return /*#__PURE__*/React.createElement("li", {
    ref: setNodeRef,
    id: id,
    className: classNames('k-DragAndDropList__itemWrapper'),
    style: {
      transition,
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