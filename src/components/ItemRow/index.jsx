import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import styles from './styles';


const ItemRow = ({
  id,
  createDate,
  environment,
  errorInfo,
}) => (
  <li className={styles.root}>
    <div className={classnames(styles.text, styles.id)}>{ id }</div>
    <div className={classnames(styles.text, styles.errorInfo)}>{ errorInfo }</div>
    <div className={classnames(styles.text, styles.environment)}>{ environment }</div>
    <div className={classnames(styles.text, styles.createDate)}>{ moment(createDate).format('LLL') }</div>
  </li>
);

ItemRow.propTypes = {
  id: T.string.isRequired,
  errorInfo: T.string.isRequired,
  environment: T.string.isRequired,
  createDate: T.instanceOf(Date).isRequired,
};

export default ItemRow;
