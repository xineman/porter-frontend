import React, { useEffect } from 'react';
import T from 'prop-types';
import {
  projectShape,
  projectsArray,
} from 'modules/Projects/prop-types';
import Dropdown from 'components/DropdownMenu';
import styles from './styles';


const ProjectSelector = ({
  projects,
  selected,
  fetchAll,
  selectProject,
}) => {
  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    selectProject(projects[0]);
  }, [projects]);

  return (
    <Dropdown
      title={(
        <div className={styles.current}>
          { selected ? `${selected.name} (${selected.origin})` : 'fetching' }
        </div>
      )}
      listClassName={styles.dropdown}
    >
      { projects.map(p => (
        <li key={p.token} role="presentation" className={styles.project} onClick={() => selectProject(p)}>
          { p.name }
          &nbsp;(
          { p.origin }
          )
        </li>
      )) }
    </Dropdown>
  );
};

ProjectSelector.propTypes = {
  projects: projectsArray.isRequired,
  selected: projectShape,
  selectProject: T.func.isRequired,
  fetchAll: T.func.isRequired,
};

ProjectSelector.defaultProps = {
  selected: null,
};

export default ProjectSelector;
