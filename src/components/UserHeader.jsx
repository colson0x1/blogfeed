import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className='header'>{user.name}</div>;
  }
}

// mapStateToProps has second argument as well reffered to as ownProps
// this ownProps object is a reference to the props that are about to be sent
// into this Component
const mapStateToProps = (state, ownProps) => {
  // doing precalculations stuff
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
