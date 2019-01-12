import { connect } from 'react-redux';
import { fetchRecent } from 'modules/Items/actions';
import Home from './Home';


const mapStateToProps = ({
  user: { isLoggedIn },
  items: { fetchingRecent, recentCollection, uniqueRecentTickets },
  projects: { selected },
}) => ({
  isLoggedIn,
  fetchingRecent,
  recentCollection,
  uniqueRecentTickets,
  selectedProject: selected,
});

export default connect(mapStateToProps, { fetchRecent: fetchRecent.request })(Home);
