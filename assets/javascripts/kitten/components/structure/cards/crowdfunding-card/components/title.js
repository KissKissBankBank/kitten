import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Text } from '../../../../typography/text'
import { Title } from '../../../../typography/title'

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
            noMargin
            className={classNames('k-CrowdfundingCard__title__title', {
              'k-u-clamp': titleTruncate,
            })}
            {...titleProps}
          >
            {title}
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
                size="medium"
                weight="600"
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
                size="small"
                color="font1"
                weight="500"
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
