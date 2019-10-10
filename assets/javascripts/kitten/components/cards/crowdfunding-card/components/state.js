import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'
import { Text } from '../../../../components/typography/text'
import { pxToRem } from '../../../../helpers/utils/typography'

const COMPONENT_GUTTER = pxToRem(10)

const StyledState = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  background-color: ${COLORS.background1};
  padding: ${COMPONENT_GUTTER};
  line-height: 1;
`

class State extends PureComponent {
  static propTypes = {
    state: PropTypes.string,
    loading: PropTypes.bool,
  }

  static defaultProps = {
    state: '',
    loading: false,
  }

  render() {
    const { state, loading } = this.props

    return (
      <>
        {state && !loading && (
          <StyledState>
            <Text
              size="micro"
              lineHeight="normal"
              weight="regular"
              color="font1"
            >
              {state}
            </Text>
          </StyledState>
        )}
      </>
    )
  }
}

export default State
