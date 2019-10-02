import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Image from './components/image'
import Description from './components/description'
import Informations from './components/informations'
import Progress from './components/progress'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledContainer = styled.div`
  position: relative;
  padding-bottom: ${pxToRem(5)};
`

export class CrowdfundingCard extends PureComponent {
  removeCurrentFocus = () => {
    document.activeElement.blur()
  }

  render() {
    const {
      href,
      imageContainerBackground,
      imageContainerRatio,
      imageProps,
      avatarProps,
      ownerDescription,
      ownerTitle,
      loading,
      state,
      cardTitle,
      cardSubtitle,
      titleTruncate,
      subTitleTruncate,
      titlesMinHeight,
      titleProps,
      info1,
      info2,
      info3,
      progress,
      progressColor,
      ...others
    } = this.props

    return (
      <StyledContainer
        as={href ? 'a' : 'div'}
        onClick={this.removeCurrentFocus}
        {...others}
      >
        <Image
          ownerTitle={ownerTitle}
          ownerDescription={ownerDescription}
          imageContainerBackground={imageContainerBackground}
          imageContainerRatio={imageContainerRatio}
          imageProps={imageProps}
          avatarProps={avatarProps}
          state={state}
          loading={loading}
        />
        <Description
          cardTitle={cardTitle}
          cardSubtitle={cardSubtitle}
          titleTruncate={titleTruncate}
          subTitleTruncate={subTitleTruncate}
          titlesMinHeight={titlesMinHeight}
          titleProps={titleProps}
          loading={loading}
        />
        <Informations
          info1={info1}
          info2={info2}
          info3={info3}
          loading={loading}
        />
        <Progress
          progress={progress}
          progressColor={progressColor}
          loading={loading}
        />
      </StyledContainer>
    )
  }
}
