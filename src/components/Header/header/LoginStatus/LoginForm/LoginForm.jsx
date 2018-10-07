import React, { Component } from 'react';
import styles from './styles';


class LoginForm extends Component {
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

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.root}>
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
        <button className={styles.submit} type="button">Sign in</button>
      </form>
    );
  }
}

export default LoginForm;
