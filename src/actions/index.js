import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action creator
// Its looks like correct however it's not correct code
// This right here, this is a BAD APPROACH!
// It's bad not because we're using a bad design or that we wrote code incorrectly,
// It is bad because we're breaking the rules of Redux
// We're specifically breaking the rules of an Action Creator
// Using like this, we get an error:
// : Actions must be a plain object. Instead the actual type was a Promise.
// : Use custom middleware for async actions.
export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: response,
  };
};
