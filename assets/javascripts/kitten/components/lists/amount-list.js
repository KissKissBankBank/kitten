import React from 'react'

export class AmountList extends React.Component {

  renderTable() {
    <th className="k-AmountList__title" scope="row">
      { title }
      <td className="k-AmountList__info">
        500&nbsp;€
      </td>
    </th>
  }

  render() {
    const { title,
            ...others } = this.props

    return (
      <table className="k-AmountList">
        <tr className="k-AmountList__row">
          { this.renderTable() }
        </tr>
      </table>
    )
  }
}

AmountList.defaultProps = {
  title: "Toto",
}
