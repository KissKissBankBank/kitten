import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Image from './components/image'
import TitleComponent from './components/title'
import Description from './components/description'
import Informations from './components/informations'
import ProgressBar from './components/progress'
import Loading from './components/loading'
import State from './components/state'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledContainer = styled.div`
  position: relative;
  padding-bottom: ${pxToRem(5)};
`

const StyledTitleAndDescription = styled.div`
  margin-bottom: ${pxToRem(10)};

  ${({ titlesMinHeight }) =>
    titlesMinHeight &&
    css`
      min-height: ${pxToRem(75)};
    `}
`

export class CrowdfundingCard extends PureComponent {
  static propTypes = {
    href: PropTypes.string,
    titlesMinHeight: PropTypes.bool,
  }

  static defaultProps = {
    href: null,
    titlesMinHeight: true,
  }

  removeCurrentFocus = () => {
    document.activeElement.blur()
  }

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
      cardTitle,
      cardSubTitle,
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
        <StyledTitleAndDescription titlesMinHeight={titlesMinHeight}>
          <TitleComponent
            title={cardTitle}
            loading={loading}
            titleTruncate={titleTruncate}
          />
          <Description
            subTitle={cardSubTitle}
            titleTruncate={titleTruncate}
            loading={loading}
          />
        </StyledTitleAndDescription>
        <Informations
          info1={info1}
          info2={info2}
          info3={info3}
          loading={loading}
        />
        <ProgressBar
          progress={progress}
          progressColor={progressColor}
          loading={loading}
        />
        <State state={state} loading={loading} />
        <Loading loading={loading} />
      </StyledContainer>
    )
  }
}
