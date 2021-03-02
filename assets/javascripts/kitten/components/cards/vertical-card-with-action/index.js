import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Title } from '../../../components/typography/title'
import { Paragraph } from '../../../components/typography/paragraph'
import { Button } from '../../../components/buttons/button'
import COLORS from '../../../constants/colors-config'
import classNames from 'classnames'

const StyledVerticalCardWithAction = styled.div`
  .k-VerticalCardWithAction__image {
    width: 100%;
    height: auto;
    display: block;
  }

  .k-VerticalCardWithAction__text {
    color: ${COLORS.font1};
  }
`

export const VerticalCardWithAction = ({
  imageProps,
  title,
  titleTag,
  description,
  descriptionTag,
  button,
  buttonModifier,
  buttonProps,
  ...others
}) => (
  <StyledVerticalCardWithAction {...others}>
    <div className="k-u-margin-bottom-triple">
      <img
        {...imageProps}
        className={classNames(
          'k-VerticalCardWithAction__image',
          imageProps.className,
        )}
      />
    </div>
    <div className="k-VerticalCardWithAction__text k-u-margin-top-triple k-u-margin-bottom-triple">
      <Title
        modifier="senary"
        tag={titleTag}
        noMargin
        className={classNames('k-u-align-center', {
          'k-u-margin-bottom-singleHalf--important': !!description,
        })}
      >
        {title}
      </Title>
      {description && (
        <Paragraph
          modifier="quaternary"
          tag={descriptionTag}
          margin={false}
          className="k-u-align-center k-u-margin-top-singleHalf--important"
        >
          {description}
        </Paragraph>
      )}
    </div>
    <div className="k-u-margin-top-triple k-u-align-center">
      <Button
        {...buttonProps}
        modifier={buttonModifier}
        type="button"
        onClick={buttonProps.onClick}
        href={buttonProps.href}
        className={classNames(
          'k-VerticalCardWithAction__button',
          buttonProps.className,
        )}
      >
        {button}
      </Button>
    </div>
  </StyledVerticalCardWithAction>
)

VerticalCardWithAction.propTypes = {
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.shape({}),
  }).isRequired,
  title: PropTypes.string.isRequired,
  titleTag: PropTypes.string,
  description: PropTypes.string,
  descriptionTag: PropTypes.string,
  button: PropTypes.string.isRequired,
  buttonModifier: PropTypes.string,
  buttonProps: PropTypes.shape({
    onClick: PropTypes.func,
    href: PropTypes.string,
  }).isRequired,
}

VerticalCardWithAction.defaultProps = {
  imageProps: {
    style: {},
  },
  titleTag: 'h1',
  description: '',
  descriptionTag: 'p',
  buttonModifier: 'helium',
  buttonProps: {
    onClick: null,
    href: null,
  },
}
