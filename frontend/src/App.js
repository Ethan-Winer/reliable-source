import Splashscreen from './components/splashscreen/Splashscreen';
import { Component } from 'react';
import Title from './components/title/Title';

import style from './App.module.css';
import React from 'react';
import Facts from './components/facts/Facts';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showSplashscreen: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showSplashscreen: false
      });
    }, 10000);
  }

  render() {
    return (
      <div className={style.div}>


        {/* {this.state.showSplashscreen ? <Splashscreen /> : (
          <div className={style.div}>

            <Title />
            <Facts />
          </div>

        )} */}
        <Title></Title>
        <Facts />
      </div>
    );
  }
}

export default App;
