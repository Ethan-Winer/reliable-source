import React, { Component } from 'react'
import style from './FactForm.module.css';
import exitButtonImage from './exit-button.png';
import WiggleButton from '../wiggle-button/WiggleButton';

class FactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exitingForm: false
    }
    this.exitForm = this.exitForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  exitForm() {
    this.setState({
      exitingForm: true
    });
    setTimeout(() => {
      this.props.toggleFactForm();
    }, 600);
  }

  handleSubmit(event) {
    event.preventDefault();
    let fact = event.target.fact.value;
    if (fact.length === 0) {
      return;
    }
    let author = event.target.author.value;

    let body = JSON.stringify({ author: author, fact: fact });
    console.log(body);
    fetch('/post-fact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    });

    this.exitForm();
  }

  render() {
    return (
      <div className={style.container} style={{ backgroundColor: this.state.exitingForm && 'rgba(0, 0, 0, 0)', transition: 'all 300ms 300ms ease' }}>
        <div className={style.formContainer} style={{ transform: this.state.exitingForm && 'translateY(-100vh)', transition: 'all 300ms ease' }}>
          <button className={style.exitButton + ' ' + style.button}>
            <img className={style.img} src={exitButtonImage} onClick={this.exitForm} alt="exit" />
          </button>

          <form onSubmit={this.handleSubmit}>
            <textarea type="text" name="fact" className={style.textarea} placeholder="type fact or quote here" maxLength="100" />
            <input type="text" name="author" className={style.input} placeholder="type author here (optional)" maxLength="20" />
            <WiggleButton className={style.wiggleButton} width="18vmin" height="9vmin" color="red">Submit</WiggleButton>
          </form>
        </div>
      </div>
    )
  }
}

export default FactForm