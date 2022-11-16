const { produce } = require('immer');

const initialState = {
  value: 0,
  properties: {
    a: 5,
    b: 6,
    address: {
      country: 'London',
    },
  },
};

// Without Immer
const updateState = {
  ...initialState,
  value: initialState.value + 10,

  properties: {
    ...initialState.properties,
    b: initialState.properties.b + 10,
    address: {
      ...initialState.properties.address,
      country: 'Bangladesh',
    },
  },
};

// With Immer
const immerNested = produce(initialState, (draft) => {
  (draft.value = 100000),
    (draft.properties.b = 200000),
    (draft.properties.address.country = 'London');
});
// console.log(
//   '🚀 ~ file: nested.js ~ line 36 ~ immerNested ~ immerNested',
//   immerNested
// );

console.log('initialState', initialState);
console.log('updateState', updateState);
