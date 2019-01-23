import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user; //comes from one of the containers

    this.handleSubmit = this.handleSubmit.bind(this);
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
      .then(() => this.props.history.push("/feed"));
  }

  //I feel like the 'class' warning appeared here
  demoUserSignIn() {
    const demo = {username: 'demo', password: 'password'};
    this.props.login(demo).then(() => this.props.history.push("/feed"));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li class = "error-handle" key={`error-${i}`}>
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
      <div className="auth-form-container">
        <div className="fraudify">
          <i className="fab fa-spotify"></i>
          <h1>Fraudify</h1>
        </div>
        <form onSubmit={this.handleSubmit} className="auth-box">
          <br />
          <button
            className="demo-button"
            onClick={() => this.demoUserSignIn()}>Log In As Demo User 
          </button>

          <p> - or - </p>
          {this.renderErrors()}
          <div className="auth-form">
            <br />
            <label>
              <input type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}
                className="auth-input-username"
              />
            </label>
            <br />
            {/* {signupInfo} */}
            <label>
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="auth-input-password"
              />
            </label>
            <br />

            <button 
              className="auth-button">{this.props.formType}
            </button>
          </div>
          
        </form>
        {/* <p>Already have an account?</p> */}

        {/* {question} {this.props.navLink} */}
      </div>
    );
  }

}


export default SessionForm;

