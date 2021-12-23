import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../../components/atoms/typography/text'
import Truncate from 'react-truncate'
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
    const { loading, subTitle, subTitleTruncate } = this.props

    return (
      <div className="k-CrowdfundingCard__subtitle__container">
        {subTitle && !loading && (
          <Text
            className={classNames(
              'k-CrowdfundingCard__subtitle__subtitleText',
              'k-u-margin-none',
              {
                'k-CrowdfundingCard__subtitle__subtitleText--truncated': subTitleTruncate,
              },
            )}
            size="micro"
            weight="regular"
            tag="p"
            color="font1"
            fontStyle="italic"
          >
            {subTitleTruncate && (
              <Truncate className="k-CrowdfundingCard__noWrap">
                {subTitle}
              </Truncate>
            )}

            {!subTitleTruncate && subTitle}
          </Text>
        )}

        {loading && (
          <span className="k-CrowdfundingCard__subtitle__loadingElement" />
        )}
      </div>
    )
  }

  renderWidgetSubtitle() {
    const { widgetSubtitle, subTitleTruncate, loading } = this.props

    return (
      <>
        {widgetSubtitle && !loading && (
          <Text
            className="k-u-margin-top-noneHalf k-u-margin-bottom-double"
            tag="p"
            size="micro"
            color="font1"
            lineHeight="normal"
            weight="light"
          >
            {subTitleTruncate && (
              <Truncate lines={3}>{widgetSubtitle}</Truncate>
            )}

            {!subTitleTruncate && widgetSubtitle}
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
