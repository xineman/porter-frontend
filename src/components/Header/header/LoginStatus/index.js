import { connect } from 'react-redux';
import { signOut } from 'modules/User/actions';
import LoginStatus from './LoginStatus';


const mapStateToProps = ({ user: { token } }) => ({
  isLoggedIn: !!token,
});

export default connect(
  mapStateToProps,
  { signOut: signOut.request },
)(LoginStatus);
