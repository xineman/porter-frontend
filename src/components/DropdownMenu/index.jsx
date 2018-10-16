import React, { Component } from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import styles from './styles';


class DropdownMenu extends Component {
  static propTypes = {
    children: T.node.isRequired,
    title: T.node.isRequired,
    listClassName: T.string,
  }

  static defaultProps = {
    listClassName: undefined,
  }

  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { title, children, listClassName } = this.props;
    return (
      <div role="presentation" className={styles.root} onClick={this.toggle}>
        <div className={styles.title}>
          { title }
        </div>
        { isOpen && (
          <ul className={classnames(styles.dropdownList, listClassName)}>
            { children }
          </ul>)
        }
      </div>
    );
  }
}

export default DropdownMenu;
