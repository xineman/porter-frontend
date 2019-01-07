import React, { useState } from 'react';
import T from 'prop-types';
import Popup from 'components/Popup';
import classnames from 'classnames';
import styles from './styles';


const EditUsers = ({
  token,
  userEmails,
  isOpen,
  addUser,
  removeUser,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  function handleAddUser() {
    addUser({
      token,
      newEmail: email,
    });
    setEmail('');
  }
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h3 className={styles.title}>{ token }</h3>
      <ul>
        { userEmails.map(u => (
          <li key={u} className={styles.user}>
            <button
              type="button"
              className={classnames(styles.button, styles.removeUser)}
              onClick={() => removeUser({
                token,
                email: u,
              })}
            >
              -
            </button>
            { u }
          </li>
        )) }
      </ul>
      <h4 className={styles.addUserTitle}>Add new user by email:</h4>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.input}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button
          type="button"
          onClick={handleAddUser}
          className={classnames(styles.button, styles.addUser)}
        >
          Add
        </button>
      </form>
    </Popup>
  );
};

EditUsers.propTypes = {
  token: T.string.isRequired,
  userEmails: T.arrayOf(T.string).isRequired,
  isOpen: T.bool.isRequired,
  addUser: T.func.isRequired,
  removeUser: T.func.isRequired,
  onClose: T.func.isRequired,
};

export default EditUsers;
