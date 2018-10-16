import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'kitten/components/cards/reward-card'
import deprecated from 'prop-types-extra/lib/deprecated'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Button } from 'kitten/components/buttons/button'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Text } from 'kitten/components/typography/text'

export const RewardCardContent = ({
  titleAmount,
  titleTag,
  subtitle,
  subtitleTag,
  description,
  starred,
  starLabel,
  isDisabled,
  isTinyVersion,
  titleDescription,
  textDescription,
  textTag,
}) => {
  const descriptionStyle = [isDisabled && styles.disabled]
  const subtitleText = subtitle || titleDescription
  const subtitleTagname = subtitleTag || textTag
  const descriptionText = description || textDescription

  return (
    <Fragment>
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
        {subtitleText && (
          <Marger top="3" bottom="1">
            <Text
              color="font1"
              size={isTinyVersion ? 'big' : 'huge'}
              tag={subtitleTagname}
              weight="bold"
              style={styles.textMargin}
            >
              {subtitleText}
            </Text>
          </Marger>
        )}
        <Marger top={!subtitleText ? 3 : 1}>
          <Paragraph
            style={styles.textColor}
            modifier={isTinyVersion ? 'quaternary' : 'tertiary'}
            margin={false}
          >
            {descriptionText}
          </Paragraph>
        </Marger>
      </div>
    </Fragment>
  )
}

RewardCardContent.propTypes = {
  titleAmount: PropTypes.string.isRequired,
  titleTag: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleTag: PropTypes.string,
  description: PropTypes.string.isRequired,

  titleDescription: deprecated(PropTypes.string, 'Use `subtitle` prop instead'),
  textDescription: deprecated(
    PropTypes.string,
    'Use `description` prop instead',
  ),
  textTag: deprecated(PropTypes.string, 'Use `subtitleTag` prop instead'),
}

RewardCardContent.defaultProps = {
  titleTag: 'h1',
  subtitle: '',
  subtitleTag: 'p',

  titleDescription: '',
  textTag: 'p',
}
