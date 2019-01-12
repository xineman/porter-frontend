import React, { Component } from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import ItemRow from 'components/ItemRow';
import {
  projectShape,
} from 'modules/Projects/prop-types';
import styles from './styles';


class Items extends Component {
  static propTypes = {
    isLoggedIn: T.bool.isRequired,
    fetchingAll: T.bool.isRequired,
    collection: T.shape().isRequired,
    uniqueTickets: T.arrayOf(T.shape()).isRequired,
    fetchAll: T.func.isRequired,
    selectedProject: projectShape,
  }

  static defaultProps = {
    selectedProject: null,
  }

  componentDidMount() {
    const { isLoggedIn, selectedProject } = this.props;
    if (isLoggedIn && selectedProject) {
      this.props.fetchAll(selectedProject.token);
    }
  }

  componentDidUpdate(prevProps) {
    const { isLoggedIn, fetchingAll, selectedProject } = this.props;
    if (isLoggedIn && selectedProject && !fetchingAll
      && (isLoggedIn !== prevProps.isLoggedIn || selectedProject !== prevProps.selectedProject)) {
      this.props.fetchAll(selectedProject.token);
    }
  }

  render() {
    const { uniqueTickets, collection } = this.props;
    return (
      <div className={styles.root}>
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
            { uniqueTickets.map(c => (
              <ItemRow key={c.id} {...c} count={collection[c.number].length} />
            )) }
          </ul>
        </div>
      </div>
    );
  }
}

export default Items;
