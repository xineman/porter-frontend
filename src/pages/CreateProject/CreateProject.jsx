import React, { useState } from 'react';
import T from 'prop-types';
import styles from './styles';


const CreateProject = ({ create }) => {
  const [form, setField] = useState({
    name: '',
    origin: '',
  });
  return (
    <form className={styles.root}>
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
  );
};

CreateProject.propTypes = {
  create: T.func.isRequired,
};

export default CreateProject;
