import React, { Component } from 'react'

class Facts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      facts: ['zero', 'one', 'two', 'three']
    }
  }
  componentDidMount() {

    setInterval(() => this.incrementIndex(), 500);
  }

  incrementIndex() {
    this.setState({
      index: this.state.index + 1
    });
    if (this.state.index == this.state.facts.length - 1) {

    }
  }

  getFacts() {

  }



  render() {
    return (
      <div>
        {this.state.facts[this.state.index]}
      </div>
    )
  }
}

export default Facts