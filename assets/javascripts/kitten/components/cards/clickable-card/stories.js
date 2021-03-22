import React, { useState } from 'react'
import { text, number, select, color, boolean } from '@storybook/addon-knobs'
import { ClickableCard } from './index'
import { Container } from '../../../components/grid/container'
import { Text } from '../../../components/typography/text'
import COLORS from '../../../constants/colors-config'
import { Grid, GridCol } from '../../grid/grid'

export default {
  component: Default,
  title: 'Molecules/Cards/ClickableCard',
  parameters: {
    component: Default,
  },
}

const StoryContainer = ({ children }) => (
  <Container className="k-u-margin-top-quintuple k-u-margin-bottom-quintuple">
    <Grid>
      <GridCol col-m="6">{children}</GridCol>
    </Grid>
  </Container>
)

export const Default = () => {
  const [isChecked, setChecked] = useState(false)
  return (
    <StoryContainer>
      <ClickableCard
        size={number('Card size', 250)}
        disabled={boolean('Is card disabled?', false)}
        fluid={boolean('Is card fluid?', false)}
        borderColor={color('Border color', COLORS.primary1)}
        backgroundColor={color('Background color', COLORS.primary6)}
        aria-checked={isChecked}
        onClick={() => setChecked(!isChecked)}
      >
        <ClickableCard.Image
          shape={select(
            'Image shape',
            { Square: 'square', Circle: 'circle' },
            'square',
          )}
          fit={select(
            'Image fit',
            {
              Cover: 'cover',
              Contain: 'contain',
              None: 'none',
            },
            'cover',
          )}
        >
          <img
            src={text('Image URL', 'https://placekitten.com/200/400')}
            alt=""
          />
        </ClickableCard.Image>
        <ClickableCard.Content>
          <Text weight="light" lineHeight="1.3">
            Kitty McMeow
          </Text>
          <br />
          <Text weight="regular" lineHeight="1.3" color="primary1">
            @kitty.mcmeow
          </Text>
        </ClickableCard.Content>
      </ClickableCard>
    </StoryContainer>
  )
}
