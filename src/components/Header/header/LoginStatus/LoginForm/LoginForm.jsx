import React, { Component } from 'react';
import T from 'prop-types';
import styles from './styles';


class LoginForm extends Component {
  static propTypes = {
    signIn: T.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState(() => ({
      [name]: value,
    }));
  }

  handleSignIn = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.root} onSubmit={this.handleSignIn}>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="email">Email:</label>
          <input
            className={styles.input}
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleInput}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="password">Password:</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleInput}
          />
        </div>
        <button className={styles.submit} type="submit">Sign in</button>
      </form>
    );
  }
}

export default LoginForm;
