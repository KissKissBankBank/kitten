import React from 'react'
import renderer from 'react-test-renderer'
import { ProjectCard } from 'kitten'

describe('<ProjectCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ProjectCard
            status="normal"
            imageProps={{
              src: 'kitten.jpg',
              alt: 'image alt',
            }}
          >
            <ProjectCard.Sticker className="k-u-hidden@xs-down">
              Prolongation
            </ProjectCard.Sticker>
            <ProjectCard.Title>
              The Office, la série culte décortiquée par S!CK
            </ProjectCard.Title>
            <ProjectCard.Line>
              <span>
                par{' '}
                <a href="#" className="k-u-link k-u-link-font1 k-u-weight-bold">
                  Bidules
                </a>
              </span>
            </ProjectCard.Line>
            <ProjectCard.Item>
              <span>134</span>
              <span>contributeurs</span>
            </ProjectCard.Item>
            <ProjectCard.Item>
              <span>7 jours</span>
              <span>restants</span>
            </ProjectCard.Item>
            <ProjectCard.Item>
              <span>9 930 €</span>
              <span>sur 12 000 €</span>
            </ProjectCard.Item>
            <ProjectCard.Progress
              aria-label="Progrès de la campagne"
              value="55"
            />
          </ProjectCard>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('as a link', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ProjectCard
            href="//hello.world"
            status="normal"
            imageProps={{
              src: 'kitten.jpg',
              alt: 'image alt',
            }}
          >
            <ProjectCard.Title>
              The Office, la série culte décortiquée par S!CK
            </ProjectCard.Title>
            <ProjectCard.Line>
              <span>
                par{' '}
                <a href="#" className="k-u-link k-u-link-font1 k-u-weight-bold">
                  Bidules
                </a>
              </span>
            </ProjectCard.Line>
            <ProjectCard.Item>
              <span>134</span>
              <span>contributeurs</span>
            </ProjectCard.Item>
            <ProjectCard.Item>
              <span>7 jours</span>
              <span>restants</span>
            </ProjectCard.Item>
            <ProjectCard.Item>
              <span>9 930 €</span>
              <span>sur 12 000 €</span>
            </ProjectCard.Item>
            <ProjectCard.Progress
              aria-label="Progrès de la campagne"
              value="55"
            />
          </ProjectCard>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
