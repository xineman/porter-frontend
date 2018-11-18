import { connect } from 'react-redux';
import { fetchAll } from 'modules/Items/actions';
import Items from './Items';


const mapStateToProps = ({
  user: { isLoggedIn },
  items: { fetchingAll, collection },
  projects: { selected },
}) => ({
  isLoggedIn,
  fetchingAll,
  collection,
  selectedProject: selected,
});

export default connect(mapStateToProps, { fetchAll: fetchAll.request })(Items);
