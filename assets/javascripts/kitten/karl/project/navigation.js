import React from 'react'
import Radium from 'radium'
import COLORS from 'kitten/constants/colors-config'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import { Container as ContainerBase } from 'kitten/components/grid/container'
import { ScrollableContainer } from 'kitten/components/grid/scrollable-container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { HorizontalNav } from 'kitten/components/navigation/horizontal-nav'
import { Button as ButtonBase } from 'kitten/components/buttons/button'

const Container = Radium(ContainerBase)
const Button = Radium(ButtonBase)

const ProjectNavigationBase = ({ viewportIsMobile, ...others }) => {
  const ContainerComponent = viewportIsMobile ? ScrollableContainer : Container

  return (
    <div style={styles.background}>
      <ContainerComponent style={styles.container}>
        <Grid>
          <GridCol>
            <HorizontalNav
              items={others.items}
              height={viewportIsMobile ? '76px' : '96px'}
              center
              markdown={false}
            />
          </GridCol>
        </Grid>

        {others.showContributeButton && (
          <Button modifier="helium" size="big" style={styles.button}>
            Contribuer
          </Button>
        )}
      </ContainerComponent>
    </div>
  )
}

const styles = {
  background: {
    backgroundColor: COLORS.background3,
  },

  container: {
    position: 'relative',
  },

  // TODO: New Button modifier?
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '250px',
    height: '100%',

    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      position: 'fixed',
      top: 'auto',
      bottom: 0,
      right: 0,
      height: '70px',
    },

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      width: '100%',
    },
  },
}

ProjectNavigationBase.defaultProps = {
  showContributeButton: true,
  items: [
    { key: 'key1', text: 'Contreparties', href: '#' },
    { key: 'key2', text: 'Description', href: '#', selected: true },
    { key: 'key3', text: 'Actualités', href: '#', badge: 2 },
    { key: 'key4', text: 'Commentaires', href: '#' },
    { key: 'key5', text: 'Contributeurs', href: '#' },
  ],
}

export const ProjectNavigation = mediaQueries(ProjectNavigationBase, {
  viewportIsMobile: true,
})
