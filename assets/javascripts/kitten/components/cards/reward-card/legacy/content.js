import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { styles } from '../index'
import { Marger } from '../../../../components/layout/marger'
import { Title } from '../../../../components/typography/title'
import { Button } from '../../../../components/buttons/button'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { Paragraph } from '../../../../components/typography/paragraph'
import { Text } from '../../../../components/typography/text'
import { StarIcon } from '../../../../components/icons/star-icon'
import { Deprecated } from '../../../../helpers/utils/deprecated'

const RewardCardContentBase = ({
  titleAmount,
  titleTag,
  subtitle,
  subtitleTag,
  description,
  starred,
  starLabel,
  isDisabled,
  isTinyVersion,
}) => {
  const descriptionStyle = [isDisabled && styles.disabled]

  return (
    <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../">
      <div style={descriptionStyle} disabled={isDisabled}>
        {starred && (
          <Marger bottom="2">
            <Button
              icon
              readonly
              tag="span"
              size="tiny"
              modifier="lithium"
              style={{ borderRadius: 5 }}
            >
              <StarIcon className="k-Button__icon is-readonly" />
              {starLabel}
            </Button>
          </Marger>
        )}
        <Marger top={starred ? 2 : 0} bottom="2">
          <Title
            modifier={isTinyVersion ? 'quaternary' : 'tertiary'}
            italic
            margin={false}
            tag={titleTag}
            style={styles.textColor}
          >
            {titleAmount}
          </Title>
        </Marger>
        <Marger top="2" bottom="3">
          <HorizontalStroke size="big" />
        </Marger>
        {subtitle && (
          <Marger top="3" bottom="1">
            <Text
              color="font1"
              size={isTinyVersion ? 'big' : 'huge'}
              tag={subtitleTag}
              weight="bold"
              style={styles.textMargin}
            >
              {subtitle}
            </Text>
          </Marger>
        )}
        <Marger top={!subtitle ? 3 : 1}>
          <Paragraph
            style={styles.textColor}
            modifier={isTinyVersion ? 'quaternary' : 'tertiary'}
            margin={false}
          >
            {description}
          </Paragraph>
        </Marger>
      </div>
    </Deprecated>
  )
}

RewardCardContentBase.propTypes = {
  titleAmount: PropTypes.string.isRequired,
  titleTag: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleTag: PropTypes.string,
  description: PropTypes.string,
  starred: PropTypes.bool,
  starLabel: PropTypes.string,
  isDisabled: PropTypes.bool,
  isTinyVersion: PropTypes.bool.isRequired,
}

RewardCardContentBase.defaultProps = {
  titleTag: 'h1',
  subtitle: '',
  subtitleTag: 'p',
  description: '',
  starred: false,
  starLabel: '',
  isDisabled: false,
}

export const RewardCardContent = Radium(RewardCardContentBase)
