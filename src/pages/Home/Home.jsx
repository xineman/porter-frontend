import React, { Component } from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import ItemRow from 'components/ItemRow';
import styles from './styles';


class Home extends Component {
  static propTypes = {
    isLoggedIn: T.bool.isRequired,
    fetchingRecent: T.bool.isRequired,
    recentCollection: T.shape().isRequired,
    fetchRecent: T.func.isRequired,
  }

  componentDidMount() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      this.props.fetchRecent();
    }
  }

  componentDidUpdate(prevProps) {
    const { isLoggedIn, fetchingRecent } = this.props;
    if (isLoggedIn && isLoggedIn !== prevProps.isLoggedIn && !fetchingRecent) {
      this.props.fetchRecent();
    }
  }

  render() {
    const { recentCollection, isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return (
        <div className={styles.title}>
          You have to sign in!
        </div>
      );
    }
    return (
      <div className={styles.root}>
        <h3 className={styles.title}>Today top errors:</h3>
        <div className={styles.listContainer}>
          <div className={styles.listHeader}>
            <div className={classnames(styles.listHeaderText, styles.id)}>ID</div>
            <div className={classnames(styles.listHeaderText, styles.errorInfo)}>Error Message</div>
            <div className={classnames(styles.listHeaderText, styles.environment)}>Environment</div>
            <div className={classnames(styles.listHeaderText, styles.createDate)}>Date</div>
          </div>
          <ul className={styles.list}>
            { recentCollection.TODAY.map(c => <ItemRow {...c} />) }
          </ul>
        </div>
        { !!recentCollection.YESTERDAY.length && (
          <div>
            <h3 className={styles.title}>Yesterday top errors:</h3>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <div className={classnames(styles.listHeaderText, styles.id)}>ID</div>
                <div className={classnames(styles.listHeaderText, styles.errorInfo)}>
                  Error Message
                </div>
                <div className={classnames(styles.listHeaderText, styles.environment)}>
                  Environment
                </div>
                <div className={classnames(styles.listHeaderText, styles.createDate)}>Date</div>
              </div>
              <ul className={styles.list}>
                { recentCollection.YESTERDAY.map(c => <ItemRow {...c} />) }
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
