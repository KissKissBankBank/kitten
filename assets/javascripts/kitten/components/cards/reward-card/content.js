import React, { Fragment } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { styles } from 'kitten/components/cards/reward-card'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Button } from 'kitten/components/buttons/button'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Text } from 'kitten/components/typography/text'
import { StarIcon } from 'kitten/components/icons/star-icon'
import { Deprecated } from 'kitten/helpers/utils/deprecated'

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
    <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/kitten/">
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
