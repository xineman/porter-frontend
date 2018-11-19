import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import styles from './styles';


const ItemRow = ({
  number,
  createDate,
  type,
  errorInfo,
}) => (
  <li className={styles.root}>
    <div className={classnames(styles.text, styles.id)}>{ number }</div>
    <div className={classnames(styles.text, styles.level)}>{ type }</div>
    <div className={classnames(styles.text, styles.errorInfo)}>{ errorInfo }</div>
    <div className={classnames(styles.text, styles.createDate)}>{ moment(createDate).format('LLL') }</div>
  </li>
);

ItemRow.propTypes = {
  number: T.number.isRequired,
  errorInfo: T.string.isRequired,
  type: T.string.isRequired,
  createDate: T.string.isRequired,
};

export default ItemRow;
