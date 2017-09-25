import React, { Component } from 'react'
import classNames from 'classnames'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Row } from 'kitten/components/grid/row'
import { Paragraph } from 'kitten/components/typography/paragraph'

export const KarlAbout = props => (
  <Grid>
    <GridCol col="12">
      <Paragraph modifier="tertiay">
        Chez KissKissBankBank, nous opérons trois services de financement participatif (KissKissBankBank, LENDOPOLIS, hellomerci) avec une seule équipe technique et produit.
        Aujourd’hui, notre volonté d’unifier les expériences et la charte graphique sur les trois services nous a naturellement poussés vers la démarche d’une bibliothèque de composants réutilisables. Cette bibliothèque s'accompagne d'un styleguide vivant qui liste les composants existants et définit un langage commun pour les développeurs et les designers.
        Nous avons donc imaginé Kitten, le premier Kit UI du crowdfunding, ie.
      </Paragraph>
    </GridCol>
  </Grid>
)
