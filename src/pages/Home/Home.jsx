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
    uniqueRecentTickets: T.shape().isRequired,
    fetchRecent: T.func.isRequired,
  }

  componentDidMount() {
    const { isLoggedIn, selectedProject } = this.props;
    if (isLoggedIn && selectedProject) {
      this.props.fetchRecent(selectedProject.token);
    }
  }

  componentDidUpdate(prevProps) {
    const { isLoggedIn, fetchingRecent, selectedProject } = this.props;
    if (isLoggedIn && selectedProject && !fetchingRecent
      && (isLoggedIn !== prevProps.isLoggedIn || selectedProject !== prevProps.selectedProject)) {
      this.props.fetchRecent(selectedProject.token);
    }
  }

  render() {
    const { uniqueRecentTickets, recentCollection, isLoggedIn } = this.props;
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
            <div className={classnames(styles.listHeaderText, styles.level)}>Level</div>
            <div className={classnames(styles.listHeaderText, styles.errorInfo)}>Error Message</div>
            <div className={classnames(styles.listHeaderText, styles.createDate)}>Last Date</div>
            <div className={classnames(styles.listHeaderText, styles.level)}>Count</div>
            <div className={classnames(styles.listHeaderText, styles.createDate)}>Meta Info</div>
            <div className={classnames(styles.listHeaderText, styles.status)}>Status</div>
          </div>
          <ul className={styles.list}>
            { uniqueRecentTickets.TODAY.map(c => (
              <ItemRow key={c.id} {...c} count={recentCollection.TODAY[c.number].length} />
            )) }
          </ul>
        </div>
        { !!uniqueRecentTickets.YESTERDAY.length && (
          <div>
            <h3 className={styles.title}>Yesterday top errors:</h3>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <div className={classnames(styles.listHeaderText, styles.id)}>ID</div>
                <div className={classnames(styles.listHeaderText, styles.level)}>
                  Level
                </div>
                <div className={classnames(styles.listHeaderText, styles.errorInfo)}>
                  Error Message
                </div>
                <div className={classnames(styles.listHeaderText, styles.createDate)}>
                  Last Date
                </div>
                <div className={classnames(styles.listHeaderText, styles.level)}>Count</div>
                <div className={classnames(styles.listHeaderText, styles.createDate)}>
                  Meta Info
                </div>
              </div>
              <ul className={styles.list}>
                { uniqueRecentTickets.YESTERDAY.map(c => (
                  <ItemRow key={c.id} {...c} count={recentCollection.YESTERDAY[c.number].length} />
                )) }
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
