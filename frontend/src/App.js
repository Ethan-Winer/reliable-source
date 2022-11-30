import Splashscreen from './components/splashscreen/Splashscreen';
import { Component } from 'react';
import Title from './components/title/Title';

import style from './App.module.css';

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
        {/* {this.state.showSplashscreen && <Splashscreen />}
        <Title /> */}

        {this.state.showSplashscreen ? <Splashscreen /> : <Title />}
        {/* <Title /> */}
      </div>
    );
  }
}

export default App;
