import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../typography/text'
import { HorizontalStroke } from '../../../../typography/horizontal-stroke'
import classNames from 'classnames'

class Subtitle extends PureComponent {
  static propTypes = {
    subTitle: PropTypes.string,
    widgetSubtitle: PropTypes.string,
    subTitleTruncate: PropTypes.bool,
    loading: PropTypes.bool,
    titleProps: PropTypes.shape(),
  }

  static defaultProps = {
    subTitle: '',
    widgetSubtitle: '',
    subTitleTruncate: true,
    loading: false,
    titleProps: {},
  }

  render() {
    const { subTitle, widgetSubtitle } = this.props

    return (
      <>
        {subTitle && this.renderSubtitle()}
        {widgetSubtitle && this.renderWidgetSubtitle()}
      </>
    )
  }

  renderSubtitle() {
    const { loading, subTitle, subTitleTruncate, style } = this.props

    return (
      <div className="k-CrowdfundingCard__subtitle__container">
        <HorizontalStroke
          className="k-CrowdfundingCard__subtitle__horizontalStroke"
          size="micro"
        />

        {subTitle && !loading && (
          <Text
            className={classNames(
              'k-CrowdfundingCard__subtitle__subtitleText',
              'k-u-margin-none',
              {
                'k-u-clamp': subTitleTruncate,
              },
            )}
            size="micro"
            weight="regular"
            tag="p"
            color="font1"
            style={{ '--line-clamp': 1, ...style }}
          >
            {subTitle}
          </Text>
        )}

        {loading && (
          <span className="k-CrowdfundingCard__subtitle__loadingElement" />
        )}
      </div>
    )
  }

  renderWidgetSubtitle() {
    const { widgetSubtitle, subTitleTruncate, loading, style } = this.props

    return (
      <>
        {widgetSubtitle && !loading && (
          <Text
            className={classNames(
              'k-u-margin-top-noneHalf',
              'k-u-margin-bottom-double',
              { 'k-u-clamp': subTitleTruncate },
            )}
            tag="p"
            size="micro"
            color="font1"
            lineHeight="normal"
            weight="light"
            style={{ '--line-clamp': 1, ...style }}
          >
            {widgetSubtitle}
          </Text>
        )}

        {loading && (
          <span className="k-CrowdfundingCard__subtitle__loadingElement" />
        )}
      </>
    )
  }
}

export default Subtitle
