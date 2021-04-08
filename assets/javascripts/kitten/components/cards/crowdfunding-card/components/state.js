import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/typography/text'

class State extends PureComponent {
  static propTypes = {
    state: PropTypes.node,
    widgetState: PropTypes.node,
    loading: PropTypes.bool,
  }

  static defaultProps = {
    state: '',
    widgetState: '',
    loading: false,
  }

  render() {
    const { state, widgetState } = this.props

    return (
      <>
        {state && this.renderState()}
        {widgetState && this.renderWidgetState()}
      </>
    )
  }

  renderState() {
    const { state, loading } = this.props

    return (
      <>
        {!loading && (
          <div className="k-CrowdfundingCard__state">
            <Text
              size="micro"
              lineHeight="normal"
              weight="regular"
              color="font1"
            >
              {state}
            </Text>
          </div>
        )}
      </>
    )
  }

  renderWidgetState() {
    const { widgetState, loading } = this.props

    return (
      <>
        {!loading && (
          <div className="k-CrowdfundingCard__widgetState">{widgetState}</div>
        )}
      </>
    )
  }
}

export default State
