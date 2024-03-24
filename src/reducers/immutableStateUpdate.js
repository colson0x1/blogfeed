/* @ Manipulating Arrays */
const colors = ['blue', 'gray'];
// Bad way
// colors.push()
// Right way: create new array
// [...colors, 'green'];

/* @ Manipulating Objects */
const profile = { name: 'stillhome' };
// same key overrides the original key
// {...profile, name: 'colson' }
// adding new key
// { ...profile, age: 25 }
// name inside profile is going to override the name 'colson'
// { name: 'USA', ...profile }
