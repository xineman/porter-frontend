import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import styles from './styles';


const ItemRow = ({
  projectToken,
  number,
  createDate,
  type,
  errorInfo,
  count,
  statuses,
  updateStatus,
}) => {
  function handleStatus({ target: { value } }) {
    updateStatus({
      projectToken,
      ticketNumber: number,
      status: value,
    });
  }
  return (
    <li className={styles.root}>
      <div className={classnames(styles.text, styles.id)}>{ number }</div>
      <div className={classnames(styles.text, styles.level)}>{ type }</div>
      <div className={classnames(styles.text, styles.errorInfo)}>{ errorInfo }</div>
      <div className={classnames(styles.text, styles.createDate)}>{ moment(createDate).format('LLL') }</div>
      <div className={classnames(styles.text, styles.level)}>{ count }</div>
      <div className={classnames(styles.text, styles.status)}>
        <select name="status" id="status" value={statuses[number]} onChange={handleStatus}>
          <option value="NEW">New</option>
          <option value="INPROGRESS">In progress</option>
          <option value="FIXED">Fixed</option>
          <option value="HIDDEN">Hidden</option>
        </select>
      </div>
    </li>
  );
};

ItemRow.propTypes = {
  projectToken: T.string.isRequired,
  number: T.number.isRequired,
  errorInfo: T.string.isRequired,
  type: T.string.isRequired,
  createDate: T.string.isRequired,
  count: T.number.isRequired,
  statuses: T.shape(T.string),
  updateStatus: T.func.isRequired,
};

ItemRow.defaultProps = {
  statuses: {},
};

export default ItemRow;
