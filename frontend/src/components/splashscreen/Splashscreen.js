import React, { Component } from 'react'
import styles from './Splashscreen.module.css'
class Splashscreen extends Component {

  makeWaterfallHtml(text, delay) {
    let splitText = text.split('').map(char => char === ' ' ? '\u00A0' : char);
    return splitText.map((word, index) => <span className={styles.span} style={{ animationDelay: `${index * 10 + delay}ms` }} key={index}>{word}</span>);
  }

  render() {
    return (
      <div className={styles.div}>
        <p className={styles.p}>
          {this.makeWaterfallHtml('reliable-source.org is the most reliable source on the internet', 0)}
          <br></br>
          {this.makeWaterfallHtml('-William Shakespeare', 4000)}
        </p>
      </div>
    )
  }
}

export default Splashscreen