import React from 'react'
import PropTypes from 'prop-types'
import COLORS from 'kitten/constants/colors-config'
import { Marger } from 'kitten/components/layout/marger'
import { Text } from 'kitten/components/typography/text'
import { ButtonImage } from 'kitten/components/buttons/button-image'

export const BackerCard = ({
  title,
  subtitle,
  imgProps,
  description,
  ...others
}) => (
  <div style={{ ...styles.card, ...others.style }} {...others}>
    <Marger top="4" bottom="1">
      <Text color="primary1" weight="regular" lineHeight="normal">
        {title}

        {subtitle && (
          <Text
            color="font1"
            weight="light"
            size="micro"
            style={{ display: 'block' }}
          >
            {subtitle}
          </Text>
        )}
      </Text>
    </Marger>

    <Marger top="1" bottom="1">
      <ButtonImage
        tag="span"
        img={imgProps}
        style={styles.buttonImage}
        withoutPointerEvents
        huge
      />
    </Marger>

    <Marger top="1" bottom="4">
      <Text
        tag="p"
        color="font1"
        weight="light"
        size="micro"
        lineHeight="normal"
        style={{ margin: 0 }}
      >
        {description}
      </Text>
    </Marger>
  </div>
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

const styles = {
  card: {
    padding: '0 20px',
    border: `2px solid ${COLORS.line1}`,
    textAlign: 'center',
  },

  buttonImage: {
    margin: '0 auto',
  },
}
