import React from 'react'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Progress } from 'kitten/components/meters/progress'
import { Button } from 'kitten/components/buttons/button'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { IconBadge } from 'kitten/components/notifications/icon-badge'
import { TagList } from 'kitten/components/lists/tag-list'

export const KarlProjectCard = () => {
  const tagItems = [
    { key: 'tpe-pme', item: 'TPE / PME' },
  ]

  return (
    <div className="k-ProjectCard">
      <div className="k-ProjectCard__content">
        <div className="k-ProjectCard__grid">
          <ButtonIcon size="big" />

          <Paragraph modifier="quaternary"
                     className="k-ProjectCard__grid__fluid k-u-margin-left-single">
            par :<br />
            <strong>JCD Diffusion</strong>
          </Paragraph>

          <IconBadge>A</IconBadge>
        </div>

        <Title modifier="quaternary">Location de materiel de reception</Title>

        <TagList items={ tagItems } />

        <Paragraph modifier="tertiary">
          Achat de matériel (vaisselle, tables, chaises, …) dans le cadre de
          son activité de location de matériel de réception
        </Paragraph>

        <div className="k-ProjectCard__grid k-ProjectCard__grid--spaceBetween">
          <Paragraph modifier="quaternary" className="k-u-align-center">
            Taux d’intérêt <br />
            …
          </Paragraph>

          <Paragraph modifier="quaternary" className="k-u-align-center">
            Taux d’intérêt <br />
            …
          </Paragraph>

          <Paragraph modifier="quaternary" className="k-u-align-center">
            Taux d’intérêt <br />
            …
          </Paragraph>
        </div>

        <img className="k-ProjectCard__img"
             src="https://placekitten.com/600/340" />
      </div>

      <div className="k-ProjectCard__progress k-ProjectCard__grid">
        <Progress className="k-ProjectCard__grid__fluid k-u-margin-right-single" />
        <Paragraph modifier="quaternary"><strong>23 %</strong></Paragraph>
      </div>

      <div className="k-ProjectCard__content">
        <div className="k-ProjectCard__grid k-ProjectCard__grid--spaceBetween">
          <Paragraph modifier="quaternary" className="k-u-align-center">
            812 <br />
            preteurs
          </Paragraph>

          <Paragraph modifier="quaternary" className="k-u-align-center">
            71 000 € <br />
            collectés
          </Paragraph>

          <Paragraph modifier="quaternary" className="k-u-align-center">
            12 j <br />
            restants
          </Paragraph>
        </div>
      </div>

    </div>
  )
}
