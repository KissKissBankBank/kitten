import React, { Component } from 'react'
import Example from '../../app/example'

export default class extends Component {
  state = {
    width: '25%',
    left: '25%',
  }

  componentDidMount() {
    setInterval(() => {
      var percentage = Math.random() * 100 + '%'
      this.setState({ width: percentage, left: percentage })
    }, 2000)
  }

  render() {
    return (
      <div className="k-Grid">
        <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
          <div className="k-Grid">
            <Example
              title="Normal"
              className="k-Grid__col--4@m k-Grid__col--12@l"
            >
              <div className="k-Slider">
                <div className="k-Slider__ramp">
                  <div className="k-Slider__progress" style={{ width: 0 }} />
                  <div
                    className="k-Slider__handle"
                    tabIndex="0"
                    style={{ left: 0 }}
                  >
                    <svg className="k-Slider__handleIcon" viewBox="0 0 100 100">
                      <path d="M0 0 v100 h20 v-100 z" />
                      <path d="M40 0 v100 h20 v-100 z" />
                      <path d="M80 0 v100 h20 v-100 z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Example>
            <Example
              title="With animation"
              className="k-Grid__col--4@m k-Grid__col--12@l"
            >
              <div className="k-Slider">
                <div className="k-Slider__ramp">
                  <div
                    className="k-Slider__progress"
                    style={{ width: this.state.width }}
                  />
                  <div
                    className="k-Slider__handle"
                    tabIndex="0"
                    style={{ left: this.state.left }}
                  >
                    <svg className="k-Slider__handleIcon" viewBox="0 0 100 100">
                      <path d="M0 0 v100 h20 v-100 z" />
                      <path d="M40 0 v100 h20 v-100 z" />
                      <path d="M80 0 v100 h20 v-100 z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Example>
          </div>
        </div>
        <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
          <div className="k-Grid">
            <Example
              title="Disabled"
              className="k-Grid__col--4@m k-Grid__col--12@l"
            >
              <div className="k-Slider is-disabled">
                <div className="k-Slider__ramp">
                  <div
                    className="k-Slider__progress"
                    style={{ width: '50%' }}
                  />
                  <div className="k-Slider__handle" style={{ left: '50%' }}>
                    <svg className="k-Slider__handleIcon" viewBox="0 0 100 100">
                      <path d="M0 0 v100 h20 v-100 z" />
                      <path d="M40 0 v100 h20 v-100 z" />
                      <path d="M80 0 v100 h20 v-100 z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Example>
          </div>
        </div>
      </div>
    )
  }
}
