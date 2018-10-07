import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { fetchAll } from 'modules/Items/actions';
import Header from 'components/Header';


class Home extends Component {
  static propTypes = {
    fetchItems: T.func.isRequired,
  }

  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    return (
      <div>
        <Header />
        Homepage
      </div>
    );
  }
}

export default connect(null, dispatch => ({
  fetchItems: () => dispatch(fetchAll()),
}))(Home);
