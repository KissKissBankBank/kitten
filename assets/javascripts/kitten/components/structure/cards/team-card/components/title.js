import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../typography/text'
import { Marger } from '../../../../layout/marger'

export const TeamCardTitle = ({ children, subTitle }) => (
  <Marger top="2">
    <Text size="medium" weight="700" color="font1">
      {children}
    </Text>
    <br />
    <Text size="micro" color="font1" weight="400">
      {subTitle}
    </Text>
  </Marger>
)

TeamCardTitle.propTypes = {
  children: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}
