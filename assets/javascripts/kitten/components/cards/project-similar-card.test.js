import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { ProjectSimilarCard } from 'kitten/components/cards/project-similar-card'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { TagList } from 'kitten/components/lists/tag-list'
import { LockIcon } from 'kitten/components/icons/lock-icon'

describe('<ProjectSimilarCard />', () => {
  describe('by default', () => {
    const projectSimilarCard = shallow(<ProjectSimilarCard />)

    it('is a <div />', () => {
      expect(projectSimilarCard).to.have.tagName('div')
    })

    it('has a default class', () => {
      expect(projectSimilarCard.dive()).to.have.className('k-ProjectSimilarCard')
    })
  })

  describe('with imageSrc prop', () => {
    const projectSimilarCard = mount(<ProjectSimilarCard imageSrc="test" />)
    const image = projectSimilarCard.find('.k-ProjectSimilarCard__img')

    it('renders an image with good href', () => {
      expect(image).to.have.length(1)
      expect(image).to.have.attr('src', 'test')
    })
  })

  describe('with title prop', () => {
    const projectSimilarCard = mount(
      <ProjectSimilarCard title="Custom title" />)
    const title = projectSimilarCard.find('.k-Title')

    it('renders a <Title />', () => {
      expect(projectSimilarCard).to.have.descendants(Title)
      expect(title.text()).to.equal("Custom title")
    })
  })

  describe('with paragraph prop', () => {
    const projectSimilarCard = mount(
      <ProjectSimilarCard paragraph="Custom paragraph" />)
    const paragraph = projectSimilarCard.find('.k-Paragraph')

    it('renders a <Paragraph />', () => {
      expect(projectSimilarCard).to.have.descendants(Paragraph)
      expect(paragraph.text()).to.equal("Custom paragraph")
    })
  })

  describe('with tags props', () => {
    const projectSimilarCard = mount(
      <ProjectSimilarCard
        tags={ [ { key: 'custom-tag', item: 'Custom tag' } ] } />
    )
    const tags = projectSimilarCard.find('.k-TagList')

    it('renders a <TagList />', () => {
      expect(projectSimilarCard).to.have.descendants(TagList)
    })

    it('has a first block with good item', () => {
      const firstTag = tags.at(0)

      expect(firstTag).to.contain.text('Custom tag')
    })
  })

  describe('with infos props', () => {
    const projectSimilarCard = mount(
      <ProjectSimilarCard
        infos={ [ { key: 'info-1',
                    text: 'Custom text 1',
                    value: 'Custom value 1' },
                  { key: 'info-2',
                    text: 'Custom text 2',
                    value: 'Custom value 2',
                    locked: true },
                  { key: 'info-3',
                    text: 'Custom text 3',
                    value: 'Custom value 3' } ] }
      />
    )
    const infos = projectSimilarCard.find('.k-ProjectSimilarCard__info')

    it('renders 3 blocks', () => {
      expect(infos).to.have.length(3)
    })

    it('has a first block with good values', () => {
      const firstInfo = infos.at(0)

      expect(firstInfo).to.contain.text('Custom value 1')
      expect(firstInfo).to.contain.text('Custom text 1')
    })

    it('has second block with locked value', () => {
      const secondInfo = infos.at(1)

      expect(secondInfo).to.have.descendants(LockIcon)
      expect(secondInfo).to.contain.text('Custom text 2')
    })
  })

  describe('with coloredInfosValues prop', () => {
    const projectSimilarCard = mount(
      <ProjectSimilarCard
        coloredInfosValues
        infos={ [ { key: 'info-1',
                  text: 'Custom text 1',
                  value: 'Custom value 1' } ] }
      />
    )
    const info = projectSimilarCard.find('.k-ProjectSimilarCard__info').first()
    const value = info.find('.k-ProjectSimilarCard__info__value')

    it('renders an info value with color modifier', () => {
      expect(value).to.have.className('k-u-color-primary1')
    })
  })
})
