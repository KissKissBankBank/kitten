import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/atoms/typography/text'

class Informations extends PureComponent {
  static propTypes = {
    info1: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    info2: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    info3: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    loading: PropTypes.bool,
  }

  static defaultProps = {
    info1: '',
    info2: '',
    info3: '',
    loading: false,
  }

  render() {
    const { info1, info2, info3 } = this.props

    if (!info1 && !info2 && !info3) return null

    return (
      <div className="k-CrowdfundingCard__informations">
        {this.renderInfo(info1)}
        {this.renderInfo(info2)}
        {this.renderInfo(info3)}
      </div>
    )
  }

  renderInfo(text) {
    const { loading } = this.props

    if (!text) return null

    return (
      <div className="k-CrowdfundingCard__informations__infoContainer">
        {!loading && (
          <Text
            lineHeight="normal"
            weight="light"
            color="font1"
            className="k-CrowdfundingCard__informations__info"
          >
            {text}
          </Text>
        )}

        {loading && (
          <>
            <span className="k-CrowdfundingCard__informations__loadingElement" />
            <span className="k-CrowdfundingCard__informations__loadingElement" />
          </>
        )}
      </div>
    )
  }
}

export default Informations
