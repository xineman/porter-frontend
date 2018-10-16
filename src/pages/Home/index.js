import { connect } from 'react-redux';
import { fetchRecent } from 'modules/Items/actions';
import Home from './Home';


const mapStateToProps = ({
  user: { isLoggedIn },
  items: { fetchingRecent, recentCollection },
}) => ({
  isLoggedIn,
  fetchingRecent,
  recentCollection,
});

export default connect(mapStateToProps, { fetchRecent: fetchRecent.request })(Home);
