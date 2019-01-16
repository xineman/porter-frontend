import { connect } from 'react-redux';
import { create } from 'modules/Projects/actions';
import CreateProject from './CreateProject';


const mapStateToProps = ({ projects: { creatingStatus } }) => ({
  creatingStatus,
});

export default connect(mapStateToProps, { create: create.request })(CreateProject);
