import React, { Component } from 'react';
import style from './Facts.module.css';

class Facts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      // facts: ['zero', 'one', 'two', 'three']
      facts: [{ fact: "this website was made by Ethan Winer" }]
    }
  }
  componentDidMount() {
    setTimeout(() => {
      setInterval(() => this.incrementIndex(), 8000);
      // if (this.state.index = this.state.facts.length - 1) {
      //   fetch('/get-facts')
      //     .then((response) => response.json())
      //     .then((data) => {
      //       facts.push(data);
      //     })
      // }

    }, 2000);
    // document.addEventListener('keydown', this.test);

  }

  test() {
    console.log('test');
  }


  incrementIndex() {
    // let newState = {
    //   facts: this.state.facts,
    //   index: this.state.index + 1
    // }

    if (this.state.index >= this.state.facts.length - 2) {
      // if (true) {
      fetch('/get-facts')
        .then((response) => response.json())
        .then((data) => {
          // console.log(data[0].fact);
          // newState.facts = newState.facts.concat(data);
          // console.log(newState);
          // newState[
          // console.log('facts: ' + this.state.facts);
          this.setState({
            facts: this.state.facts.concat(data),
            index: this.state.index + 1
          }, () => {

            console.log(this.state);
          });
        });
    }
    else {
      this.setState({
        index: this.state.index + 1
      })
    }


    // for (let i = 0; i < this.state.index; i++) {
    //   newState.facts.push(i);
    // }
  }

  render() {
    return (
      // <div className={style.div}>
      //   <p className={style.p}>
      //     {this.state.facts[this.state.index]}
      //   </p>
      // </div>
      <div className={style.container}>
        <p className={style.p}>
          {this.state.facts[this.state.index].fact}
        </p>
      </div>
    )
  }
}

export default Facts