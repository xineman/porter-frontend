import { connect } from 'react-redux';
import { addUser, removeUser } from 'modules/Projects/actions';
import EditUsers from './EditUsers';


export default connect(null,
  {
    addUser: addUser.request,
    removeUser: removeUser.request,
  })(EditUsers);
