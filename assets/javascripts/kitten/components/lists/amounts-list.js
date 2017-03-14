import React from 'react'

export class AmountsList extends React.Component {
  renderContent() {
    <th className="k-AmountsList__title" scope="row">
      { this.props.title }
      <td className="k-AmountsList__info">
        500&nbsp;€
      </td>
    </th>
  }

  render() {
    const { title,
            ...others } = this.props

    return (
      <table className="k-AmountsList">
        <tr className="k-AmountsList__row">
          { this.renderContent() }
        </tr>
      </table>
    )
  }
}

AmountsList.defaultProps = {
  title: "Toto",
}
