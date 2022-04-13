import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { Text } from '../../../typography/text'

const Wrapper = styled.div`
  display: grid;
  row-gap: ${pxToRem(5)};
  border: var(--border);
  border-radius: var(--border-radius-xs);
  padding: ${pxToRem(15)};
  margin-bottom: ${pxToRem(5)};
`

const PeopleCard = ({ firstName, lastName, email }) => {
  return (
    <Wrapper>
      <Text size="small" weight="regular">{`${firstName} ${lastName}`}</Text>
      <Text size="small">{email}</Text>
    </Wrapper>
  )
}

export default PeopleCard
