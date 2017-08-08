import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { SimilarProjectsCard } from
  'kitten/components/cards/similar-projects-card'
import { SimilarProjectCard } from
  'kitten/components/cards/project-similar-card'

describe('<SimilarProjectsCard />', () => {
  const emptyArray = []
  const tags = [
    {
      key: 'tag-1',
      item: 'Tag 1',
    },
    {
      key: 'tag-2',
      item: 'Tag 2',
    }
  ]
  const infos = [
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
    }
  ]
  const project1 = {
    imageSrc: 'image-1',
    title: 'Title 1',
    description: 'This is the description of project 1.',
    tags: emptyArray,
    infos: emptyArray,
  }

  const project2 = {
    imageSrc: 'image-2',
    title: 'Title 2',
    description: 'This is the description of project 2.',
    tags: tags,
    infos: emptyArray,
  }

  const project3 = {
    imageSrc: 'image-3',
    title: 'Title 3',
    description: 'This is the description of project 3.',
    tags: emptyArray,
    infos: infos,
  }

  describe('by default', () => {
    const similarProjectsCard = shallow(<SimilarProjectsCard />)
    const staticSimilarProjectCard = similarProjectsCard.find(SimilarProjectCard)

    it('is renders <SimilarProjectCard />', () => {
      expect(staticSimilarProjectCard).to.have.length(1)
    })

    it('passes the right props', () => {
      const expectedProps = {
        leftArrowDisabled: false,
        rightArrowDisabled: false,
      }

      const projectProps = {
        imageSrc: null,
        title: '',
        paragraph: '',
        tags: null,
        infos: false,
      }

      expect(staticSimilarProjectCard.props()).to.contains(expectedProps)
      expect(staticSimilarProjectCard.props()).not.to.contains(projectProps)
      expect(staticSimilarProjectCard.props().onRefreshClick).to.be.function
      expect(staticSimilarProjectCard.props().onLeftArrowClick).to.be.function
      expect(staticSimilarProjectCard.props().onRightArrowClick).to.be.function
    })
  })

  describe('with projects props', () => {
    describe('on componentDidMount', () => {
      describe('with one basic project', () => {
        const similarProjectsCard = shallow(
          <SimilarProjectsCard projects={ [project1] } />
        )
        const staticSimilarProjectCard = similarProjectsCard
          .find(SimilarProjectCard)

        it('passes the right props for the project', () => {
          const projectProps = {
            imageSrc: 'image-1',
            title: 'Title 1',
            paragraph: 'This is the description of project 1.',
            tags: emptyArray,
            infos: emptyArray,
          }

          expect(staticSimilarProjectCard.props()).to.contains(projectProps)
        })
      })

      describe('with one project with tags', () => {
        const similarProjectsCard = shallow(
          <SimilarProjectsCard projects={ [project2] } />
        )
        const staticSimilarProjectCard = similarProjectsCard
          .find(SimilarProjectCard)

        it('passes the right props for the project', () => {
          const projectProps = {
            imageSrc: 'image-2',
            title: 'Title 2',
            paragraph: 'This is the description of project 2.',
            tags: tags,
            infos: emptyArray,
          }

          expect(staticSimilarProjectCard.props()).to.contains(projectProps)
        })
      })

      describe('with one project with infos', () => {
        const similarProjectsCard = shallow(
          <SimilarProjectsCard projects={ [project3] } />
        )
        const staticSimilarProjectCard = similarProjectsCard
          .find(SimilarProjectCard)

        it('passes the right props for the project', () => {
          const projectProps = {
            imageSrc: 'image-3',
            title: 'Title 3',
            paragraph: 'This is the description of project 3.',
            tags: emptyArray,
            infos: infos,
          }

          expect(staticSimilarProjectCard.props()).to.contains(projectProps)
        })
      })
    })

    describe('on componentWillReceiveProps', () => {
      let similarProjectsCard

      before(() => {
        similarProjectsCard = mount(
          <SimilarProjectsCard
            projects={ [project1, project2, project3] }
          />
        )

        similarProjectsCard.setState({ currentIndex: 2 })
      })

      it('updates the current index to 0', () => {
        expect(similarProjectsCard.state('currentIndex')).to.eq(2)

        similarProjectsCard.setProps({
          projects: [
            project2,
            project1,
          ]
        })

        expect(similarProjectsCard.state('currentIndex')).to.eq(0)
      })
    })

    describe('on left arrow clicked', () => {
      describe('by default', () => {
        let similarProjectsCard
        let staticSimilarProjectCard
        let leftArrowButton

        before(() => {
          similarProjectsCard = mount(
            <SimilarProjectsCard
              projects={ [project1, project2, project3] } />
          )
          staticSimilarProjectCard = similarProjectsCard
            .find(SimilarProjectCard)
          leftArrowButton = similarProjectsCard.find('.k-ButtonIcon').first()

          similarProjectsCard.setState({ currentIndex: 2 })
          leftArrowButton.simulate('click')
        })

        it('passes the previous project props to <SimilarProjectCard>', () => {
          const projectProps = {
            imageSrc: 'image-2',
            title: 'Title 2',
            paragraph: 'This is the description of project 2.',
            tags: tags,
            infos: emptyArray,
          }

          expect(staticSimilarProjectCard.props()).to.contains(projectProps)
        })

        it('updates correctly the step information', () => {
          expect(staticSimilarProjectCard.props())
            .to.contains({ step: '2/3' })
        })
      })

      describe('when new current project is the first of the list', () => {
        let similarProjectsCard
        let staticSimilarProjectCard
        let leftArrowButton

        before(() => {
          similarProjectsCard = mount(
            <SimilarProjectsCard
              projects={ [project1, project2, project3] } />
          )
          staticSimilarProjectCard = similarProjectsCard
            .find(SimilarProjectCard)
          leftArrowButton = similarProjectsCard.find('.k-ButtonIcon').first()

          similarProjectsCard.setState({ currentIndex: 1 })
          leftArrowButton.simulate('click')
        })

        it('passes the first project props to <SimilarProjectCard>', () => {
          const projectProps = {
            imageSrc: 'image-1',
            title: 'Title 1',
            paragraph: 'This is the description of project 1.',
            tags: emptyArray,
            infos: emptyArray,
          }

          expect(staticSimilarProjectCard.props()).to.contains(projectProps)
        })

        it('updates correctly the step information', () => {
          expect(staticSimilarProjectCard.props())
            .to.contains({ step: '1/3' })
        })

        it('disables the left arrow button', () => {
          expect(staticSimilarProjectCard.props())
            .to.contains({ leftArrowDisabled: true })
        })
      })
    })

    describe('on right arrow clicked', () => {
      describe('by default', () => {
        let similarProjectsCard
        let staticSimilarProjectCard
        let rightArrowButton

        before(() => {
          similarProjectsCard = mount(
            <SimilarProjectsCard
              projects={ [project1, project2, project3] } />
          )
          staticSimilarProjectCard = similarProjectsCard
            .find(SimilarProjectCard)
          rightArrowButton = similarProjectsCard.find('.k-ButtonIcon').last()

          rightArrowButton.simulate('click')
        })

        it('passes the next project props to <SimilarProjectCard>', () => {
          const projectProps = {
            imageSrc: 'image-2',
            title: 'Title 2',
            paragraph: 'This is the description of project 2.',
            tags: tags,
            infos: emptyArray,
          }

          expect(staticSimilarProjectCard.props()).to.contains(projectProps)
        })

        it('updates correctly the step information', () => {
          expect(staticSimilarProjectCard.props())
            .to.contains({ step: '2/3' })
        })
      })

      describe('when new current project is the last of the list', () => {
        let similarProjectsCard
        let staticSimilarProjectCard
        let rightArrowButton

        before(() => {
          similarProjectsCard = mount(
            <SimilarProjectsCard
              projects={ [project1, project2, project3] }
            />
          )
          staticSimilarProjectCard = similarProjectsCard
            .find(SimilarProjectCard)
          rightArrowButton = similarProjectsCard.find('.k-ButtonIcon').last()

          similarProjectsCard.setState({ currentIndex: 1 })
          rightArrowButton.simulate('click')
        })

        it('passes the last project props to <SimilarProjectCard>', () => {
          const projectProps = {
            imageSrc: 'image-3',
            title: 'Title 3',
            paragraph: 'This is the description of project 3.',
            tags: emptyArray,
            infos: infos,
          }

          expect(staticSimilarProjectCard.props()).to.contains(projectProps)
        })

        it('updates correctly the step information', () => {
          expect(staticSimilarProjectCard.props())
            .to.contains({ step: '3/3' })
        })

        it('disables the right arrow button', () => {
          expect(staticSimilarProjectCard.props())
            .to.contains({ rightArrowDisabled: true })
        })
      })
    })
  })

  describe('with custom prop', () => {
    const similarProjectsCard = shallow(
      <SimilarProjectsCard className="custom-className" />
    )
    const staticSimilarProjectCard = similarProjectsCard.find(SimilarProjectCard)

    it('passes the right props', () => {
      expect(staticSimilarProjectCard.props())
        .to.contains({ className: 'custom-className' })
    })
  })
})
