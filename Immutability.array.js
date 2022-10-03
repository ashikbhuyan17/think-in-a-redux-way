const initialState = {
    name: "ashik",
    age: 20,
    fruits: ["apple", "banana", "mango"]
}

initialState.age = 100

const updateState = {
    ...initialState,
    fruits: [...initialState.fruits]
}

updateState.fruits.splice(1, 1)

console.log("initialState", initialState)
console.log("updateState", updateState)