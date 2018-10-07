import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles';
import LoginStatus from './header/LoginStatus';


const Header = () => (
  <header className={classnames(styles.root, 'container')}>
    <Link className={styles.titleContainer} to="/">
      <h1 className={styles.title}>
        porter
      </h1>
      <p className={styles.description}>simple error tracker & reporter</p>
    </Link>
    <LoginStatus />
  </header>
);

export default Header;
