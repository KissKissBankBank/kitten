import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Marger } from '../../../components/layout/marger'
import { Text } from '../../../components/typography/text'
import { ButtonImage } from '../../../components/buttons/button-image'

const StyledCard = styled.div`
  padding: 0 ${pxToRem(20)};
  border: ${pxToRem(2)} solid ${COLORS.line1};
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
      <Text color="font1" weight="regular" lineHeight="normal" size="tiny">
        {title}

        {subtitle && (
          <StyledSubtitle color="font1" weight="light" size="micro">
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
        weight="light"
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
