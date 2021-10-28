import React from 'react'
import styled from 'styled-components'
// import { Grid, GridCol } from '../../../components/layout/grid'
import { Modal } from '../../../components/molecules/modal-next'
import { Text } from '../../../components/atoms/typography/text'
import { Title } from '../../../components/atoms/typography/title'
import { InfiniteIconNext } from '../../../components/graphics/icons-next/infinite-icon-next'
import { ChronoIconNext } from '../../../components/graphics/icons-next/chrono-icon-next'
import { CheckedIcon } from '../../../components/graphics/icons/checked-icon'
import { pxToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'
import { COLORS } from '../../..'

const StyledContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: ${pxToRem(10)};
`

const ModalEditProject = () => {
  return (
    <Modal
      size="big"
      trigger={null}
      isOpen
      hasCloseButton
    >
      {() => (
        <>
          <Modal.Title>
            <Title
              tag="h1"
              modifier="quaternary"
              className={classNames(
                'k-u-align-left@m-up',
                'k-u-align-center@s-down',
                'k-u-margin-top-none',
              )}
            >
              Créer un nouveau projet
            </Title>
          </Modal.Title>
          {/* <Grid>
            <GridCol col-s="6"> */}
            <Modal.Block>
              <Modal.Paragraph
                className="k-u-margin-left-double k-u-margin-right-double"
              >
                <InfiniteIconNext width="47" height="47" color={COLORS.primary4} />
                <Title
                  tag="p"
                  modifier="senary"
                  cssColor={COLORS.primary1}
                  className="k-u-margin-top-none k-u-margin-bottom-double"
                >
                  Don permanent
                </Title>
                <div className="k-u-align-left">
                  <Text
                    tag="p"
                    size="tiny"
                    color="font1"
                    className="k-u-margin-none"
                    lineHeight="normal"
                  >
                    La campagne vous permet de récolter des fonds sur la
                    durée grâce au système de&nbsp;:
                  </Text>
                  <StyledContainer>
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
                  </StyledContainer>
                  
                  <StyledContainer>
                    <CheckedIcon color={COLORS.primary1} width="12" height="12" />
                    <div className="k-u-margin-left-single">
                      <Text weight="bold" size="tiny" color="font1">
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
                  </StyledContainer>
                </div>
                <div className="k-u-align-center k-u-margin-top-double">
                <Modal.Button modifier="helium" fit="content" size="tiny">
                  Enregistrer
                </Modal.Button>
              </div>
              </Modal.Paragraph>
            {/* </GridCol>*/}
            </Modal.Block>
            <Modal.Block>
            {/* <GridCol col-s="6"> */}
              <Modal.Paragraph
                className="k-u-margin-left-double k-u-margin-right-double"
              >
                <ChronoIconNext width="40" height="45" color={COLORS.primary4} />
                <Title
                  tag="p"
                  modifier="senary"
                  cssColor={COLORS.primary1}
                  className="k-u-margin-top-none"
                >
                  Campagne
                </Title>
                <div className="k-u-align-left">
                  <Text
                    tag="p"
                    size="tiny"
                    color="font1"
                    className="k-u-margin-none"
                    lineHeight="normal"
                  >
                    La campagne vous permet de récolter des fonds sur une
                    période donnée grâce au système de&nbsp;:
                  </Text>
                  <StyledContainer>
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
                          (ex&nbsp;: 5€)
                        </Text>
                      </Text>
                    </div>
                  </StyledContainer>
                  
                  <StyledContainer>
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
                  </StyledContainer>

                  <StyledContainer>
                    <CheckedIcon color={COLORS.primary1} width="12" height="12" />
                    <div className="k-u-margin-left-single">
                      <Text weight="bold" size="tiny" color="font1">
                        Prévente
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
                  </StyledContainer>
                </div>
                <div className="k-u-align-center k-u-margin-top-double">
                <Modal.Button modifier="helium" fit="content" size="tiny">
                  Enregistrer
                </Modal.Button>
              </div>
              </Modal.Paragraph>
            </Modal.Block>
            {/* </GridCol>
          </Grid> */}
        </>
      )}
    </Modal>
  )
}

export default ModalEditProject
