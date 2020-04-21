import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Image from './components/image'
import TitleComponent from './components/title'
import Subtitle from './components/subtitle'
import Informations from './components/informations'
import ProgressBar from './components/progress'
import State from './components/state'
import classNames from 'classnames'
import { StyledCrowdfundingCard } from './styles'

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
          'k-Card k-Card--light k-Card--withoutBoxShadowOnHover',
          className,
          {
            'k-CrowdfundingCard--titlesMinHeight': titlesMinHeight,
            'k-CrowdfundingCard--isLoading': loading,
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
        <div className="k-CrowdfundingCard__titleAndDesc">
          <TitleComponent
            title={cardTitle}
            loading={loading}
            titleTruncate={titleTruncate}
          />
          <Subtitle
            subTitle={cardSubTitle}
            subTitleTruncate={subTitleTruncate}
            loading={loading}
          />
        </div>
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

        {loading && <span className="k-CrowdfundingCard__loading" />}
      </StyledCrowdfundingCard>
    )
  }
}
