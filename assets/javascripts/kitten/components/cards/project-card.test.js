import React from 'react'
import { ProjectCard } from '../../components/cards/project-card'
import { ButtonImage } from '../../components/buttons/button-image'
import { Paragraph } from '../../components/typography/paragraph'
import { IconBadge } from '../../components/notifications/icon-badge'
import { Title } from '../../components/typography/title'
import { Progress } from '../../components/meters/progress'
import { LockIcon } from '../../components/icons/lock-icon'
import { TagList } from '../../components/lists/tag-list'

describe('<ProjectCard />', () => {
  describe('by default', () => {
    const projectCard = shallow(<ProjectCard />)

    it('is a <div />', () => {
      expect(projectCard.dive().is('div')).toBe(true)
    })

    it('has default class', () => {
      expect(projectCard.dive().hasClass('k-ProjectCard')).toBe(true)
    })
  })

  describe('with linkHref prop', () => {
    const projectCard = shallow(<ProjectCard linkHref="#" />)

    it('is a <a />', () => {
      expect(projectCard.dive().is('a')).toBe(true)
    })

    it('has a href attribute', () => {
      expect(projectCard.props().linkHref).toBe('#')
    })
  })

  describe('with linkTitle prop', () => {
    const projectCard = shallow(<ProjectCard linkTitle="Custom link title" />)

    it('has a title attribute', () => {
      expect(projectCard.props().linkTitle).toBe('Custom link title')
    })
  })

  describe('with disabled prop', () => {
    const projectCard = shallow(<ProjectCard href="#" disabled />)

    it('has a disabled class', () => {
      expect(projectCard.dive().hasClass('is-disabled')).toBe(true)
    })

    it('removes href attribute and <a> tag', () => {
      expect(projectCard.dive().is('div')).toBe(true)
      expect(projectCard.dive().props().href).toBeFalsy()
    })
  })

  describe('with className prop', () => {
    const projectCard = shallow(<ProjectCard className="custom__class" />)

    it('has a custom class', () => {
      expect(projectCard.dive().hasClass('custom__class')).toBe(true)
    })
  })

  describe('with ownerAvatarSrc prop', () => {
    const projectCard = mount(<ProjectCard ownerAvatarSrc="#avatar" />)
    const buttonImage = projectCard.find(ButtonImage)
    const buttonImageImgProps = { src: '#avatar' }

    it('has a <ButtonImage /> with img prop', () => {
      expect(buttonImage.exists()).toBe(true)
      expect(buttonImage.first().props().img).toMatchObject(buttonImageImgProps)
    })
  })

  describe('with ownerName and ownerLocation props', () => {
    const projectCard = mount(
      <ProjectCard ownerName="Custom name" ownerLocation="Custom location" />,
    )
    const paragraph = projectCard.find(Paragraph).first()

    it('renders a name value', () => {
      expect(paragraph.contains('Custom name')).toBe(true)
    })

    it('renders a location value', () => {
      expect(paragraph.contains('Custom location')).toBe(true)
    })
  })

  describe('with tags props', () => {
    const tags = [{ items: [{ key: 'custom-tag', item: 'Custom tag' }] }]
    const tagLists = [
      { items: [{ key: 'custom-tag', item: 'Custom tag' }] },
      { items: [{ key: 'custom-tag-1', item: 'Custom tag 1' }] },
    ]

    const projectCard = mount(<ProjectCard tagLists={tags} />)

    const projectCardWithTwoLists = mount(<ProjectCard tagLists={tagLists} />)

    it('renders a <TagList />', () => {
      expect(projectCard.find(TagList)).toHaveLength(1)
    })

    it('renders two <TagList />', () => {
      expect(projectCardWithTwoLists.find(TagList)).toHaveLength(2)
    })
  })

  describe('with score prop', () => {
    const projectCard = mount(
      <ProjectCard scoreValue="A" scoreBackgroundColor="#FF0000" />,
    )
    const icon = projectCard.find(IconBadge)

    it('renders a <IconBadge />', () => {
      expect(icon.exists()).toBe(true)
    })

    it('has good props', () => {
      expect(icon.text()).toBe('A')
      expect(icon.props().style).toMatchObject({ backgroundColor: '#FF0000' })
    })
  })

  describe('with title prop', () => {
    const projectCard = mount(<ProjectCard title="Custom title" />)
    const title = projectCard.find(Title)

    it('renders a <Title />', () => {
      expect(title).toHaveLength(1)
    })

    it('renders a good text', () => {
      expect(title.text()).toBe('Custom title')
    })
  })

  describe('with image prop', () => {
    const projectCard = mount(<ProjectCard imageSrc="test" />)
    const image = projectCard.find('.k-ProjectCard__img')

    it('renders an image with good href', () => {
      expect(image.exists()).toBe(true)
      expect(image.props().src).toBe('test')
    })
  })

  describe('with progress prop', () => {
    const projectCard = mount(<ProjectCard progress={42} />)
    const progress = projectCard.find(Progress)

    it('renders a <Progress value="42" />', () => {
      expect(progress.exists()).toBe(true)
      expect(progress.props().value).toBe(42)
    })
  })

  describe('with paragraph', () => {
    const projectCard = shallow(<ProjectCard paragraph="Custom paragraph" />)

    it('renders a good paragraph', () => {
      expect(projectCard.props().paragraph).toBe('Custom paragraph')
    })
  })

  describe('with infos props', () => {
    const projectCard = mount(
      <ProjectCard
        info1={{ value: 'Custom value 1', text: 'Custom text 1' }}
        info2={{ value: 'Custom value 2', text: 'Custom text 2', locked: true }}
        info3={{
          value: 'Custom value 3',
          text: 'Custom text 3',
          reverse: true,
        }}
      />,
    )
    const infos = projectCard.find('.k-ProjectCard__info')

    it('renders 3 blocks', () => {
      expect(infos).toHaveLength(3)
    })

    it('has a first block with text then displayed value', () => {
      const firstInfo = infos.at(0)

      expect(firstInfo.props().children[0]).toBe('Custom text 1')
      expect(firstInfo.props().children[2].props.children).toBe(
        'Custom value 1',
      )
    })

    it('has second block with text then locked value', () => {
      const secondInfo = infos.at(1)

      expect(secondInfo.props().children[0]).toBe('Custom text 2')
      expect(secondInfo.find(LockIcon)).toHaveLength(1)
    })

    it('has a third block with reversed displayed items', () => {
      const firstInfo = infos.at(2)

      expect(firstInfo.props().children[0].props.children).toBe(
        'Custom value 3',
      )
      expect(firstInfo.props().children[2]).toBe('Custom text 3')
    })
  })

  describe('with coloredInfosValues prop', () => {
    const projectCard = mount(
      <ProjectCard
        coloredInfosValues
        info1={{ value: 'Custom value 1', text: 'Custom text 1' }}
      />,
    )
    const info = projectCard.find('.k-ProjectCard__info').first()
    const value = info.find('.k-ProjectCard__info__value')

    it('renders an info value with color modifier', () => {
      expect(value.hasClass('k-u-color-primary1')).toBe(true)
    })
  })

  describe('with status props', () => {
    const projectCard = mount(
      <ProjectCard statusContent="Custom status" statusWithoutTopBorder />,
    )
    const status = projectCard.find('.k-ProjectCard__status')

    it('renders a status block', () => {
      expect(status).toHaveLength(1)
      expect(
        status.find('.k-ProjectCard__status__content').exists(),
      ).toBeTruthy()
      expect(status.contains('Custom status')).toBeTruthy()
    })
  })

  describe('with statusPrimaryBackground prop', () => {
    const projectCard = mount(
      <ProjectCard statusContent="Custom status" statusPrimaryBackground />,
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    it('has a good class', () => {
      expect(status.hasClass('k-ProjectCard__status--primaryBackground')).toBe(
        true,
      )
    })
  })

  describe('with statusValidBackground prop', () => {
    const projectCard = mount(
      <ProjectCard statusContent="Custom status" statusValidBackground />,
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    it('has a good class', () => {
      expect(status.hasClass('k-ProjectCard__status--validBackground')).toBe(
        true,
      )
    })
  })

  describe('with statusGreyBackground prop', () => {
    const projectCard = mount(
      <ProjectCard statusContent="Custom status" statusGreyBackground />,
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    it('has a good class', () => {
      expect(status.hasClass('k-ProjectCard__status--greyBackground')).toBe(
        true,
      )
    })
  })

  describe('with statusErrorBackground prop', () => {
    const projectCard = mount(
      <ProjectCard statusContent="Custom status" statusErrorBackground />,
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    it('has a good class', () => {
      expect(status.hasClass('k-ProjectCard__status--errorBackground')).toBe(
        true,
      )
    })
  })

  describe('with statusErrorReverseBackground prop', () => {
    const projectCard = mount(
      <ProjectCard
        statusContent="Custom status"
        statusErrorReverseBackground
      />,
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    it('has a good class', () => {
      expect(
        status.hasClass('k-ProjectCard__status--errorReverseBackground'),
      ).toBe(true)
    })
  })

  describe('with tooltipText prop', () => {
    const projectCard = mount(<ProjectCard tooltipText="Custom text" />)

    it('has good classes', () => {
      expect(projectCard.find('.k-ProjectCard__tooltip').exists()).toBeTruthy()
      expect(
        projectCard.find('.k-ProjectCard__tooltip__content').exists(),
      ).toBeTruthy()
    })

    it('has a good text', () => {
      const content = projectCard
        .find('.k-ProjectCard__tooltip__content')
        .first()

      expect(content.text()).toBe('Custom text')
    })
  })
})
