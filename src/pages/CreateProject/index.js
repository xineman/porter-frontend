import { connect } from 'react-redux';
import { create } from 'modules/Projects/actions';
import CreateProject from './CreateProject';


export default connect(null, { create: create.request })(CreateProject);
