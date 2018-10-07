import React, { Component } from 'react';
import T from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './styles';


class Popup extends Component {
  onClose = (e) => {
    if (e.target.className === styles.root) {
      this.props.onClose();
    }
  }

  render() {
    const { children, isOpen } = this.props;
    return (
      <ReactCSSTransitionGroup
        transitionName="fadein"
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}
      >
        { isOpen && (
        <div role="presentation" className={styles.root} onClick={this.onClose}>
          <div className={styles.container}>
            { children }
          </div>
        </div>)}
      </ReactCSSTransitionGroup>
    );
  }
}

Popup.propTypes = {
  isOpen: T.bool.isRequired,
  children: T.node.isRequired,
  onClose: T.func.isRequired,
};

export default Popup;
