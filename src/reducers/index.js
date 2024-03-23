import { combineReducers } from 'redux';

// Resolve - store does not have a valid reducer error!
// I wouldn't know what reducers will it have at the start of this project, So
// in order to temporarily resolve that error, I dummy key to this object
// that is always going to return some fix value

// Trick redux to think that it has a valid reducer
// In Redux application, We probably want to do something like this very
// briefly until we get a really good idea of how to structure our reducers
// and what reducers that we're going to need
export default combineReducers({
  replaceMe: () => 'stillhome',
});
