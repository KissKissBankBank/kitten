import React from 'react'

const MARGIN = 40

export default class CarouselPage extends React.Component {

  static MARGIN = MARGIN

  render() {
    const { data, numColumns, itemMinWidth, renderItem } = this.props
    const rangeCard = [...Array(numColumns).keys()]

    return (
      <div style={styles.page}>
        {
          rangeCard.map((index) =>
            <div
              key={index}
              style={{
                ...styles.item,
                minWidth: itemMinWidth,
                marginLeft: index ? MARGIN : 0
              }}
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
