import React from 'react'

// Grid over all elements that is toggled when calling ctrl+g.
export class DevGrid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: !!props.visible
    }

    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)

    if (window.sessionStorage.getItem('karl-overgrid'))
      this.setState({ visible: true })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown(e) {
    var char = String.fromCharCode(e.keyCode).toLowerCase()
    if (!e.ctrlKey || char != 'g')
      return

    if (this.state.visible)
      this.hide()
    else
      this.show()
  }

  show() {
    window.sessionStorage.setItem('k-devgrid', 'on')
    this.setState({ visible: true })
  }

  hide() {
    window.sessionStorage.removeItem('k-devgrid')
    this.setState({ visible: false })
  }

  render() {
    const style = this.state.visible ? { display: "none" } : null
    return (
      <div style={ style }>
        <div className="karl-OverBreakpoint"></div>

        <div className="karl-OverGrid">
          <div className="karl-OverGrid__container">
            <div className="karl-OverGrid__row">
              <div className="karl-OverGrid__col">
                <div className="karl-OverGrid__inner"></div>
              </div>
              <div className="karl-OverGrid__col">
                <div className="karl-OverGrid__inner"></div>
              </div>
              <div className="karl-OverGrid__col">
                <div className="karl-OverGrid__inner"></div>
              </div>
              <div className="karl-OverGrid__col">
                <div className="karl-OverGrid__inner"></div>
              </div>
              <div className="karl-OverGrid__col">
                <div className="karl-OverGrid__inner"></div>
              </div>
              <div className="karl-OverGrid__col">
                <div className="karl-OverGrid__inner"></div>
              </div>
              <div className="karl-OverGrid__col">
                <div className="karl-OverGrid__inner"></div>
              </div>
              <div className="karl-OverGrid__col">
                <div className="karl-OverGrid__inner"></div>
              </div>
              <div className="karl-OverGrid__col">
                <div className="karl-OverGrid__inner"></div>
              </div>
              <div className="karl-OverGrid__col">
                <div className="karl-OverGrid__inner"></div>
              </div>
              <div className="karl-OverGrid__col">
                <div className="karl-OverGrid__inner"></div>
              </div>
              <div className="karl-OverGrid__col">
                <div className="karl-OverGrid__inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

