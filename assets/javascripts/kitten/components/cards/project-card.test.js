import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { ProjectCard } from 'kitten/components/cards/project-card'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { IconBadge } from 'kitten/components/notifications/icon-badge'
import { Title } from 'kitten/components/typography/title'
import { Progress } from 'kitten/components/meters/progress'
import { LockIcon } from 'kitten/components/icons/lock-icon'

describe('<ProjectCard />', () => {
  describe('by default', () => {
    const projectCard = shallow(<ProjectCard />)

    it('is a <div />', () => {
      expect(projectCard).to.have.tagName('div')
    })

    it('has default class', () => {
      expect(projectCard.dive()).to.have.className('k-ProjectCard')
    })
  })

  describe('with href prop', () => {
    const projectCard = shallow(<ProjectCard href="#" />)

    it('is a <a />', () => {
      expect(projectCard).to.have.tagName('a')
    })

    it('has a href attribute', () => {
      expect(projectCard).to.have.attr('href', '#')
    })
  })

  describe('with is-disabled prop', () => {
    const projectCard = shallow(<ProjectCard href="#" disabled />)

    it('has a disabled class', () => {
      expect(projectCard.dive()).to.have.className('is-disabled')
    })

    it('removes href attribute and <a> tag', () => {
      expect(projectCard).to.have.tagName('div')
      expect(projectCard).not.to.have.attr('href')
    })
  })

  describe('with className prop', () => {
    const projectCard = shallow(<ProjectCard className="custom__class" />)

    it('has a custom class', () => {
      expect(projectCard.dive()).to.have.className('custom__class')
    })
  })

  describe('with avatar prop', () => {
    const projectCard = mount(
      <ProjectCard avatar="#avatar" />
    )
    const buttonImage = projectCard.find(ButtonImage)
    const buttonImageImgProps = { src: '#avatar' }

    it('has a <ButtonImage /> with img prop', () => {
      expect(buttonImage).to.have.length(1)
      expect(buttonImage.first())
        .to.have.prop('img').deep.equal(buttonImageImgProps)
    })
  })

  describe('with name and tags props', () => {
    const projectCard = mount(
      <ProjectCard name="Custom name" tags="Custom tag" />
    )
    const paragraph = projectCard.find(Paragraph).first()

    it('renders a name value', () => {
      expect(paragraph).to.contain.text('Custom name')
    })

    it('renders a tag value', () => {
      expect(paragraph).to.contain.text('Custom tag')
    })
  })

  describe('with score prop', () => {
    const projectCard = mount(
      <ProjectCard scoreValue="A" scoreBackgroundColor="#FF0000" />
    )
    const icon = projectCard.find(IconBadge)

    it('renders a <IconBadge />', () => {
      expect(icon).to.have.length(1)
    })

    it('has good props', () => {
      expect(icon).to.have.props([ 'children', 'style' ])
                  .deep.equal([ 'A', { backgroundColor: '#FF0000' } ])
    })
  })

  describe('with title prop', () => {
    const projectCard = mount(
      <ProjectCard title="Custom title" />
    )
    const title = projectCard.find(Title)

    it('renders a <Title />', () => {
      expect(title).to.have.length(1)
    })

    it('renders a good text', () => {
      expect(title).to.have.text('Custom title')
    })
  })

  describe('with image prop', () => {
    const projectCard = mount(<ProjectCard image="#" />)
    const image = projectCard.find('.k-ProjectCard__img')

    it('renders an image with good href', () => {
      expect(image).to.have.length(1)
      expect(image).to.have.attr('src', '#')
    })
  })

  describe('with progress prop', () => {
    const projectCard = mount(<ProjectCard progress="42" />)
    const progress = projectCard.find(Progress)

    it('renders a <Progress value="42" />', () => {
      expect(progress).to.have.length(1)
      expect(progress).to.have.prop('value', '42')
    })
  })

  describe('with infos props', () => {
    const projectCard = mount(
      <ProjectCard
        info1={ { value: 'Custom value 1', text: 'Custom text 1' } }
        info2={ { value: 'Custom value 2', text: 'Custom text 2', lockedValue: true } }
        info3={ { value: 'Custom value 3', text: 'Custom text 3' } } />
    )
    const infos = projectCard.find('.k-ProjectCard__info')

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

  describe('with status props', () => {
    const projectCard = mount(
      <ProjectCard statusContent="Custom status"
                   statusModifier="custom-modifier"
                   statusWithoutTopBorder />
    )
    const status = projectCard.find('.k-ProjectCard__status')

    it('renders a status block', () => {
      expect(status).to.have.length(1)
      expect(status).to.have.className('custom-modifier')
      expect(status).to.have.descendants('.k-ProjectCard__status__content')
      expect(status).to.contain.text('Custom status')
    })
  })
})
