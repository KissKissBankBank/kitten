import React, { Component } from 'react'

export class EmbedIcon extends Component {
  render() {
    const { color, ...others } = this.props
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 22" {...others}>
        <title>Embed</title>
        <path fill={color} d="M3 5.8h2v10H3z" />
        <path
          fill={color}
          d="M6 2v6H2V2h4m2-2H0v10h8V0zM6 14v6H2v-6h4m2-2H0v10h8V12z"
        />
      </svg>
    )
  }
}
