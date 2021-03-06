import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user; //comes from one of the containers

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUserSignIn = this.demoUserSignIn.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) { 
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push("/collection/playlists"));
  }

  
  demoUserSignIn(e) {
    e.preventDefault();
    const demo = {username: 'demo', password: 'password'};
    this.props.login(demo).then(() => this.props.history.push("/collection/playlists"));
  }

  demoLogin() {
    const username = {
      strings: ["demo"],
      typeSpeed: 50,
    };

    const password = {
      strings: ["password"],
      typeSpeed: 50,
    };

    this.setState({
      username: '',
      password: ''
    });

    new Typed(".username", username);

    setTimeout(() => {
      new Typed(".password", password);
    }, 1000);

    setTimeout(() => {
      this.props.demoSignup({ username: "demo", password: "password" });
    }, 3000);

  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className={`error-handle-${this.props.inputType}`} key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

// { `auth-form-${this.props.inputType}` }

  render() {
    const otherLink = this.props.formType === "LOG IN" ? (
      <article><section className="login-text">Don't have an account? </section> 
        <button className="switch-to-signup-button">
          <Link
          className={`other-link-${this.props.inputType}`} 
          to="/signup"
          onClick={this.props.clearSessionErrors}
        >SIGN UP FOR FRAUDIFY</Link>
        </button>
        </article>
    ) : (
        <p>Already have an account? <Link
          className={`other-link-${this.props.inputType}`}
          to="/login"
          onClick={this.props.clearSeessionErrors}
        >Log In</Link></p>
      )

    return (
      <div className="auth-form-container">
        <div className="fraudify">
          <i className="fab fa-spotify"></i>
          <h1 className="fraudify-auth-top">Fraudify</h1>
        </div>

        <br />
        <button
          className={`demo-button-${this.props.inputType}`}       
          onClick={this.demoLogin}>LOG IN AS DEMO USER 
        </button>
        <form onSubmit={this.handleSubmit} className={`auth-box-${this.props.inputType}`}>
          

          <p> - or - </p>
          {this.renderErrors()}
          <div className={`auth-form-${this.props.inputType}`}>
            <br />
            <label>
              <input required
                type={`text-${this.props.inputType}`}
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}
                className={`auth-input-username-${this.props.inputType} username`}
              />
            </label>
            <br />

            <label>
              <input required
                id={`password-${this.props.inputType}`}
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="auth-input-password password"
              />
            </label>
            <br />

            <button 
              className={`auth-button-${this.props.inputType}`}>{this.props.formType}
            </button>
          </div>
          
        </form>

        <div className="other-link-text">
          {otherLink}
        </div>
      </div>
    );
  }

}


export default SessionForm;

