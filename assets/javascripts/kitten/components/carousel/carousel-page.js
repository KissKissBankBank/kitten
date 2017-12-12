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
            data[index]
              ? renderItem({
                  index,
                  item: data[index],
                  style: { marginLeft: index ? MARGIN : 0 },
                })
              : <div key={index} style={{
                  ...styles.itemEmpty,
                  minWidth: itemMinWidth,
                  marginLeft: index ? MARGIN : 0
                }} />
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
  itemEmpty: {
    flexGrow: 1,
    flexShrink: 1,
  },
}
