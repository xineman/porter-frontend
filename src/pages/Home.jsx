import React, { Component } from 'react';
import { connect } from 'react-redux';
// import T from 'prop-types';
import { fetchAll } from 'modules/Items/actions';


class Home extends Component {
  static propTypes = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        Homepage
      </div>
    );
  }
}

export default connect(null, {
  fetchItems: fetchAll.request,
})(Home);
