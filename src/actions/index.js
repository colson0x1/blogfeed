import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Redux Thunk is going to invoke our function and it passes into it: the
// dispatch and getState function as arguments
// So with this function that we returned, we're going to receive
// dispatch and getState as arguments
// So with Redux Thunk we can manually dispatch an action at some point of
// time in the future!

// Whenever we call an action creator from inside of an action creator,
// We need to make sure that we dispatch the result of calling the action creator.
// Second argument that Redux thunk calls our inner functions with all these
// action creators, the second argument in addition to dispatch is getState
// argument.
// getState is a function that exists on the redux store that gives us access
// to all of the data inside of Redux
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log('About to fetch posts');
  await dispatch(fetchPosts());
  console.log('fetched posts!');
  console.log(getState().posts);

  // uniq is going to return an array with just the unique user's ids
  // _.map is going to get userId from posts array
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  console.log('User Ids', userIds);
  // For every id, call fetchUser action creator
  userIds.forEach((id) => dispatch(fetchUser(id)));

  // we don't have any other logic inside of here that we need to run after
  // we fetch those users.
  // So we don't need to add await this time on the dispatch
  // If we had other resources to fetch inside of here then we could use await
  // keyword up there on dispatch and down here get access to our lists of user
  // with getState().users, print those out or something like that.
  // !NOTE! async await keyword doesn't work with forEach
  // here's how in that case:
  /* await Promise.all(userIds.map((id) => dispatch(fetchUser(id)))); */
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// refactor to non-memoized version
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

/*
// When we call fetchUser action creator, we want to pass in the id of the
// user that we want to fetch as an argument
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// Using _ to indicate that this is a private function so to speak and that
// other Engineers should not attempt to call this function unless they
// really know what they are doing!
// This arrow function right here is what actually makes a requests and
// dispatches an action
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
});
*/

/* Applying memoize in outer function or inner function
 * Doesn't work because it gets rememoized here
export const fetchUser = function (id) {
  // memoizing interior function
  // This is the function that gets invoked with Redux Thunk
  return _.memoize(async function (dispatch) {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
  });
};
*/
