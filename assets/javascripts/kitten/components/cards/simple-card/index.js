import React, { Component } from 'react'
import styled from 'styled-components'
import { card } from '../../../hoc/card'
import { Image } from './components/image'
import { TitleComponent } from './components/title'
import { Subtitle } from './components/subtitle'
import { Paragraph } from './components/paragraph'

const ContainerStyle = styled.a`
  line-height: 1;
  position: relative;
`

class SimpleCardComponent extends Component {
  render() {
    const {
      imageProps,
      withPlayerButtonOnImage,
      arrowColor,
      ariaLabel,
      href,
      title,
      titleProps,
      subtitle,
      paragraph,
      imageContainerRatio,
      imageContainerBackground,
      ...others
    } = this.props

    return (
      <ContainerStyle {...others} as={href ? 'a' : 'div'} href={href}>
        <Image
          imageContainerRatio={imageContainerRatio}
          imageContainerBackground={imageContainerBackground}
          imageProps={imageProps}
          withPlayerButtonOnImage={withPlayerButtonOnImage}
          arrowColor={arrowColor}
          ariaLabel={ariaLabel}
        />
        {title && <TitleComponent title={title} titleProps={titleProps} />}
        {subtitle && <Subtitle subtitle={subtitle} />}
        {paragraph && <Paragraph paragraph={paragraph} />}
      </ContainerStyle>
    )
  }
}

export const SimpleCard = card(SimpleCardComponent, {
  withoutBoxShadowOnHover: true,
})
