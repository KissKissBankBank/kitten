import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Title,
  Button,
  DashboardLayout,
  FlexWrapper,
  Text,
  ScreenConfig,
  VisuallyHidden,
  pxToRem,
  COLORS,
  TYPOGRAPHY,
  CONTAINER_PADDING_THIN,
  StatusWithBullet,
  Checkbox,
  DropdownSelect,
  ListTable,
  MOBILE_HEADER_HEIGHT,
} from 'kitten'

const StyledListTable = styled(ListTable)`
  /* variableWidth is the available content to be divided by variable columns
  /* Content Width (100%) minus fixed width columns (in pixels or in var()) */
  --ContributionsTable-variableWidth: calc(
    100% - ${pxToRem(160 + 100 + 130)} - var(--DashboardLayout-main-margin) * 2
  );

  ${TYPOGRAPHY.fontStyles.light}

  .k-ListTable__Header {
    z-index: 50;
    position: sticky;
    background-color: ${COLORS.background3};
    color: ${COLORS.font1};
    top: ${pxToRem(MOBILE_HEADER_HEIGHT)};

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      top: 0;
    }
  }

  .k-ListTable__HeaderList {
    height: ${pxToRem(50)};
  }

  .k-ListTable__Body {
    position: relative;
    opacity: 1;
    transition: opacity 2s ease;
  }

  .k-ListTable__HeaderList,
  .k-ListTable__RowList {
    overflow-x: hidden;
    max-width: initial;
    padding-left: 0;

    @media (max-width: ${ScreenConfig.XS.max}px) {
      padding: 0 ${pxToRem(CONTAINER_PADDING_THIN)};
    }
  }

  .customCol_0 {
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-end;
    padding-right: ${pxToRem(10)};

    @media (max-width: ${ScreenConfig.M.max}px) {
      flex-basis: ${pxToRem(20)};
      width: ${pxToRem(20)};
    }
    @media (min-width: ${ScreenConfig.S.min}px) and  (max-width: ${ScreenConfig.M.max}px){
      margin-left: var(--DashboardLayout-main-margin);
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      flex-basis: var(--DashboardLayout-main-margin);
      width: var(--DashboardLayout-main-margin);
    }
  }

  .customCol_1 {
    flex-grow: 1;
    flex-shrink: 0;
    position: relative;
    padding-left: 0;

    @media (min-width: ${ScreenConfig.M.min}px) {
      flex-basis: calc(44% - ${pxToRem(170 + 60)});
      width: calc(44% - ${pxToRem(170 + 60)});
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      flex-basis: calc(var(--ContributionsTable-variableWidth) * 0.3);
      width: calc(var(--ContributionsTable-variableWidth) * 0.3);
    }
  }

  .customCol_2 {
    flex-grow: 1;
    flex-shrink: 0;
    position: relative;
    @media (max-width: ${ScreenConfig.M.max}px) {
      display: none;
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      flex-basis: calc(var(--ContributionsTable-variableWidth) * 0.4);
      width: calc(var(--ContributionsTable-variableWidth) * 0.4);
    }
  }

  .customCol_3 {
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-end;

    flex-basis: ${pxToRem(90)};
    width: ${pxToRem(90)};
    min-width: ${pxToRem(60)};

    @media (max-width: ${ScreenConfig.XS.max}px) {
      flex-basis: ${pxToRem(60)};
      width: ${pxToRem(60)};
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      flex-basis: calc(var(--ContributionsTable-variableWidth) * 0.2);
      width: calc(var(--ContributionsTable-variableWidth) * 0.2);
    }
  }

  .customCol_4 {
    flex-grow: 1;
    flex-shrink: 0;
    @media (max-width: ${ScreenConfig.XS.max}px) {
      flex-basis: ${pxToRem(40)};
      width: ${pxToRem(40)};

      &.k-ListTable__Col {
        justify-content: center;
      }

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
    @media (min-width: ${ScreenConfig.M.min}px) {
      flex-basis: 20%;
      width: 20%;
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      white-space: nowrap;
      flex-basis: ${pxToRem(100)};
      width: ${pxToRem(100)};
    }
  }

  .customCol_5 {
    flex-grow: 1;
    flex-shrink: 0;
    @media (max-width: ${ScreenConfig.XS.max}px) {
      display: none;
    }
    @media (min-width: ${ScreenConfig.S.min}px) {
      white-space: nowrap;
      flex-basis: ${pxToRem(160)};
      width: ${pxToRem(160)};
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      flex-basis: ${pxToRem(160)};
      width: ${pxToRem(160)};
    }
  }

  .customCol_6 {
    flex-grow: 1;
    flex-shrink: 0;
    @media (max-width: ${ScreenConfig.M.max}px) {
      display: none;
    }
    @media (min-width: ${ScreenConfig.L.min}px) {
      margin-right: var(--DashboardLayout-main-margin);
      flex-basis: ${pxToRem(130)};
      width: ${pxToRem(130)};

      .k-Form-Dropdown {
        min-width: ${pxToRem(130)};
      }
    }
  }
`

const Row = () => {
  const [isHighlighted, setHighlight] = useState(false)

  return (
    <ListTable.Row isHighlighted={isHighlighted}>
      <ListTable.Col className="customCol_0">
        <VisuallyHidden>
          <h2>Contribution #888888 par Prénom NOM le 12 septembre 2019</h2>
          <button>Voir plus d'informations sur cette contribution</button>
        </VisuallyHidden>
        <Checkbox
          onChange={e => setHighlight(e.target.checked)}
          variant="orion"
          aria-label="Sélectionner toutes les contributions de la liste"
        />
      </ListTable.Col>

      <ListTable.Col className="customCol_1">
        <div>
          <Text size="tiny" weight="regular">
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
            weight="regular"
            lineHeight="1"
            as="a"
            href="#"
            className="k-u-link k-u-link-primary1"
          >
            Détails
          </Text>
        </div>
      </ListTable.Col>

      <ListTable.Col className="customCol_2">
        <div>
          <Text weight="bold">Prénom Nom</Text>
          <br />
          <Text size="micro" weight="light">
            Prenom-Nom
          </Text>
        </div>
      </ListTable.Col>

      <ListTable.Col className="customCol_3">
        <Text size="tiny" weight="regular">
          72&nbsp;€
        </Text>
      </ListTable.Col>

      <ListTable.Col className="customCol_4">
        <StatusWithBullet statusType="success">Valid</StatusWithBullet>
      </ListTable.Col>

      <ListTable.Col className="customCol_5">
        <Text size="tiny" weight="regular">
          Livraison
        </Text>
      </ListTable.Col>

      <ListTable.Col className="customCol_6">
        <DropdownSelect
          id="DropdownSelect_1"
          hideLabel
          labelText="Sélectionnez le statut de livraison"
          options={[
            { label: 'À expédier', value: 1 },
            { label: 'Expédié', value: 2 },
          ]}
          variant="orion"
        />
      </ListTable.Col>
    </ListTable.Row>
  )
}

export const StoryWithTable = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="k-u-background-color-background3">
        <Title
          modifier="quinary"
          className="k-u-margin-none k-u-margin-bottom-triple"
        >
          Curabitur blandit tempus porttitor.
          <Button variant="orion" onClick={() => setOpen(!isOpen)}>
            Toggle Toaster
          </Button>
        </Title>
      </div>

      <StyledListTable
        id="CustomListTable"
        className="k-DashboardLayout__fullWidth"
      >
        <ListTable.Header className="k-u-weight-regular">
          <ListTable.Col className="customCol_0">
            <VisuallyHidden>Sélection</VisuallyHidden>
            <Checkbox
              variant="orion"
              aria-label="Sélectionner toutes les contributions de la liste"
            />
          </ListTable.Col>

          <ListTable.Col className="customCol_1">
            <Text
              weight="regular"
              color="font1"
              size="tiny"
              className="k-u-hidden@s-down k-u-hidden@m"
            >
              Date
            </Text>
            <Text
              weight="regular"
              color="font1"
              size="tiny"
              className="k-u-hidden@l-up"
            >
              Contributeur
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_2">
            <Text weight="regular" color="font1" size="tiny">
              Contributeur
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_3">
            <Text weight="regular" color="font1" size="tiny">
              Montant
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_4">
            <Text weight="regular" color="font1" size="tiny">
              Statut
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_5">
            <Text weight="regular" color="font1" size="tiny">
              Mode de livraison
            </Text>
          </ListTable.Col>

          <ListTable.Col className="customCol_6">
            <Text weight="regular" color="font1" size="tiny">
              Statut livraison
            </Text>
          </ListTable.Col>
        </ListTable.Header>

        <ListTable.Body>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </ListTable.Body>
      </StyledListTable>

      <DashboardLayout.Toaster isOpen={isOpen}>
        <FlexWrapper
          gap={10}
          direction="row"
          className="k-u-flex-alignItems-center"
        >
          <div style={{ flex: '1 0 auto' }} className="k-u-hidden@xs-down">
            <Text color="background1" size="tiny" weight="regular">
              Text
            </Text>
          </div>
          <Button
            modifier="boron"
            variant="orion"
            size="tiny"
            className="k-u-hidden@m-down"
          >
            Hello
          </Button>
          <Button modifier="helium" variant="orion" size="tiny">
            Hello
          </Button>
        </FlexWrapper>
      </DashboardLayout.Toaster>
    </>
  )
}
