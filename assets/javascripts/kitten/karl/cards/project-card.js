import React from 'react'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Progress } from 'kitten/components/meters/progress'
import { Button } from 'kitten/components/buttons/button'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'

export const KarlProjectCard = () => {
  return (
    <div className="k-ProjectCard">
      <div className="k-ProjectCard__content k-ProjectCard__borderBottom">
        <div className="k-u-margin-top-double">
          <Grid>
            <GridCol col="10">
              <ButtonIcon size="big" />
              <Paragraph modifier="quaternary">
                par :<br />
                <strong>JCD Diffusion</strong>
              </Paragraph>
            </GridCol>
            <GridCol col="2">
              <span className="k-Badge">B</span>
            </GridCol>
          </Grid>
        </div>

        <Title modifier="quaternary">Location de materiel de reception</Title>
        <Paragraph modifier="quaternary"><strong>TPE / PME</strong></Paragraph>
        <Paragraph modifier="tertiary">
          Achat de matériel (vaisselle, tables, chaises, …) dans le cadre de
          son activité de location de matériel de réception
        </Paragraph>

        <img className="k-ProjectCard__img"
             src="https://placekitten.com/600/340" />
      </div>

      <div className="k-ProjectCard__content k-ProjectCard__progress k-ProjectCard__borderBottom">
        <Grid>
          <GridCol col="11">
            <Progress tiny />
          </GridCol>
          <GridCol col="1">
            <span>23 %</span>
          </GridCol>
        </Grid>
      </div>

      <div className="k-ProjectCard__content k-u-centered">
        <Button modifier="helium" className="k-u-margin-top-double k-u-margin-bottom-double">
          Prêter
        </Button>
      </div>
    </div>
  )
}
