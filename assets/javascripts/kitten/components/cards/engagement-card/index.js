import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { Text } from '../../../components/typography/text'
import { Checkbox } from '../../../components/form/checkbox'

const StyledCard = styled.div`
  display: flex;
`

export const EngagementCard = ({
  title,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  categorie,
  colorText,
  ...others
}) => {
  return (
    <StyledCard className="k-Card--rounded" {...others}>
      <img
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
      <Text size="micro" weight="normal" color={colorText}>
        {categorie}
      </Text>
    </StyledCard>
  )
}

EngagementCard.propTypes = {
  categorie: PropTypes.string.isRequired,
  colorText: PropTypes.oneOf(['font1', 'background1']),
}

EngagementCard.defaultProps = {
  categorie: 'Autoproduction culturelle',
  colorText: 'font1',
  imageWidth: '111px',
  imageHeight: '150px',
  imageSrc: 'https://via.placeholder.com/150',
}
