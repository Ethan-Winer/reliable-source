import './App.css';
import Splashscreen from './components/splashscreen/Splashscreen';
import { Component } from 'react';

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
    }, 9000);
  }

  render() {
    return (
      <div>
        {this.state.showSplashscreen && <Splashscreen></Splashscreen>}
        <h1>done</h1>
      </div>
    );
  }
}

export default App;
