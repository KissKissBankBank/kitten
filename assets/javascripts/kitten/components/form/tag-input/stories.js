import React, { useState } from 'react'
import styled from 'styled-components'
import { number, select, boolean } from '@storybook/addon-knobs'
import { TagInput } from './index'

const Container = styled.div`
  max-width: 300px;
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
      onChange={(list) => setTagList(list)}
      initialItemsList={['Black', 'Blue', 'Green and magenta']}
    />
    <p>
      {tagList.join(', ')}
    </p>
  </Container>
)}
