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

  /*
  // uniq is going to return an array with just the unique user's ids
  // _.map is going to get userId from posts array
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  console.log('User Ids', userIds);
  // For every id, call fetchUser action creator
  userIds.forEach((id) => dispatch(fetchUser(id)));
  */

  // refactor above userIds code into more compact code!

  // we don't have any other logic inside of here that we need to run after
  // we fetch those users.
  // So we don't need to add await this time on the dispatch
  // If we had other resources to fetch inside of here then we could use await
  // keyword up there on dispatch and down here get access to our lists of user
  // with getState().users, print those out or something like that.
  // !NOTE! async await keyword doesn't work with forEach
  // here's how in that case:
  /* await Promise.all(userIds.map((id) => dispatch(fetchUser(id)))); */

  // _.chain is a function in lodash that allows us to chain on a bunch of
  // additional functions that are going to mainipulate some collection of data
  // When we call chain method and chain on some additional method, the first
  // argument to this map function behind the scenes will be whatever object
  // we are chaining over.
  // So behind the scenes, the lists of posts right here will be provided as the
  // first argument to the map function.
  // i.e Now we only have to pass in the second argument that we care about
  // Also now the beauty of chain is: whatever the result we got from the map
  // state will be passed in to this next method
  // So originally, we had called map and we pass the result of that into
  // uniq so now we can chain on .uniq() so the result of the mapping step
  // will be automatically passed as the first argument into uniq
  // We can continue this process for the forEach statement as well so the
  // result of uniq will be passed into forEach
  // So now we can put a function in forEach, that will be called for every
  // unique id
  // And finally the last thing we have to do here, this is a little bit of
  // record keeping with lodash
  // With lodash, its not going to execute all these steps on a chain function
  // unit we put on a .value()
  // A better term for value might be execute()
  // In other, lodash if we just list out all these chain methods like so,
  // its not going to execute all those steps until we finally put on a
  // .value() like so!
  // So we put on value to essentially say, okay go ahead, execute all these
  // steps and map over those posts, find the unique values and then run the
  // function for each value inside there
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
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
