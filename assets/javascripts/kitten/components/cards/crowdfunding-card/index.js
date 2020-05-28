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
import { Text } from '../../../components/typography/text'

export class CrowdfundingCard extends PureComponent {
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
      additionalInfo,
      avatarProps,
      cardSubTitle,
      cardTitle,
      className,
      href,
      imageContainerBackground,
      imageProps,
      info1,
      info2,
      info3,
      loading,
      ownerDescription,
      ownerTitle,
      progress,
      progressColor,
      state,
      stretch,
      subTitleTruncate,
      titleProps,
      titlesMinHeight,
      titleTruncate,
      widgetState,
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
          {additionalInfo && (
            <span className="k-CrowdfundingCard__additionalInfo">
              <Text size="micro" lineHeight="normal" title={additionalInfo}>
                {additionalInfo}
              </Text>
            </span>
          )}
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
        <State state={state} widgetState={widgetState} loading={loading} />

        {loading && <span className="k-CrowdfundingCard__loading" />}
      </StyledCrowdfundingCard>
    )
  }
}
