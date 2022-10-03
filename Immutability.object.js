const initialState = {
    value: 0,
    properties: {
        a: 5,
        b: 6
    }
}
// initialState.value = 10
// initialState.properties.a = 20
// console.log(initialState)

const updateState = {
    ...initialState,
    value: initialState.value + 10,
    // ...initialState.properties,
    // properties: initialState.properties.b + 100
    properties: {
        ...initialState.properties,
        b: initialState.properties.b + 10
    }
}
console.log("initialState", initialState)
console.log("updateState", updateState)

