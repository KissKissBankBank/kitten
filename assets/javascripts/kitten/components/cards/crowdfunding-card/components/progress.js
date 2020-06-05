import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Progress } from '../../../../components/meters/progress'
import { Text } from '../../../../components/typography/text'
import COLORS from '../../../../constants/colors-config'
import classNames from 'classnames'

class ProgressBar extends PureComponent {
  static propTypes = {
    progress: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    progressColor: PropTypes.string,
    loading: PropTypes.bool,
  }

  static defaultProps = {
    progress: 0,
    progressColor: COLORS.primary1,
    loading: false,
  }

  render() {
    const { progress, progressColor, loading } = this.props

    if (progress === false) return null

    const progressValue = loading ? 65 : parseInt(progress, 10)

    return (
      <div className="k-CrowdfundingCard__progressBar">
        <Progress
          value={progressValue}
          className={classNames('k-CrowdfundingCard__progressBar__progress', {
            'is-disabled': loading,
          })}
          color={progressColor}
          rampProps={{
            style: { height: '4px' },
          }}
        />

        <Text
          weight="regular"
          size="micro"
          color="font1"
          className="k-CrowdfundingCard__progressBar__percent k-u-hidden@s-down"
        >
          {loading && (
            <span className="k-CrowdfundingCard__progressBar__loadingPercent" />
          )}

          {!loading && `${progress} %`}
        </Text>
      </div>
    )
  }
}

export default ProgressBar
