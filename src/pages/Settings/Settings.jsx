import React from 'react';
// import T from 'prop-types';
import classnames from 'classnames';
import {
  projectsArray,
} from 'modules/Projects/prop-types';
import ProjectRow from './components/ProjectRow';
import styles from './styles';


const Settings = ({ projects }) => (
  <div className={styles.root}>
    <li className={styles.header}>
      <div className={classnames(styles.text, styles.token)}>Token</div>
      <div className={classnames(styles.text, styles.name)}>Name</div>
      <div className={classnames(styles.text, styles.origin)}>Origin</div>
      <div className={classnames(styles.text, styles.users)}>Users</div>
    </li>
    { projects.map(p => <ProjectRow key={p.token} {...p} />) }
  </div>
);

Settings.propTypes = {
  projects: projectsArray.isRequired,
};

export default Settings;
