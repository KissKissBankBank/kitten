import React from 'react'
import { Progress } from 'kitten/components/meters/progress'

export class KarlRandomProgress extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
    }
  }

  componentDidMount() {
    const randomProgress = () => {
      this.setState({ value: Math.random() * 100 })
    }
    const intervalId = setInterval(randomProgress, 1000)
    this.setState({ intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  render() {
    return (
      <Progress value={ this.state.value } />
    )
  }
}
