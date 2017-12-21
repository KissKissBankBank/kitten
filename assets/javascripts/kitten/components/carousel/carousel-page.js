import React from 'react'
import Radium from 'radium'
import { createRangeFromZeroTo } from 'kitten/helpers/utils/range'

class CarouselPage extends React.Component {

  render() {
    const {
      data,
      numColumns,
      itemMinWidth,
      itemMarginBetween,
      renderItem
    } = this.props
    const rangeCard = createRangeFromZeroTo(numColumns)

    return (
      <div style={styles.page}>
        {
          rangeCard.map((index) =>
            <div
              key={index}
              style={[
                styles.item,
                {
                  minWidth: itemMinWidth,
                  flexBasis: itemMinWidth,
                  marginLeft: index ? itemMarginBetween : 0,
                }
              ]}
            >
              {
                data[index] &&
                  renderItem({ item: data[index] })
              }
            </div>
          )
        }
      </div>
    )
  }
}

const styles = {
  page: {
    display: 'flex',
    flexDirect: 'row',
  },
  item: {
    flexGrow: 1,
    flexShrink: 1,
  },
}

export default Radium(CarouselPage)