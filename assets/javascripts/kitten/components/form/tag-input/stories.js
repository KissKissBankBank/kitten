import React, { useState } from 'react'
import styled from 'styled-components'
import { boolean } from '@storybook/addon-knobs'
import { TagInput } from './index'

const Container = styled.div`
  max-width: 650px;
  margin: 30px auto;
`

export default {
  title: 'Form/TagInput',
  component: TagInput,
}

export const Default = () => {
  const [tagList, setTagList] = useState([])

  return (
    <Container>
      <TagInput
        id="TagInput"
        onChange={list => setTagList(list)}
        initialItemsList={['Black', 'Blue', 'Green and magenta']}
        placeholder="Placeholder…"
        disabled={boolean('Disabled', false)}
        helpMessage={
          boolean('Disabled', false)
            ? 'This input is disabled.'
            : 'Press Enter or comma to add an item to the list.'
        }
      />
      <p className="k-u-weight-light">List: {tagList.join(', ')}</p>
    </Container>
  )
}
