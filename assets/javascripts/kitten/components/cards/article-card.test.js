import React from 'react'
import renderer from 'react-test-renderer'
import { ArticleCard } from 'kitten/components/cards/article-card'

describe('<ArticleCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(
        <ArticleCard />
      ).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with articleTitle and articleSubTitle props', () => {
    beforeEach(() => {
      component = renderer.create(
        <ArticleCard
          articleTitle="Custom title"
          articleSubTitle="Custom subtitle"
        />
      ).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with ignored props', () => {
    beforeEach(() => {
      component = renderer.create(
        <ArticleCard
          info1="Custom information #1"
          progress="42"
          state="Custom state"
          titlesMinHeight
        />
      ).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
