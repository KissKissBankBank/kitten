import React from 'react'
import COLORS from 'kitten/constants/colors-config'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { HorizontalNav } from 'kitten/components/navigation/horizontal-nav'

const horizontalNavItems = [
  { key: 'key1', text: 'Contreparties', href: '#', selected: true },
  { key: 'key2', text: 'Description', href: '#' },
  { key: 'key3', text: 'Actualités', href: '#' },
  { key: 'key4', text: 'Commentaires', href: '#' },
  { key: 'key5', text: 'Contributeurs', href: '#' },
]

export const ProjectNavigation = () => (
  <div style={styles.background}>
    <Container>
      <Grid>
        <GridCol>
          <HorizontalNav items={horizontalNavItems} height="96px" center />
        </GridCol>
      </Grid>
    </Container>
  </div>
)

const styles = {
  background: {
    backgroundColor: COLORS.background3,
  },
}
