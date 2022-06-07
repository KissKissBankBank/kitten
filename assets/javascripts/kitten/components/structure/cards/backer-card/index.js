import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Marger } from '../../../layout/marger'
import { Text } from '../../../typography/text'
import { ButtonImage } from '../../../action/button-image'

const StyledCard = styled.div`
  padding: 0 ${pxToRem(20)};
  border: var(--border);
  text-align: center;
  word-break: break-word;
`

const StyledSubtitle = styled(Text)`
  display: block;
`

const StyledButtonImage = styled(ButtonImage)`
  margin: 0 auto;
`

export const BackerCard = ({
  title,
  subtitle,
  imgProps,
  description,
  ...others
}) => (
  <StyledCard {...others}>
    <Marger top="4" bottom="1">
      <Text color="font1" weight="500" lineHeight="normal" size="small">
        {title}

        {subtitle && (
          <StyledSubtitle color="font1" weight="400" size="micro">
            {subtitle}
          </StyledSubtitle>
        )}
      </Text>
    </Marger>

    <Marger top="1" bottom="1">
      <StyledButtonImage tag="span" img={imgProps} withoutPointerEvents huge />
    </Marger>

    <Marger top="1" bottom="4">
      <Text
        tag="p"
        color="font1"
        weight="400"
        size="micro"
        lineHeight="normal"
        className="k-u-margin-none"
      >
        {description}
      </Text>
    </Marger>
  </StyledCard>
)

BackerCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imgProps: PropTypes.object.isRequired,
  description: PropTypes.node.isRequired,
}

BackerCard.defaultProps = {
  subtitle: null,
}
