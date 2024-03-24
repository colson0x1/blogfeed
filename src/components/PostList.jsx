import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return <div>Post List</div>;
  }
}

// Anytime we want to get some data from Redux side of our application into
// the React side, we're always going to define the mapStateToProps function
// and pass it off to connect function
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

// First argument to connect function is always mapStateToProps
// We would write null to indicate we don't have any state that we want to get
// into this component
// Second argument to connect function is action creator

export default connect(mapStateToProps, { fetchPosts })(PostList);
