import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, select } from '@storybook/addon-knobs'
import { ListTable } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { ScreenConfig } from '../../../constants/screen-config'
import { VisuallyHidden } from '../../accessibility/visually-hidden'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ArrowIcon } from '../../icons/arrow-icon'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import {
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

const listTableInfo = {
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
      <ListTable.Header
        {...props}
        listProps={{…}}
      >
        <ListTable.Col>
          …
        </ListTable.Col>
      </ListTable.Header>

      <ListTable.Body>
        <ListTable.Row isHighlighted>
          <ListTable.Col>
            …
          </ListTable.Col>
        </ListTable.Row>
        <ListTable.Row
          {...props}
          listProps={{…}}
        >
          <ListTable.Col>
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

const toggleableListTableInfo = {
  text: `
    # ListTable
    &nbsp;

    ## Import
    ~~~js
    import { ListTable } from '@kisskissbankbank/kitten/src/components/tables/list-table'
    ~~~

    ## Usage
    &nbsp;

    #### Toggleable
    ~~~js
    <ListTable id="…">
      <ListTable.Header
        {...props}
        listProps={{…}}
      >
        <ListTable.Col>
          <button
            type="button"
            onClick={() => setDisplayState(!displayed)}
            aria-expanded={displayed}
            aria-controls="toggleableListTable"
          >
            Voir les détails
          </button>
        </ListTable.Col>
      </ListTable.Header>
      { displayed && (
        <ListTable.Body id="toggleableListTable">
          <ListTable.Row isHighlighted>
            <ListTable.Col>
              …
            </ListTable.Col>
          </ListTable.Row>
          <ListTable.Row
            {...props}
            listProps={{…}}
          >
            <ListTable.Col>
              …
            </ListTable.Col>
          </ListTable.Row>
        </ListTable.Body>
      )
    </ListTable>
    ~~~

  `,
  header: false,
  propTables: false,
}

const StyledCol1 = styled(ListTable.Col)`
  text-align: center;

  @media (max-width: ${ScreenConfig.S.max}px) {
    flex-basis: ${pxToRem(40)};
  }
  @media (min-width: ${ScreenConfig.M.min}px) {
    flex-basis: ${pxToRem(60)};
  }
  @media (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: ${pxToRem(90)};
  }
`

const StyledCol2 = styled(ListTable.Col)`
  @media (max-width: ${ScreenConfig.S.max}px) {
    flex-basis: calc(90% - 150px);
  }
  @media (min-width: ${ScreenConfig.M.min}px) {
    flex-basis: calc(50% - 170px);
  }
  @media (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: 15%;
  }
`

const StyledCol3 = styled(ListTable.Col)`
  @media (max-width: ${ScreenConfig.M.max}px) {
    display: none;
  }
  @media (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: 25%;
  }
`

const StyledCol4 = styled(ListTable.Col)`
  text-align: right;

  @media (max-width: ${ScreenConfig.S.max}px) {
    flex-basis: 110px;
  }
  @media (min-width: ${ScreenConfig.M.min}px) {
    flex-basis: 110px;
  }
  @media (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: 8%;
  }
`
const StyledCol5 = styled(ListTable.Col)`
  @media (max-width: ${ScreenConfig.S.max}px) {
    display: none;
  }
  @media (min-width: ${ScreenConfig.M.min}px) {
    flex-basis: 20%;
  }
  @media (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: 15%;
  }
`
const StyledCol6 = styled(ListTable.Col)`
  @media (max-width: ${ScreenConfig.M.max}px) {
    display: none;
  }
  @media (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: calc(33% - 200px);
  }
`
const StyledCol7 = styled(ListTable.Col)`
  @media (max-width: ${ScreenConfig.S.max}px) {
    display: none;
  }
  @media (min-width: ${ScreenConfig.M.min}px) {
    flex-basis: 20%;
  }
  @media (min-width: ${ScreenConfig.L.min}px) {
    flex-basis: 12%;
  }
`
const StyledCol8 = styled(ListTable.Col)`
  @media (min-width: ${ScreenConfig.L.min}px) {
    display: none;
  }
`

// Toggleable
const linkclassNames = [
  'k-u-color-primary1',
  'k-u-decoration-none',
  'k-u-size-tiny k-u-weight-regular',
].join(' ')

const defaultHeaderColWidth = {
  default: '100%',
  fromXs: '50%',
  fromS: '25%',
  fromL: '20%',
}
const defaultColWidth = {
  default: '100%',
  fromXs: '50%',
  fromM: '25%',
  fromL: '20%',
}
const defaultActionColWidth = { default: '100%', fromM: '50%', fromL: '20%' }

const HeaderRow = styled(ListTable.Header)`
  background-color: ${COLORS.background1};
  color: ${COLORS.font1};
  border-bottom: solid 2px ${COLORS.line1};
  padding-left: ${pxToRem(CONTAINER_PADDING_THIN / 2)};
  padding-right: ${pxToRem(CONTAINER_PADDING_THIN / 2)};

  @media (min-width: ${ScreenConfig.M.min}px) {
    padding-left: ${pxToRem(CONTAINER_PADDING / 2)};
    padding-right: ${pxToRem(CONTAINER_PADDING / 2)};
  }

  ul {
    padding: 0;
  }
`

const Col = styled(({ align, width, ...props }) => (
  <ListTable.Col {...props} />
))`
  min-height: ${pxToRem(90)};
  flex-basis: auto;
  flex-grow: 1;
  width: ${({ width }) => (width ? width.default : '50%')};
  font-size: ${stepToRem(-1)};

  padding-left: ${pxToRem(CONTAINER_PADDING_THIN / 2)} !important;
  padding-right: ${pxToRem(CONTAINER_PADDING_THIN / 2)} !important;

  @media (min-width: ${ScreenConfig.XS.min}px) {
    width: ${({ width }) => (width ? width.fromXs : '50%')};
  }

  @media (min-width: ${ScreenConfig.S.min}px) {
    width: ${({ width }) => (width ? width.fromS : '20%')};

    ${({ align }) =>
      align === 'right' &&
      css`
        justify-content: flex-end;
      `}
  }

  @media (min-width: ${ScreenConfig.M.min}px) {
    width: ${({ width }) => (width ? width.fromM : '20%')};
    padding-left: ${pxToRem(CONTAINER_PADDING / 2)} !important;
    padding-right: ${pxToRem(CONTAINER_PADDING / 2)} !important;
  }

  @media (min-width: ${ScreenConfig.L.min}px) {
    width: ${({ width }) => (width ? width.fromL : '20%')};
  }

  .nowrap {
    white-space: nowrap;
  }
`

const Row = styled(ListTable.Row)`
  background-color: ${COLORS.background3};
  padding-left: ${pxToRem(CONTAINER_PADDING_THIN / 2)};
  padding-right: ${pxToRem(CONTAINER_PADDING_THIN / 2)};

  @media (min-width: ${ScreenConfig.M.min}px) {
    padding-left: ${pxToRem(CONTAINER_PADDING / 2)};
    padding-right: ${pxToRem(CONTAINER_PADDING / 2)};
  }

  &:nth-of-type(even) {
    background-color: ${COLORS.background2};
  }

  &:last {
    border-bottom: 0;
  }

  ul {
    padding: 0;
  }
`

const ToggleButton = styled.button`
  border: 0;
  white-space: nowrap;
  display: flex;
  align-items: center;
  ${TYPOGRAPHY.fontStyles.regular}
  font-size: ${stepToRem(-1)};

  svg {
    margin-left: ${pxToRem(5)};
  }
`

const CellWithLabelValue = styled(({ label, value, thead, ...props }) => (
  <p {...props}>
    <strong>{value}</strong>
    <br />
    <span>{label}</span>
  </p>
))`
  strong {
    font-size: ${({ thead }) => (thead ? stepToRem(2) : stepToRem(0))};
  }

  span {
    font-size: ${stepToRem(-1)};
  }
`

const ToggleableTable = styled(ListTable)`
  border: solid 2px ${COLORS.line1};
  border-bottom: 0;

  ul {
    height: initial;
    flex-wrap: wrap;
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
          <ListTable id="CustomListTable">
            <ListTable.Header
              className="customHeaderClass"
              listProps={{ className: 'customListClass' }}
            >
              <StyledCol1>
                <VisuallyHidden>Sélection</VisuallyHidden>
                <input
                  type="checkbox"
                  aria-label="Sélectionner toutes les contributions de la liste"
                />
              </StyledCol1>

              <StyledCol2>
                <span className="k-u-hidden@s-down k-u-hidden@m">
                  Date contribution
                </span>
                <span className="k-u-hidden@l-up">Contributeur</span>
              </StyledCol2>

              <StyledCol3>Contributeur</StyledCol3>

              <StyledCol4>Montant</StyledCol4>

              <StyledCol5>Statut de paiement</StyledCol5>

              <StyledCol6>Mode de livraison</StyledCol6>

              <StyledCol7>Statut de livraison</StyledCol7>

              <StyledCol8></StyledCol8>
            </ListTable.Header>

            <ListTable.Body>
              <ListTable.Row isHighlighted>
                <StyledCol1>
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

                <StyledCol2>
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

                <StyledCol3>
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

                <StyledCol4>72&nbsp;€</StyledCol4>

                <StyledCol5>● Validé</StyledCol5>

                <StyledCol6>Livraison</StyledCol6>

                <StyledCol7>
                  <select name="" id="">
                    <option value="">À expédier</option>
                  </select>
                </StyledCol7>

                <StyledCol8>&gt;</StyledCol8>
              </ListTable.Row>

              <ListTable.Row
                className="customRowClass"
                listProps={{ className: 'customListClass' }}
              >
                <StyledCol1>
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

                <StyledCol2>
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

                <StyledCol3>
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

                <StyledCol4>72&nbsp;€</StyledCol4>

                <StyledCol5>● Validé</StyledCol5>

                <StyledCol6>Livraison</StyledCol6>

                <StyledCol7>
                  <select name="" id="">
                    <option value="">À expédier</option>
                  </select>
                </StyledCol7>

                <StyledCol8>&gt;</StyledCol8>
              </ListTable.Row>
            </ListTable.Body>
          </ListTable>
        </div>
      )
    },
    { listTableInfo },
  )
  .add(
    'toggleable',
    () => {
      const [displayed, setDisplayState] = useState(false)
      return (
        <StoryContainer>
          <ToggleableTable id="CustomToggleableTable">
            <HeaderRow
              className="customHeaderClass"
              listProps={{ className: 'customListClass' }}
            >
              <Col width={defaultHeaderColWidth}>
                <CellWithLabelValue thead label="Projets" value="4" />
              </Col>
              <Col width={defaultHeaderColWidth}>
                <CellWithLabelValue
                  thead
                  label="Montant investi"
                  value="1 000 €"
                />
              </Col>
              <Col width={defaultHeaderColWidth}>
                <CellWithLabelValue thead label="TRI cible" value="3 %" />
              </Col>
              <Col
                align="right"
                width={{
                  default: '100%',
                  fromXs: '50%',
                  fromS: '25%',
                  fromL: '40%',
                }}
              >
                <ToggleButton
                  type="button"
                  onClick={() => setDisplayState(!displayed)}
                  aria-expanded={displayed}
                  aria-controls="toggleableListTable"
                >
                  Voir les détails
                  <ArrowIcon
                    direction={displayed ? 'top' : 'bottom'}
                    version="solid"
                  />
                </ToggleButton>
              </Col>
            </HeaderRow>
            {displayed && (
              <ListTable.Body id="toggleableListTable">
                <Row>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Photosol Invest 2"
                      value="Centrale solaire Parc du Petit Prince"
                    />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="Montant investi" value="200 €" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="TRI cible" value="3 %" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Horizon d'investissement"
                      value="5 ans"
                    />
                  </Col>
                  <Col width={defaultActionColWidth}>
                    <p className="nowrap">
                      <a className={linkclassNames} href="#">
                        Page projet
                      </a>
                      <br />
                      <a className={linkclassNames} href="#">
                        Attestation de propriété
                      </a>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Urba 133"
                      value="Centrale solaire Urbasolar Istres"
                    />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="Montant investi" value="300 €" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="TRI cible" value="3 %" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Horizon d'investissement"
                      value="5 ans"
                    />
                  </Col>
                  <Col width={defaultActionColWidth}>
                    <p className="nowrap">
                      <a className={linkclassNames} href="#">
                        Page projet
                      </a>
                      <br />
                      <a className={linkclassNames} href="#">
                        Attestation de propriété
                      </a>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Photosol Invest 2"
                      value="Centrale solaire Parc du Petit Prince"
                    />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="Montant investi" value="200 €" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="TRI cible" value="3 %" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Horizon d'investissement"
                      value="5 ans"
                    />
                  </Col>
                  <Col width={defaultActionColWidth}>
                    <p className="nowrap">
                      <a className={linkclassNames} href="#">
                        Page projet
                      </a>
                      <br />
                      <a className={linkclassNames} href="#">
                        Attestation de propriété
                      </a>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Urba 133"
                      value="Centrale solaire Urbasolar Istres"
                    />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="Montant investi" value="300 €" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue label="TRI cible" value="3 %" />
                  </Col>
                  <Col width={defaultColWidth}>
                    <CellWithLabelValue
                      label="Horizon d'investissement"
                      value="5 ans"
                    />
                  </Col>
                  <Col width={defaultActionColWidth}>
                    <p className="nowrap">
                      <a className={linkclassNames} href="#">
                        Page projet
                      </a>
                      <br />
                      <a className={linkclassNames} href="#">
                        Attestation de propriété
                      </a>
                    </p>
                  </Col>
                </Row>
              </ListTable.Body>
            )}
          </ToggleableTable>
        </StoryContainer>
      )
    },
    { toggleableListTableInfo },
  )
