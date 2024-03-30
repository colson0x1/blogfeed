import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
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
