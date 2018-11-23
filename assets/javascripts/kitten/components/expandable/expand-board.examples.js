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
      size: 'Taille XS',
      availability: 'Disponibilité: 10/30',
      disabled: false,
    },
    {
      size: 'Taille M',
      availability: 'Disponibilité: 10/30',
      disabled: true,
    },
    {
      size: 'Taille XXL',
      availability: 'Disponibilité: 10/30',
      disabled: false,
    },
  ]

  fadeInAnimation = Radium.keyframes(
    {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    'fadeIn',
  )

  fadeOutAnimation = Radium.keyframes(
    {
      '0%': { opacity: 1, height: 'auto' },
      '100%': { opacity: 0, height: 0 },
    },
    'fadeOut',
  )

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
      return {
        opacity: 0,
        animationDuration: '1s',
        animationDelay: `${0.2 * key}s`,
        animationIterationCount: 1,
        animationFillMode: 'forwards',
        animationName: this.fadeInAnimation,
        animationTimingFunction: 'ease-in-out',
      }
    }

    return {
      opacity: 1,
      animationDuration: '.6s',
      animationDelay: `${0.1 * key}s`,
      animationIterationCount: 1,
      animationFillMode: 'forwards',
      animationName: this.fadeOutAnimation,
      animationTimingFunction: 'ease-in-out',
    }
  }

  render() {
    const { withAnimation, expandedButtonText, buttonText } = this.props
    return (
      <Grid>
        <GridCol offset="1" col="10">
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
        </GridCol>
      </Grid>
    )
  }
}

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
  },
}
