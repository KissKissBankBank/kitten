import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import { Button, Details, Checkbox, pxToRem } from 'kitten'
import union from 'lodash/fp/union'
import find from 'lodash/fp/find'
import sortBy from 'lodash/fp/sortBy'

const Wrapper = styled.div`
  width: 50vw;
  display: flex;
  gap: ${pxToRem(10)};

  .list-wrapper {
    padding: ${pxToRem(2)};
    overflow: hidden;
    flex-grow: 1;
    display: flex;
    gap: ${pxToRem(5)};

    > * {
      flex: 1 0 auto;
      opacity: 1;
      transition: opacity var(--transition), visibility var(--transition);

      &.hidden {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition-delay: 0, var(--transition-timing);
      }
    }
  }

  .menu {
    position: relative;
    display: flex;

    details {
      height: 100%;
    }
    summary {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .menu-inside {
      position: absolute;
      top: 100%;
      width: 200px;
      right: 0;
      border: var(--border);
    }
  }
`

const tagList = [
  {
    name: 'Myra',
    id: 'myra',
    quantity: 29,
    props: {
      active: true,
      onClick: action('Clicked'),
    },
  },
  {
    name: 'Catheryn',
    id: 'catheryn',
    quantity: 25,
    props: {
      active: false,
      onClick: action('Clicked'),
    },
  },
  {
    name: 'Zinisha',
    id: 'zinisha',
    quantity: 23,
    props: {
      active: true,
      onClick: action('Clicked'),
    },
  },
  {
    name: 'Nobuko',
    id: 'nobuko',
    quantity: 23,
    props: {
      active: false,
      onClick: action('Clicked'),
    },
  },
  {
    name: 'Ching',
    id: 'ching',
    quantity: 23,
    props: {
      active: true,
      onClick: action('Clicked'),
    },
  },
  {
    name: 'Heriberto',
    id: 'heriberto',
    quantity: 10,
    props: {
      active: false,
      onClick: action('Clicked'),
    },
  },
  {
    name: 'Marylynn',
    id: 'marylynn',
    quantity: 6,
    props: {
      active: false,
      onClick: action('Clicked'),
    },
  },
  {
    name: 'Carylon',
    id: 'carylon',
    quantity: 5,
    props: {
      active: false,
      onClick: action('Clicked'),
    },
  },
  {
    name: 'Maricela',
    id: 'maricela',
    quantity: 3,
    props: {
      active: false,
      onClick: action('Clicked'),
    },
  },
  {
    name: 'Lurline',
    id: 'lurline',
    quantity: 1,
    props: {
      active: false,
      onClick: action('Clicked'),
    },
  },
]

const sortList = list => {
  let newList = sortBy(['quantity'])(list).reverse()
  sortBy(['name'])(newList)
  return newList
}

export const FoldingList = () => {
  const listWrapper = useRef(null)
  const [invisibleTagList, setInVisibleTagList] = useState(tagList)

  useEffect(() => {
    if (!listWrapper || !listWrapper.current) return

    const listWrapperEl = listWrapper.current

    const options = {
      root: listWrapperEl,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    Array.from(listWrapperEl.children).forEach(child => observer.observe(child))

    return () => {
      Array.from(listWrapperEl.children).forEach(child =>
        observer.unObserve(child),
      )
    }
  }, [listWrapper])

  const handleIntersection = entries => {
    entries.forEach(entry => {
      // If Tag is 100% visible
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden')
        entry.target.disabled = false
        entry.target.setAttribute('aria-hidden', false)

        // Remove from invisibleTagList
        setInVisibleTagList(currentList =>
          currentList.filter(item => item.id !== entry.target.id),
        )
      }

      // If tag is not 100% visible
      if (!entry.isIntersecting) {
        entry.target.classList.add('hidden')
        entry.target.disabled = true
        entry.target.setAttribute('aria-hidden', true)

        // Add to invisibleTagList
        setInVisibleTagList(currentList => {
          // const currentEntryItem = tagList.filter(item => item.id === entry.target.id)
          const currentEntryItem = find(['id', entry.target.id])(tagList)
          return union([currentEntryItem])(currentList)
        })
      }
    })
  }

  return (
    <Wrapper>
      <div ref={listWrapper} className="list-wrapper">
        {sortList(tagList).map((item, index) => (
          <Button
            key={`tag-${item.name}${index}`}
            id={item.id}
            fit="content"
            size="small"
            rounded
            className="hidden"
            {...item.props}
          >
            <span>
              {item.name}{' '}
              <span className="k-u-weight-light">({item.quantity})</span>
            </span>
          </Button>
        ))}
      </div>
      {invisibleTagList.length > 0 && (
        <div className="menu">
          <Details
            summaryRender={({ open }) => (
              <span
                className="k-u-link k-u-link-primary1"
                aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                Menu
              </span>
            )}
          >
            <div className="menu-inside">
              {sortList(invisibleTagList).map((item, index) => {
                if (!item) return
                return (
                  <Checkbox
                    key={`checkbox-${item.name}${index}`}
                    id={`checkbox-${item.id}`}
                    defaultChecked={item.props.active}
                    label={`${item.name} (${item.quantity})`}
                  />
                )
              })}
            </div>
          </Details>
        </div>
      )}
    </Wrapper>
  )
}

export default {
  title: 'PoCs/FoldingList',
  component: FoldingList,
}
