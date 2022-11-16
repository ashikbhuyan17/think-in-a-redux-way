// import produce from 'immer';
const { produce } = require('immer');

const initialState = {
  value: 0,
  properties: {
    a: 5,
    b: 6,
  },
};

// const updateState = {
//     ...initialState,
//     value: initialState.value + 10,

//     properties: {
//         ...initialState.properties,
//         b: initialState.properties.b + 10
//     }
// }

// With Immer
const updateState = produce(initialState, (draft) => {
  draft.value = initialState.value + 10;
  draft.properties.b = initialState.properties.b + 10;
});
console.log('initialState', initialState);
console.log('updateState', updateState);
