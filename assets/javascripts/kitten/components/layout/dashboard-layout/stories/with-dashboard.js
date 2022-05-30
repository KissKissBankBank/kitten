import React from 'react'
import styled from 'styled-components'
import {
  mq,
  pxToRem,
  Title,
  Button,
  EyeIconNext,
  StatsIconNext,
  Progress,
  Text,
  TYPOGRAPHY,
  ArrowIcon,
  MicrophoneIconNext,
  QuestionBubbleIconNext,
  UsersIconNext,
} from 'kitten'

const DashboardContent = styled.div`
  .kiss-dashboard__firstLine {
    margin-bottom: ${pxToRem(20)};
    display: grid;
    gap: ${pxToRem(20)};

    @media ${mq.tabletAndDesktop} {
      grid-template-columns: 5fr 2fr;
    }

    .kiss-dashboard__linkBlock {
      display: flex;
      flex-direction: column;
      gap: ${pxToRem(20)};
      padding: ${pxToRem(30)};
      color: var(--color-grey-900);
      text-decoration: none;
      box-shadow: var(--box-shadow-s);
      border-radius: var(--border-radius-l);
      transition: box-shadow var(--transition);

      &:hover,
      &:active,
      &:focus {
        box-shadow: var(--box-shadow-hover-s);

        .kiss-dashboard__block__link {
          color: var(--color-primary-700);
        }
      }
    }
    .kiss-dashboard__block__dataLine {
      display: flex;
      gap: ${pxToRem(30)};
      align-items: flex-end;

      @media ${mq.mobile} {
        flex-direction: column;
        align-items: stretch;
      }
    }

    .kiss-dashboard__block__dataLine__item {
      display: flex;
      flex-direction: column;
      gap: ${pxToRem(5)};
    }

    .kiss-dashboard__block__dataLine__separator {
      align-self: stretch;
      flex: 0 0 ${pxToRem(1)};
      display: block;
      height: auto;
      width: ${pxToRem(1)};
      border: none;
      padding: 0;
      margin: 0;
      background-color: var(--color-grey-300);

      @media ${mq.mobile} {
        background-color: var(--color-grey-000);
      }
    }
  }

  .kiss-dashboard__block__iconLine {
    display: flex;
    align-items: center;
    gap: ${pxToRem(30)};

    .kiss-dashboard__block__iconLine__progress {
      flex: 1 0 auto;

      .k-Meters-Progress__ramp {
        height: ${pxToRem(6)};
        border-radius: var(--border-radius-rounded);
      }
    }
  }

  .kiss-dashboard__block__link {
    flex: 1 0 auto;
    display: flex;
    align-items: flex-end;
    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${pxToRem(14)};
    color: var(--color-primary-500);
    transition: color var(--transition);
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
      color: var(--color-primary-700);
    }
  }

  .kiss-dashboard__secondLine {
    margin-top: ${pxToRem(20)};
    display: grid;
    gap: ${pxToRem(20)};

    @media ${mq.tabletAndDesktop} {
      grid-template-columns: 3fr 2fr;
    }
  }
  .kiss-dashboard__block__faq,
  .kiss-dashboard__block__form {
    border-radius: var(--border-radius-s);
    padding: ${pxToRem(30)};
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(20)};
  }
  .kiss-dashboard__block__faq {
    background-color: var(--color-primary-100);
  }
  .kiss-dashboard__block__form {
    background-color: var(--color-grey-200);
  }

  .kiss-dashboard__block__questions {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(10)};
  }
  .kiss-dashboard__block__questions__item {
    color: var(--color-grey-900);
    ${TYPOGRAPHY.fontStyles.light}
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${pxToRem(5)};

    > span {
      flex: 1 0 calc(100% - ${pxToRem(8 + 5)});
    }

    > svg {
      flex: 0 0 ${pxToRem(8)};
      transition: margin-right var(--transition);
    }

    &:hover,
    &:active,
    &:focus {
      ${TYPOGRAPHY.fontStyles.regular}

      > svg {
        margin-right: ${pxToRem(-5)};
      }
    }
  }
`

export const StoryWithDashboard = () => (
  <>
    <div className="k-u-flex k-u-flex-direction-column@s-down k-u-flex-gap-triple k-u-flex-alignItems-center k-u-flex-justifyContent-sb k-u-margin-bottom-triple">
      <Title modifier="quinary" noMargin tag="h1">
        Curabitur blandit tempus porttitor.
      </Title>
      <Button
        modifier="helium"
        aria-hidden
        as="a"
        href="#"
        fit="content"
        mobileFit="fluid"
      >
        <EyeIconNext width="20" height="20" />
        <span>Voir ma page</span>
      </Button>
    </div>
    <DashboardContent>
      <div className="kiss-dashboard__firstLine">
        <a
          aria-describedby="stats_link"
          href="#"
          className="kiss-dashboard__linkBlock kiss-dashboard__block__stats"
        >
          <h2 className="k-u-a11y-visuallyHidden">Statistiques</h2>
          <div className="kiss-dashboard__block__iconLine">
            <StatsIconNext height="30" width="30" />
            <Progress
              aria-lable="Progression de la collecte"
              value={30}
              className="kiss-dashboard__block__iconLine__progress"
            />
          </div>
          <div className="kiss-dashboard__block__dataLine">
            <div className="kiss-dashboard__block__dataLine__item">
              <Text lineHeight="1" size="giant" weight="bold">
                1&nbsp;800&nbsp;€
              </Text>
              <Text lineHeight="1" size="small">
                collectés sur 2&nbsp;000&nbsp;€
              </Text>
            </div>
            <hr className="kiss-dashboard__block__dataLine__separator" />
            <div className="kiss-dashboard__block__dataLine__item">
              <Text lineHeight="1" size="giant" weight="bold">
                90&nbsp;%
              </Text>
              <Text lineHeight="1" size="small">
                collectés
              </Text>
            </div>
            <hr className="kiss-dashboard__block__dataLine__separator" />
            <div className="kiss-dashboard__block__dataLine__item">
              <Text lineHeight="1" size="small">
                Fin de campagne&nbsp;:
              </Text>
              <Text lineHeight="1" weight="bold">
                2 janvier 2022 à minuit
              </Text>
            </div>
          </div>
          <div className="kiss-dashboard__block__link" id="stats_link">
            Voir les statistiques
          </div>
        </a>
        <a
          aria-describedby="contrib_link"
          href="#"
          className="kiss-dashboard__linkBlock kiss-dashboard__block__contributions"
        >
          <h2 className="k-u-a11y-visuallyHidden">Contributions</h2>
          <div className="kiss-dashboard__block__iconLine">
            <UsersIconNext height="30" width="30" />
          </div>
          <div className="kiss-dashboard__block__dataLine">
            <div className="kiss-dashboard__block__dataLine__item">
              <Text lineHeight="1" size="giant" weight="bold">
                33&nbsp;547
              </Text>
              <Text lineHeight="1" size="small">
                contributions validées
              </Text>
            </div>
          </div>
          <div className="kiss-dashboard__block__link" id="contrib_link">
            Suivre les contributions
          </div>
        </a>
      </div>
      <div className="kiss-dashboard__secondLine">
        <div className="kiss-dashboard__block__faq">
          <h2 className="k-u-a11y-visuallyHidden">Assistance</h2>
          <div className="kiss-dashboard__block__iconLine">
            <QuestionBubbleIconNext height="30" width="30" />
          </div>

          <div className="kiss-dashboard__block__questions">
            <a href="#" className="kiss-dashboard__block__questions__item">
              <span>
                Puis-je modifier mon projet une fois ma collecte lancée&nbsp;?
              </span>

              <ArrowIcon width="8" height="8" />
            </a>
            <a href="#" className="kiss-dashboard__block__questions__item">
              <span>
                À quelles données sur mes contributeurs ai-je accès&nbsp;?
              </span>

              <ArrowIcon width="8" height="8" />
            </a>
            <a href="#" className="kiss-dashboard__block__questions__item">
              <span>
                Pourquoi et comment publier des actualités sur mon projet&nbsp;?
              </span>

              <ArrowIcon width="8" height="8" />
            </a>
          </div>

          <a href="#" className="kiss-dashboard__block__link">
            Voir toutes les questions
          </a>
        </div>
        <div className="kiss-dashboard__block__form">
          <div className="kiss-dashboard__block__iconLine">
            <MicrophoneIconNext />
          </div>

          <Text
            size="giant"
            weight="bold"
            lineHeight="1"
            tag="h2"
            className="k-u-margin-none"
          >
            Aidez-nous à améliorer la plateforme&nbsp;!
          </Text>

          <Text size="small">
            Nous travaillons tous les jours sur la plateforme pour tenter de
            répondre au mieux à vos besoins.
          </Text>

          <a href="#" className="kiss-dashboard__block__link">
            Faire un retour
          </a>
        </div>
      </div>
    </DashboardContent>
  </>
)
