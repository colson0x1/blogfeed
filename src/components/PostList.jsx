import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

// First argument to connect function is always mapStateToProps
// We would write null to indicate we don't have any state that we want to get
// into this component
// Second argument to connect function is action creator

export default connect(null, { fetchPosts })(PostList);
