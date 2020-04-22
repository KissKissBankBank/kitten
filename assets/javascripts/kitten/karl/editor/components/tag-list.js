import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './button'
import { Details } from '../../../components/details'
import { ParagraphIcon } from '../../../components/icons/paragraph-icon'
import { Title1Icon } from '../../../components/icons/title-1-icon'
import { Title2Icon } from '../../../components/icons/title-2-icon'
import { Title3Icon } from '../../../components/icons/title-3-icon'
import { Title4Icon } from '../../../components/icons/title-4-icon'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'

const SummaryButton = styled(Button)`
  pointer-events: none;
  width: ${pxToRem(75)};
`

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
    padding: ${pxToRem(15)} ${pxToRem(20)};
    border: none;
    border-left: ${pxToRem(2)} solid ${COLORS.line1};
    border-right: ${pxToRem(2)} solid ${COLORS.line1};
    text-align: left;
    cursor: pointer;

    appareance: none;
    box-sizing: border-box;
    outline: none;

    &:hover,
    &:focus {
      background-color: ${COLORS.background3};
    }
  }

  .Editor__toolbar__listItem--selected {
    svg,
    path {
      fill: ${COLORS.primary1};
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
    <Details
      key={value}
      summaryRender={({ open }) => (
        <SummaryButton
          type="button"
          title="Utiliser un paragraphe"
          className="is-selected"
        >
          <Component />
          <ArrowIcon width="6" direction={open ? 'top' : 'bottom'} />
        </SummaryButton>
      )}
    >
      <List>
        <li>
          <button
            onClick={handleClick('title1')}
            type="button"
            className={`Editor__toolbar__listItem ${
              value === 'title1' ? 'Editor__toolbar__listItem--selected' : ''
            }`}
          >
            <Title1Icon />
          </button>
        </li>
        <li>
          <button
            onClick={handleClick('title2')}
            type="button"
            className={`Editor__toolbar__listItem ${
              value === 'title2' ? 'Editor__toolbar__listItem--selected' : ''
            }`}
          >
            <Title2Icon />
          </button>
        </li>
        <li>
          <button
            onClick={handleClick('title3')}
            type="button"
            className={`Editor__toolbar__listItem ${
              value === 'title3' ? 'Editor__toolbar__listItem--selected' : ''
            }`}
          >
            <Title3Icon />
          </button>
        </li>
        <li>
          <button
            onClick={handleClick('title4')}
            type="button"
            className={`Editor__toolbar__listItem ${
              value === 'title4' ? 'Editor__toolbar__listItem--selected' : ''
            }`}
          >
            <Title4Icon />
          </button>
        </li>
        <li>
          <button
            onClick={handleClick('paragraph')}
            type="button"
            className={`Editor__toolbar__listItem ${
              value === 'paragraph' ? 'Editor__toolbar__listItem--selected' : ''
            }`}
          >
            <ParagraphIcon />
          </button>
        </li>
      </List>
    </Details>
  )
}

export default TagList
