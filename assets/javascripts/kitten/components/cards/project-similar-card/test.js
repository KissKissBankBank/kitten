import React from 'react'
import { SimilarProjectCard } from '../../../components/cards/project-similar-card'
import { Title } from '../../../components/typography/title'
import { Paragraph } from '../../../components/typography/paragraph'
import { TagList } from '../../../components/lists/tag-list'
import { LockIcon } from '../../../components/icons/lock-icon'
import { Loader } from '../../../components/loaders/loader'

describe('<SimilarProjectCard />', () => {
  describe('by default', () => {
    const similarProjectCard = mount(<SimilarProjectCard />)
    const arrowButtons = similarProjectCard.find('.k-ButtonIcon')
    const leftArrowButton = arrowButtons.first()
    const rightArrowButton = arrowButtons.last()

    it('is a <div />', () => {
      expect(similarProjectCard.render().is('div')).toBe(true)
    })

    it('has a default class', () => {
      expect(similarProjectCard.render().hasClass('k-ProjectSimilarCard')).toBe(
        true,
      )
    })

    it('adds the right class to the content tag', () => {
      const similarProjectCard = mount(
        <SimilarProjectCard linkHref="custom-link" />,
      )

      const content = similarProjectCard.find('.k-ProjectSimilarCard__content')

      expect(content).toHaveLength(1)
    })

    describe('left arrow', () => {
      it('is disabled', () => {
        expect(leftArrowButton.props().disabled).toBeTruthy()
      })

      it('has a button type', () => {
        expect(leftArrowButton.props().type).toBe('button')
      })
    })

    describe('right arrow', () => {
      it('is disabled', () => {
        expect(rightArrowButton.props().disabled).toBeTruthy()
      })

      it('has a button type', () => {
        expect(rightArrowButton.props().type).toBe('button')
      })
    })
  })

  describe('with imageSrc prop', () => {
    const similarProjectCard = mount(<SimilarProjectCard imageSrc="test" />)
    const image = similarProjectCard.find('.k-ProjectSimilarCard__img')

    it('renders an image with good href', () => {
      expect(image.exists()).toBe(true)
      expect(image.props().src).toBe('test')
    })
  })

  describe('with title prop', () => {
    const similarProjectCard = mount(
      <SimilarProjectCard title="Custom title" />,
    )
    const title = similarProjectCard.find(Title)

    it('renders a <Title />', () => {
      expect(similarProjectCard.find(Title)).toHaveLength(1)
      expect(title.text()).toBe('Custom title')
    })
  })

  describe('with paragraph prop', () => {
    const similarProjectCard = mount(
      <SimilarProjectCard paragraph="Custom paragraph" />,
    )
    const paragraph = similarProjectCard.find('.k-Paragraph')

    it('renders a <Paragraph />', () => {
      expect(similarProjectCard.find(Paragraph)).toHaveLength(1)
      expect(paragraph.text()).toBe('Custom paragraph')
    })
  })

  describe('with tags props', () => {
    const similarProjectCard = mount(
      <SimilarProjectCard
        tagLists={[
          {
            items: [{ key: 'custom-tag', item: 'Custom tag' }],
          },
        ]}
      />,
    )

    const tags = similarProjectCard.find('.k-TagList')

    it('renders a <TagList />', () => {
      expect(similarProjectCard.find(TagList)).toHaveLength(1)
    })

    it('has a first block with good item', () => {
      const firstTag = tags.at(0)

      expect(firstTag.contains('Custom tag')).toBe(true)
    })
  })

  describe('with infos props', () => {
    const similarProjectCard = mount(
      <SimilarProjectCard
        infos={[
          {
            key: 'info-1',
            text: 'Custom text 1',
            value: 'Custom value 1',
          },
          {
            key: 'info-2',
            text: 'Custom text 2',
            value: 'Custom value 2',
            locked: true,
          },
          {
            key: 'info-3',
            text: 'Custom text 3',
            value: 'Custom value 3',
          },
        ]}
      />,
    )
    const infos = similarProjectCard.find('.k-ProjectSimilarCard__info')

    it('renders 3 blocks', () => {
      expect(infos).toHaveLength(3)
    })

    it('has a first block with good values', () => {
      const firstInfo = infos.at(0)

      expect(firstInfo.contains('Custom value 1')).toBe(true)
      expect(firstInfo.contains('Custom text 1')).toBe(true)
    })

    it('has second block with locked value', () => {
      const secondInfo = infos.at(1)

      expect(secondInfo.find(LockIcon)).toHaveLength(1)
      expect(secondInfo.contains('Custom text 2')).toBe(true)
    })
  })

  describe('with coloredInfosValues prop', () => {
    const similarProjectCard = mount(
      <SimilarProjectCard
        coloredInfosValues
        infos={[
          {
            key: 'info-1',
            text: 'Custom text 1',
            value: 'Custom value 1',
          },
        ]}
      />,
    )
    const info = similarProjectCard.find('.k-ProjectSimilarCard__info').first()
    const value = info.find('.k-ProjectSimilarCard__info__value')

    it('renders an info value with color modifier', () => {
      expect(value.hasClass('k-u-color-primary1')).toBe(true)
    })
  })

  describe('with loading prop', () => {
    const similarProjectCard = mount(<SimilarProjectCard loading />)
    const loader = similarProjectCard.find('.k-ProjectSimilarCard__loading')

    it('render <Loader />', () => {
      expect(similarProjectCard.find(Loader)).toHaveLength(1)
      expect(loader.exists()).toBe(true)
    })
  })

  describe('with loading prop', () => {
    const similarProjectCard = mount(<SimilarProjectCard loading />)
    const loader = similarProjectCard.find('.k-ProjectSimilarCard__loading')

    it('render <Loader />', () => {
      expect(similarProjectCard.find(Loader)).toHaveLength(1)
      expect(loader.exists()).toBe(true)
    })
  })

  describe('with refresh prop', () => {
    const similarProjectCard = mount(
      <SimilarProjectCard refresh="Custom refresh" />,
    )
    const refreshLink = similarProjectCard.find(
      '.k-ProjectSimilarCard__refresh__link',
    )

    it('renders a refresh link with the right text', () => {
      expect(refreshLink.contains('Custom refresh')).toBe(true)
    })
  })

  describe('with onRefreshClick prop', () => {
    const handleRefreshClick = () => {}
    const similarProjectCard = mount(
      <SimilarProjectCard onRefreshClick={handleRefreshClick} />,
    )
    const refreshLink = similarProjectCard.find(
      '.k-ProjectSimilarCard__refresh__link',
    )

    it('attaches the right handler to refresh link onClick prop', () => {
      expect(refreshLink.props().onClick).toBe(handleRefreshClick)
    })
  })

  describe('with leftArrowDisabled prop', () => {
    const similarProjectCard = mount(<SimilarProjectCard leftArrowDisabled />)
    const leftArrowButton = similarProjectCard.find('.k-ButtonIcon').first()

    it('disables the left arrow button', () => {
      expect(leftArrowButton.props().disabled).toBeTruthy()
    })
  })

  describe('with rightArrowDisabled prop', () => {
    const similarProjectCard = mount(<SimilarProjectCard rightArrowDisabled />)
    const rightArrowButton = similarProjectCard.find('.k-ButtonIcon').last()

    it('disables the right arrow button', () => {
      expect(rightArrowButton.props().disabled).toBeTruthy()
    })
  })

  describe('with onLeftArrowClick prop', () => {
    const handleOnLeftArrowClick = () => {}
    const similarProjectCard = mount(
      <SimilarProjectCard onLeftArrowClick={handleOnLeftArrowClick} />,
    )
    const leftArrowButton = similarProjectCard.find('.k-ButtonIcon').first()

    it('attaches the right handler to left arrow button onClick prop', () => {
      expect(leftArrowButton.props().onClick).toBe(handleOnLeftArrowClick)
    })
  })

  describe('with onRightArrowClick prop', () => {
    const handleOnRightArrowClick = () => {}
    const similarProjectCard = mount(
      <SimilarProjectCard onRightArrowClick={handleOnRightArrowClick} />,
    )
    const rightArrowButton = similarProjectCard.find('.k-ButtonIcon').last()

    it('attaches the right handler to right arrow button onClick prop', () => {
      expect(rightArrowButton.props().onClick).toBe(handleOnRightArrowClick)
    })
  })

  describe('with link prop', () => {
    const linkProps = {
      href: 'custom-link',
    }

    describe('with loading prop', () => {
      describe('by default', () => {
        const similarProjectCard = mount(
          <SimilarProjectCard link={linkProps} loading />,
        )
        const content = similarProjectCard.find(
          '.k-ProjectSimilarCard__content',
        )

        it('renders a <div> tag for the content', () => {
          expect(content.render().is('div')).toBe(true)
        })

        it('passes the right props to the <div> tag', () => {
          expect(content.props()).not.toMatchObject({ href: 'target' })
        })
      })

      describe('with link custom target', () => {
        const withTargetLinkProps = {
          href: 'custom-link',
          target: '_self',
        }
        const similarProjectCard = mount(
          <SimilarProjectCard link={withTargetLinkProps} loading />,
        )
        const content = similarProjectCard.find(
          '.k-ProjectSimilarCard__content',
        )

        it('passes the right props to the <div> tag', () => {
          expect(content.props()).not.toMatchObject({ href: 'target' })
        })
      })

      describe('with link className', () => {
        const withClassNameLinkProps = {
          href: 'custom-link',
          className: 'custom-classname',
        }
        const similarProjectCard = mount(
          <SimilarProjectCard link={withClassNameLinkProps} loading />,
        )
        const content = similarProjectCard.find(
          '.k-ProjectSimilarCard__content',
        )

        it('passes the right props to the <div> tag', () => {
          expect(content.props()).not.toMatchObject({ href: 'target' })
        })

        it('does not pass custom className to tag content', () => {
          expect(content.hasClass('custom-classname')).toBe(false)
        })
      })

      describe('with link custom prop', () => {
        const withTitleLinkProps = {
          href: 'custom-link',
          title: 'custom-title',
        }
        const similarProjectCard = mount(
          <SimilarProjectCard link={withTitleLinkProps} loading />,
        )
        const content = similarProjectCard.find(
          '.k-ProjectSimilarCard__content',
        )

        it('passes the right props to the <div> tag', () => {
          expect(content.props()).not.toMatchObject({ href: 'title' })
        })
      })
    })

    describe('without loading prop', () => {
      describe('by default', () => {
        const similarProjectCard = mount(
          <SimilarProjectCard link={linkProps} />,
        )
        const content = similarProjectCard.find(
          '.k-ProjectSimilarCard__content',
        )

        it('renders a <a> tag for the content', () => {
          expect(content.render().is('a')).toBe(true)
        })

        it('passes the right props to the <a> tag', () => {
          const expectedProps = {
            href: 'custom-link',
            target: '_blank',
          }

          expect(content.props()).toMatchObject(expectedProps)
        })
      })

      describe('with link custom target', () => {
        const withTargetLinkProps = {
          href: 'custom-link',
          target: '_self',
        }
        const similarProjectCard = mount(
          <SimilarProjectCard link={withTargetLinkProps} />,
        )
        const content = similarProjectCard.find(
          '.k-ProjectSimilarCard__content',
        )

        it('passes the right props to the <a> tag', () => {
          const expectedProps = {
            href: 'custom-link',
            target: '_self',
          }

          expect(content.props()).toMatchObject(expectedProps)
        })
      })

      describe('with link className', () => {
        const withClassNameLinkProps = {
          href: 'custom-link',
          className: 'custom-classname',
        }
        const similarProjectCard = mount(
          <SimilarProjectCard link={withClassNameLinkProps} />,
        )
        const content = similarProjectCard.find(
          '.k-ProjectSimilarCard__content',
        )

        it('passes the right props to the <a> tag', () => {
          const expectedProps = {
            href: 'custom-link',
            className: 'k-ProjectSimilarCard__content custom-classname',
          }

          expect(content.props()).toMatchObject(expectedProps)
        })
      })

      describe('with link custom prop', () => {
        const withTitleLinkProps = {
          href: 'custom-link',
          title: 'custom-title',
        }
        const similarProjectCard = mount(
          <SimilarProjectCard link={withTitleLinkProps} />,
        )
        const content = similarProjectCard.find(
          '.k-ProjectSimilarCard__content',
        )

        it('passes the right props to the <a> tag', () => {
          const expectedProps = {
            href: 'custom-link',
            title: 'custom-title',
          }

          expect(content.props()).toMatchObject(expectedProps)
        })
      })
    })
  })
})
