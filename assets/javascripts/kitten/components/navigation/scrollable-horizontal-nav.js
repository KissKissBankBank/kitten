import React, { Component } from 'react'
import Radium, { Style } from 'radium'

import { createMatchMediaMax } from 'kitten/helpers/utils/media-queries'
import { SCREEN_SIZE_XS } from 'kitten/constants/screen-config'
import ColorsConfig from 'kitten/constants/colors-config'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE
} from 'kitten/constants/grid-config'

class BaseScrollableHorizontalItem extends Component {
  render() {
    const { title, isSelected } = this.props
    return (
      <div
        style={[
          styles.item,
          isSelected && styles.itemSelected,
        ]}
      >
        {title}
      </div>
    )
  }
}

export const ScrollableHorizontalItem = Radium(BaseScrollableHorizontalItem)


class ScrollableHorizontalNav extends Component {

  constructor(props, context) {
    super(props, context)

    this.mqMobile = createMatchMediaMax(SCREEN_SIZE_XS)

    this.state = {
      viewportIsMobile: this.mqMobile
        ? this.mqMobile.matches
        : false,
    }
  }

  onMobileMQ = (event) => {
    this.setState({ viewportIsMobile: event.matches })
  }

  componentDidMount () {
    this.mqMobile && this.mqMobile.addListener(this.onMobileMQ)
  }

  componentWillUnmount () {
    this.mqMobile && this.mqMobile.removeListener(this.onMobileMQ)
  }

  render() {
    const { data, renderItem } = this.props
    const { viewportIsMobile } = this.state

    if (!data || !data.length) {
      return null
    }

    return (
      <div style={styles.container}>
        <div
          style={styles.nav}
          className="k-ScrollableHorizontalNav"
        >
          <div
            style={[
              styles.navPadding,
              styles.navPaddingLeft,
              viewportIsMobile && styles.navPaddingMobile,
            ]}
            key="paddingLeft"
          />
          {
            data.map((item, index) =>
              <div
                key={item.key}
                style={[
                  styles.itemContainer,
                  viewportIsMobile && styles.itemContainerMobile,
                  (index === 0) && styles.itemContainerFirst,
                ]}
              >
                {
                  renderItem({ item, style: styles.itemCustom })
                }
              </div>
            )
          }
          <div
            style={[
              styles.navPadding,
              styles.navPaddingRight,
              viewportIsMobile && styles.navPaddingMobile,
            ]}
            key="paddingRight"
          />
        </div>

        <div
          style={styles.gradiantRight}
          key="gradiantRight"
        />
        <div
          style={styles.gradiantLeft}
          key="gradiantLeft"
        />

        { /* hide scrollbar on Chrome and Safari */ }
        <Style
          scopeSelector=".k-ScrollableHorizontalNav::-webkit-scrollbar"
          rules={{ display: 'none' }}
        />
      </div>
    )
  }
}

const transparent = 'rgba(255,255,255,0)'

const styles = {
  container: {
    position: 'relative',
  },

  nav: {
    display: 'flex',
    flexDirection: 'row',
    height: 80,

    overflowX: 'scroll',
    // hide scrollbar on IE and Edge
    MsOverflowStyle: 'none',
    // mandatory to combine scroll with this property on iOS
    WebkitOverflowScrolling: 'touch',

    backgroundColor: ColorsConfig.background1,
  },

  navPadding: {
    width: CONTAINER_PADDING,
    flexShrink: 0,
  },
  navPaddingMobile: {
    width: CONTAINER_PADDING_MOBILE,
  },
  navPaddingLeft: {
    marginRight: 'auto',
  },
  navPaddingRight: {
    marginLeft: 'auto',
  },

  gradiantLeft: {
    position: 'absolute',
    left: 0,
    width: 20,
    top: 0,
    bottom: 0,
    background:
      `linear-gradient(90deg, ${ColorsConfig.background1}, ${transparent})`
  },
  gradiantRight: {
    position: 'absolute',
    right: 0,
    width: 20,
    top: 0,
    bottom: 0,
    background:
      `linear-gradient(90deg, ${transparent}, ${ColorsConfig.background1})`
  },

  itemContainer: {
    display: 'flex',
    marginLeft: 50,
  },
  itemContainerMobile: {
    marginLeft: 25,
  },
  itemContainerFirst: {
    marginLeft: 0,
  },

  itemCustom: {
    display: 'flex',
  },

  item: {
    display: 'flex',
    alignItems: 'center',

    borderBottomWidth: 4,
    borderTopWidth: 4,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderStyle: 'solid',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',

    color: ColorsConfig.font1,
    fontSize: 14,
    fontWeight: 500,
  },
  itemSelected: {
    borderBottomColor: ColorsConfig.primary1,
    color: ColorsConfig.primary1,
  },
}

export default Radium(ScrollableHorizontalNav)