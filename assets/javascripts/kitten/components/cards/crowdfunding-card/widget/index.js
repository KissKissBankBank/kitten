import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
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

const StyledTitleAndDescription = styled.div`
  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(10)};

  ${({ titlesMinHeight }) =>
    titlesMinHeight &&
    css`
      min-height: ${pxToRem(75)};
    `}
`

export class WidgetCard extends PureComponent {
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
      stateWidget,
      subTitleWidget,
      titleTruncate,
      titlesMinHeight,
      subTitleTruncate,
      titleWidget,
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
        <StyledTitleAndDescription titlesMinHeight={titlesMinHeight}>
          <TitleComponent
            titleTruncate={titleTruncate}
            loading={loading}
            titleWidget={titleWidget}
            counterDay={counterDay}
            stateDay={stateDay}
          />
          <Description
            subTitleWidget={subTitleWidget}
            subTitleTruncate={subTitleTruncate}
            loading={loading}
          />
        </StyledTitleAndDescription>
        <ButtonCard buttonText={buttonText} />
        <State stateWidget={stateWidget} loading={loading} />
        <Loading loading={loading} />
      </StyledContainer>
    )
  }
}
