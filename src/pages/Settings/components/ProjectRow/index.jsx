import React, { Fragment, useState } from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import styles from './styles';
import EditUsers from './EditUsers';


const ProjectRow = ({
  token,
  name,
  origin,
  userEmails,
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <li role="presentation" className={styles.root} onClick={() => setOpen(!isOpen)}>
        <div className={classnames(styles.text, styles.token)}>{ token }</div>
        <div className={classnames(styles.text, styles.name)}>{ name }</div>
        <div className={classnames(styles.text, styles.origin)}>{ origin }</div>
        <div className={classnames(styles.text, styles.users)}>
          { userEmails.map((u, i, array) => (
            <span key={u}>
              { u }
              { i + 1 < array.length && ',' }
            </span>
          )) }
        </div>
      </li>
      <EditUsers
        token={token}
        userEmails={userEmails}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
};

ProjectRow.propTypes = {
  token: T.string.isRequired,
  name: T.string.isRequired,
  origin: T.string.isRequired,
  userEmails: T.arrayOf(T.string).isRequired,
};

export default ProjectRow;
