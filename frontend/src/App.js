import Splashscreen from './components/splashscreen/Splashscreen';
import { Component } from 'react';
import Title from './components/title/Title';

import style from './App.module.css';
import React from 'react';
import Facts from './components/facts/Facts';
import FactForm from './components/fact-form/FactForm';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showSplashscreen: true,
      showFactForm: false
    }

    this.toggleFactForm = this.toggleFactForm.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showSplashscreen: false
      });
    }, 10000);
  }

  toggleFactForm() {
    this.setState({
      showFactForm: !this.state.showFactForm
    })
  }
  render() {
    return (
      <div className={style.div}>
        {this.state.showFactForm && <FactForm toggleFactForm={this.toggleFactForm}></FactForm>}

        {/* {this.state.showSplashscreen ? <Splashscreen /> : (
          <div className={style.div}>

            <Title toggleFactForm={this.toggleFactForm} />
            <Facts />
          </div>
        )} */}

        <Title toggleFactForm={this.toggleFactForm} />
        <Facts />
      </div>
    );
  }
}

export default App;
