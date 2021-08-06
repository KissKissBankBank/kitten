import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import DragonDrop from 'drag-on-drop'
import { createGlobalStyle } from 'styled-components'

import { pxToRem } from '../../../helpers/utils/typography'
import { Button } from '../../../components/molecules/buttons/button'
import { MenuIcon } from '../../../components/graphics/icons/menu-icon'

const ListStyles = createGlobalStyle`
  .k-DragAndDropList {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(15)};
    list-style: none;
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

    .k-DragAndDropList__button {
      flex: 0 0 ${pxToRem(40)};
      min-width: fit-content;
      padding: 0;
      width: ${pxToRem(40)};
      box-sizing: border-box;
      border-radius: ${pxToRem(20)};
    }
  }

`

export const DragAndDropList = ({
  children,
  className,
  onChange = () => {},
  ...props
}) => {
  const listElement = useRef(null)
  const [dragonInstance, setDragonInstance] = useState(null)

  const dragonOptions = {
    activeClass: 'button-active',
    inactiveClass: 'button-inactive',
    announcement: {
    },
  }

  useEffect(() => {
    const dragon = new DragonDrop(listElement.current)
    dragon
      .on('grabbed', handleChange)
      .on('dropped', handleChange)
      .on('reorder', handleChange)

    setDragonInstance(dragon)
  }, [listElement])

  useEffect(() => {
    if (listElement && children.length > 0) {
      dragonInstance?.initElements(listElement.current)
    }
  }, [children, listElement])

  const handleChange = (container, item) => {
    let newChildrenList = []
    let newIdList = []

    container.children.forEach(child => {
      newChildrenList.push(
        child.querySelector('.k-DragAndDropList__button + *:last-child')
      )
      newIdList.push(
        child.dataset?.id
      )
    })
    onChange(newChildrenList, newIdList)
  }

  return(
    <>
      <ol
        ref={listElement}
        className={classNames('k-DragAndDropList', className)}
      >
        {[...children].map((child, index) => (
          <li
            key={child.props['data-simple-name'] + index}
            className="k-DragAndDropList__item"
            data-simple-name={child.props['data-simple-name']}
            data-id={child.props['data-id']}
          >
            <Button aria-label="Reorder" className="k-DragAndDropList__button">
              <MenuIcon width={10} height={10} />
            </Button>
            {child}
          </li>
        ))}
      </ol>
      <ListStyles />
    </>
  )
}
