import React, { Component } from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import ItemRow from 'components/ItemRow';
import styles from './styles';


class Items extends Component {
  static propTypes = {
    isLoggedIn: T.bool.isRequired,
    fetchingAll: T.bool.isRequired,
    collection: T.arrayOf(T.shape()).isRequired,
    fetchAll: T.func.isRequired,
  }

  componentDidMount() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      this.props.fetchAll();
    }
  }

  componentDidUpdate(prevProps) {
    const { isLoggedIn, fetchingAll } = this.props;
    if (isLoggedIn && isLoggedIn !== prevProps.isLoggedIn && !fetchingAll) {
      this.props.fetchAll();
    }
  }

  render() {
    const { collection } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.listContainer}>
          <div className={styles.listHeader}>
            <div className={classnames(styles.listHeaderText, styles.id)}>ID</div>
            <div className={classnames(styles.listHeaderText, styles.errorInfo)}>Error Message</div>
            <div className={classnames(styles.listHeaderText, styles.environment)}>Environment</div>
            <div className={classnames(styles.listHeaderText, styles.createDate)}>Date</div>
          </div>
          <ul className={styles.list}>
            { collection.map(c => <ItemRow {...c} />) }
          </ul>
        </div>
      </div>
    );
  }
}

export default Items;
