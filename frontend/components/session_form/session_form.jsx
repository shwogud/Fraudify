import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user; //comes from one of the containers

    this.handleSubmit = this.handleSubmit.bind(this);
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
      .then(() => this.props.history.push("/feed"));
  }

  demoUserSignIn() {
    const demo = {username: 'demo', password: 'password'};
    this.props.login(demo).then(() => this.props.history.push("/feed"));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }




  render() {
    // let question;
    // question = this.props.formType === 'signup' ? "Have an account?" : "Dont have an account?"

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />

          <button onClick={() => this.demoUserSignIn()}> Log In As Demo User </button>

          <p> - OR - </p>
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>Username:
              <input type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            {/* {signupInfo} */}
            <label>Password:
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <button>{this.props.formType}</button>
          </div>
          
        </form>
        <p>Already have an account?</p>

        {/* {question} {this.props.navLink} */}
      </div>
    );
  }

}


export default SessionForm;

