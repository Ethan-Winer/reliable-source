import React, { Component } from 'react';
import style from './Title.module.css'
import thumbtack from './thumbtack.png'
import WiggleButton from '../wiggle-button/WiggleButton';

class Title extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 1
    }
  }

  render() {
    return (
      <div className={style.container} >
        <div className={style.imgContainer}>
          <img className={style.img} src={thumbtack} alt="thumbtack" />
          <div className={style.imgCover}></div>
        </div>
        <div className={style.div}>
          <h1 className={style.h1}>reliable-source.org</h1>
          <p className={style.p}>the most reliable source on the internet</p>
          <div className={style.buttonContainer}>
            <WiggleButton onClick={this.props.toggleFactForm} width="18vmin" height="9vmin" color="blue">Post Fact</WiggleButton>
          </div>
        </div>

      </div>
    );

  }
}

export default Title