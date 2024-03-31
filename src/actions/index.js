import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Redux Thunk is going to invoke our function and it passes into it: the
// dispatch and getState function as arguments
// So with this function that we returned, we're going to receive
// dispatch and getState as arguments
// So with Redux Thunk we can manually dispatch an action at some point of
// time in the future!
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

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
