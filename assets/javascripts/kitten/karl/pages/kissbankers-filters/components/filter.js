import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ArrowContainer } from '../../../../components/layout/arrow-container'
import { Text } from '../../../../components/typography/text'
import { Marger } from '../../../../components/layout/marger'
import COLORS from '../../../../constants/colors-config'

const ActionsMarger = styled(Marger)`
  display: flex;
  justify-content: space-between;
`

const Filter = ({ children, values }) => {
  return (
    <ArrowContainer
      padding={30}
      color={COLORS.background1}
      position="top"
      borderWidth={1}
      borderRadius={4}
      borderColor={COLORS.line1}
      shadow
    >
      {children}

      <ActionsMarger top="3">
        <Text tag="button" color="font1" size="tiny" weight="regular">
          Effacer
        </Text>

        <Text tag="button" color="primary1" size="tiny" weight="regular">
          Appliquer
        </Text>
      </ActionsMarger>
    </ArrowContainer>
  )
}

Filter.propTypes = {
  values: PropTypes.object.isRequired,
  defaultValues: PropTypes.object.isRequired,
}

export default Filter
