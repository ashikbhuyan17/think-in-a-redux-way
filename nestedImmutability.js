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

console.log('initialState', initialState);
console.log('updateState', updateState);
