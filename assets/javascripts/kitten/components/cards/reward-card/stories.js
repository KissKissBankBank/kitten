import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { RewardCard as RewardCardComponent } from './index'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import { Button } from '../../../components/buttons/button'
import { Paragraph } from '../../../components/typography/paragraph/next'
import COLORS from '../../../constants/colors-config'
import { List } from '../../../components/lists/list'
import { ExpandBoard } from '../../../components/expandable/expand-board'
import styled from 'styled-components'
import classNames from 'classnames'

const StyledStoryContainer = styled(Container)`
  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(20)};
  max-width: ${pxToRem(460)};

  .RewardCard_story__button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.3rem;
    padding: ${pxToRem(22)} ${pxToRem(30)};
  }
  .RewardCard_story__buttonContainer {
    margin-right: pxToRem(30);
  }
  .RewardCard_story__label {
    margin: 0 0 ${pxToRem(15)} 0;
  }
  .RewardCard_story__description {
    color: ${COLORS.font1};
    margin: 0 0 ${pxToRem(20)} 0;
  }
  .RewardCard_story__checkedSectionItems {
    line-height: pxToRem(20);
    display: flex;
    margin: 0;
    padding: 0;
  }
  .RewardCard_story__disabled {
    color: ${COLORS.font2};
    cursor: not-allowed;
  }
  .RewardCard_story__buttonListItem {
    margin: 0;
    padding: 0;
    line-height: 1.2rem;
  }
  .RewardCard_story__buttonListWrapper {
    margin: 1rem 0;
    padding: 0;
  }
`

export default {
  component: RewardCard,
  title: 'Cards/RewardCard',
  parameters: {
    component: RewardCard,
    info:
      'The RewardCard is a card with two versions depending on the parent container width. It can be composed with many sub-components.',
  },
}

export const New_RewardCard = () => {
  const versionGroupId = 'Versions'
  const contentGroupId = 'Content'

  const hasRewardLabel = boolean(
    'Does the reward have a label?',
    true,
    versionGroupId,
  )
  const disabled = boolean('Disabled', false, versionGroupId)

  return (
    <StyledStoryContainer>
      <Grid>
        <GridCol col-l="6">
          <RewardCardComponent
            withoutBorder={boolean('withoutBorder', false, versionGroupId)}
            disabled={disabled}
          >
            <RewardCardComponent.Image
              src={text(
                'Reward image src',
                'http://placekitten.com/400/400',
                contentGroupId,
              )}
              alt={text('Reward image alt', 'My reward', contentGroupId)}
              disabled={disabled}
            />

            <RewardCardComponent.RowContent>
              {hasRewardLabel && (
                <Text
                  color="font1"
                  tag="p"
                  weight="bold"
                  size="tiny"
                  className={classNames('RewardCard_story__label', {
                    RewardCard_story__disabled: disabled,
                  })}
                >
                  {text(
                    'Reward label',
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                    contentGroupId,
                  )}
                </Text>
              )}

              <RewardCardComponent.Title disabled={disabled}>
                {text('Title', '100 €', contentGroupId)}
              </RewardCardComponent.Title>

              <List>
                <RewardCardComponent.Info
                  key="Contributors"
                  label={text('Info 1 label:', '35', contentGroupId)}
                  value={text('Info 1 value:', 'contributeurs', contentGroupId)}
                  disabled={disabled}
                />

                <RewardCardComponent.Info
                  key="Delivery"
                  label={text(
                    'Info 3 label:',
                    'Livraison estimée',
                    contentGroupId,
                  )}
                  value={text('Info 3 value:', 'Janvier 2019', contentGroupId)}
                  withMarginBottom={false}
                  disabled={disabled}
                />
              </List>
            </RewardCardComponent.RowContent>
          </RewardCardComponent>
        </GridCol>
      </Grid>
    </StyledStoryContainer>
  )
}

export const RewardCard = () => {
  const versionGroupId = 'Versions'
  const contentGroupId = 'Content'

  const starred = boolean('Starred', true, versionGroupId)
  const diamond = boolean('Diamond', false, versionGroupId)
  const alreadyContributed = boolean(
    'Has user contributed?',
    true,
    versionGroupId,
  )
  const hasRewardLabel = boolean(
    'Does the reward have a label?',
    true,
    versionGroupId,
  )
  const visualType = select(
    'Visual type',
    {
      none: null,
      Image: 'image',
      Video: 'video',
    },
    null,
    versionGroupId,
  )
  const disabled = boolean('Disabled', false, versionGroupId)
  const completed = boolean('Completed', false, versionGroupId)
  const withOptions = boolean(
    'Does the reward have options?',
    false,
    versionGroupId,
  )
  const option2Disabled = boolean(
    'Reward option 2 disabled',
    true,
    versionGroupId,
  )

  return (
    <StyledStoryContainer>
      <Grid>
        <GridCol offset="1" col="10">
          <RewardCardComponent
            withoutBorder={boolean('withoutBorder', false, versionGroupId)}
            disabled={disabled}
          >
            <RewardCardComponent.Row>
              <RewardCardComponent.RowContent>
                {starred && (
                  <RewardCardComponent.StarredBadge disabled={disabled}>
                    <Text
                      size="nano"
                      color="font1"
                      weight="bold"
                      className={disabled ? 'RewardCard_story__disabled' : ''}
                    >
                      {text('Starred label', 'Starred reward', contentGroupId)}
                    </Text>
                    <Text
                      size="nano"
                      color="font1"
                      className={disabled ? 'RewardCard_story__disabled' : ''}
                    >
                      {text(
                        'Starred description',
                        'Lorem ipsum',
                        contentGroupId,
                      )}
                    </Text>
                  </RewardCardComponent.StarredBadge>
                )}
                {diamond && (
                  <RewardCardComponent.DiamondBadge disabled={disabled}>
                    <Text
                      size="nano"
                      color="font1"
                      weight="bold"
                      className={disabled ? 'RewardCard_story__disabled' : ''}
                    >
                      {text('Diamond label', 'Diamond reward', contentGroupId)}
                    </Text>
                    <Text
                      size="nano"
                      color="font1"
                      className={disabled ? 'RewardCard_story__disabled' : ''}
                    >
                      {text(
                        'Diamond description',
                        'Lorem ipsum',
                        contentGroupId,
                      )}
                    </Text>
                  </RewardCardComponent.DiamondBadge>
                )}
                <RewardCardComponent.Title disabled={disabled}>
                  {text('Title', '100$', contentGroupId)}
                </RewardCardComponent.Title>
                {hasRewardLabel && (
                  <Text
                    color="font1"
                    tag="p"
                    weight="bold"
                    className={classNames('RewardCard_story__label', {
                      RewardCard_story__disabled: disabled,
                    })}
                  >
                    {text(
                      'Reward label',
                      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                      contentGroupId,
                    )}
                  </Text>
                )}
                <Paragraph
                  className={classNames('RewardCard_story__description', {
                    RewardCard_story__disabled: disabled,
                  })}
                  modifier="tertiary"
                  noMargin={false}
                >
                  {text(
                    'Reward description',
                    `Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro adnexa Isauria, pari sorte uberi palmite viget et frugibus minutis, quam mediam navigabile flumen Calycadnus interscindit.`,
                    contentGroupId,
                  )}
                </Paragraph>
                <List>
                  <RewardCardComponent.Info
                    key="Contributors"
                    label={text(
                      'Info 1 label:',
                      'Contributors:',
                      contentGroupId,
                    )}
                    value={text('Info 1 value:', '35', contentGroupId)}
                    disabled={disabled}
                  />
                  <RewardCardComponent.Info
                    key="Availability"
                    label={text(
                      'Info 2 label:',
                      'Availability:',
                      contentGroupId,
                    )}
                    value={text('Info 2 value:', '42/1000', contentGroupId)}
                    disabled={disabled}
                  />
                  <RewardCardComponent.Info
                    key="Delivery"
                    label={text('Info 3 label:', 'Delivery:', contentGroupId)}
                    value={text(
                      'Info 3 value:',
                      'January 2019',
                      contentGroupId,
                    )}
                    withMarginBottom={false}
                    disabled={disabled}
                  />
                </List>
              </RewardCardComponent.RowContent>
              {visualType === 'image' && (
                <RewardCardComponent.RowSide>
                  <RewardCardComponent.Image
                    src={text(
                      'Reward image src',
                      'http://via.placeholder.com/200x240/caf4fe/caf4fe',
                      contentGroupId,
                    )}
                    alt={text('Reward image alt', 'My reward', contentGroupId)}
                    disabled={disabled}
                  />
                </RewardCardComponent.RowSide>
              )}
              {visualType === 'video' && (
                <RewardCardComponent.RowSide>
                  <RewardCardComponent.Video disabled={disabled}>
                    <source
                      type="video/webm"
                      src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.webm"
                    />
                    <source
                      type="video/mp4"
                      src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.mp4"
                    />
                  </RewardCardComponent.Video>
                </RewardCardComponent.RowSide>
              )}
            </RewardCardComponent.Row>
            {!completed && (
              <RewardCardComponent.Row>
                <RewardCardComponent.RowContent>
                  {!withOptions && (
                    <Button
                      size="big"
                      modifier="helium"
                      type="button"
                      aria-labelledby={disabled ? 'Sold out' : 'Contribute'}
                      className="RewardCard_story__button"
                      disabled={disabled}
                    >
                      {text(
                        'Button label',
                        disabled ? 'Sold out' : 'Contribute',
                        contentGroupId,
                      )}
                    </Button>
                  )}
                  {withOptions && (
                    <ExpandBoard disabled={disabled}>
                      <ExpandBoard.Button expandChildren="Précisez votre choix">
                        {text(
                          'Options button label',
                          disabled ? 'Sold out' : 'Contribute',
                          contentGroupId,
                        )}
                      </ExpandBoard.Button>
                      <ExpandBoard.Content>
                        <List>
                          <List.ButtonItem>
                            <div className="RewardCard_story__buttonListWrapper">
                              <Text
                                tag="p"
                                weight="regular"
                                color="font1"
                                size="tiny"
                                className="RewardCard_story__buttonListItem"
                              >
                                {text(
                                  'Option 1 label',
                                  'Taille S',
                                  contentGroupId,
                                )}
                              </Text>
                              <Text tag="small" color="font1" size="micro">
                                {text(
                                  'Option 1 description',
                                  'Disponibilité: 10/30',
                                  contentGroupId,
                                )}
                              </Text>
                            </div>
                          </List.ButtonItem>
                          <List.ButtonItem disabled={option2Disabled}>
                            <div className="RewardCard_story__buttonListWrapper">
                              <Text
                                tag="p"
                                weight="regular"
                                color="font1"
                                size="tiny"
                                className={classNames(
                                  'RewardCard_story__buttonListItem',
                                  {
                                    RewardCard_story__disabled: option2Disabled,
                                  },
                                )}
                              >
                                {text(
                                  'Option 2 label',
                                  'Taille M',
                                  contentGroupId,
                                )}
                              </Text>
                              <Text
                                tag="small"
                                color="font1"
                                size="micro"
                                className={classNames(
                                  'RewardCard_story__buttonListItem',
                                  {
                                    RewardCard_story__disabled: option2Disabled,
                                  },
                                )}
                              >
                                {text(
                                  'Option 2 description',
                                  'Disponibilité: 12/30',
                                  contentGroupId,
                                )}
                              </Text>
                            </div>
                          </List.ButtonItem>
                          <List.ButtonItem>
                            <div className="RewardCard_story__buttonListWrapper">
                              <Text
                                tag="p"
                                weight="regular"
                                color="font1"
                                size="tiny"
                                className="RewardCard_story__buttonListItem"
                              >
                                {text(
                                  'Option 3 label',
                                  'Taille XXL',
                                  contentGroupId,
                                )}
                              </Text>
                              <Text tag="small" color="font1" size="micro">
                                {text(
                                  'Option 4 description',
                                  'Disponibilité: 29/30',
                                  contentGroupId,
                                )}
                              </Text>
                            </div>
                          </List.ButtonItem>
                        </List>
                      </ExpandBoard.Content>
                    </ExpandBoard>
                  )}
                </RewardCardComponent.RowContent>
                {visualType && (
                  <RewardCardComponent.RowSide withVerticalMargins={false} />
                )}
              </RewardCardComponent.Row>
            )}
            {alreadyContributed && (
              <RewardCardComponent.CheckedSection>
                <Text
                  color="font1"
                  size="tiny"
                  tag="p"
                  className="RewardCard_story__checkedSectionItems"
                >
                  {text(
                    'Manage contribution description',
                    'You contributed to this project.',
                    contentGroupId,
                  )}
                </Text>
                <Text
                  decoration="none"
                  color="primary1"
                  size="tiny"
                  weight="regular"
                  tag="a"
                  href="#"
                  className="RewardCard_story__checkedSectionItems"
                >
                  {text(
                    'Manage contribution description',
                    'Manage my contribution',
                    contentGroupId,
                  )}
                </Text>
              </RewardCardComponent.CheckedSection>
            )}
          </RewardCardComponent>
        </GridCol>
      </Grid>
    </StyledStoryContainer>
  )
}
