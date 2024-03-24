import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  // Redux Thunk is going to invoke our function and it passes into it: the
  // dispatch and getState function as arguments
  // So with this function that we returned, we're going to receive
  // dispatch and getState as arguments
  // So with Redux Thunk we can manually dispatch an action at some point of
  // time in the future!
  return function (dispatch, getState) {
    const promise = jsonPlaceholder.get('/posts');

    return {
      type: 'FETCH_POSTS',
      payload: promise,
    };
  };
};
