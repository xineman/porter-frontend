import { connect } from 'react-redux';
import { fetchAll } from 'modules/Items/actions';
import Items from './Items';


const mapStateToProps = ({ user: { isLoggedIn }, items: { fetchingAll, collection } }) => ({
  isLoggedIn,
  fetchingAll,
  collection,
});

export default connect(mapStateToProps, { fetchAll: fetchAll.request })(Items);
