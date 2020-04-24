import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Image from '../components/image'
import TitleComponent from '../components/title'
import Subtitle from '../components/subtitle'
import CardButton from '../components/button'
import State from '../components/state'
import { StyledCrowdfundingCard } from '../styles'
import classNames from 'classnames'

export class CrowdfundingCardWidget extends PureComponent {
  static propTypes = {
    href: PropTypes.string,
    titlesMinHeight: PropTypes.bool,
    stretch: PropTypes.bool,
  }

  static defaultProps = {
    href: null,
    titlesMinHeight: true,
    stretch: false,
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
      stretch,
      state,
      subtitle,
      title,
      titleTruncate,
      titlesMinHeight,
      subTitleTruncate,
      dayCounter,
      titleProps,
      buttonText,
      className,
      ...others
    } = this.props

    return (
      <StyledCrowdfundingCard
        {...others}
        as={href ? 'a' : 'div'}
        onClick={this.removeCurrentFocus}
        className={classNames(
          'k-CrowdfundingCard',
          'k-CrowdfundingCardWidget',
          'k-Card k-Card--light k-Card--withoutBoxShadowOnHover',
          className,
          {
            'k-CrowdfundingCard--titlesMinHeight': titlesMinHeight,
            'k-CrowdfundingCard--isLoading': loading,
            'k-CrowdfundingCard--isStretched': stretch,
          },
        )}
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
        <div className="k-CrowdfundingCard__titleAndDesc k-CrowdfundingCard__paddedContainer">
          <TitleComponent
            titleTruncate={titleTruncate}
            loading={loading}
            widgetTitle={title}
            dayCounter={dayCounter}
          />
          <Subtitle
            widgetSubtitle={subtitle}
            subTitleTruncate={subTitleTruncate}
            loading={loading}
          />
        </div>
        <CardButton text={buttonText} loading={loading} />
        <State widgetState={state} loading={loading} />
        {loading && <span className="k-CrowdfundingCard__loading" />}
      </StyledCrowdfundingCard>
    )
  }
}
