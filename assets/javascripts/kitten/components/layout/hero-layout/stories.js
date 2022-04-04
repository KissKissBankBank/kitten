import React from 'react'
import { HeroLayout } from './index'
import { DocsPage } from 'storybook/docs-page'
import styled, { createGlobalStyle } from 'styled-components'
import {
  Text,
  HeaderNav,
  KissKissBankBankLogo,
  KissKissLoadingAnimation,
  HEADER_HEIGHT,
  pxToRem,
  FlexWrapper,
  Button,
  Title,
  mq,
  TYPOGRAPHY,
  Grid,
  GridCol,
  ColorHeartWithClickIconNext,
  ColorGiftIconNext,
  ColorCheckedShieldIconNext,
  CrossCircleIconNext,
  Separator,
  List,
  LargeArrowIconNext,
  FacebookButtonIcon,
  TwitterButtonIcon,
  InstagramButtonIcon,
  YoutubeButtonIcon,
  EnvelopeIcon,
  FloatingMenu,
  Paragraph,
  AirplaneIconNext,
  EnvelopeIconNext,
  StarIconNext,
  Container,
} from 'kitten'

import Footer from 'kitten/karl/pages/footer'

const StyledAvatar = styled.img`
  --avatar-size: ${pxToRem(100)};

  @media ${mq.tabletAndDesktop} {
    --avatar-size: ${pxToRem(170)};
  }

  box-sizing: border-box;
  object-fit: cover;
  object-position: center;
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: var(--avatar-size);
  border: ${pxToRem(10)} solid var(--color-grey-000);
`

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .kiss-ProjectPage-hero-number {
    ${TYPOGRAPHY.fontStyles.bold}
    font-size: ${pxToRem(28)};
    letter-spacing: -0.015em;
    line-height: 1;
  }
  .kiss-ProjectPage-hero-text {
    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${pxToRem(12)};
    line-height: 1;
  }

  @media ${mq.tabletAndDesktop} {
    .kiss-ProjectPage-hero-number {
      font-size: ${pxToRem(46)};
      letter-spacing: -0.02em;
    }
    .kiss-ProjectPage-hero-text {
      font-size: ${pxToRem(20)};
      letter-spacing: -0.01em;
    }
  }
`

const StyledGridCol = styled(GridCol)`
  display: flex;
  gap: ${pxToRem(20)};
  padding-bottom: ${pxToRem(20)};

  svg {
    margin-top: ${pxToRem(5)};
    flex: 0 0 ${pxToRem(30)};
    max-width: ${pxToRem(30)};
  }
`

const StyledAsideCard = styled(FlexWrapper)`
  @media ${mq.mobileAndTablet} {
    border: var(--border);
    padding: ${pxToRem(30)} ${pxToRem(10)};
    align-items: center;
    border-radius: var(--border-radius-m);

    .kiss-AsideTitle {
      text-align: center;
      font-size: ${pxToRem(10)};
    }
  }
`

const GlobalStyle = createGlobalStyle`
  @media ${mq.mobileAndTablet} {
    .k-HeaderNav--isStuck + * .k-HeroLayout__sticky.k-HeroLayout__menu {
      top: ${pxToRem(HEADER_HEIGHT)} !important;
    }
  }
`

export default {
  title: 'Layout/HeroLayout',
  component: HeroLayout,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="HeroLayout" />,
    },
  },
  args: {
    projectTitle: 'Magna Condimentum Mollis Tortor',
    projectSlogan:
      'Duis mollis, est non commodo luctus, nisi erat Textorttitor ligula, eget lacinia odio sem nec elit.',
    bannerUrl: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    isContentLoading: false,
    primary500: '#19b4fa',
    primary700: '#05a8e6',
  },
  argTypes: {
    projectTitle: { control: 'text' },
    projectSlogan: { control: 'text' },
    bannerUrl: { control: 'text' },
    isContentLoading: { control: 'boolean' },
    primary500: { control: 'color' },
    primary700: { control: 'color' },
  },
}

export const Default = ({
  primary500,
  primary700,
  isContentLoading,
  projectTitle,
  projectSlogan,
  bannerUrl,
  ...args
}) => (
  <>
    <GlobalStyle />
    <HeaderNav
      id="header_id"
      quickAccessProps={{
        href: '#mainContent',
        text: 'Aller au contenu principal',
        zIndex: 300,
      }}
      size="small"
      borderStyle="border"
      zIndexConfig={{
        header: 102,
        headerWithOpenMenu: 105,
      }}
    >
      <HeaderNav.Logo href="#">
        <KissKissBankBankLogo height="25" className="k-u-margin-left-double" />
      </HeaderNav.Logo>
    </HeaderNav>
    <HeroLayout
      {...args}
      style={{
        '--color-primary-500': primary500,
        '--color-primary-700': primary700,
      }}
    >
      <HeroLayout.Hero>
        <HeroLayout.Hero.Image>
          <img src={bannerUrl} alt="" />
        </HeroLayout.Hero.Image>

        <HeroLayout.Hero.Block>
          <a href="#" className="k-u-block">
            <StyledAvatar
              src={`/kitten-${9 - Math.floor(Math.random() * 10)}.jpg`}
              alt="Nom du porteur de projet"
            />
          </a>
        </HeroLayout.Hero.Block>

        <HeroLayout.Hero.Block>
          <FlexWrapper className="k-u-flex-alignItems-center" gap={30}>
            <Title noMargin modifier="primary">
              {projectTitle}
            </Title>
            <Text tag="p" size="giant" className="k-u-margin-none">
              {projectSlogan}
            </Text>
            <StyledCounter>
              <span className="kiss-ProjectPage-hero-number">538</span>
              <span className="kiss-ProjectPage-hero-text">abonnés</span>
            </StyledCounter>
            <FlexWrapper
              gap={5}
              className="k-u-flex-direction-row@l-up k-u-flex-direction-column k-u-flex-alignItems-center"
            >
              <FlexWrapper direction="row" gap={5}>
                <Button fit="content" size="regular" rounded>
                  <AirplaneIconNext />
                  <span>Partager</span>
                </Button>
                <Button
                  fit="content"
                  size="regular"
                  rounded
                  className="k-u-hidden@l-up"
                >
                  <EnvelopeIconNext />
                  <span>Nous écrire</span>
                </Button>
              </FlexWrapper>
              <FlexWrapper direction="row" gap={5}>
                <Button fit="content" size="medium" rounded>
                  <StarIconNext />
                  <span>Ajouter aux favoris</span>
                </Button>
                <Button fit="content" size="medium" modifier="helium" rounded>
                  S’abonner
                </Button>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
        </HeroLayout.Hero.Block>
      </HeroLayout.Hero>

      <HeroLayout.Promo>
        <Container>
          <Grid>
            <GridCol
              col="12"
              col-s="6"
              col-l="4"
              offset-l="2"
              className="k-u-margin-bottom-triple"
            >
              <Title tag="h2" noMargin modifier="tertiary">
                Abonnez-vous
              </Title>
              <Text cssColor="var(--color-grey-700)">
                à partir de 12&nbsp;€ par mois
              </Text>
            </GridCol>
            <GridCol col="12" col-s="6" col-l="4">
              <Text
                tag="h3"
                weight="bold"
                transform="uppercase"
                size="small"
                className="k-u-letter-spacing-10 k-u-margin-top-none k-u-margin-bottom-singleHalf"
              >
                Pourquoi s’abonner&nbsp;?
              </Text>
              <List
                gap={10}
                markerElement={
                  <LargeArrowIconNext
                    color="var(--color-primary-500)"
                    width="10"
                  />
                }
              >
                <Text size="medium" className="k-u-line-height-1-25">
                  Contribuez à faire vivre ce projet
                </Text>
                <Text size="medium" className="k-u-line-height-1-25">
                  Recevez un contenu exclusif
                </Text>
                <Text size="medium" className="k-u-line-height-1-25">
                  Faites partie du cercle privilégié d’abonnés
                </Text>
              </List>
            </GridCol>
          </Grid>
          <Separator
            darker
            className="k-u-margin-top-quintuple k-u-margin-bottom-double k-u-hidden@xs-down"
          />
          <Grid className="k-u-margin-top-triple">
            <GridCol col="12">
              <Text
                tag="h3"
                weight="bold"
                transform="uppercase"
                size="small"
                className="k-u-letter-spacing-10 k-u-margin-top-none k-u-margin-bottom-singleHalf"
              >
                Comment ça marche&nbsp;?
              </Text>
            </GridCol>
            <StyledGridCol col="12" col-s="6" col-l="3">
              <ColorHeartWithClickIconNext
                color="var(--color-grey-900)"
                secondaryColor="var(--color-primary-500)"
              />
              <Paragraph
                tag="span"
                modifier="secondary"
                className="k-u-line-height-1-25"
              >
                Sélectionnez un abonnement ou faites un don récurrent du montant
                de votre choix
              </Paragraph>
            </StyledGridCol>
            <StyledGridCol col="12" col-s="6" col-l="3">
              <ColorCheckedShieldIconNext
                color="var(--color-grey-900)"
                secondaryColor="var(--color-primary-500)"
              />
              <Paragraph
                tag="span"
                modifier="secondary"
                className="k-u-line-height-1-25"
              >
                Validez votre abonnement via notre formulaire de paiement
                sécurisé
              </Paragraph>
            </StyledGridCol>
            <StyledGridCol col="12" col-s="6" col-l="3">
              <ColorGiftIconNext
                color="var(--color-grey-900)"
                secondaryColor="var(--color-primary-500)"
              />
              <Paragraph
                tag="span"
                modifier="secondary"
                className="k-u-line-height-1-25"
              >
                Recevez chaque mois ou chaque trimestre le contenu de votre
                abonnement
              </Paragraph>
            </StyledGridCol>
            <StyledGridCol col="12" col-s="6" col-l="3">
              <CrossCircleIconNext
                color="var(--color-grey-900)"
                secondaryColor="var(--color-primary-500)"
              />
              <Paragraph
                tag="span"
                modifier="secondary"
                className="k-u-line-height-1-25"
              >
                Résiliez votre abonnement à tout moment depuis votre compte
              </Paragraph>
            </StyledGridCol>
          </Grid>
        </Container>
      </HeroLayout.Promo>

      <HeroLayout.Main>
        <HeroLayout.Main.Menu>
          <FloatingMenu style={{ margin: '0 -10px' }}>
            <FloatingMenu.Item href="#">Abonnements</FloatingMenu.Item>
            <FloatingMenu.Item href="#" isActive>
              À propos
            </FloatingMenu.Item>
            <FloatingMenu.Item href="#">Actualités</FloatingMenu.Item>
            <FloatingMenu.Item href="#">FAQ</FloatingMenu.Item>
          </FloatingMenu>
        </HeroLayout.Main.Menu>
        <HeroLayout.Main.Aside>
          <StyledAsideCard gap={20}>
            <div>
              <Text
                tag="h3"
                size="micro"
                transform="uppercase"
                className="kiss-AsideTitle k-u-margin-top-none k-u-margin-bottom-single k-u-letter-spacing-10"
              >
                Nous suivre
              </Text>
              <FlexWrapper direction="row" gap={10}>
                <a href="#">
                  <FacebookButtonIcon rounded size="small" />
                </a>
                <a href="#">
                  <TwitterButtonIcon rounded size="small" />
                </a>
                <a href="#">
                  <InstagramButtonIcon rounded size="small" />
                </a>
                <a href="#">
                  <YoutubeButtonIcon rounded size="small" />
                </a>
              </FlexWrapper>
            </div>

            <div>
              <Text
                tag="h3"
                size="micro"
                transform="uppercase"
                className="kiss-AsideTitle k-u-margin-top-none k-u-margin-bottom-noneHalf k-u-letter-spacing-10"
              >
                Site internet
              </Text>
              <div>
                <Button fit="content" rounded size="micro">
                  www.mad-movies.com
                </Button>
              </div>
            </div>

            <div>
              <Text
                tag="h3"
                size="micro"
                transform="uppercase"
                className="kiss-AsideTitle k-u-margin-top-none k-u-margin-bottom-noneHalf k-u-letter-spacing-10"
              >
                Contact
              </Text>
              <div>
                <Button fit="content" rounded size="small">
                  <EnvelopeIcon />
                  <span>Nous écrire</span>
                </Button>
              </div>
            </div>
          </StyledAsideCard>
        </HeroLayout.Main.Aside>
        <HeroLayout.Main.Content
          loading={isContentLoading}
          loaderComponent={<KissKissLoadingAnimation />}
        >
          <p className="k-u-margin-top-none">
            Sed posuere consectetur est at lobortis. Cras mattis consectetur
            purus sit amet fermentum. Curabitur blandit tempus porttitor. Nullam
            quis risus eget urna mollis ornare vel eu leo.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi
            leo risus, porta ac consectetur ac, vestibulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Curabitur blandit tempus porttitor.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Nullam quis risus eget urna mollis ornare vel eu leo. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Sed
            posuere consectetur est at lobortis. Vestibulum id ligula porta
            felis euismod semper.
          </p>
          <p>
            Sed posuere consectetur est at lobortis. Cras mattis consectetur
            purus sit amet fermentum. Curabitur blandit tempus porttitor. Nullam
            quis risus eget urna mollis ornare vel eu leo.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi
            leo risus, porta ac consectetur ac, vestibulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Curabitur blandit tempus porttitor.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Nullam quis risus eget urna mollis ornare vel eu leo. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Sed
            posuere consectetur est at lobortis. Vestibulum id ligula porta
            felis euismod semper.
          </p>
          <p>
            Sed posuere consectetur est at lobortis. Cras mattis consectetur
            purus sit amet fermentum. Curabitur blandit tempus porttitor. Nullam
            quis risus eget urna mollis ornare vel eu leo.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi
            leo risus, porta ac consectetur ac, vestibulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Curabitur blandit tempus porttitor.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Nullam quis risus eget urna mollis ornare vel eu leo. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Sed
            posuere consectetur est at lobortis. Vestibulum id ligula porta
            felis euismod semper.
          </p>
          <p>
            Sed posuere consectetur est at lobortis. Cras mattis consectetur
            purus sit amet fermentum. Curabitur blandit tempus porttitor. Nullam
            quis risus eget urna mollis ornare vel eu leo.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi
            leo risus, porta ac consectetur ac, vestibulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Curabitur blandit tempus porttitor.
          </p>
          <p className="k-u-margin-bottom-none">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Nullam quis risus eget urna mollis ornare vel eu leo. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Sed
            posuere consectetur est at lobortis. Vestibulum id ligula porta
            felis euismod semper.
          </p>
        </HeroLayout.Main.Content>
      </HeroLayout.Main>
    </HeroLayout>
    <Footer className="k-u-margin-top-quintuple" />
  </>
)
