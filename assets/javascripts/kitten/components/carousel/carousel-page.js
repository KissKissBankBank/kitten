import React from 'react'

const MARGIN = 40

export default class CarouselPage extends React.Component {

  static MARGIN = MARGIN

  render() {
    const { ItemComponent, numColumns, data } = this.props
    const rangeCard = [...Array(numColumns).keys()]

    return (
      <div style={styles.page}>
        {
          rangeCard.map((index) =>
            data[index]
              ? <ItemComponent
                  key={index}
                  style={{
                    marginLeft: index ? MARGIN : 0
                  }}
                  title={data[index].title}
                />
              : <div key={index} style={{
                  ...styles.itemEmpty,
                  minWidth: ItemComponent.MIN_WIDTH,
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
