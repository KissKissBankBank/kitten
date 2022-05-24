import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Tag,
  Title,
  Button,
  CheckableButton,
  DashboardLayout,
  FlexWrapper,
  Text,
  VisuallyHidden,
  pxToRem,
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
  StatusWithBullet,
  Checkbox,
  DropdownSelect,
  GridTable,
  mq,
  ScrollableContainer,
} from 'kitten'

const StyledGridTable = styled(GridTable)`
  width: 100%;

  .k-GridTable {
    @media ${mq.mobile} {
      grid-template-columns: ${pxToRem(50)} repeat(3, auto);
    }
    @media ${mq.tablet} {
      grid-template-columns: ${pxToRem(50)} repeat(4, auto);
    }
    @media ${mq.desktop} {
      grid-template-columns:
        ${pxToRem(60)}
        2fr
        3fr
        repeat(calc(var(--col-number) - 3), 1fr);
    }
  }

  .customCol_0 {
    width: ${pxToRem(60)};
    display: flex;
    justify-content: center;

    .k-Form-Checkbox__input {
      margin: 0;
    }
  }

  .customCol_1,
  .customCol_2,
  .customCol_3,
  .customCol_4,
  .customCol_5,
  .customCol_6,
  .customCol_7 {
    padding-left: ${pxToRem(15)};
    padding-right: ${pxToRem(15)};
  }

  .customCol_1 {
    padding-left: 0;
  }

  .customCol_2 {
    @media ${mq.mobileAndTablet} {
      display: none;
    }
  }

  .customCol_3 {
  }

  .customCol_4 {
    @media ${mq.mobile} {
      padding-right: ${pxToRem(CONTAINER_PADDING_THIN)};

      .k-StatusWithBullet__bullet {
        margin: 0;
      }
      .k-StatusWithBullet__status {
        clip: rect(0 0 0 0);
        clip-path: inset(100%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }
    }
  }

  .customCol_5 {
    @media ${mq.tablet} {
      padding-right: ${pxToRem(CONTAINER_PADDING)};
    }

    @media ${mq.mobile} {
      display: none;
    }
  }

  .customCol_6 {
    @media ${mq.mobileAndTablet} {
      display: none;
    }
  }

  .customCol_7 {
    padding-right: ${pxToRem(CONTAINER_PADDING)};
    min-width: 1200px;

    @media ${mq.mobileAndTablet} {
      display: none;
    }
  }
`

const Row = ({ hasExtraColumn }) => {
  const [isHighlighted, setHighlight] = useState(false)

  return (
    <GridTable.Row isHighlighted={isHighlighted}>
      <GridTable.Col className="customCol_0">
        <VisuallyHidden>
          <h2>Contribution #888888 par Prénom NOM le 12 septembre 2019</h2>
          <button>Voir plus d'informations sur cette contribution</button>
        </VisuallyHidden>
        <Checkbox
          onChange={e => setHighlight(e.target.checked)}
          aria-label="Sélectionner cette contribution"
        />
      </GridTable.Col>

      <GridTable.Col className="customCol_1">
        <div>
          <Text size="small" weight="500">
            <time dateTime="2019-09-12">12/09/2019</time>
          </Text>
          <br />
          <Text size="micro" className="k-u-hidden@m-down" lineHeight="1">
            #88888888
          </Text>
          <Text size="micro" className="k-u-hidden@l-up" lineHeight="1">
            Prénom NOM
          </Text>
          <br />
          <Text
            size="micro"
            weight="500"
            lineHeight="1"
            as="a"
            href="#"
            className="k-u-link k-u-link-primary1"
          >
            Détails
          </Text>
        </div>
      </GridTable.Col>

      <GridTable.Col className="customCol_2">
        <div>
          <Text weight="600">Prénom Nom</Text>
          <br />
          <Text size="micro" weight="400">
            Prenom-Nom
          </Text>
        </div>
      </GridTable.Col>

      <GridTable.Col className="customCol_3">
        <Text size="small" weight="500">
          72&nbsp;€
        </Text>
      </GridTable.Col>

      <GridTable.Col className="customCol_4">
        <StatusWithBullet statusType="success" className="k-u-hidden@l-up">
          Valid
        </StatusWithBullet>
        <Tag type="success" className="k-u-hidden@m-down">
          Valid
        </Tag>
      </GridTable.Col>

      <GridTable.Col className="customCol_5">
        <Text size="small" weight="500">
          Livraison
        </Text>
      </GridTable.Col>

      <GridTable.Col className="customCol_6">
        <DropdownSelect
          id="DropdownSelect_1"
          hideLabel
          labelText="Sélectionnez le statut de livraison"
          options={[
            { label: 'À expédier', value: 1 },
            { label: 'Expédié', value: 2 },
          ]}
          size="micro"
        />
      </GridTable.Col>

      {hasExtraColumn ? (
        <GridTable.Col className="customCol_7">
          <Text size="small" weight="500">
            -
          </Text>
        </GridTable.Col>
      ) : (
        <></>
      )}
    </GridTable.Row>
  )
}

export const StoryWithTable = () => {
  const [isToasterOpen, setToasterOpen] = useState(false)
  const [hasExtraColumn, setExtraColumn] = useState(false)

  return (
    <>
      <div className="k-u-margin-bottom-triple">
        <Title
          modifier="quinary"
          noMargin
          className="k-u-margin-none k-u-margin-bottom-double"
        >
          Curabitur blandit tempus porttitor.
        </Title>
        <CheckableButton
          checkPosition="left"
          isChecked={isToasterOpen}
          onClick={() => setToasterOpen(!isToasterOpen)}
        >
          Toggle Toaster
        </CheckableButton>
        <CheckableButton
          checkPosition="left"
          isChecked={hasExtraColumn}
          onClick={() => setExtraColumn(!hasExtraColumn)}
        >
          Toggle extra column
        </CheckableButton>
      </div>

      <ScrollableContainer
        className="k-DashboardLayout__fullWidth"
        shadowColor="rgba(0,0,0,.25)"
      >
        <StyledGridTable
          id="CustomGridTable"
          style={{ '--col-number': hasExtraColumn ? 8 : 7 }}
        >
          <GridTable.Header className="k-u-weight-500">
            <GridTable.Col className="customCol_0">
              <VisuallyHidden>Sélection</VisuallyHidden>
              <Checkbox aria-label="Sélectionner toutes les contributions de la liste" />
            </GridTable.Col>

            <GridTable.Col className="customCol_1">
              <Text weight="500" color="font1" size="small">
                Date
                <br className="k-u-hidden@l-up" />
                <Text
                  weight="500"
                  color="font1"
                  size="small"
                  className="k-u-hidden@l-up"
                >
                  et Contributeur
                </Text>
              </Text>
            </GridTable.Col>

            <GridTable.Col className="customCol_2">
              <Text weight="500" color="font1" size="small">
                Contributeur
              </Text>
            </GridTable.Col>

            <GridTable.Col className="customCol_3">
              <Text weight="500" color="font1" size="small">
                Montant
              </Text>
            </GridTable.Col>

            <GridTable.Col className="customCol_4">
              <Text weight="500" color="font1" size="small">
                Statut
              </Text>
            </GridTable.Col>

            <GridTable.Col className="customCol_5">
              <Text weight="500" color="font1" size="small">
                Mode de livraison
              </Text>
            </GridTable.Col>

            <GridTable.Col className="customCol_6">
              <Text weight="500" color="font1" size="small">
                Statut livraison
              </Text>
            </GridTable.Col>

            {hasExtraColumn ? (
              <GridTable.Col className="customCol_7">
                <Text weight="500" color="font1" size="small">
                  Dernière modification
                </Text>
              </GridTable.Col>
            ) : (
              <></>
            )}
          </GridTable.Header>

          <GridTable.Body>
            <Row hasExtraColumn={hasExtraColumn} />
            <Row hasExtraColumn={hasExtraColumn} />
            <Row hasExtraColumn={hasExtraColumn} />
            <Row hasExtraColumn={hasExtraColumn} />
            <Row hasExtraColumn={hasExtraColumn} />
            <Row hasExtraColumn={hasExtraColumn} />
            <Row hasExtraColumn={hasExtraColumn} />
            <Row hasExtraColumn={hasExtraColumn} />
            <Row hasExtraColumn={hasExtraColumn} />
          </GridTable.Body>
        </StyledGridTable>

        <DashboardLayout.Toaster isOpen={isToasterOpen}>
          <FlexWrapper
            gap={10}
            direction="row"
            className="k-u-flex-alignItems-center"
          >
            <div style={{ flex: '1 0 auto' }} className="k-u-hidden@xs-down">
              <Text color="background1" size="small" weight="500">
                Text
              </Text>
            </div>
            <Button modifier="boron" size="small" className="k-u-hidden@m-down">
              Hello
            </Button>
            <Button modifier="helium" size="small">
              Hello
            </Button>
          </FlexWrapper>
        </DashboardLayout.Toaster>
      </ScrollableContainer>
    </>
  )
}
