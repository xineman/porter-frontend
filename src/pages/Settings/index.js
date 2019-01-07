import { connect } from 'react-redux';
import Settings from './Settings';


const mapStateToProps = ({
  projects: { collection },
}) => ({
  projects: collection,
});

export default connect(mapStateToProps)(Settings);
