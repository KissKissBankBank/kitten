import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Grid, GridCol } from '../../../components/layout/grid'
import { Modal } from '../../../components/molecules/modal-next'
import { Text } from '../../../components/atoms/typography/text'
import { Title } from '../../../components/atoms/typography/title'
import { InfiniteIconNext } from '../../../components/graphics/icons-next/infinite-icon-next'
import { ChronoIconNext } from '../../../components/graphics/icons-next/chrono-icon-next'
import { CheckedIcon } from '../../../components/graphics/icons/checked-icon'
import { pxToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'
import { COLORS } from '../../..'
import { mq } from '../../../constants/screen-config'

const GlobalStyle = createGlobalStyle`
  :hover,
  :focus {
    cursor: pointer;

    .k-ModalEditProject--button {
      border-color: ${COLORS.primary2};
      background-color: ${COLORS.primary2};
    }
  }

  .k-ModalEditProject--container {
    border-width: ${pxToRem(2)};
    border-style: solid;
    border-radius: ${pxToRem(8)};
    border-color: ${COLORS.line1};
    padding: ${pxToRem(20)};
    min-height: ${pxToRem(400)};
    display: flex;
    flex-direction: column;
    flex: 1;

    @media ${mq.mobile} {
      min-height: ${pxToRem(300)};
    }
  }

  .k-ModalEditProject--blockText {
    display: flex;
    align-items: baseline;
    margin-top: ${pxToRem(10)};
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
                  <div className={classNames(
                    'k-ModalEditProject--container',
                    'k-u-margin-right-noneHalf@m-up',
                    'k-u-margin-bottom-double@s-down',
                  )}>
                    <Modal.Paragraph
                      className={classNames(
                        'k-u-margin-left-double',
                        'k-u-margin-right-double',
                        'k-u-margin-top-none',
                      )}
                    >
                      <InfiniteIconNext width="47" height="47" color={COLORS.primary1} />
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
                          <CheckedIcon color={COLORS.primary1} width="12" height="12" />
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
                          <CheckedIcon color={COLORS.primary1} width="12" height="12" />
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
                    </Modal.Paragraph>
                    <div className="k-u-align-center">
                      <Modal.Button
                        modifier="helium"
                        fit="content"
                        size="tiny"
                        className="k-ModalEditProject--button"
                      >
                        Créer
                      </Modal.Button>
                    </div>
                  </div>
                </GridCol>
                
                <GridCol col-s="6">
                  <div className="k-ModalEditProject--container k-u-margin-left-noneHalf@m-up">
                    <Modal.Paragraph
                      className={classNames(
                        'k-u-margin-left-double',
                        'k-u-margin-right-double',
                        'k-u-margin-top-none',
                      )}
                    >
                      <ChronoIconNext width="40" height="45" color={COLORS.primary1} />
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
                          <CheckedIcon color={COLORS.primary1} width="12" height="12" />
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
                          <CheckedIcon color={COLORS.primary1} width="12" height="12" />
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
                          <CheckedIcon color={COLORS.primary1} width="12" height="12" />
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
                    </Modal.Paragraph>
                    <div className="k-u-align-center">
                      <Modal.Button
                        modifier="helium"
                        fit="content"
                        size="tiny"
                        className="k-ModalEditProject--button"
                      >
                        Créer
                      </Modal.Button>
                    </div>
                  </div>
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
