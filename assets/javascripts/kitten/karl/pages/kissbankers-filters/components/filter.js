import React, { useEffect, useRef } from 'react'
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

function useClickOutside(ref, onFilterClose) {
  function handleStatusChange(event) {
    if (!ref.current.contains(event.target)) {
      onFilterClose()
    }
  }

  document.addEventListener('click', handleStatusChange)
  return function cleanup() {
    document.removeEventListener('click', handleStatusChange)
  }
}

const Filter = ({ children, values, isOpen, onFilterClose }) => {
  const filterRef = useRef(null)
  useEffect(() => useClickOutside(filterRef, onFilterClose))

  return (
    <div ref={filterRef}>
      <ArrowContainer
        padding={30}
        color={COLORS.background1}
        position="top"
        borderWidth={1}
        borderRadius={4}
        borderColor={COLORS.line1}
        shadow
        style={{ marginTop: 20, position: 'absolute' }}
      >
        {children}

        <ActionsMarger top="3">
          <Text
            as="button"
            color="font1"
            size="tiny"
            weight="regular"
            style={{ border: 'none' }}
          >
            Effacer
          </Text>

          <Text
            as="button"
            color="primary1"
            size="tiny"
            weight="regular"
            style={{ border: 'none' }}
          >
            Appliquer
          </Text>
        </ActionsMarger>
      </ArrowContainer>
    </div>
  )
}

Filter.propTypes = {
  values: PropTypes.object.isRequired,
  defaultValues: PropTypes.object.isRequired,
}

export default Filter
