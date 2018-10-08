import { connect } from 'react-redux';
import { signOut } from 'modules/User/actions';
import LoginStatus from './LoginStatus';


const mapStateToProps = ({ user: { isLoggedIn } }) => ({
  isLoggedIn,
});

export default connect(
  mapStateToProps,
  { signOut: signOut.request },
)(LoginStatus);
