import { connect } from 'react-redux';
import LoginStatus from './LoginStatus';


const mapStateToProps = ({ user: isLoggedIn }) => ({
  isLoggedIn,
});

export default connect(
  mapStateToProps,
)(LoginStatus);
