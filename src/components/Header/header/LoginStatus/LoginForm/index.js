import { connect } from 'react-redux';
import { signIn } from 'modules/User/actions';
import LoginForm from './LoginForm';


export default connect(null, { signIn: signIn.request })(LoginForm);
