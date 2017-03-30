import React from 'react'
import classNames from 'classnames'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Progress } from 'kitten/components/meters/progress'
import { Button } from 'kitten/components/buttons/button'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { IconBadge } from 'kitten/components/notifications/icon-badge'
import { TagList } from 'kitten/components/lists/tag-list'

export const KarlProjectCard = () => {
  const tagItems = [
    { key: 'tpe-pme', item: 'TPE / PME' },
  ]

  return (
    <div className="k-ProjectCard">
      <div className="k-ProjectCard__grid">
        <Marger top="2" bottom="1" className="k-ProjectCard__flex">
          <ButtonImage img={ { src: 'https://placehold.it/40x40/4a84ff/4a84ff' } } />
          <Paragraph className={ classNames('k-ProjectCard__flex__fluid',
                                            'k-u-margin-left-single',
                                            'k-u-margin-right-single') }
                     margin={ false }
                     modifier="quaternary">
            par&nbsp;:<br />
            <span className="k-u-strong">JCD Diffusion</span>
          </Paragraph>
          <IconBadge>A</IconBadge>
        </Marger>

        <Marger top="1" bottom=".5">
          <Title margin={ false } modifier="quaternary">
            Location de materiel de reception
          </Title>
        </Marger>

        <Marger top=".5" bottom="1">
          <TagList items={ tagItems } />
        </Marger>

        <Marger top=".5" bottom="1.5">
          <Paragraph margin={ false } modifier="tertiary">
            Achat de matériel (vaisselle, tables, chaises, …) dans le cadre de
            son activité de location de matériel de réception
          </Paragraph>
        </Marger>

        <Marger top="1.5"
                bottom="2"
                className="k-ProjectCard__flex k-ProjectCard__flex--spaceBetween">
          <Paragraph margin={ false } modifier="quaternary" className="k-u-align-center">
            Taux d’intérêt<br />
            <span className="k-u-strong">8,8 %</span>
          </Paragraph>

          <Paragraph margin={ false } modifier="quaternary" className="k-u-align-center">
            Objectif<br />
            <span className="k-u-strong">70 000 €</span>
          </Paragraph>

          <Paragraph margin={ false } modifier="quaternary" className="k-u-align-center">
            Durée<br />
            <span className="k-u-strong">48 mois</span>
          </Paragraph>
        </Marger>

        <Marger top="2" bottom="2">
          <img className="k-u-align-center k-ProjectCard__img"
               src="https://placehold.it/310x175/4a84ff/4a84ff" />
        </Marger>
      </div>

      <div className="k-ProjectCard__grid k-ProjectCard__borderTop">
        <Marger top="2" bottom="2" className="k-ProjectCard__flex">
          <Progress className="k-ProjectCard__flex__fluid" />
          <Paragraph margin={ false }
                     modifier="quaternary"
                     className="k-u-margin-left-single k-u-color-primary1 k-u-strong">
            23 %
          </Paragraph>
        </Marger>
      </div>

      <div className="k-ProjectCard__grid k-ProjectCard__borderTop">
        <Marger top="1.5"
                bottom="1.5"
                className="k-ProjectCard__flex k-ProjectCard__flex--spaceBetween">
          <Paragraph margin={ false } modifier="quaternary" className="k-u-align-center">
            <span className="k-u-strong k-u-color-primary1">495</span><br />
            preteurs
          </Paragraph>

          <Paragraph margin={ false } modifier="quaternary" className="k-u-align-center">
            <span className="k-u-strong k-u-color-primary1">71 000 €</span><br />
            collectés
          </Paragraph>

          <Paragraph margin={ false } modifier="quaternary" className="k-u-align-center">
            <span className="k-u-strong k-u-color-primary1">12 j</span><br />
            restants
          </Paragraph>
        </Marger>
      </div>

      <div className="k-ProjectCard__grid k-ProjectCard__borderTop">
        <Marger top="1" bottom="1">
          <div className="k-ProjectCard__status">
            Projet à l'étude
          </div>
        </Marger>
      </div>
    </div>
  )
}
