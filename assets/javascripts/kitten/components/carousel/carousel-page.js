import React from 'react'
import Radium from 'radium'
import { createRangeFromZeroTo } from 'kitten/helpers/utils/range'
import Prefixer from 'inline-style-prefixer'

const prefixer = new Prefixer({
  keepUnprefixed: true,
})

class CarouselPageBase extends React.Component {
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
      <div style={ styles.page }>
        {
          rangeCard.map(index =>
            <div
              key={ index }
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
  page: prefixer.prefix({
    display: 'flex',
    flexDirect: 'row',
  }),
  item: prefixer.prefix({
    flexGrow: 1,
    flexShrink: 1,
  }),
}

export const CarouselPage = Radium(CarouselPageBase)
