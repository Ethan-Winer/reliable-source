import React, { Component } from 'react';
import style from './Title.module.css'
import thumbtack from './thumbtack.png'

class Title extends Component {

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
        </div>
      </div>
    );

  }
}

export default Title