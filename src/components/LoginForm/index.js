import { Component } from 'react';

import './index.css';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    error: '',
  };

  onSubmitSuccess = () => {
    const { history } = this.props;
    history.replace('/');
  };

  onSubmitFailure = () => {
    const { username, password } = this.state;
    let error = '';

    if (username === '' && password === '') {
      error = "*Username and Password didn't match"
    } else if (username === '') {
      error = "*Username and Password didn't match"
    } else if (password === '') {
      error = "*Username and Password didn't match";
    } else {
      error = "*Username and Password didn't match"
    }

    this.setState({ error });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = 'https://apis.ccbp.in/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);

    if (response.ok === true) {
      this.onSubmitSuccess();
    } else {
      this.onSubmitFailure();
    }
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value, error: '' });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value, error: '' });
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  render() {
    const { error } = this.state;
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    );
  }
}

export default LoginForm;
