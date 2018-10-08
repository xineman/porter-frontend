import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownMenu from 'components/DropdownMenu';
import Popup from 'components/Popup';
import LoginForm from './LoginForm';
import styles from './styles';


class LoginStatus extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggleLoginPopup = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { isLoggedIn, name, signOut } = this.props;
    return (
      <div>
        { isLoggedIn
          ? (
            <DropdownMenu
              title={(
                <div className={styles.user}>
                  <FontAwesomeIcon icon="user-alt" />
                  <p className={styles.username}>{ name }</p>
                </div>
              )}
              listClassName={styles.dropdown}
            >
              <li>
                <Link to="/settings" className={classnames(styles.menuItem, styles.link)}>
                  <FontAwesomeIcon icon="sliders-h" />
                  <p className={styles.menuItemText}>Settings</p>
                </Link>
              </li>
              <li>
                <button type="button" className={styles.menuItem} onClick={signOut}>
                  <FontAwesomeIcon icon="sign-out-alt" />
                  <p className={styles.menuItemText}>Logout</p>
                </button>
              </li>
            </DropdownMenu>
          ) : (
            <Fragment>
              <button type="button" className={styles.loginBtn} onClick={this.toggleLoginPopup}>
                <FontAwesomeIcon icon="sign-in-alt" />
                <p className={styles.username}>Sign In</p>
              </button>
              <Popup isOpen={isOpen} onClose={this.toggleLoginPopup}>
                <LoginForm />
              </Popup>
            </Fragment>
          )
        }
      </div>
    );
  }
}

LoginStatus.propTypes = {
  isLoggedIn: T.bool.isRequired,
  name: T.string,
  signOut: T.func.isRequired,
};
LoginStatus.defaultProps = {
  name: null,
};

export default LoginStatus;
