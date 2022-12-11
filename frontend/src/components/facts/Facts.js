import React, { Component } from 'react';
import style from './Facts.module.css';

class Facts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      facts: [{ fact: "this website was made by Ethan Winer" }],
    }
  }
  componentDidMount() {
    setTimeout(() => {
      setInterval(() => this.incrementIndex(), 8000);
    }, 2000)

  }

  incrementIndex() {
    if (this.state.index >= this.state.facts.length - 1) {
      fetch('/get-facts')
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            facts: this.state.facts.concat(data),
            index: Math.min(this.state.index + 1, this.state.facts.length - 1)
          });
        });
    }
    else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  render() {
    return (
      <div className={style.container}>
        <p className={style.p}>
          {this.state.facts[this.state.index].fact}<br />
          {this.state.facts[this.state.index].author}
        </p>
      </div >
    )
  }
}

export default Facts