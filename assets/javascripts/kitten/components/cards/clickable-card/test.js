import React from 'react'
import renderer from 'react-test-renderer'
import { ClickableCard } from './index'

describe('<ClickableCard />', () => {
  describe('by default', () => {
    const component = renderer
      .create(
        <ClickableCard>
          <ClickableCard.Image>
            <img src="https://placekitten.com/200/400" alt="" />
          </ClickableCard.Image>
          <ClickableCard.Content>
            <span>Kitty McMeow</span>
            <br />
            <span>@kitty.mcmeow</span>
          </ClickableCard.Content>
        </ClickableCard>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with props', () => {
    const component = renderer
      .create(
        <ClickableCard
          size={250}
          fluid={true}
          borderColor="blue"
          backgroundColor="black"
          aria-checked={true}
          onClick={() => {}}
        >
          <ClickableCard.Image shape="circle" fit="contain">
            <img src="https://placekitten.com/200/400" alt="" />
          </ClickableCard.Image>
          <ClickableCard.Content>
            <span>Kitty McMeow</span>
            <br />
            <span>@kitty.mcmeow</span>
          </ClickableCard.Content>
        </ClickableCard>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
