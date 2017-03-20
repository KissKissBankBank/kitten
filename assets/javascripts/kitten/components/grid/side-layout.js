import React from 'react'
import classNames from 'classnames'
import bowser from 'bowser'
import { SideGrid,
         SideGridContent,
         SideGridAside } from 'kitten/components/grid/side-grid'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import DocLinkBox from 'kitten/components/box/doc-link-box'
import { Title } from 'kitten/components/typography/title'

export class SideLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = { needsFullHeight: false }
  }

  needsFullHeight() {
    return !!bowser.safari
  }

  componentDidMount() {
    if (this.needsFullHeight()) {
      this.setState({ needsFullHeight: true })
    }
  }

  renderDocLinkBoxes() {
    if (!this.props.sidebar) return

    const { items } = this.props.sidebar

    return items.map((item, key) => {
      return (
        <div key={ key }
             className={ classNames('k-u-margin-top-triple',
                                    'k-u-margin-right-double',
                                    'k-u-margin-left-quadruple') }>
          <DocLinkBox { ...item } />
        </div>
      )
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
              <Title modifier="secondary"
                     className={ classNames("k-u-margin-top-quintuple",
                                            "k-u-margin-bottom-triple") }>
                { this.props.title }
              </Title>
              { this.props.children }
            </GridCol>
          </Grid>
        </SideGridContent>

        <SideGridAside className="k-VerticalGrid__element">
          { this.renderDocLinkBoxes() }
          { this.props.sidebarContent }
        </SideGridAside>
      </SideGrid>
    )
  }
}

SideLayout.defaultProps = {
  title: 'Your title here',
  children: 'lorem ipsum dolor',
}
