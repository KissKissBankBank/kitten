import React from 'react'
import classNames from 'classnames'
import bowser from 'bowser'
import { SideGrid,
         SideGridContent,
         SideGridAside } from 'kitten/components/grid/side-grid'
import { Grid, GridCol } from 'kitten/components/grid/grid'

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
      needsFullHeight: this.needsFullHeight()
    })
  }

  render() {
    const { className, ...sideGridProps } = this.props
    const hasFluidLayout = (className || '').search('k-VerticalGrid__fluid') != -1
    const hasFullHeightLayout = hasFluidLayout && this.state.needsFullHeight
    const sideLayoutClassName = classNames(
      className,
      {
        'k-VerticalGrid__fullHeight': hasFullHeightLayout,
      }
    )

    return (
      <SideGrid className={ sideLayoutClassName }
                containerClassName="k-VerticalGrid__container"
                rowClassName="k-VerticalGrid__element">
        <SideGridContent>
          <Grid>
            <GridCol col-s="10" offset-s="1" col-l="8">
              { this.props.children }
            </GridCol>
          </Grid>
        </SideGridContent>

        <SideGridAside className="k-VerticalGrid__element">
          { this.props.sidebar }
        </SideGridAside>
      </SideGrid>
    )
  }
}

SideLayout.defaultProps = {
  children: 'Children',
  // sidebar: renderOfhatYouWant() // for custom components in aside grid
  sidebar: null,
}
