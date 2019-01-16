import { connect } from 'react-redux';
import { updateStatus } from 'modules/Items/actions';
import ItemRow from './ItemRow';


const mapStateToProps = ({
  items: { statuses },
}) => ({
  statuses,
});

export default connect(mapStateToProps, { updateStatus: updateStatus.request })(ItemRow);
