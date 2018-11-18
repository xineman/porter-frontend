import { connect } from 'react-redux';
import {
  fetchAll, select,
} from 'modules/Projects/actions';
import ProjectSelector from './projectSelector';


const mapStateToProps = ({ projects }) => ({
  projects: projects.collection,
  selected: projects.selected,
});

export default connect(mapStateToProps, {
  fetchAll: fetchAll.request,
  selectProject: select,
})(ProjectSelector);
