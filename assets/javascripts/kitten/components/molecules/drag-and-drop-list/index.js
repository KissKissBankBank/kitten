import React, { useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable'
import {
  restrictToWindowEdges,
  restrictToVerticalAxis,
} from '@dnd-kit/modifiers'
import { createPortal } from 'react-dom'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

import { pxToRem } from '../../../helpers/utils/typography'
import { Button } from '../../../components/molecules/buttons/button'
import { MenuIcon } from '../../../components/graphics/icons/menu-icon'

const DragAndDropListStyles = createGlobalStyle`
  .k-DragAndDropList {
    display: flex;
    flex-direction: column;
    gap: var(--dragAndDropList-gap, ${pxToRem(15)});
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .k-DragAndDropList__itemWrapper {
    list-style: none;
    display: block;
    transform: translate3d(var(--translate-x, 0), var(--translate-y, 0), 0);
    transform-origin: 0 0;
    position: relative;
    z-index: 1;

    &:focus-within {
      z-index: 2;
    }
  }

  .k-DragAndDropList__item {
    display: flex;
    gap: ${pxToRem(15)};
    align-items: center;

    &.k-DragAndDropList__item--isDragging:not(.k-DragAndDropList__item--dragOverlay) {
      opacity: 0.4;

      .k-DragAndDropList__item__button {
        opacity: 0;
      }
    }

    &.k-DragAndDropList__item--dragOverlay {
      cursor: move;
      z-index: 150;

      .k-DragAndDropList__item__button {
        cursor: move;
      }
    }

    .k-DragAndDropList__item__child {
      flex: 1 0 calc(100% - var(--dragAndDropList-button-shift, 0));
      width: calc(100% - var(--dragAndDropList-button-shift, 0));
      flex-grow: 1;
    }

    &.k-DragAndDropList__item--hasButton {
      .k-DragAndDropList__item__button {
        flex: 0 0 ${pxToRem(40)};
        padding: 0;
        width: ${pxToRem(40)};
        box-sizing: border-box;
        border-radius: ${pxToRem(20)};
        cursor: grab;
      }

      &.gu-mirror .k-DragAndDropList__item__button {
        cursor: grabbing;
      }

      .k-DragAndDropList__item__child {
        --dragAndDropList-button-shift: ${pxToRem(40 + 15)};
      }
    }
  }
`

export const DragAndDropList = ({
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
}) => {
  const [items, setItems] = useState(
    React.Children.toArray(children).map(child => child.props.id),
  )
  const [childrenDict] = useState(
    React.Children.toArray(children).reduce(
      (acc, current) => ({ ...acc, [current.props.id]: current }),
      {},
    ),
  )
  const [activeId, setActiveId] = useState(null)

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 250, tolerance: 5 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const announcements = {
    onDragStart: id => {
      const position = items.indexOf(id) + 1
      const name = childrenDict[id].props.simpleName || id
      return a11yAnnouncement.onDragStart(name, position, items.length)
    },
    onDragOver: (id, overId) => {
      const position = items.indexOf(overId) + 1
      const name = childrenDict[id].props.simpleName || id
      return a11yAnnouncement.onDragOver(name, position, items.length)
    },
    onDragEnd: (id, overId) => {
      const position = items.indexOf(overId) + 1
      const name = childrenDict[id].props.simpleName || id
      return a11yAnnouncement.onDragEnd(name, position, items.length)
    },
    onDragCancel: () => a11yAnnouncement.cancel,
  }

  const handleDragEnd = ({ active, over }) => {
    setActiveId(null)

    if (over && active.id !== over.id) {
      const oldIndex = items.indexOf(active.id)
      const newIndex = items.indexOf(over.id)

      setItems(items => arrayMove(items, oldIndex, newIndex))
      onChange({
        movedItem: active.id,
        newPosition: newIndex + 1,
      })
    }
  }

  const handleDragStart = ({ active }) => {
    if (!active) return
    setActiveId(active.id)
  }

  const handleDragCancel = () => setActiveId(null)

  return (
    <>
      <DndContext
        sensors={sensors}
        collisonDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
        modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
        announcements={announcements}
        screenReaderInstructions={a11yInstructions}
      >
        <ol
          className={classNames('k-DragAndDropList', className)}
          aria-labelledby={a11yContainerLabelElement}
          style={{
            ...style,
            '--dragAndDropList-gap': pxToRem(gap),
          }}
          {...props}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map(id => (
              <SortableItem
                key={id}
                id={id}
                showHandle={showHandle}
                a11yButtonLabel={a11yButtonLabel}
              >
                {React.cloneElement(childrenDict[id])}
              </SortableItem>
            ))}
          </SortableContext>
        </ol>
        {createPortal(
          <DragOverlay>
            {activeId ? (
              <Item showHandle={showHandle} dragOverlay>
                {React.cloneElement(childrenDict[activeId])}
              </Item>
            ) : null}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
      <DragAndDropListStyles />
    </>
  )
}

const SortableItem = ({ id, ...props }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isSorting,
    isDragging,
  } = useSortable({ id })

  return (
    <li
      ref={setNodeRef}
      id={id}
      className={classNames('k-DragAndDropList__itemWrapper')}
      style={{
        transition,
        '--translate-x': transform ? `${Math.round(transform.x)}px` : undefined,
        '--translate-y': transform ? `${Math.round(transform.y)}px` : undefined,
      }}
    >
      <Item
        listeners={listeners}
        attributes={attributes}
        isSorting={isSorting}
        isDragging={isDragging}
        {...props}
      />
    </li>
  )
}

const Item = ({
  showHandle,
  listeners,
  attributes,
  a11yButtonLabel,
  children,
  dragOverlay = false,
  isSorting,
  isDragging,
}) => {
  return (
    <div
      className={classNames('k-DragAndDropList__item', {
        'k-DragAndDropList__item--hasButton': !!showHandle,
        'k-DragAndDropList__item--dragOverlay': !!dragOverlay,
        'k-DragAndDropList__item--isSorting': !!isSorting,
        'k-DragAndDropList__item--isDragging': !!isDragging,
      })}
      {...(!showHandle ? listeners : undefined)}
      tabIndex={!showHandle ? 0 : undefined}
      {...attributes}
    >
      {!!showHandle && (
        <Button
          fit="content"
          aria-label={a11yButtonLabel}
          className="k-DragAndDropList__item__button"
          modifier={!!dragOverlay ? 'helium' : 'hydrogen'}
          {...listeners}
        >
          <MenuIcon width={10} height={10} />
        </Button>
      )}
      <div className="k-DragAndDropList__item__child">{children}</div>
    </div>
  )
}

DragAndDropList.defaultProps = {
  a11yInstructions: `To pick up a draggable item, press space or enter.
    While dragging, use the arrow keys to move the item in any given direction.
    Press space or enter again to drop the item in its new position,
    or press escape to cancel.`,
  a11yButtonLabel: 'Reorder',
  a11yAnnouncement: {
    onDragStart: (name, position, length) =>
      `${name} grabbed from position ${position} of ${length}`,
    onDragOver: (name, position, length) => {
      return `${name} was moved to position ${position} of ${length}`
    },
    onDragEnd: (name, position, length) => {
      return `${name} was dropped at position ${position} of ${length}`
    },
    cancel: 'Reranking cancelled.',
  },
  onChange: () => {},
  gap: 15,
  showHandle: true,
}

DragAndDropList.propTypes = {
  a11yInstructions: PropTypes.string,
  a11yButtonLabel: PropTypes.string,
  a11yAnnouncement: PropTypes.shape({
    onDragStart: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragEnd: PropTypes.func,
    cancel: PropTypes.string,
  }),
  onChange: PropTypes.func,
  gap: PropTypes.number,
  showHandle: PropTypes.bool,
}
