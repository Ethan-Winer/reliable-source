import React, { Component } from 'react';
import style from './Title.module.css'
import thumbtack from './thumbtack.png'

class Title extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 1
    }
  }

  componentDidMount() {
    // setInterval(() => {

    //   this.setState({
    //     num: (this.state.num + 1) % 2
    //   }, () => {
    //     console.log(this.state.num);
    //   });
    // }, 500);
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
            <button className={style.postFactButton} onClick={this.props.toggleFactForm}>Post Fact</button>
            {/* <button className={style.createURLButton}>Custom URL</button> */}
          </div>
        </div>

      </div>
    );

  }
}

export default Title