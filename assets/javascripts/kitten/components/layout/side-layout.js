import React from 'react'
import classNames from 'classnames'
import bowser from 'bowser'
import {
  SideGrid,
  SideGridContent,
  SideGridAside,
} from '../../components/grid/side-grid'
import { Grid, GridCol } from '../../components/grid/grid'

export class SideLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = { needsFullHeight: false }
  }

  needsFullHeight() {
    return !!bowser.safari
  }

  componentDidMount() {
    this.setState({
      needsFullHeight: this.needsFullHeight(),
    })
  }

  render() {
    const { className } = this.props
    const hasFluidLayout =
      (className || '').search('k-VerticalGrid__fluid') != -1
    const hasFullHeightLayout = hasFluidLayout && this.state.needsFullHeight
    const sideLayoutClassName = classNames(className, {
      'k-VerticalGrid__fullHeight': hasFullHeightLayout,
    })

    return (
      <SideGrid
        className={sideLayoutClassName}
        containerClassName="k-VerticalGrid__container"
        rowClassName="k-VerticalGrid__element"
      >
        <SideGridContent>
          <Grid>
            <GridCol col-s="12">{this.props.children}</GridCol>
          </Grid>
        </SideGridContent>

        <SideGridAside className="k-VerticalGrid__element">
          {this.props.sidebar}
        </SideGridAside>
      </SideGrid>
    )
  }
}

SideLayout.defaultProps = {
  children: 'Children',
  // sidebar: renderOfWhatYouWant() // Content for aside grid
  // E.g: see assets/javascripts/../../karl/layout/side-layout.js
  sidebar: null,
}
