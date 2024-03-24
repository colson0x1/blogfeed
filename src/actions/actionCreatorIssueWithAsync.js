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
//
// This code is transpiled by Babel to es2015. And because there is async await,
// the output from babel returns large chuck of code with promises and things.
// There are many cases inside that function and case 0 returns the requests
// from our action creator and that goes into the store.dispatch() then the
// redux store, looks at what we returned and asks, is this a plain JS object
// with only a type property. And founds it is not since we returned request
// object at case 0 i.e we didin't return our action at case 1. And that's why
// we see that ERROR message!
// But removing async await, it just condensens down to the function itself when
// transpiled with Babel.
// Hence, Our Action creator is not returing a plain JS objects because we've
// that async await syntax. That is why our Action creators is not working as
// expected.
// So the real thing is, we did not returned a plain object. We returned a
// requests object that pobably has a bunch of fancy methods assigned to it
// and porbably not a type property.
// We definately did not dispatch what we thought were dispatching!
// It's all because of the async await syntax.
// So because we're using the async await syntax and that gets transpiled
// down to ES5 code. So What actually runs inside our browser is not what we
// think actually runs.
// So we currently are running into this issue where we're dispatching a
// not redux action. We're dispatching some random object that redux definately
// doesn't care about.
export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: response,
  };
};

/*
 * NORMAL RULES:
 *   - Action creators must return action objects.
 *   - Actions must have a type property.
 *   - Actions can optionally have a 'payload'.
 *
 * RULES with REDUX THUNK
 *   - Action creators can return action objects
 *  If we do that then,
 * :: If an action object gets returned, it must have a type.
 * :: If an action object gets returned, it can optionally have a 'payload'.
 *
 *   OR The other thing, REDUX THUNK can do is:
 *   - Action creators can return functions!
 *  So if we return a function, redux thunk is automatically going to call
 *  that function for us.
 */
