import React, { Component } from 'react'

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => {
          <h2>{el.title}</h2> 
        })}
      </main>
    )
  }
}

export default Items