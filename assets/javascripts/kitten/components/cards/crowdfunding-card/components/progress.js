import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Progress } from '../../../../components/meters/progress'
import { Text } from '../../../../components/typography/text'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'

const COMPONENT_GUTTER = pxToRem(10)

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${COMPONENT_GUTTER};
  margin-top: ${pxToRem(5)};
  margin-bottom: ${pxToRem(20)};
`

const StyledProgress = styled(Progress)`
  flex: 1;
`

const StyledPercent = styled(Text)`
  flex-shrink: 0;
  margin-left: calc(2 * ${COMPONENT_GUTTER});
`

const StyledLoading = styled.span`
  display: block;
  background-color: ${COLORS.line2};
  border-bottom: ${pxToRem(1)} solid ${COLORS.background1};
  width: ${pxToRem(40)};
  height: ${pxToRem(16)};
`

class ProgressBar extends PureComponent {
  static propTypes = {
    progress: PropTypes.number,
    progressColor: PropTypes.string,
    loading: PropTypes.bool,
  }

  static defaultProps = {
    progress: 0,
    progressColor: '',
    loading: false,
  }

  render() {
    const { progress, progressColor, loading } = this.props

    if (progress === false) return null

    const progressValue = loading ? 65 : progress

    return (
      <StyledContainer>
        <StyledProgress
          value={progressValue}
          className={loading && 'is-disabled'}
          color={progressColor}
          rampProps={{
            style: { height: '4px' },
          }}
        />

        <StyledPercent
          weight="regular"
          size="micro"
          color="font1"
          className="k-u-hidden@s-down"
        >
          {loading && <StyledLoading />}

          {!loading && `${progress} %`}
        </StyledPercent>
      </StyledContainer>
    )
  }
}

export default ProgressBar
