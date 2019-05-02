import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { ExpandBoard } from 'kitten/components/expandable/expand-board'
import { List } from 'kitten/components/lists/list'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Text } from 'kitten/components/typography/text'
import COLORS from 'kitten/constants/colors-config'

export class ExpandBoardWithButtonItemList extends Component {
  list = [
    {
      size: 'Size XS',
      availability: 'Availability: 10/30',
      disabled: false,
    },
    {
      size: 'Size M',
      availability: 'Availability: 10/30',
      disabled: true,
    },
    {
      size: 'Size XXL',
      availability: 'Availability: 10/30',
      disabled: false,
    },
  ]

  state = {
    isShrinking: false,
    expanded: false,
  }

  handleClick = ({ isShrinking, expanded }) => {
    this.setState({ isShrinking, expanded })
  }

  buttonListItemStyle = key => {
    if (!this.props.withAnimation) return null

    if (this.state.expanded) {
      return [
        styles.buttonListItem.expandAnimation,
        { animationDelay: `${0.2 * key}s` },
      ]
    }

    return [
      styles.buttonListItem.shrinkAnimation,
      { animationDelay: `${0.1 * key}s` },
    ]
  }

  render() {
    const { withAnimation, expandedButtonText, buttonText } = this.props
    return (
      <ExpandBoard onClick={this.handleClick} withAnimation={withAnimation}>
        <ExpandBoard.Button expandChildren={expandedButtonText}>
          {buttonText}
        </ExpandBoard.Button>
        <ExpandBoard.Content>
          <List>
            {this.list.map((item, key) => {
              return (
                <List.ButtonItem
                  key={item.size}
                  disabled={item.disabled}
                  style={this.buttonListItemStyle(key)}
                >
                  <div style={styles.buttonListItem.base}>
                    <Text
                      tag="p"
                      weight="regular"
                      color="font1"
                      size="tiny"
                      style={styles.buttonListItem.content}
                    >
                      {item.size}
                    </Text>
                    <Text
                      tag="small"
                      color={item.disabled ? 'font2' : 'font1'}
                      size="micro"
                    >
                      {item.availability}
                    </Text>
                  </div>
                </List.ButtonItem>
              )
            })}
          </List>
        </ExpandBoard.Content>
      </ExpandBoard>
    )
  }
}

const fadeInAnimation = Radium.keyframes(
  {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  'fadeIn',
)

const fadeOutAnimation = Radium.keyframes(
  {
    '0%': { opacity: 1, height: 'auto' },
    '100%': { opacity: 0, height: 0 },
  },
  'fadeOut',
)

const styles = {
  buttonListItem: {
    content: {
      margin: 0,
      padding: 0,
      lineHeight: '1.2rem',
    },
    base: {
      margin: '1rem 0',
      padding: 0,
    },
    expandAnimation: {
      animationDuration: '1s',
      animationIterationCount: 1,
      animationFillMode: 'forwards',
      animationName: fadeInAnimation,
      animationTimingFunction: 'ease-in-out',
    },
    shrinkAnimation: {
      animationDuration: '.6s',
      animationIterationCount: 1,
      animationFillMode: 'forwards',
      animationName: fadeOutAnimation,
      animationTimingFunction: 'ease-in-out',
    },
  },
}
