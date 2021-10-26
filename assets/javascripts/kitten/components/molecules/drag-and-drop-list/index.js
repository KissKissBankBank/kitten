import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import DragonDrop from 'drag-on-drop'
import { createGlobalStyle } from 'styled-components'

import { pxToRem } from '../../../helpers/utils/typography'
import { Button } from '../../../components/molecules/buttons/button'
import { MenuIcon } from '../../../components/graphics/icons/menu-icon'

export const BUTTON_SHIFT = pxToRem(40 + 15)

const DragAndDropListStyles = createGlobalStyle`
  .k-DragAndDropList {
    display: flex;
    flex-direction: column;
    gap: var(--dragAndDropList-gap, ${pxToRem(15)});
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .k-DragAndDropList__item {
    display: flex;
    gap: ${pxToRem(15)};
    align-items: center;
    transition: opacity 0.2s ease;

    &.gu-unselectable {
      user-select: none !important;
    }

    &.gu-transit {
      opacity: 0.2;
      cursor: move;
    }

    &.gu-mirror {
      box-sizing: border-box;
      position: fixed !important;
      margin: 0 !important;
      z-index: 9999 !important;
      opacity: 0.9;
    }

    &.gu-hide {
      display: none !important;
    }

    .k-DragAndDropList__item__child {
      flex: 1 0 100%;
      max-width: 100%;
    }

  }
  .k-DragAndDropList__item--hasButton {
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
      flex: 1 0 calc(100% - ${BUTTON_SHIFT});
      max-width: calc(100% - ${BUTTON_SHIFT});
    }
  }
`

export const DragAndDropList = ({
  children,
  className,
  onChange,
  a11yButtonLabel,
  a11yAnnouncement,
  a11yButtonDescElement,
  a11yContainerLabelElement,
  gap,
  style,
  showHandle,
  ...props
}) => {
  const listElement = useRef(null)
  const [dragonInstance, setDragonInstance] = useState(null)

  const dragonOptions = {
    activeClass: 'k-DragAndDropList__item--active',
    inactiveClass: 'k-DragAndDropList__item--inactive',
    announcement: {
      grabbed: element => a11yAnnouncement.grabbed(element.dataset.simpleName),
      dropped: element => a11yAnnouncement.dropped(element.dataset.simpleName),
      reorder: (element, items) => {
        const position = items.indexOf(element) + 1
        const name = element.dataset.simpleName
        return a11yAnnouncement.reorder(name, position, items.length)
      },
      cancel: a11yAnnouncement.cancel,
    },
  }

  useEffect(() => {
    if (!listElement) return
    const dragon = new DragonDrop(listElement.current, {
      ...dragonOptions,
      handle: showHandle && 'button.k-DragAndDropList__item__button',
    })
    dragon.on('dropped', handleChange)

    setDragonInstance(dragon)
  }, [listElement, showHandle])

  useEffect(() => {
    if (!dragonInstance) return
    if (!listElement) return
    if (children.length == 0) return

    dragonInstance.initElements(listElement.current)
  }, [children, listElement, showHandle])

  const handleChange = (container, item) => {
    const newPosition = [...container.children].indexOf(item) + 1
    const newList = [...container.children].map(child => {
      return child.dataset?.id
    })

    onChange({ movedItem: item.dataset.id, newPosition, newList })
  }

  return (
    <>
      <ol
        ref={listElement}
        className={classNames('k-DragAndDropList', className)}
        aria-labelledby={a11yContainerLabelElement}
        style={{
          ...style,
          '--dragAndDropList-gap': pxToRem(gap),
        }}
        {...props}
      >
        {children?.length > 0 &&
          [...children].map((child, index) => (
            <li
              key={child.props.id + index}
              className={classNames('k-DragAndDropList__item', {
                'k-DragAndDropList__item--hasButton': !!showHandle,
              })}
              data-simple-name={child.props.simpleName}
              data-id={child.props.id}
            >
              {!!showHandle && (
                <Button
                  fit="content"
                  aria-label={a11yButtonLabel}
                  aria-describedby={a11yButtonDescElement}
                  className="k-DragAndDropList__item__button"
                >
                  <MenuIcon width={10} height={10} />
                </Button>
              )}
              {React.cloneElement(child, {
                ...child.props,
                className: classNames(
                  child.props.className,
                  'k-DragAndDropList__item__child',
                ),
              })}
            </li>
          ))}
      </ol>
      <DragAndDropListStyles />
    </>
  )
}

DragAndDropList.defaultProps = {
  a11yButtonLabel: 'Reorder',
  a11yAnnouncement: {
    grabbed: name => `${name} grabbed`,
    dropped: name => `${name} dropped`,
    reorder: (name, position, length) => {
      return `The rankings have been updated, ${name} is now ranked #${position} out of ${length}`
    },
    cancel: 'Reranking cancelled.',
  },
  onChange: () => {},
  gap: 15,
  showHandle: true,
}

DragAndDropList.propTypes = {
  a11yButtonLabel: PropTypes.string,
  a11yAnnouncement: PropTypes.shape({
    grabbed: PropTypes.func,
    dropped: PropTypes.func,
    reorder: PropTypes.func,
    cancel: PropTypes.string,
  }),
  onChange: PropTypes.func,
  gap: PropTypes.number,
  showHandle: PropTypes.bool,
}
