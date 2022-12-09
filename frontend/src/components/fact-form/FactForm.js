import React, { Component } from 'react'
import style from './FactForm.module.css';
import exitButtonImage from './exit-button.png';

class FactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exitingForm: false
    }
    this.exitForm = this.exitForm.bind(this);
  }

  exitForm() {
    this.setState({
      exitingForm: true
    });
    setTimeout(() => {
      this.props.toggleFactForm();
    }, 600);
  }

  render() {
    return (
      <div className={style.container} style={{ backgroundColor: this.state.exitingForm && 'rgba(0, 0, 0, 0)', transition: 'all 300ms 300ms ease' }}>
        <div className={style.formContainer} style={{ transform: this.state.exitingForm && 'translateY(-100vh)', transition: 'all 300ms ease' }}>
          <button className={style.exitButton + ' ' + style.button}>
            <img className={style.img} src={exitButtonImage} onClick={this.exitForm} alt="exit" />
          </button>

          <form>
            <textarea type="text" name="fact" className={style.textarea} placeholder="type fact or quote here" maxLength="100" />
            <input type="text" name="author" className={style.input} placeholder="type author here" />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default FactForm