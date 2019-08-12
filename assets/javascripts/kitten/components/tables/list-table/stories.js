import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number, select } from '@storybook/addon-knobs'
import { ListTable } from './index'

import { ScreenConfig } from '../../../constants/screen-config'
import { VisuallyHidden } from '../../accessibility/visually-hidden'
import { pxToRem } from '../../../helpers/utils/typography'

const info = {
  text: `
    # ListTable
    &nbsp;

    ## Import
    ~~~js
    import { ListTable } from '@kisskissbankbank/kitten/src/components/tables/list-table'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <ListTable id="…">

      <ListTable.Header>
        <ListTable.Col isHeader colNumber={…}>
          …
        </ListTable.Col>
      </ListTable.Header>

      <ListTable.Body>
        <ListTable.Row selected>
          <ListTable.Col colNumber={…}>
            …
          </ListTable.Col>
        </ListTable.Row>
        <ListTable.Row>
          <ListTable.Col colNumber={…}>
            …
          </ListTable.Col>
        </ListTable.Row>
      </ListTable.Body>
    </ListTable>
    ~~~

  `,
  header: false,
  propTables: false,
}

const flexCellStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledCol1 = styled(ListTable.Col)`
  text-align: center;

  @media screen and (max-width: ${ScreenConfig.S.max}px) {
    flex-basis: ${pxToRem(40)};
  }
  @media screen and (min-width: ${ScreenConfig.M.min}px) {
    flex-basis: ${pxToRem(60)};
  }
  @media screen and (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: ${pxToRem(90)};
  }
`

const StyledCol2 = styled(ListTable.Col)`
  ${flexCellStyle}

  @media screen and (max-width: ${ScreenConfig.S.max}px) {
    flex-basis: calc(90% - 150px);
  }
  @media screen and (min-width: ${ScreenConfig.M.min}px) {
    flex-basis: calc(50% - 170px);
  }
  @media screen and (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: 15%;
  }
`

const StyledCol3 = styled(ListTable.Col)`
  ${flexCellStyle}

  @media screen and (max-width: ${ScreenConfig.M.max}px) {
    display: none;
  }
  @media screen and (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: 25%;
  }
`

const StyledCol4 = styled(ListTable.Col)`
  text-align: right;

  @media screen and (max-width: ${ScreenConfig.S.max}px) {
    flex-basis: 110px;
  }
  @media screen and (min-width: ${ScreenConfig.M.min}px) {
    flex-basis: 110px;
  }
  @media screen and (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: 8%;
  }
`
const StyledCol5 = styled(ListTable.Col)`
  @media screen and (max-width: ${ScreenConfig.S.max}px) {
    display: none;
  }
  @media screen and (min-width: ${ScreenConfig.M.min}px) {
    flex-basis: 20%;
  }
  @media screen and (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: 15%;
  }
`
const StyledCol6 = styled(ListTable.Col)`
  @media screen and (max-width: ${ScreenConfig.M.max}px) {
    display: none;
  }
  @media screen and (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: calc(33% - 200px);
  }
`
const StyledCol7 = styled(ListTable.Col)`
  @media screen and (max-width: ${ScreenConfig.S.max}px) {
    display: none;
  }
  @media screen and (min-width: ${ScreenConfig.M.min}px) {
    flex-basis: 20%;
  }
  @media screen and (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: 12%;
  }
`
const StyledCol8 = styled(ListTable.Col)`
  @media screen and (min-width: ${ScreenConfig.L.min}px) {
    display: none;
  }
`

storiesOf('Tables/ListTable', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <div style={{ margin: '5em 0' }}>
          <ListTable id="ListTable">
            <ListTable.Header>
              <StyledCol1 isHeader colNumber={1}>
                <VisuallyHidden>Sélection</VisuallyHidden>
                <input
                  type="checkbox"
                  aria-label="Sélectionner toutes les contributions de la liste"
                />
              </StyledCol1>

              <StyledCol2 isHeader colNumber={2}>
                <span className="k-u-hidden@s-down k-u-hidden@m">
                  Date contribution
                </span>
                <span className="k-u-hidden@l-up">Contributeur</span>
              </StyledCol2>

              <StyledCol3 isHeader colNumber={3}>
                Contributeur
              </StyledCol3>

              <StyledCol4 isHeader colNumber={4}>
                Montant
              </StyledCol4>

              <StyledCol5 isHeader colNumber={5}>
                Statut de paiement
              </StyledCol5>

              <StyledCol6 isHeader colNumber={6}>
                Mode de livraison
              </StyledCol6>

              <StyledCol7 isHeader colNumber={7}>
                Statut de livraison
              </StyledCol7>

              <StyledCol8 isHeader colNumber={8}></StyledCol8>
            </ListTable.Header>

            <ListTable.Body>
              <ListTable.Row selected>
                <StyledCol1 colNumber={1}>
                  <VisuallyHidden>
                    <h2>
                      Contribution #888888 par Prénom NOM le 12 septembre 2019
                    </h2>
                    <button>
                      Voir plus d'informations sur cette contribution
                    </button>
                  </VisuallyHidden>
                  <input
                    type="checkbox"
                    aria-label="Sélectionner toutes les contributions de la liste"
                  />
                </StyledCol1>

                <StyledCol2 colNumber={2}>
                  <p>
                    <strong>
                      <time dateTime="2019-09-12">12/09/2019</time>
                    </strong>
                    <br />
                    <span className="k-u-hidden@m-down">#88888888</span>
                    <span className="k-u-hidden@l-up">Prénom NOM</span>
                  </p>
                  <a
                    href="#"
                    className="lien_message k-u-hidden@l-up"
                    title="2 messages"
                  >
                    2
                  </a>
                </StyledCol2>

                <StyledCol3 colNumber={3}>
                  <p>
                    <strong>Prénom NOM</strong>
                    <br />
                    Prenom-Nom
                  </p>
                  <a
                    href="#"
                    className="lien_message k-u-hidden@s-down k-u-hidden@m"
                    title="2 messages"
                  >
                    2
                  </a>
                </StyledCol3>

                <StyledCol4 colNumber={4}>72&nbsp;€</StyledCol4>

                <StyledCol5 colNumber={5}>● Validé</StyledCol5>

                <StyledCol6 colNumber={6}>Livraison</StyledCol6>

                <StyledCol7 colNumber={7}>
                  <select name="" id="">
                    <option value="">À expédier</option>
                  </select>
                </StyledCol7>

                <StyledCol8 colNumber={8}>&gt;</StyledCol8>
              </ListTable.Row>

              <ListTable.Row>
                <StyledCol1 colNumber={1}>
                  <VisuallyHidden>
                    <h2>
                      Contribution #44654 par Prénom NOM le 12 septembre 2019
                    </h2>
                    <button>
                      Voir plus d'informations sur cette contribution
                    </button>
                  </VisuallyHidden>
                  <input
                    type="checkbox"
                    aria-label="Sélectionner toutes les contributions de la liste"
                  />
                </StyledCol1>

                <StyledCol2 colNumber={2}>
                  <p>
                    <strong>
                      <time dateTime="2019-09-12">12/09/2019</time>
                    </strong>
                    <br />
                    <span className="k-u-hidden@m-down">#44654</span>
                    <span className="k-u-hidden@l-up">Prénom NOM</span>
                  </p>
                  <a
                    href="#"
                    className="lien_message k-u-hidden@l-up"
                    title="2 messages"
                  >
                    2
                  </a>
                </StyledCol2>

                <StyledCol3 colNumber={3}>
                  <p>
                    <strong>Prénom NOM</strong>
                    <br />
                    Prenom-Nom
                  </p>
                  <a
                    href="#"
                    className="lien_message k-u-hidden@s-down k-u-hidden@m"
                    title="2 messages"
                  >
                    2
                  </a>
                </StyledCol3>

                <StyledCol4 colNumber={4}>72&nbsp;€</StyledCol4>

                <StyledCol5 colNumber={5}>● Validé</StyledCol5>

                <StyledCol6 colNumber={6}>Livraison</StyledCol6>

                <StyledCol7 colNumber={7}>
                  <select name="" id="">
                    <option value="">À expédier</option>
                  </select>
                </StyledCol7>

                <StyledCol8 colNumber={8}>&gt;</StyledCol8>
              </ListTable.Row>
            </ListTable.Body>
          </ListTable>
        </div>
      )
    },
    { info },
  )
