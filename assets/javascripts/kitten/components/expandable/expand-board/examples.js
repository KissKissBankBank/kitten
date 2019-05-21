import React, { PureComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import { ExpandBoard } from 'kitten/components/expandable/expand-board'
import { List } from 'kitten/components/lists/list'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Text } from 'kitten/components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'

const fadeInAnimation = () =>
  keyframes`
    0%: {
      opacity: 0;
    }
    100%: {
      opacity: 1;
    }
  fadeIn;
`

const fadeOutAnimation = () =>
  keyframes`
    0%: {
      opacity: 1;
      height: auto
    }
    100%: {
      opacity: 0;
      height: 0;
   }
  fadeOut;
`

const StyledButtonListItem = styled(Text)`
  margin: 0;
  padding: 0;
  line-height: ${pxToRem(19.2)};
`

const StyledButtonList = styled.div`
  margin: ${pxToRem(16)} ${pxToRem(0)};
  padding: 0;
`

export class ExpandBoardWithButtonItemList extends PureComponent {
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
      return {
        animationDuration: '1s',
        animationIterationCount: 1,
        animationFillMode: 'forwards',
        animationName: fadeInAnimation,
        animationTimingFunction: 'ease-in-out',
        animationDelay: `${0.2 * key}s`,
      }
    }

    return {
      animationDuration: '.6s',
      animationIterationCount: 1,
      animationFillMode: 'forwards',
      animationName: fadeOutAnimation,
      animationTimingFunction: 'ease-in-out',
      animationDelay: `${0.1 * key}s`,
    }
  }

  render() {
    const {
      withAnimation,
      expandedButtonText,
      buttonText,
      borderRadius,
      withBottomBorderRadius,
      big,
    } = this.props

    console.log(withBottomBorderRadius, 'withBottomBorderRadius')

    return (
      <ExpandBoard onClick={this.handleClick} withAnimation={withAnimation}>
        <ExpandBoard.Button
          expandChildren={expandedButtonText}
          borderRadius={borderRadius}
          big={big}
        >
          {buttonText}
        </ExpandBoard.Button>
        <ExpandBoard.Content>
          <List>
            {this.list.map((item, key) => {
              return (
                <List.ButtonItem
                  key={item.size}
                  disabled={item.disabled}
                  withBottomBorderRadius={withBottomBorderRadius}
                  {...this.buttonListItemStyle(key)}
                >
                  <StyledButtonList>
                    <StyledButtonListItem
                      tag="p"
                      weight="regular"
                      color="font1"
                      size="tiny"
                    >
                      {item.size}
                    </StyledButtonListItem>
                    <Text
                      tag="small"
                      color={item.disabled ? 'font2' : 'font1'}
                      size="micro"
                    >
                      {item.availability}
                    </Text>
                  </StyledButtonList>
                </List.ButtonItem>
              )
            })}
          </List>
        </ExpandBoard.Content>
      </ExpandBoard>
    )
  }
}
