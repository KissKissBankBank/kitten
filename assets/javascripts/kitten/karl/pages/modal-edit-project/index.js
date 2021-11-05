import React from 'react'
import { createGlobalStyle } from 'styled-components'
import {
  Grid,
  GridCol,
  Text,
  Title,
  Paragraph,
  Button,
  InfiniteIconNext,
  ChronoIconNext,
  CheckedIcon,
  pxToRem,
  COLORS,
  mq,
  ModalNext as Modal,
} from 'kitten'
import classNames from 'classnames'

const GlobalStyle = createGlobalStyle`
  .k-ModalEditProject--container {
    border: ${pxToRem(2)} solid ${COLORS.line1};
    border-radius: ${pxToRem(8)};
    background-color: ${COLORS.background1};
    padding: ${pxToRem(20)};
    min-height: ${pxToRem(410)};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${mq.mobile} {
      min-height: ${pxToRem(285)};
    }

    :hover {
      cursor: pointer;
      .k-ModalEditProject--button {
        border-color: ${COLORS.primary2};
        background-color: ${COLORS.primary2};
      }
    }

    :focus {
      .k-ModalEditProject--button {
        outline: ${COLORS.primary4} solid ${pxToRem(2)};
        outline-offset:  ${pxToRem(2)};
      }
    }

    :focus:not(:focus-visible) {
      .k-ModalEditProject--button {
        outline-color: transparent;
      }
    }

    :focus-visible {
      .k-ModalEditProject--button {
        outline-color: ${COLORS.primary4};
      }
    }
  }

  .k-ModalEditProject--paragraph {
    flex: 1;
    margin-bottom: ${pxToRem(20)}!important;
    margin-top: 0;
  }

  .k-ModalEditProject--blockText {
    display: flex;
    align-items: baseline;
    margin-top: ${pxToRem(10)};
    line-height: normal;
  }
`

const ModalEditProject = () => {
  return (
    <>
      <GlobalStyle />
      <Modal
        size="big"
        trigger={null}
        isOpen
        hasCloseButton
        className="k-ModalEditProject--modal"
      >
        {() => (
          <>
            <Modal.Block>
              <Modal.Title>
                <Title
                  tag="h1"
                  modifier="quaternary"
                  className={classNames(
                    'k-u-align-left@m-up',
                    'k-u-align-center@s-down',
                    'k-u-margin-top-quadrupleHalf',
                    'k-u-margin-bottom-tripleHalf',
                  )}
                >
                  Créer un nouveau projet
                </Title>
              </Modal.Title>
            </Modal.Block>
            <Modal.Block>
              <Grid>
                <GridCol col-s="6">
                  <button
                    type="button"
                    className={classNames(
                      'k-u-margin-right-noneHalf@m-up',
                      'k-u-margin-bottom-double@s-down',
                      'k-ModalEditProject--container',
                    )}
                  >
                    <Paragraph className="k-ModalEditProject--paragraph">
                      <InfiniteIconNext
                        width="47"
                        height="47"
                        color={COLORS.primary1}
                        aria-hidden
                      />
                      <Title
                        tag="p"
                        modifier="septenary"
                        className="k-u-margin-top-none k-u-margin-bottom-double"
                      >
                        Don permanent
                      </Title>
                      <div className="k-u-align-left">
                        <Text
                          tag="p"
                          size="tiny"
                          color="font1"
                          lineHeight="normal"
                          className="k-u-margin-none"
                        >
                          Avoir une page de don permanent vous permet de récolter des 
                          fonds sur la durée grâce au système de&nbsp;:
                        </Text>
                        <div className="k-ModalEditProject--blockText">
                          <CheckedIcon
                            color={COLORS.primary1}
                            width="12"
                            height="12"
                            aria-hidden  
                          />
                          <div className="k-u-margin-left-single">
                            <Text weight="bold" size="tiny" color="font1">
                              Don libre récurrent
                              <Text
                                tag="p"
                                weight="light"
                                cssColor={COLORS.grey1}
                                size="micro"
                                className="k-u-margin-none"
                              >
                                (ex&nbsp;: 1€/mois)
                              </Text>
                            </Text>
                          </div>
                        </div>
                        
                        <div className="k-ModalEditProject--blockText">
                          <CheckedIcon
                            color={COLORS.primary1}
                            width="12"
                            height="12"
                            aria-hidden  
                          />
                          <div className="k-u-margin-left-single">
                            <Text
                              weight="bold"
                              size="tiny"
                              color="font1"
                            >
                              Abonnement contre contrepartie
                              <Text
                                tag="p"
                                weight="light"
                                cssColor={COLORS.grey1}
                                size="micro"
                                className="k-u-margin-none"
                              >
                                (ex&nbsp;: un magazine par trimestre)
                              </Text>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </Paragraph>
                      <Button
                        as="span"
                        modifier="helium"
                        fit="content"
                        size="tiny"
                        className="k-ModalEditProject--button"
                      >
                        Créer
                    </Button>
                  </button>
                </GridCol>
                
                <GridCol col-s="6">
                  <button
                    type="button"
                    className={classNames(
                      'k-u-margin-left-noneHalf@m-up',
                      'k-ModalEditProject--container',
                    )}
                  >
                    <Paragraph className="k-ModalEditProject--paragraph">
                      <ChronoIconNext
                        width="40"
                        height="45"
                        color={COLORS.primary1}
                        aria-hidden
                      />
                      <Title
                        tag="p"
                        modifier="septenary"
                        className="k-u-margin-top-none"
                      >
                        Campagne
                      </Title>
                      <div className="k-u-align-left">
                        <Text
                          tag="p"
                          size="tiny"
                          color="font1"
                          lineHeight="normal"
                          className="k-u-margin-none"
                        >
                          La campagne vous permet de récolter des fonds sur une
                          période donnée grâce au système de&nbsp;:
                        </Text>
                        <div className="k-ModalEditProject--blockText">
                          <CheckedIcon
                            color={COLORS.primary1}
                            width="12"
                            height="12"
                            aria-hidden  
                          />
                          <div className="k-u-margin-left-single">
                            <Text weight="bold" size="tiny" color="font1">
                              Don libre
                              <Text
                                tag="p"
                                weight="light"
                                cssColor={COLORS.grey1}
                                size="micro"
                                className="k-u-margin-none"
                              >
                                (ex&nbsp;: 5€)
                              </Text>
                            </Text>
                          </div>
                        </div>
                        
                        <div className="k-ModalEditProject--blockText">
                          <CheckedIcon
                            color={COLORS.primary1}
                            width="12"
                            height="12"
                            aria-hidden  
                          />
                          <div className="k-u-margin-left-single">
                            <Text weight="bold" size="tiny" color="font1">
                              Don contre contrepartie
                              <Text
                                tag="p"
                                weight="light"
                                cssColor={COLORS.grey1}
                                size="micro"
                                className="k-u-margin-none"
                              >
                              (ex&nbsp;: un livre)
                              </Text>
                            </Text>
                          </div>
                        </div>

                        <div className="k-ModalEditProject--blockText">
                          <CheckedIcon
                            color={COLORS.primary1}
                            width="12"
                            height="12"
                            aria-hidden
                          />
                          <div className="k-u-margin-left-single">
                            <Text weight="bold" size="tiny" color="font1">
                              Précommande
                              <Text
                                tag="p"
                                weight="light"
                                cssColor={COLORS.grey1}
                                size="micro"
                                className="k-u-margin-none"
                              >
                              (ex&nbsp;: un magazine par trimestre)
                              </Text>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </Paragraph>
                    <Button
                      as="span"
                      modifier="helium"
                      fit="content"
                      size="tiny"
                      className="k-ModalEditProject--button"
                    >
                      Créer
                    </Button>
                  </button>
                </GridCol>
              </Grid>
            </Modal.Block>
          </>
        )}
      </Modal>
    </>
  )
}

export default ModalEditProject
