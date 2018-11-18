import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles';
import LoginStatus from './header/LoginStatus';
import ProjectSelector from './header/ProjectSelector';


const Header = () => (
  <header className={classnames(styles.root, 'container')}>
    <div className={styles.headerBlock}>
      <Link className={styles.titleContainer} to="/">
        <h1 className={styles.title}>
          porter
        </h1>
        <p className={styles.description}>simple error tracker & reporter</p>
      </Link>
      <div className={styles.projectSelector}>
        <ProjectSelector />
      </div>
      <nav className={styles.menu}>
        <Link className={styles.menuLink} to="/items">items</Link>
      </nav>
    </div>
    <LoginStatus />
  </header>
);

export default Header;
