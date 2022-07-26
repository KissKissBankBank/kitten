import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../typography/text'
import { ButtonImage } from '../../../action/button-image'

const StyledCard = styled.div`
  padding: ${pxToRem(40)} ${pxToRem(20)};
  border-radius: var(--border-radius-s);
  box-shadow: var(--box-shadow-s);
  text-align: center;
  word-break: break-word;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${pxToRem(10)};
`

export const BackerCard = ({
  className,
  title,
  titleTag,
  subtitle,
  imgProps,
  description,
  ...others
}) => (
  <StyledCard className={classNames('k-BackerCard', className)} {...others}>
    <div>
      <Text
        tag={titleTag || 'div'}
        color="font1"
        weight="500"
        lineHeight="normal"
        size="small"
      >
        {title}
      </Text>

      {subtitle && (
        <Text tag="div" color="font1" weight="400" size="micro">
          {subtitle}
        </Text>
      )}
    </div>

    <ButtonImage tag="span" img={imgProps} withoutPointerEvents huge />

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
  </StyledCard>
)

BackerCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imgProps: PropTypes.object.isRequired,
  description: PropTypes.node.isRequired,
  titleTag: PropTypes.string,
}

BackerCard.defaultProps = {
  subtitle: null,
  titleTag: 'div',
}
