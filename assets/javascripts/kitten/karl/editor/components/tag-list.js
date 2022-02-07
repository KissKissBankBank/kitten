import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './button'
import {
  Details,
  ParagraphIcon,
  Title1Icon,
  Title2Icon,
  Title3Icon,
  Title4Icon,
  ArrowIcon,
  pxToRem,
  COLORS,
} from 'kitten'

const List = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: ${pxToRem(75)};
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: ${pxToRem(2)} solid ${COLORS.line1};

  .Editor__toolbar__listItem {
    width: 100%;
    position: relative;
    padding: ${pxToRem(15)} ${pxToRem(20)};
    border: none;
    border-left: ${pxToRem(2)} solid ${COLORS.line1};
    border-right: ${pxToRem(2)} solid ${COLORS.line1};
    text-align: left;
    cursor: pointer;

    appareance: none;
    box-sizing: border-box;

    &:hover,
    &:focus {
      background-color: ${COLORS.background3};
    }

    &:focus {
      z-index: 3;
    }

    &[aria-selected='true'] {
      svg,
      path {
        fill: ${COLORS.primary1};
      }
    }
  }
`

const StyledDetails = styled(Details)`
  summary.Editor__toolbar__tagListToggle {
    .Editor__toolbar__tagListToggle__button {
      pointer-events: none;
      width: ${pxToRem(75)};
    }

    &:focus {
      z-index: 3;

      .Editor__toolbar__tagListToggle__button {
        border-color: ${COLORS.primary4};
        background-color: ${COLORS.background1};
        color: ${COLORS.primary1};

        svg,
        path {
          fill: ${COLORS.primary1};
        }
      }
    }
  }
`

const TagList = () => {
  const [value, setValue] = useState('paragraph')
  let Component

  const handleClick = value => e => {
    e.preventDefault()
    setValue(value)
  }

  switch (value) {
    case 'title1':
      Component = Title1Icon
      break
    case 'title2':
      Component = Title2Icon
      break
    case 'title3':
      Component = Title3Icon
      break
    case 'title4':
      Component = Title4Icon
      break
    case 'paragraph':
    default:
      Component = ParagraphIcon
      break
  }

  return (
    <StyledDetails
      key={value}
      summaryRender={({ open }) => (
        <Button
          tabIndex="-1"
          tag="span"
          className="Editor__toolbar__tagListToggle__button"
        >
          <Component />
          <ArrowIcon width="6" direction={open ? 'top' : 'bottom'} />
        </Button>
      )}
      summaryProps={{ className: 'Editor__toolbar__tagListToggle' }}
    >
      <List>
        <li>
          <button
            onClick={handleClick('title1')}
            type="button"
            aria-selected={value === 'title1'}
            className="Editor__toolbar__listItem"
          >
            <Title1Icon />
          </button>
        </li>
        <li>
          <button
            onClick={handleClick('title2')}
            type="button"
            aria-selected={value === 'title2'}
            className="Editor__toolbar__listItem"
          >
            <Title2Icon />
          </button>
        </li>
        <li>
          <button
            onClick={handleClick('title3')}
            type="button"
            aria-selected={value === 'title3'}
            className="Editor__toolbar__listItem"
          >
            <Title3Icon />
          </button>
        </li>
        <li>
          <button
            onClick={handleClick('title4')}
            type="button"
            aria-selected={value === 'title4'}
            className="Editor__toolbar__listItem"
          >
            <Title4Icon />
          </button>
        </li>
        <li>
          <button
            onClick={handleClick('paragraph')}
            type="button"
            aria-selected={value === 'paragraph'}
            className="Editor__toolbar__listItem"
          >
            <ParagraphIcon />
          </button>
        </li>
      </List>
    </StyledDetails>
  )
}

export default TagList
