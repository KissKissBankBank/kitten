import React from 'react'
import {
  Baseline,
  Ecosystem,
  ListItems,
  SocialButton,
  Partners,
  Legal,
} from './components'
import { HorizontalStroke } from 'kitten'
import { StyledFooter } from './styles'
import classNames from 'classnames'

const Stroke = props => (
  <HorizontalStroke
    {...props}
    className={classNames(
      'k-u-margin-bottom-quintuple@m-up',
      'k-u-margin-bottom-triple@s-down',
      'k-u-margin-top-quintuple@m-up',
      'k-u-margin-top-triple@s-down',
    )}
    color="var(--color-grey-700)" 
    customSize={{ width: '100%', height: 1 }}
  />
)

const Footer = () => {
  return (
    <StyledFooter>
      <div className="k-Footer__gridWrapper">
        <Baseline />
        <Stroke className="k-u-hidden@l-up" />
        <div className="k-u-margin-left-double@s-up">
          <SocialButton className="k-u-hidden@m-down" />
          <ListItems />
        </div>
      </div>
      <Stroke />
      <Ecosystem />

      <Stroke />
      <Partners />

      <Stroke />
      <Legal />
    </StyledFooter>
  )
}

export default Footer
