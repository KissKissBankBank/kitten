import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { ProjectSimilarCard } from 'kitten/components/cards/project-similar-card'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { TagList } from 'kitten/components/lists/tag-list'
import { LockIcon } from 'kitten/components/icons/lock-icon'
import { Loader } from 'kitten/components/loaders/loader'

describe('<ProjectSimilarCard />', () => {
  describe('by default', () => {
    const projectSimilarCard = shallow(<ProjectSimilarCard />)
    const arrowButtons = projectSimilarCard.dive().find('.k-ButtonIcon')
    const leftArrowButton = arrowButtons.first()
    const rightArrowButton = arrowButtons.last()

    it('is a <div />', () => {
      expect(projectSimilarCard).to.have.tagName('div')
    })

    it('has a default class', () => {
      expect(projectSimilarCard.dive()).to.have.className('k-ProjectSimilarCard')
    })

    it('has a regular left arrow', () => {
      expect(leftArrowButton).not.to.have.attr('disabled')
    })

    it('has a regular right arrow', () => {
      expect(rightArrowButton).not.to.have.attr('disabled')
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

  describe('with loading prop', () => {
    const projectSimilarCard = mount(<ProjectSimilarCard loading />)
    const loader = projectSimilarCard.find('.k-ProjectSimilarCard__loading')

    it('render <Loader />', () => {
      expect(projectSimilarCard).to.have.descendants(Loader)
      expect(loader).to.have.length(1)
    })
  })

  describe('with loading prop', () => {
    const projectSimilarCard = mount(<ProjectSimilarCard loading />)
    const loader = projectSimilarCard.find('.k-ProjectSimilarCard__loading')

    it('render <Loader />', () => {
      expect(projectSimilarCard).to.have.descendants(Loader)
      expect(loader).to.have.length(1)
    })
  })

  describe('with refresh prop', () => {
    const projectSimilarCard = mount(
      <ProjectSimilarCard refresh="Custom refresh" />
    )
    const refreshLink = projectSimilarCard.find(
      '.k-ProjectSimilarCard__refresh__link'
    )

    it('renders a refresh link with the right text', () => {
      expect(refreshLink).to.contain.text('Custom refresh')
    })
  })

  describe('with onRefreshClick prop', () => {
    const handleRefreshClick = () => {}
    const projectSimilarCard = mount(
      <ProjectSimilarCard onRefreshClick={ handleRefreshClick } />
    )
    const refreshLink = projectSimilarCard.find(
      '.k-ProjectSimilarCard__refresh__link'
    )

    it('attaches the right handler to refresh link onClick prop', () => {
      expect(refreshLink.props().onClick).to.equal(handleRefreshClick)
    })
  })

  describe('with leftArrowDisabled prop', () => {
    const projectSimilarCard = mount(<ProjectSimilarCard leftArrowDisabled />)
    const leftArrowButton = projectSimilarCard.find('.k-ButtonIcon').first()

    it('disables the left arrow button', () => {
      expect(leftArrowButton).to.have.attr('disabled')
    })
  })

  describe('with rightArrowDisabled prop', () => {
    const projectSimilarCard = mount(<ProjectSimilarCard rightArrowDisabled />)
    const rightArrowButton = projectSimilarCard.find('.k-ButtonIcon').last()

    it('disables the right arrow button', () => {
      expect(rightArrowButton).to.have.attr('disabled')
    })
  })

  describe('with onLeftArrowClick prop', () => {
    const handleOnLeftArrowClick = () => {}
    const projectSimilarCard = mount(
      <ProjectSimilarCard onLeftArrowClick={ handleOnLeftArrowClick } />
    )
    const leftArrowButton = projectSimilarCard.find('.k-ButtonIcon').first()

    it('attaches the right handler to left arrow button onClick prop', () => {
      expect(leftArrowButton.props().onClick).to.equal(handleOnLeftArrowClick)
    })
  })

  describe('with onRightArrowClick prop', () => {
    const handleOnRightArrowClick = () => {}
    const projectSimilarCard = mount(
      <ProjectSimilarCard onRightArrowClick={ handleOnRightArrowClick } />
    )
    const rightArrowButton = projectSimilarCard.find('.k-ButtonIcon').last()

    it('attaches the right handler to right arrow button onClick prop', () => {
      expect(rightArrowButton.props().onClick).to.equal(handleOnRightArrowClick)
    })
  })
})
