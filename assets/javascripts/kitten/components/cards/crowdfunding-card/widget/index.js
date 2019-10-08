import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Image from '../components/image'
import TitleComponent from '../components/title'
import Description from '../components/description'
import Informations from '../components/informations'
import ButtonCard from '../components/button'
import Loading from '../components/loading'
import State from '../components/state'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledContainer = styled.div`
  position: relative;
`

export class WidgetCard extends PureComponent {
  render() {
    const {
      href,
      imageContainerBackground,
      imageProps,
      avatarProps,
      ownerDescription,
      ownerTitle,
      loading,
      state,
      cardSubTitle,
      titleTruncate,
      subTitleTruncate,
      titlesMinHeight,
      widgetCardTitle,
      counterDay,
      stateDay,
      titleProps,
      buttonText,
      ...others
    } = this.props

    return (
      <StyledContainer
        {...others}
        as={href ? 'a' : 'div'}
        onClick={this.removeCurrentFocus}
        className="k-Card k-Card--light k-Card--withoutBoxShadowOnHover"
        href={href}
      >
        <Image
          ownerTitle={ownerTitle}
          ownerDescription={ownerDescription}
          imageContainerBackground={imageContainerBackground}
          imageProps={imageProps}
          avatarProps={avatarProps}
          loading={loading}
        />
        <TitleComponent
          titlesMinHeight={titlesMinHeight}
          titleTruncate={titleTruncate}
          loading={loading}
          widgetCardTitle={widgetCardTitle}
          counterDay={counterDay}
          stateDay={stateDay}
        />
        <Description
          cardSubTitle={cardSubTitle}
          subTitleTruncate={subTitleTruncate}
          loading={loading}
        />
        <ButtonCard buttonText={buttonText} />
      </StyledContainer>
    )
  }
}
