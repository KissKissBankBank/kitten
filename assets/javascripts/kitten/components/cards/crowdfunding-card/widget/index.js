import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Image from '../components/image'
import TitleComponent from '../components/title'
import Description from '../components/description'
import Informations from '../components/informations'
import CardButton from '../components/button'
import Loading from '../components/loading'
import State from '../components/state'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledContainer = styled.div`
  position: relative;
`

const StyledTitleAndDescription = styled.div`
  margin-top: ${pxToRem(10)};

  ${({ titlesMinHeight }) =>
    titlesMinHeight &&
    css`
      min-height: ${pxToRem(75)};
    `}
`

export class CrowdfundingCardWidget extends PureComponent {
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
      widgetState,
      widgetSubTitle,
      titleTruncate,
      titlesMinHeight,
      subTitleTruncate,
      widgetTitle,
      dayCounter,
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
        <StyledTitleAndDescription titlesMinHeight={titlesMinHeight}>
          <TitleComponent
            titleTruncate={titleTruncate}
            loading={loading}
            widgetTitle={widgetTitle}
            dayCounter={dayCounter}
            stateDay={stateDay}
          />
          <Description
            widgetSubTitle={widgetSubTitle}
            subTitleTruncate={subTitleTruncate}
            loading={loading}
          />
        </StyledTitleAndDescription>
        <CardButton buttonText={buttonText} loading={loading} />
        <State widgetState={widgetState} loading={loading} />
        <Loading loading={loading} />
      </StyledContainer>
    )
  }
}
