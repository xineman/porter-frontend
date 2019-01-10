import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './styles';


const CreateProject = ({ create, creatingStatus }) => {
  const [form, setField] = useState({
    name: '',
    origin: '',
  });
  useEffect(() => {
    if (creatingStatus === 'success') {
      setField({
        name: '',
        origin: '',
      });
    }
  }, [creatingStatus]);
  return (
    <div className={styles.root}>
      <ReactCSSTransitionGroup
        transitionName="slide-down"
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}
      >
        {creatingStatus === 'success' && <p className={styles.status}>Success</p>}
      </ReactCSSTransitionGroup>
      <form className={styles.form}>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="name">Name:</label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={({ target }) => setField({
              ...form,
              [target.name]: target.value,
            })}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="origin">Origin:</label>
          <input
            className={styles.input}
            type="text"
            id="origin"
            name="origin"
            value={form.origin}
            onChange={({ target }) => setField({
              ...form,
              [target.name]: target.value,
            })}
          />
        </div>
        <button className={styles.submit} type="button" onClick={() => create(form)}>Create</button>
      </form>
    </div>
  );
};

CreateProject.propTypes = {
  create: T.func.isRequired,
  creatingStatus: T.string,
};

CreateProject.defaultProps = {
  creatingStatus: null,
};

export default CreateProject;
