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
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
