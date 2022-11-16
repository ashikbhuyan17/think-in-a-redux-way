const { produce } = require('immer');

const baseState = [
  {
    title: 'Learn TypeScript',
    done: true,
  },
  {
    title: 'Try Immer',
    done: false,
  },
];

// Without Immer
const nextState = baseState.slice();
nextState[1] = {
  // replace element 1...
  ...nextState[1], // with a shallow clone of element 1
  done: true,
};
nextState.push({ title: 'Tweet about it' });
console.log('🚀 ~ file: immerArrat.js ~ line 15 ~ nextState', nextState);

// With Immer
const nextStateWithImmer = produce(baseState, (draft) => {
  draft[1].done = true;
  draft.push({ title: 'Tweet about it' });
});
console.log(
  '🚀 ~ file: immerArrat.js ~ line 29 ~ nextState ~ nextStateWithImmer',
  nextStateWithImmer
);
