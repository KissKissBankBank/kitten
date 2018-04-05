import React, { Component, Fragment } from 'react'
import Radium, { Style } from 'radium'
import classNames from 'classnames'
import { Container } from 'kitten/components/grid/container'
import ColorsConfig from 'kitten/constants/colors-config'

export const ScrollableContainer = props => (
  <Container
    {...props}
    className={classNames('k-Container--no-padding', props.className)}
    style={{ ...styles.container, ...props.style }}
  >
    <div className="k-ScrollableContainer" style={styles.scrollable}>
      {props.children}
    </div>

    <div style={styles.gradiantLeft} />
    <div style={styles.gradiantRight} />

    {/* Hide scrollbar on Chrome and Safari. */}
    <Style
      scopeSelector=".k-ScrollableContainer::-webkit-scrollbar"
      rules={{ display: 'none' }}
    />
  </Container>
)

const transparent = 'rgba(255, 255, 255, 0)'
const gradiantWidth = 20

const styles = {
  container: {
    position: 'relative',
  },

  scrollable: {
    display: 'flex',
    whiteSpace: 'nowrap',
    overflowX: 'auto',
    // Hide scrollbar on IE and Edge.
    MsOverflowStyle: 'none',
    // Mandatory to combine scroll with this property on iOS.
    WebkitOverflowScrolling: 'touch',
  },

  gradiantLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: gradiantWidth,
    background: `linear-gradient(90deg, ${
      ColorsConfig.background1
    }, ${transparent})`,
  },

  gradiantRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: gradiantWidth,
    background: `linear-gradient(90deg, ${transparent}, ${
      ColorsConfig.background1
    })`,
  },
}
