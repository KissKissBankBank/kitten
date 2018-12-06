import React from 'react'
import { Progress } from '../../components/meters/progress'

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
    this.intervalId = setInterval(randomProgress, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    return <Progress value={this.state.value} />
  }
}
