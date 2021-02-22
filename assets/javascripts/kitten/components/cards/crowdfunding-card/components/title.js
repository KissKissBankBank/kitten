import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/typography/text'
import { Title } from '../../../../components/typography/title'
import Truncate from 'react-truncate'

class TitleComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
    loading: PropTypes.bool,
    widgetTitle: PropTypes.string,
    dayCounter: PropTypes.element,
    titleProps: PropTypes.shape(),
  }

  static defaultProps = {
    title: '',
    titleTruncate: true,
    loading: false,
    widgetTitle: '',
    dayCounter: null,
    titleProps: {},
  }

  render() {
    const { title, widgetTitle } = this.props

    return (
      <>
        {title && this.renderTitle()}
        {widgetTitle && this.renderWidgetTitle()}
      </>
    )
  }

  renderTitle() {
    const { loading, titleProps, titleTruncate, title } = this.props

    return (
      <div className="k-CrowdfundingCard__title">
        {!loading && (
          <Title
            tag="p"
            noMargin={false}
            className="k-Card__title k-CrowdfundingCard__title__title"
            {...titleProps}
          >
            {titleTruncate && (
              <>
                <Truncate
                  lines={2}
                  className="k-CrowdfundingCard__noWrap k-u-hidden@s-down"
                >
                  {title}
                </Truncate>
                <Truncate
                  lines={3}
                  className="k-CrowdfundingCard__noWrap k-u-hidden@m-up"
                >
                  {title}
                </Truncate>
              </>
            )}

            {!titleTruncate && title}
          </Title>
        )}

        {loading && (
          <>
            <span className="k-CrowdfundingCard__title__loadingElement" />
            <span className="k-CrowdfundingCard__title__loadingElement" />
          </>
        )}
      </div>
    )
  }

  renderWidgetTitle() {
    const { widgetTitle, dayCounter, loading, titleTruncate } = this.props

    return (
      <>
        <div className="k-CrowdfundingCard__titleWrapper">
          <div className="k-CrowdfundingCard__title">
            {!loading && (
              <Text
                tag="span"
                color="font1"
                size="default"
                weight="bold"
                lineHeight="normal"
                className="k-Card__title"
              >
                {titleTruncate && <Truncate lines={2}>{widgetTitle}</Truncate>}

                {!titleTruncate && widgetTitle}
              </Text>
            )}
          </div>

          {!loading && (
            <div className="k-CrowdfundingCard__title__dayCounter">
              <Text
                size="tiny"
                color="font1"
                weight="regular"
                lineHeight="normal"
              >
                {dayCounter}
              </Text>
            </div>
          )}
        </div>

        {loading && (
          <>
            <span className="k-CrowdfundingCard__title__loadingElement" />
            <span className="k-CrowdfundingCard__title__loadingElement" />
          </>
        )}
      </>
    )
  }
}

export default TitleComponent
