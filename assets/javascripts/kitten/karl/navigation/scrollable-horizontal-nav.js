import React from 'react'
import ScrollableHorizontalNav, {
  ScrollableHorizontalItem
} from 'kitten/components/navigation/scrollable-horizontal-nav'

export class KarlScrollableHorizontalNav extends React.Component {

  state = {
    selectedKey: 2
  }

  handleClick = (event, newSelectedKey) => {
    event.preventDefault()
    this.setState({ selectedKey: newSelectedKey })
  }

  render() {
    const { data } = this.props
    const { selectedKey } = this.state

    return (
      <ScrollableHorizontalNav
        data={data}
        renderItem={({item, style}) => {
          // to render a custom component like a Link from react router
          // the constraint is that the component need to receive
          // the style from the function (for display: flex)
          // and to import ScrollableHorizontalItem for default use
          return (
            <a
              style={{
                ...style,
                textDecoration: 'none',
                WebkitTapHighlightColor: 'transparent',
              }}
              href="#"
              onClick={(event) => this.handleClick(event, item.key)}
            >
              <ScrollableHorizontalItem
                title={item.title}
                isSelected={item.key === selectedKey}
              />
            </a>
          )
        }}
      />
    )
  }

}

