import React, { useState, useEffect } from 'react'
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
import { domElementHelper } from '../../../helpers/dom/element-helper'

export const CrowdfundingCard = ({
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
  imageContainerRatio,
  state,
  stretch,
  subTitleTruncate,
  titleProps,
  titlesMinHeight,
  titleTruncate,
  videoProps,
  videoSources,
  widgetState,
  ...others
}) => {
  const removeCurrentFocus = () => {
    document.activeElement.blur()
  }

  const [shouldTruncateTitle, setTitleTruncate] = useState(false)
  const [shouldTruncateSubTitle, setSubTitleTruncate] = useState(false)

  useEffect(() => {
    if (
      domElementHelper.canUseDom() &&
      typeof document !== 'undefined' &&
      'fonts' in document // IE11 Fix, tests `document.fonts.ready.then()`
    ) {
      document.fonts.ready.then(() => {
        setTitleTruncate(titleTruncate)
        setSubTitleTruncate(subTitleTruncate)
      })
    }
  }, [])

  return (
    <StyledCrowdfundingCard
      {...others}
      as={href ? 'a' : 'div'}
      imageContainerRatio={imageContainerRatio}
      onClick={removeCurrentFocus}
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
        videoProps={videoProps}
        videoSources={videoSources}
        avatarProps={avatarProps}
        loading={loading}
      />
      <div className="k-CrowdfundingCard__titleAndDesc">
        <TitleComponent
          title={cardTitle}
          loading={loading}
          titleTruncate={shouldTruncateTitle}
        />
        <Subtitle
          subTitle={cardSubTitle}
          subTitleTruncate={shouldTruncateSubTitle}
          loading={loading}
        />
        {!loading && additionalInfo && (
          <span className="k-CrowdfundingCard__additionalInfo">
            <Text size="micro" lineHeight="normal" weight="light">
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

CrowdfundingCard.propTypes = {
  href: PropTypes.string,
  titlesMinHeight: PropTypes.bool,
  stretch: PropTypes.bool,
  imageContainerRatio: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

CrowdfundingCard.defaultProps = {
  href: null,
  titlesMinHeight: true,
  stretch: false,
  imageContainerRatio: 10 / 16,
}
